import { combineReducers } from 'redux'
import questionsReducer from './questionsReducer';
import authReducer from './authReducer';
import userReducer from './UserReducer'

const rootReducer = combineReducers({
    question: questionsReducer,
    auth: authReducer,
    user: userReducer
})

export default rootReducer
