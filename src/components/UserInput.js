import React, { Component } from 'react';
import {calculate} from '../modules/cyrillicNumbers/calculator';


export class UserInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            score: '',
            notFound: '',
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const result = calculate(event.target.value);

        this.setState({
            value: event.target.value,
            score: result.score,
            notFound: result.notFound,
        })
    }

    render() {
        return(
            <div>
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
                <p>
                    Result : {this.state.score}
                </p>

                <p> Not found : {this.state.notFound}</p>
            </div>
        );
    }
}