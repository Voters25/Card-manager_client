import { connect } from 'react-redux'
import Registration from './Registration';
import { sendRegistrationForm, changeEmail, changePassword, changePasswordTwo } from '../../../Redux/userForm-reducer';


const mapStateToProps = (state) => {
    return {


        email: state.userForm.email,
        password: state.userForm.password,
        passwordTwo: state.userForm.passwordTwo


    }
}

const mapDispatchToProps = (dispatch) => {
    return {

        sendUserForm: (userForm) => {
            dispatch(sendRegistrationForm(userForm));
        },
        changeEmailValue: (email) => {
            dispatch(changeEmail(email));
        },
        changePasswordValue: (password) => {
            dispatch(changePassword(password));
        },
        changePasswordTwolValue: (passwordTwo) => {
            dispatch(changePasswordTwo(passwordTwo));
        },

    }
}

const RegistrationContainer = connect(mapStateToProps, mapDispatchToProps)(Registration);

export default RegistrationContainer;