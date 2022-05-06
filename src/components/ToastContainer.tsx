import React, { FC } from "react";
import cx from "clsx";

import type { ToastProps, ToastPosition } from "../types/toast";

import { Toast } from './';
import {useToast} from '../hooks/useToast';

interface Props {
  content: string;
  props: ToastProps;
}

export const ToastContainer: FC<Props> = ({content, props}) => {
  const {toastContainerRef} = useToast(props);
  const  { position } = props;
  const getClassName = (position: ToastPosition): string => {
    return cx(`toast-container`, `toast-container--${position}`, `toast--container__slide-enter--${position}`);
  };

  return <div className={getClassName(position)} ref={toastContainerRef}>
    <Toast content={content} props={props}/>
  </div>;
};
