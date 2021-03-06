import * as actionTypes from '../actions/actions'

const initialState = {
  results: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: action.result }), //Counter.js r map fun e ase jsx value
      }
    case actionTypes.DELETE_RESULT:
      const updatedArray = state.results.filter(
        (result) => result.id !== action.resultElId
      )
      return {
        ...state,
        results: updatedArray,
      }

    default:
      return state
  }
}

export default reducer
