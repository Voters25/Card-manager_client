import React from 'react'
import classes from './CardElement.module.css';
import { Card, Button } from 'react-bootstrap'

export default class CardElement extends React.Component {

    render() {

        let id = this.props.id;
        let cardTag = this.props.tag;
        let cardDate = this.props.date;

        let onOpenCard = () => {
            this.props.openThisCard(id);
        }

        let onDeleteCard = () => {
            this.props.deleteThisCard(id);
        }

        this.getCardsWithTag = () => {
            this.props.getCardListWithTag(cardTag);
        }


        return (
            <Card className="mt-3 mr-3 ml-3" style={{ width: '19rem', height: '20rem', color: 'black' }} key={this.props.id}>
                <Card.Body>
                    <Card.Title >
                        {this.props.title}
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{cardDate}</Card.Subtitle>
                    <Card.Text className={classes.text} >
                        {this.props.content}
                    </Card.Text>
                    <Button onClick={onOpenCard} className="mr-3 mb-2" variant="dark">Open</Button>
                    <Button onClick={onDeleteCard} className="mr-3 mb-2" variant="dark">Delete</Button>
                    {cardTag || cardTag == !undefined ?
                        <Button variant="warning" onClick={this.getCardsWithTag} className={classes.btn} >{cardTag}</Button>
                    :
                        null
                    }
                </Card.Body>
            </Card>
        )
    }
}