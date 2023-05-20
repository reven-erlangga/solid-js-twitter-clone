import { createRoot, createSignal, onCleanup, onMount } from "solid-js";

const getClientSize = () => ({
  height: document.body.clientHeight,
  width: document.body.clientWidth,
});

const pageSize = () => {
  const [value, setValue] = createSignal(getClientSize());

  onMount(() => {
    console.log("INITIALIZING PAGESIZE!!!!!!");
    window.addEventListener("resize", handleResize);
  });

  const handleResize = () => {
    setValue(getClientSize());
    console.log(value());
  };

  const isXl = () => value().width > 1280;
  const isLg = () => value().width > 1024;

  return { isXl, isLg, value };
};

export default createRoot(pageSize);
