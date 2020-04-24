import { isFSA } from 'flux-standard-action';
import isPromise from 'is-promise';

export default function rdPromise({dispatch}) {
    return next => action => {
        if(!isFSA(action)) {
            return isPromise(action) ? action.then(dispatch) : next(action)
        }
        return next(action)
    }
}
