export default function logger({getState}) {
    return next => action => {
        console.log('===============');
        console.log('prevState', getState());
        const newState = next(action)
        console.log('nextState', getState());
        console.log('===============');
        return newState
    }
}