import toast from "react-hot-toast";
import {
  ExclamationTriangleIcon,
  CheckCircleIcon,
  XCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";

export const ToastSuccess = (text: string, options?: object) => {
  const toastId = toast.custom(
    <div className="alert alert-success w-1/5">
      <CheckCircleIcon className="h-6 w-6" />
      <span>{text}</span>
    </div>,
    {
      duration: 5000,
      ...options,
    },
  );
  return toastId;
};

export const ToastError = (text: string, options?: object) => {
  const toastId = toast.custom(
    <div className="alert alert-error w-1/5">
      <XCircleIcon className="h-6 w-6" />
      <span>{text}</span>
    </div>,
    {
      duration: 5000,
      ...options,
    },
  );
  return toastId;
};

export const ToastInfo = (text: string, options?: object) => {
  const toastId = toast.custom(
    <div className="alert alert-info w-1/5">
      <InformationCircleIcon className="h-6 w-6" />
      <span>{text}</span>
    </div>,
    {
      duration: 5000,
      ...options,
    },
  );
  return toastId;
};

export const ToastWarning = (text: string, options?: object) => {
  const toastId = toast.custom(
    <div className="alert alert-warning w-1/5">
      <ExclamationTriangleIcon className="h-6 w-6" />
      <span>{text}</span>
    </div>,
    {
      duration: 5000,
      ...options,
    },
  );
  return toastId;
};

export const ToastLoading = (text: string, options?: object) => {
  const toastId = toast.custom(
    <div className="alert w-1/5">
      <span className="loading loading-ball loading-md text-primary"></span>
      <span>{text}</span>
    </div>,
    {
      duration: 5000,
      ...options,
    },
  );
  return toastId;
};
