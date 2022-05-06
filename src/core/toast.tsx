import React from "react";
import { render } from "react-dom";
import type { ToastProps } from "../types/toast";

import { ToastContainer } from "../components";

const toast = (content: string, props:ToastProps) => {
    const toastProvider = document.querySelector('.ToastProvider');
    if (toastProvider) {
        render(<ToastContainer content={content} props={props}/>, toastProvider);
    }
}

export { toast };