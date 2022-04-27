export type ToastPosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

export type ToastType = "success" | "warn" | "error";

export interface ToastProps {
  type: ToastType;
  content: string;
  position: ToastPosition;
}
