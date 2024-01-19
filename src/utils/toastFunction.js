import { toast } from "react-toastify";

 export const errorToast = (message) => {
    toast.error(message, {
      position: "top-right",
      autoClose: 3000, // milliseconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
 export const sucessToast = (message) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 3000, // milliseconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };