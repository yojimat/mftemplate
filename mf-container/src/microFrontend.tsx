import { useEffect } from "react";

type MicroFrontendProps = {
  name: string;
  host: string;
};

type Manifest = {
  "main.js": string;
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
    const fetchManifestJson = async () => {
      const response = await fetch(`${host}/asset-manifest.json`);
      const manifest: Manifest = await response.json();
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = `${host}${manifest["main.js"]}`;
      script.onload = () => renderMicroFrontend();
      document.head.appendChild(script);
    };
    fetchManifestJson();

    return () => {
      window[`unmount${name}`](`${name}-container`);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <main id={`${name}-container`} />;
};

export default MicroFrontend;
