import history from "../history";
import { changeCardContent, thisEditPage, changeCardId, switchOfEditCard, callForwardingToList } from './cardEdit-reducer'

const CHANGE_CARD_LIST = 'CHANGE-CARD-LIST';
const GET_STARTED = 'GET-STARTED';
const CHANGE_TAG_LIST = 'CHANGE-TAG-LIST';
const CHANGE_LIST = 'CHANGE-LIST';


const initialState = {
    cardList: [],
    tagList: []
}

const cardListReducer = (state = initialState, action) => {
    
    switch (action.type) {

    case CHANGE_CARD_LIST:
        return {
             ...state,
             cardList: action.newList
        }
    case CHANGE_TAG_LIST:
        return {
            ...state,
            tagList: action.newTags
        }
    case CHANGE_LIST:
        return {
            ...state,
            tagList: action.newTags,
            cardList: action.newList
        }

    default:
        return state
    }
}



/*===================================================================================*/
// Get list

export const getList = () => {
    return dispatch => {
        dispatch(getListStarted());


        fetch('https://card-manager.herokuapp.com/list', {
            credentials: "include"
        })
            .then(res => res.json())
            .then(result => {

                dispatch(changeList(result));
                callForwardingToList();

            }).catch(err => console.log(err));

    }
}

const getListStarted = () => ({
    type: GET_STARTED
});



/*===================================================================================*/


/*===================================================================================*/
// Get cards list with tag


export const getListWithByTag = (tag) => {
    return dispatch => {
        dispatch(getListStarted());


        fetch(`https://card-manager.herokuapp.com/byTag/${tag}`, {
            credentials: "include"
        })
            .then(res => res.json())
            .then(result => {

                dispatch(changeList(result));

            }).catch(err => console.log(err));

    }
}
/*===================================================================================*/


/*===================================================================================*/
// Get Card

export const getCard = (id) => {
    return dispatch => {
        dispatch(getCardStarted());


        fetch(`https://card-manager.herokuapp.com/card/${id}`, {
            credentials: "include"
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);

                dispatch(changeCardContent(result));
                dispatch(thisEditPage());
                dispatch(switchOfEditCard());
                dispatch(changeCardId(id));
                callForwardingToCard();


            }).catch(err => console.log(err))
    }
}

const getCardStarted = () => ({
    type: GET_STARTED
});



/*===================================================================================*/



/*===================================================================================*/
// Delete Card

export const deleteCard = (id) => {
    return dispatch => {
        dispatch(getCardStarted());


        fetch(`https://card-manager.herokuapp.com/delete/${id}`, {
            credentials: "include"
        })
            .then(res => res.text())
            .then(result => {
                console.log(result);

                reloadComponent();

            }).catch(err => console.log(err))
    }
}


/*===================================================================================*/





export const callForwardingToCard = () => {
    history.push('/card');
}

const reloadComponent = () => {
    history.push('/1');
    history.push('/list');
}


/* let changeCardList = (result) => {
    console.log(result);
    return {
        type: 'CHANGE-CARD-LIST',
        newList: result
    }
} */

/* let changeTagList = (result) => {
    console.log(result);
    return {
        type: 'CHANGE-TAG-LIST',
        newTags: result
    }
} */

let changeList = (result) => {
    return {
        type: 'CHANGE-LIST',
        newTags: result.tagList,
        newList: result.cardList.reverse()
    }
}



export default cardListReducer;