import * as actions from '../actions/UserAction'

export const initialState = {
  name: null,
  lastname: null
}


export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_USER:
      const payload = action.payload;
      console.log(payload)
      return {info: payload.firstName, infor: payload.lastName}
    default:
      return state
  }
}
