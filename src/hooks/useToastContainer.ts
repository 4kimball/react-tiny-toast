import { useEffect, useRef } from "react";
import cx from "clsx";
import type { ToastProps } from "../types/toast";

export const useToast = (props: ToastProps) => {
  const {position} = props;
  const toastContainerRef = useRef<HTMLDivElement>(null);
  // const toastProvider = document.querySelector(".ToastProvider");
 

  useEffect(() => {
    setTimeout(() => {
      if (toastContainerRef) {
        toastContainerRef.current!.classList.add(`toast--container__slide-exit--${position}`)
      }
    }, 3000)
   
  }, []);
  return { toastContainerRef };
};
