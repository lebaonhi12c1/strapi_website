import { useEffect, useRef } from "react";

export function useClickOutSide(handler) {
  const nodeRef = useRef()
  useEffect(() => {
    function handleClickOutSide(e) {
      if (nodeRef.current && !nodeRef.current.contains(e.target)) {
        handler()
      }
    }
    document.addEventListener("click", handleClickOutSide);
    return () => {
      document.removeEventListener("click", handleClickOutSide);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return nodeRef
}
