import React, { Component } from 'react';
import {
    Button, Modal, ModalHeader, Form, FormGroup, Label,
    Input
} from 'reactstrap';
import Render from './Render';


class Popup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            lastname: null,
            email: null,
            modal: false,
            nestedModal: false,
            closeAll: false
        };
    }
    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }
    toggleNested = () => {
        this.setState({
            nestedModal: !this.state.nestedModal,
            closeAll: false
        });
    }
    toggleAll = () => {
        this.setState({
            nestedModal: !this.state.nestedModal,
            closeAll: true
        });
    }

    handleFirstName = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    handleLastName = (e) => {
        this.setState({
            lastname: e.target.value
        })
    }
    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }


    render() {
        console.log(this.props);
        return (
            <div className="cont">
                <h3>Fill in the pop up box.</h3>
                <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                    <Form>
                        <FormGroup className="firstName">
                            <Label for="text">First Name</Label>
                            <Input type="text" placeholder="put your name"
                                onChange={this.handleFirstName} />
                        </FormGroup>
                        <FormGroup className="lastName">
                            <Label for="text">Last Name</Label>
                            <Input type="text" placeholder="put your last name"
                                onChange={this.handleLastName} />
                        </FormGroup>
                        <FormGroup className="email">
                            <Label for="text">Email</Label>
                            <Input type="email" placeholder="put your email"
                                onChange={this.handleEmail} />
                        </FormGroup>
                        <Button onClick={() => this.props.action(
                            this.state.name,
                            this.state.lastname,
                            this.state.email,
                            {/* <Render /> */ }
                        )}>Submit</Button>
                    </Form>


                </Modal>
            </div>
        );
    }
}

export default Popup;