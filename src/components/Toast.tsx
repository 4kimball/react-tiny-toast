import React, {FC} from "react";
import cx from 'clsx';

import { ToastPosition } from "../types/toast";
import type { ToastProps } from "../types/toast";


interface Props {
  content: string;
  props: ToastProps;
}

export const Toast: FC<Props> = ({content, props}) => {
  const { type, position } = props;
  const getClassName = (position: ToastPosition): string => {
    return cx(`toast`, `toast--${position}`, `toast--${type}`)
  };

  return <div className={getClassName(position)}>
      <p>{content}</p>
  </div>;
};
