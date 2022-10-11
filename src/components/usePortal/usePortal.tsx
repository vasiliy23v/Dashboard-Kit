import * as React from "react";

export function usePortal(id = "unknown") {
  // the ref that is going to be returned.
  const ref = React.useRef<Element | DocumentFragment | null>(null);

  React.useEffect(() => {
    // The element that will be created onMount and removed on unMount.
    let element: HTMLDivElement | null | any = null;

    if (!ref.current) {
      element = document.createElement("div");

      // You can give a it custom id.
      element.setAttribute("id", `Modal_Portal_${id}`);

      // Add the element to the "body", this can also be any other element.
      document.body.appendChild(element);

      ref.current = element;
    }

    return () => {
      // on unMount remove the element from the DOM
      ref.current = null;
      document.body.removeChild(element);
    };
  }, [id]);

  // return the ref so it can be used
  return ref.current;
}
