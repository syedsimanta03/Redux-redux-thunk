const {
  INCREMENT,
  DECREMENT,
  ADD,
  SUBSTRACT,
  STORE_RESULT,
  DELETE_RESULT,
} = require('./actions')

export const increment = () => {
  return {
    type: INCREMENT,
  }
}

export const decrement = () => {
  return {
    type: DECREMENT,
  }
}

export const add = (value) => {
  return {
    type: ADD,
    valx: value,
    // val asole counter.js ->counter: state.counter + action.valx,
  }
}

export const substract = (value) => {
  return {
    type: SUBSTRACT,
    val: value,
    // val asole counter.js -> counter: state.counter - action.val,
  }
}

export const storeResult = (res) => {
  return {
    type: STORE_RESULT,
    result: res,
    // result asole Counter.js -> dispatched *result r result(same name hbe)
  }
}

export const deleteResult = (resElId) => {
  return {
    type: DELETE_RESULT,
    resultElId: resElId,
    // result asole Counter.js -> dispatched *result r result(same name hbe)
  }
}
