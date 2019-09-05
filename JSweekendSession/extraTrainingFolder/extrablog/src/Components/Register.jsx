import React, { Component } from 'react';
import Render from './Render';

class Register extends Component {
    state = {
        firstName: [],
        lastName: [],
        email: [],
        city: []
    }
    handleName = (e) => {
        this.setState({
            firstName: e.target.value
        })
    }
    handleLastName = (e) => {
        this.setState({
            lastName: e.target.value
        })
    }
    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }
    handleCity = (e) => {
        this.setState({
            city: e.target.value
        })
    }
    render() {
        console.log(this.props);
        return (
            <main class="form">
                {/* <div class="col-md-4 mb-3"> */}
                <label for="validationTooltip01">First name</label>
                <input type="text" class="form-control"
                    id="validationTooltip01" placeholder="First name" required
                    onChange={this.handleName} />

                {/* </div> */}

                {/* <div class="col-md-4 mb-3"> */}
                <label for="validationTooltip02">Last name</label>
                <input type="text" class="form-control"
                    id="validationTooltip02"
                    placeholder="Last name" required
                    onChange={this.handleLastName} />
                <div class="valid-tooltip">

                </div>
                {/*  </div>
 */}
                {/* <div class="col-md-4 mb-3"> */}
                <label for="validationTooltipUsername">Username</label>
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"
                            id="validationTooltipUsernamePrepend">@</span>
                    </div>
                    <input type="text" class="form-control"
                        id="validationTooltipUsername"
                        placeholder="Username" aria-describedby=
                        "validationTooltipUsernamePrepend" required
                        onChange={this.handleEmail} />
                    <div class="invalid-tooltip">
                        Please choose a unique and valid username.
        </div>
                </div>
                {/*  </div> */}
                {/* <div class="col-md-6 mb-3"> */}
                <label for="validationTooltip03">City</label>
                <input type="text" class="form-control"
                    id="validationTooltip03" placeholder="City" required
                    onChange={this.handleCity} />
                <div class="invalid-tooltip">
                    Please provide a valid city.
      </div>
                {/* </div> */}
                <button class="btn btn-primary" type="submit"
                    onClick={() => {
                        this.props.firstOperation(
                            this.state.firstName,
                            this.state.lastName,
                            this.state.email,
                            this.state.city,
                            <Render />
                        )
                    }}>Submit form</button>
            </main >

        )
    }
}

export default Register;