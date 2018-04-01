import React, { Component } from 'react';

export default class List extends Component {

    renderItems = () => {
        const items = []
        this.props.items.forEach((item) => {
        items.push(
            <li key={item.userId}>{item.title}</li>
        )
        })
        return items
    }

    render() {
        return(
            <ul>
                {this.renderItems()}
            </ul>
        )
    }
}