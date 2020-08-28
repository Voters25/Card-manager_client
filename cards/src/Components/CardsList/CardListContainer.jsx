import { connect } from 'react-redux'
import CardList from './CardList';
import { getCard, deleteCard, getList, callForwardingToCard, getListWithByTag } from '../../Redux/cardList-reducer';
import { zeroingCardContent, createHints, thisCreatePage, switchOfEditCard } from '../../Redux/cardEdit-reducer';


const mapStateToProps = (state) => {
    return {

        cardList: state.cardList.cardList,
        tagList: state.cardList.tagList

    }
}

const mapDispatchToProps = (dispatch) => {
    return {

        getCardList: () => {
            dispatch(getList());
        },

        openThisCard: (id) => {
            dispatch(getCard(id));
        },

        deleteThisCard: (id) => {
            dispatch(deleteCard(id));
        },

        createNewCard: () => {
            dispatch(zeroingCardContent());
            dispatch(thisCreatePage());
            dispatch(createHints());
            dispatch(switchOfEditCard());
            callForwardingToCard();
        },

        getCardsWithTag: (tag) => {
            dispatch(getListWithByTag(tag));
        }

    }
}

const CardListContainer = connect(mapStateToProps, mapDispatchToProps)(CardList);

export default CardListContainer;