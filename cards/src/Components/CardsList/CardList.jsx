import React from 'react'
import classes from './CardList.module.css';
import { Row, Col, Button } from 'react-bootstrap'
import CardElement from './CardElement/CardElement';
import { TagElement } from './TagElement/TagElement';

export default class CardList extends React.Component {

    componentDidMount() {
        this.props.getCardList();
    }

    render() {

        this.getList = async () => {
            await this.props.getCardList();
            console.log(this.props.cardList);
        }

        this.newCard = () => {
            this.props.createNewCard();
        }

        this.getCardListWithTag = (tag) => {
            this.props.getCardsWithTag(tag);
        }

        
        this.tagElements = this.props.tagList
        .map((e => <TagElement key={Math.random().toString(36)} tag={e} getCardListWithTag={this.getCardListWithTag} /> ))

        this.cardElements = this.props.cardList
        .map((e => <CardElement key={e._id} title={e.Title} content={e.Content} tag={e.Tag} date={e.Date} id={e._id} getCardListWithTag={this.getCardListWithTag} openThisCard={this.props.openThisCard} deleteThisCard={this.props.deleteThisCard} /> ))


        // 'rgb(65, 74, 78)'

        return (
            <Row>
                <Col  className={classes.Test}>
                    <Row>
                        <Col md className="d-flex flex-row justify-content-start align-items-center " style={{ background: 'rgb(65, 74, 78)', height: '8vh', overflow: 'auto' }}>{this.tagElements}</Col>
                    </Row>
                    <Row>
                        <Col md={12} style={{ background: 'rgb(65, 74, 78)', height: '86.5vh', overflow: 'auto', color: 'white' }}>
                            <Button onClick={this.newCard} className="mt-3 mb-1 ml-2">+ New Card</Button>
                            
                            <Row className="d-flex flex-row justify-content-around align-items-center " style={{ overflow: 'hidden' }} >

                                {this.cardElements}
                                
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    }
}

// <Button onClick={this.getList} className="mt-3 mb-1 ml-2">Update list</Button>