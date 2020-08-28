import React from 'react'
import classes from './CardEdit.module.css';
import { Row, Card, FormGroup, FormControl, Button, Form } from 'react-bootstrap';

export default class CardEdit extends React.Component {
    render() {

        let cardTitle = this.props.cardTitle;
        let cardText = this.props.cardText;
        let cardTag = this.props.cardTag;
        let cardDate = this.props.cardDate;

        let editMode = this.props.editMode;
        let thisCreatePage = this.props.thisCreatePage;
        let cardId = this.props.cardId;
        console.log('This create page? ' + thisCreatePage);
        console.log('Id: ' + cardId);


        this.newTitleElement = React.createRef();
        this.onChangeCardTitle = () => {
            let text = this.newTitleElement.current.value;
            this.props.changeCardTitle(text);
        }
        console.log(this.props.cardTitle);

        this.newTextElement = React.createRef();
        this.onChangeCardText = () => {
            let text = this.newTextElement.current.value;
            this.props.changeCardText(text);
        }
        console.log(this.props.cardText);

        this.newTagElement = React.createRef();
        this.onChangeCardTag = () => {
            let tag = this.newTagElement.current.value;
            this.props.changeCardTag(tag);
        }


        this.editCard = () => {
            console.log('Edit');
            this.props.onEditCard();
        }
        this.saveCard = () => {
            console.log('Save');
            let postFormContent = {cardId, cardTitle, cardText, cardTag}
            this.props.saveThisCardChanges(postFormContent);
        }
        this.deleteCard = () => {
            console.log('Delete');
            this.props.deleteThisCard(cardId);
        }
        this.saveNewCard = () => {
            console.log('Save new card');
            let postFormContent = {cardTitle, cardText, cardTag}
            this.props.createNewCard(postFormContent);
        }
        this.deleteNewCard = () => {
            console.log('Delete new card');
            this.props.deleteNewCard();
        }


        return (
            <Row className="justify-content-center" style={{ height: '94.5vh' }}>

                <Card className="mt-4 " style={{ width: '80%', height: '70%', color: 'black' }}>
                    <Card.Body style={{ overflow: 'auto' }}>
                        {editMode ?
                            <Form>
                                <FormGroup>
                                    <FormControl onChange={this.onChangeCardTitle} ref={this.newTitleElement} value={this.props.cardTitle} aria-describedby></FormControl>
                                </FormGroup>
                            </Form>
                        :
                            <Card.Title >
                                {this.props.cardTitle}
                            </Card.Title>
                        }

                        <Card.Subtitle className="mb-2 text-muted">{cardDate}</Card.Subtitle>
                        
                        {editMode ?
                            <Form>
                                <FormGroup>
                                    <FormControl className={classes.textForm} size="lg" htmlSize="2" as="textarea" rows="3"  onChange={this.onChangeCardText} ref={this.newTextElement} value={this.props.cardText} aria-describedby></FormControl>
                                </FormGroup>
                            </Form>
                        :
                            <Card.Text>
                                {this.props.cardText}
                            </Card.Text>
                        }
                        {editMode &&
                            <FormControl styles={{ background: '#ffc107', color: '#ffc107' }} onChange={this.onChangeCardTag} ref={this.newTagElement} value={this.props.cardTag} placeholder="   Tag" aria-describedby></FormControl>
                        }
                        


                        <Button onClick={this.editCard} className="mr-3 mt-3" variant="dark">Edit</Button>

                        {thisCreatePage ?
                            <React.Fragment>
                                <Button onClick={this.saveNewCard} className="mr-3 mt-3" variant="dark">Save</Button>
                                <Button onClick={this.deleteNewCard} className="mr-3 mt-3" variant="dark">Delete</Button>
                            </React.Fragment>
                        :
                            <React.Fragment>
                                <Button onClick={this.saveCard} className="mr-3 mt-3" variant="dark">Save</Button>
                                <Button onClick={this.deleteCard} className="mr-3 mt-3" variant="dark">Delete</Button>
                            </React.Fragment>
                        }
                        {!editMode ?
                            <Button onClick={this.editCard} className={classes.button} variant="warning">{cardTag || cardTag == !undefined ? 'Tag: ' + cardTag : '+ Add tag'}</Button>
                            :
                            null
                        }

                    </Card.Body>
                </Card>

            </Row>
        )
    }
}