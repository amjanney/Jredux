export default function combinerReducers(reducers) {
    return function combinaition(state={}, action) {
        let nextState = {}
        let hasChagned = false

        for(let key in reducers) {
            const reducer = reducers[key]
            const prevState = state[key]

            nextState[key] = reducer(prevState, action)

            hasChagned = nextState !== state
        }

        hasChagned = hasChagned ||  reducers.length !== Object.keys(state).length

        return hasChagned ? nextState : state
    }
}