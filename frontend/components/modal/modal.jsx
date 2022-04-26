import React from "react";
import SignupContainer from "../session_form/signup_form_container";

const Modal = ({modal, closeModal}) => {
    // debugger
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case "create_user":
            component = <SignupContainer />
            // debugger
            break;
        default:
            return null;
    };

    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={(e) => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
};

export default Modal;

