import history from "../history";

const POST_STARTED = 'POST-STARTED';
const CHANGE_CARD_TITLE = 'CHANGE-CARD-TITLE';
const CHANGE_CARD_TEXT = 'CHANGE-CARD-TEXT';
const CHANGE_CARD_CONTENT = 'CHANGE-CARD-CONTENT';
const CHANGE_EDIT_MODE = 'CHANGE-EDIT-MODE';
const CHANGE_THIS_CREATE_PAGE = 'CHANGE-THIS-CREATE-PAGE';
const CHANGE_CARD_ID = 'CHANGE-CARD-ID';
const CHANGE_CARD_TAG = 'CHANGE-CARD-TAG';
const CHANGE_CARD_DATE = 'CHANGE-CARD-DATE';


const initialState = {
    cardTitle: '',
    cardText: '',
    cardTag: '',
    cardDate: '',
    editMode: false,
    thisCreatePage: false,
    cardId: ''
}

const cardEditReducer = (state = initialState, action) => {
    
    switch (action.type) {

    case CHANGE_CARD_TEXT:
        return {
             ...state,
             cardText: action.newText
        }
    case CHANGE_CARD_TITLE:
        return{
            ...state,
            cardTitle: action.newTitle
        }
    case CHANGE_CARD_CONTENT:
        return {
            ...state,
            cardTitle: action.newTitle,
            cardText: action.newText,
            cardTag: action.newTag,
            cardDate: action.newDate
        }
    case CHANGE_EDIT_MODE:
        return {
            ...state,
            editMode: action.newModeValue
        }
    case CHANGE_THIS_CREATE_PAGE:
        return {
            ...state,
            thisCreatePage: action.newAnswer
        }
    case CHANGE_CARD_ID:
        return {
            ...state,
            cardId: action.newId
        }
    case CHANGE_CARD_TAG:
        return {
            ...state,
            cardTag: action.newTag
        }
    case CHANGE_CARD_DATE:
        return {
            ...state,
            cardDate: action.newDate
        }

    default:
        return state
    }
}


/*===================================================================================*/
// Save Card Changes

export const saveCardChanges = (postFormContent) => {
    return dispatch => {
        dispatch(postCardStarted());

        let date = new Date().toLocaleString();

        let formData = new FormData();
        formData.append('id', postFormContent.cardId);
        formData.append('title', postFormContent.cardTitle);
        formData.append('content', postFormContent.cardText);
        formData.append('tag', postFormContent.cardTag);
        formData.append('date', date);


        fetch(`https://card-manager.herokuapp.com/edit`, {
            method: 'POST',
            credentials: "include",
            body: formData
        })
            .then(res => res.text())
            .then(result => {
                console.log(result);

                dispatch(zeroingCardId());
                callForwardingToList();
                

            }).catch(err => console.log(err))
    }
}

const postCardStarted = () => ({
    type: POST_STARTED
});



/*===================================================================================*/

/*===================================================================================*/
// Sve new Card 

export const createCard = (postFormContent) => {
    return dispatch => {
        dispatch(postCardStarted());

        let date = new Date().toLocaleString();

        let formData = new FormData();
        formData.append('title', postFormContent.cardTitle);
        formData.append('content', postFormContent.cardText);
        formData.append('tag', postFormContent.cardTag);
        formData.append('date', date);


        fetch('https://card-manager.herokuapp.com/create', {
            method: 'POST',
            credentials: "include",
            body: formData
        })
            .then(res => res.text())
            .then(result => {
                console.log(result);

                callForwardingToList();

            }).catch(err => console.log(err))
    }
}


/*===================================================================================*/



export const callForwardingToList = () => {
    history.push('/list');
}



export let changeCardContent = (result) => {
    return {
        type: 'CHANGE-CARD-CONTENT',
        newTitle: result.Title,
        newText: result.Content,
        newTag: result.Tag,
        newDate: result.Date
    }
}

export const zeroingCardContent = () => {
    return {
        type: 'CHANGE-CARD-CONTENT',
        newTitle: '',
        newText: '',
        newTag: '',
        newDate: ''
    }
}

export const createHints = () => {
    return {
        type: 'CHANGE-CARD-CONTENT',
        newTitle: '   Title...',
        newText: '   Text...',
        newTag: ''
    }
}

export const editCard = () => {
    return {
        type: 'CHANGE-EDIT-MODE',
        newModeValue: true
    }
}
export const switchOfEditCard = () => {
    return {
        type: 'CHANGE-EDIT-MODE',
        newModeValue: false
    }
}

export const thisCreatePage = () => {
    return {
        type: 'CHANGE-THIS-CREATE-PAGE',
        newAnswer: true
    }
}
export const thisEditPage = () => {
    return {
        type: 'CHANGE-THIS-CREATE-PAGE',
        newAnswer: false
    }
}

export const changeCardId = (id) => {
    return {
        type: 'CHANGE-CARD-ID',
        newId: id
    }
}
export const zeroingCardId = () => {
    return {
        type: 'CHANGE-CARD-ID',
        newId: ''
    }
}



export const updateNewCardTitle = (text) => {
    return {
        type: 'CHANGE-CARD-TITLE',
        newTitle: text
    }
}

export const updateNewCardText = (text) => {
    return {
        type: 'CHANGE-CARD-TEXT',
        newText: text
    }
}

export const updateNewCardTag = (tag) => {
    return {
        type: 'CHANGE-CARD-TAG',
        newTag: tag
    }
}





export default cardEditReducer;