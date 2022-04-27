import React, {FC} from "react";
import cx from 'clsx';

import { ToastPosition } from "../types/toast";
import type { ToastProps } from "../types/toast";

export const Toast: FC<ToastProps> = ({type, content, position}) => {
    console.log(type);
  const getClassName = (position: ToastPosition): string => {
    return cx(`toast`, `toast--${position}`, `toast--${type}`)
  };
  console.log(getClassName(position))
  return <div className={getClassName(position)}>
      <p>{content}</p>
  </div>;
};
