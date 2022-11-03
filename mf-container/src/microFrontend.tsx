import { useEffect } from "react";

const { NODE_ENV } = process.env;

type MicroFrontendProps = {
  name: string;
  host: string;
};

type Manifest = {
  files: {
    "main.js": string;
  };
};

declare global {
  interface Window {
    [key: string]: any;
  }
}

const MicroFrontend = ({ name, host }: MicroFrontendProps) => {
  const scriptId = `micro-frontend-script-${name}`;

  const renderMicroFrontend = () => {
    window[`render${name}`](`${name}-container`);
  };

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

  return <main id={`${name}-container`} />;
};

export default MicroFrontend;
