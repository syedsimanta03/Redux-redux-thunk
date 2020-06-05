import * as actionTypes from '../actions/actions'

const initialState = {
  counter: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      }
    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      }
    case actionTypes.ADD:
      return {
        ...state,
        counter: state.counter + action.valx, //actionCreator.js er valx(same name hbe)
      }
    case actionTypes.SUBSTRACT:
      return {
        ...state,
        counter: state.counter - action.val, //actionCreator.js er val(same name hbe)
      }

    default:
      return state
  }
}

export default reducer
