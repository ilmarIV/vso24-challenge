import { useRef, useEffect } from "react";

const Modal = (props) => {
  const dialogRef = useRef();

  useEffect(() => {
    const dialog = dialogRef.current;

    if (props.open) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [props.open]);

  return (
    <dialog ref={dialogRef} className="modal cart">
      {props.children}
    </dialog>
  );
};

export default Modal;