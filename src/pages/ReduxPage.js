import React, { Component } from 'react'
import store from '../store/'

export default class ReduxPage extends Component {
    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            this.forceUpdate()
        })
    }
    componentWillUnmount() {
        if(this.unsubscribe) {
            this.unsubscribe()
        }
    }
    add = () => {
        store.dispatch({type: 'ADD', payload: 1})
    }
    minus = () => {
        store.dispatch({type: 'MINUS', payload: 1})
    }
    asyAdd = () => {
        store.dispatch((dispatch,getState) => {
            setTimeout(() => {
                dispatch({type: 'ADD', payload: 1})
            }, 1000)
        })
    }
    promiseAdd = () => {
        store.dispatch(Promise.resolve({type: "MINUS", payload: 1}));
    }
    render() {

        const {count} = store.getState()
        return(
            <div>
                <h3>Reduxpage</h3>
                {/* <p>{store.getState()}</p> */}
                <p>{count}</p>
                <button onClick={this.add}>同步+</button>
                <button onClick={this.minus}>同步-</button>
                <button onClick={this.asyAdd}>异步+</button>
                <button onClick={this.promiseAdd}>promise-</button>
            </div>
        )
    }
}