import React from "react";
import { connect } from "react-redux";
import { login } from "../../actions/session_actions"
import LoginForm from "./login_form";
import { openModal } from "../../actions/modal_actions";

const mstp = (state) => {
    return ({
        errors: state.errors.session
    });
};

const mdtp = (dispatch) => {
    return {
        login: (formUser) => dispatch(login(formUser)),
        openModal: (modal) => dispatch(openModal(modal))
    };
};


export default connect(mstp, mdtp)(LoginForm);