import React, { PureComponent } from 'react';

export class LettersDisplayerItem extends PureComponent {

    render() {
        return(
            <li>{this.props.letter} : {this.props.number}</li>
        );
    }
}
