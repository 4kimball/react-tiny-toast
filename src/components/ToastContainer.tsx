import React, { FC } from "react";
import cx from "clsx";

import type { ToastProps, ToastPosition } from "../types/toast";

import { Toast } from './';

interface Props {
  content: string;
  props: ToastProps;
}
export const ToastContainer: FC<Props> = ({content, props}) => {

  const  { position } = props;
  const getClassName = (position: ToastPosition): string => {
    return cx(`toast-container`, `toast-container--${position}`);
  };

  return <div className={getClassName(position)}>
    <Toast content={content} props={props}/>
  </div>;
};
