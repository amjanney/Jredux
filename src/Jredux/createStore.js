export default function createStore(reducer, enhancer) {

    if(enhancer) {
        return enhancer(createStore)(reducer)
    }

    let currentState;
    let currentlistenrs = [];

    function getState() {
        return currentState;
    }
    function dispatch(action) {
        currentState = reducer(currentState, action)
        currentlistenrs.forEach(listener => listener())
    }
    function subscribe(listener) {
        currentlistenrs.push(listener)
        return () => {
            // currentlistenrs = []
            const index = currentlistenrs.indexOf(listener)
            currentlistenrs.splice(index, 1)
        }
    }
    
    dispatch({type: 'Jredux'});

    return {
        getState,
        dispatch,
        subscribe
    }
}