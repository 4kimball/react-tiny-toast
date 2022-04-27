import React, { FC } from "react";
import cx from "clsx";

import { ToastPosition } from "../types/toast";

interface Props {
  position: ToastPosition;
}
export const ToastContainer: FC<Props> = ({ position, children }) => {
  const getClassName = (position: ToastPosition): string => {
    return cx(`toast-container`, `toast-container--${position}`);
  };

  return <div className={getClassName(position)}>{children}</div>;
};
