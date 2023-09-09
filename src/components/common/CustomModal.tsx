import { useState } from "react";
import clsx from "clsx";

const CustomModal = ({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: Function;
  children: React.ReactNode;
}) => {
  return (
    // <button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>open modal</button>
    <div
      className={clsx(
        { "modal-open": open },
        "modal modal-bottom sm:modal-middle",
      )}
    >
      <div className="modal-box">
        {children}
        <div className="modal-action">
          {/* if there is a button in form, it will close the modal */}
          <button onClick={() => onClose(false)} className="btn">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
