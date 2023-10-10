import { useRef } from "react";
import clsx from "clsx";

const CustomModal = ({
  buttonClassName,
  buttonContent,
  children,
}: {
  buttonClassName: string;
  buttonContent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        onClick={() => modalRef.current?.showModal()}
        className={buttonClassName}
      >
        {buttonContent}
      </button>
      <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">{children}</div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default CustomModal;
