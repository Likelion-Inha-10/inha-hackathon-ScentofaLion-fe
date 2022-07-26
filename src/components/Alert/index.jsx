import toast from 'react-simple-toasts';

export function Alert(messege) {
  return toast(messege, 1500);
}

export default Alert;
