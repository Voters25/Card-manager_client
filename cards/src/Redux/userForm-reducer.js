import history from "../history";
import { callForwardingToList } from "./cardEdit-reducer";

const CHANGE_USER_NAME = 'CHANGE-USER-NAME';
const CHANGE_EMAIL = 'CHANGE-EMAIL';
const CHANGE_PASSWORD = 'CHANGE-PASSWORD';
const CHANGE_PASSWORD_TWO = 'CHANGE-PASSWORD-TWO';
const CHANGE_FORM = 'CHANGE-FORM';
const CHANGE_FORM_WITHOUT_EMAIL = 'CHANGE-FORM-WITHOUT-EMAIL';

const initialState = {
    userName: '',
    email: '',
    password: '',
    passwordTwo: ''
}

const userFormReducer = (state = initialState, action) => {
    
    switch (action.type) {

        case CHANGE_USER_NAME:
            return {
                ...state,
                userName: action.newName
            }
        case CHANGE_EMAIL:
            return {
                ...state,
                email: action.newEmail
            }
        case CHANGE_PASSWORD:
            return {
                ...state,
                password: action.newPassword
            }
        case CHANGE_PASSWORD_TWO:
            return {
                ...state,
                passwordTwo: action.newPasswordTwo
            }
        case CHANGE_FORM:
            return {
                ...state,
                email: action.newEmail,
                password: action.newPassword,
                passwordTwo: action.newPasswordTwo
            }
        case CHANGE_FORM_WITHOUT_EMAIL:
            return {
                ...state,
                password: action.newPassword,
                passwordTwo: action.newPasswordTwo
            }

    default:
        return state
    }
}


/*===================================================================================*/
// Log In


export const sendLogInForm = (userForm) => {
    return dispatch => {

        let formData = new FormData();
        formData.append('email', userForm.email);
        formData.append('password', userForm.password);
        

        fetch('https://card-manager.herokuapp.com/Login', {
            method: 'POST',
            credentials: "include",
            body: formData
        })
            .then(res => res.json())
            .then(result => {

                dispatch(pushLoginToState(result.email));
                dispatch(zeroingForm());
                callForwardingToList();

            }).catch(err => console.log(err))
    }
}


/*===================================================================================*/

/*===================================================================================*/
// Registration

export const sendRegistrationForm = (userForm) => {
    return dispatch => {

        let formData = new FormData();
        formData.append('email', userForm.email);
        formData.append('password', userForm.password);
        formData.append('passwordTwo', userForm.passwordTwo);


        fetch('https://card-manager.herokuapp.com/Registration', {
            method: 'POST',
            credentials: "include",
            body: formData
        })
            .then(res => res.text())
            .then(result => {

                dispatch(zeroingFormWithoutEmail());
                callForwardingToLogIn();

            }).catch(err => console.log(err))
    }
}


/*===================================================================================*/

/*===================================================================================*/
// Log out

export const logOut = () => {
    return dispatch => {


        fetch('https://card-manager.herokuapp.com/Logout', {
            credentials: "include"
        })
            .then(res => res.text())
            .then(result => {

                if (result == 'Succses') {
                    dispatch(zeroingForm());
                    dispatch(removeUserName());
                    callForwardingToLogIn();
                }
                

            }).catch(err => console.log(err));

    }
}


/*===================================================================================*/


/*===================================================================================*/
// check a user

export const checkAUser = () => {
    return dispatch => {


        fetch('https://card-manager.herokuapp.com/HaveAUser', {
            credentials: "include"
        })
            .then(res => res.json())
            .then(result => {

                if (result.email) {
                    dispatch(pushLoginToState(result.email));
                    callForwardingToList();
                } else if (!result.email) {
                    dispatch(removeUserName());
                    callForwardingToLogIn();
                }
                

            }).catch(err => console.log(err));

    }
}


/*===================================================================================*/




export const callForwardingToLogIn = () => {
    history.push('/LogIn')
}
export const callForwardingToRegistration = () => {
    history.push('/Registration')
}


const pushLoginToState = (result) => {
    return {
        type: 'CHANGE-USER-NAME',
        newName: result
    }
}
const removeUserName = () => {
    return {
        type: 'CHANGE-USER-NAME',
        newName: ''
    }
}

export const changeEmail = (email) => {
    return {
        type: 'CHANGE-EMAIL',
        newEmail: email
    }
}
export const changePassword = (password) => {
    return {
        type: 'CHANGE-PASSWORD',
        newPassword: password
    }
}
export const changePasswordTwo = (passwordTwo) => {
    return {
        type: 'CHANGE-PASSWORD-TWO',
        newPasswordTwo: passwordTwo
    }
}

export const zeroingFormWithoutEmail = () => {
    return {
        type: 'CHANGE-FORM-WITHOUT-EMAIL',
        newPassword: '',
        newPasswordTwo: ''
    }
}

export const zeroingForm = () => {
    return {
        type: 'CHANGE-FORM',
        newEmail: '',
        newPassword: '',
        newPasswordTwo: ''
    }
}

export default userFormReducer;