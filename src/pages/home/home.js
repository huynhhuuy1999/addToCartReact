import React, { Component } from 'react'
import {Context} from '../../context/contextCart';

export default class home extends Component {
    render() {
        return (
            <div>
                <Context.Consumer>
                    {
                        (value) =><div><button onClick={value.addToCart}>x</button> <h2>{value.cart.length}</h2></div>
                    }
                </Context.Consumer>
            </div>
        )
    }
}
