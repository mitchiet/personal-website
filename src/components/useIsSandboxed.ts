import { useEffect, useState } from "react";

function testDataAttributeSupport(): boolean {
  try {
    const el = document.createElement("div");

    // Set via dataset → should reflect in attribute
    el.dataset.test = "123";
    if (el.getAttribute("data-test") !== "123") return false;

    // Set via attribute → should reflect in dataset
    el.setAttribute("data-check", "xyz");
    if (el.dataset.check !== "xyz") return false;

    return true;
  } catch {
    return false;
  }
}

export function useIsSandboxed() {
  const [isSandboxed, setIsSandboxed] = useState(false);

  useEffect(() => {
    const dataBroken = !testDataAttributeSupport();

    const likelySandbox =
      dataBroken ||
      navigator.userAgent.includes("Fireglass") ||
      window.origin === "null" ||
      (window.crossOriginIsolated === false && !window.localStorage);

    setIsSandboxed(likelySandbox);
  }, []);

  return isSandboxed;
}
