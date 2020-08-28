import { connect } from 'react-redux'
import LogIn from './LogIn';
import { sendLogInForm, callForwardingToRegistration, changeEmail, changePassword } from '../../Redux/userForm-reducer';


const mapStateToProps = (state) => {
    return {


        email: state.userForm.email,
        password: state.userForm.password


    }
}

const mapDispatchToProps = (dispatch) => {
    return {

        sendUserForm: (userForm) => {
            dispatch(sendLogInForm(userForm));
        },
        getRegPage: () => {
            callForwardingToRegistration();
        },
        changeEmailValue: (email) => {
            dispatch(changeEmail(email));
        },
        changePasswordValue: (password) => {
            dispatch(changePassword(password));
        },

    }
}

const LogInContainer = connect(mapStateToProps, mapDispatchToProps)(LogIn);

export default LogInContainer;