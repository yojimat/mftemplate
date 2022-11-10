# Micro Front End Template
Template for a Micro Front-end architecture of a React SPA.

## Integration 
The strategy integration of the components used was the "Run-time integration via JavaScript".
```JavaScript
useEffect(() => {
    const fetchBundleJs = () => {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = `${host}/static/js/bundle.js`;
      script.crossOrigin = "";
      script.onload = renderMicroFrontend;
      document.head.appendChild(script);
    };

    const fetchManifestJson = async () => {
      const response = await fetch(`${host}/asset-manifest.json`);
      const manifest: Manifest = await response.json();
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = `${host}${manifest.files["main.js"]}`;
      script.crossOrigin = "";
      script.onload = renderMicroFrontend;
      document.head.appendChild(script);
    };

    if (NODE_ENV === "development") fetchBundleJs();
    else fetchManifestJson();

    return () => {
      window[`unmount${name}`](`${name}-container`);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
```
Each component has a entry-point function that is actived when the 'MicroFrontEnd' component is rendered. The components is rendered by `react-router-dom` library, depending from the URL.  
The html script element is created when the component is called at runtime.

## Features
The global content is hosted at separately from the container and the components. This includes the react libraries and images, but the css or a component library like material design also could be hosted at this server.  
This helps make smaller the final bundle at the expense of more network bandwidth.  
Easy deploy of components without much impact in the rest of the application.  
The cross-application communication of the applications is made via the URL of the app; the components are intended to not depend of complex data objects to communicate.  
The components can be run, debugged and developed individually without the container shell.  

## Downsides 
In the case of a more complex cross-application communication between the components, the URL of the app would not be able to transmit the messages effectively.  
Because the library is loaded externally the hot reload moudule or fast refresh, doesn't work. This could be circumvented using another react rewired config.  
If there was another team developing the application with another framework besides React, the size of the final bundle of the application would largely increase.

