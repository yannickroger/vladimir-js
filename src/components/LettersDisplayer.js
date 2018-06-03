import React, { PureComponent } from 'react';

import {LettersDisplayerItem} from "./LettersDisplayerItem";

export class LettersDisplayer extends PureComponent {

    render() {
        const listItems = [];

        this.props.letters.forEach((number, letter) => {
            listItems.push(<LettersDisplayerItem letter={letter} number={number}/>);
        });

        return(
            <ul>{listItems}</ul>
        );

    }
}
