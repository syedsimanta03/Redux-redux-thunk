import React, { Component } from 'react'
import CounterControl from '../../components/CounterControl/CounterControl'
import CounterOutput from '../../components/CounterOutput/CounterOutput'
import { connect } from 'react-redux'
import * as actionCreators from '../../store/actions/actionCreator'

class Counter extends Component {
  state = {
    counter: 0,
  }

  counterChangedHandler = (action, value) => {
    switch (action) {
      case 'inc':
        this.setState((prevState) => {
          return { counter: prevState.counter + 1 }
        })
        break
      case 'dec':
        this.setState((prevState) => {
          return { counter: prevState.counter - 1 }
        })
        break
      case 'add':
        this.setState((prevState) => {
          return { counter: prevState.counter + value }
        })
        break
      case 'sub':
        this.setState((prevState) => {
          return { counter: prevState.counter - value }
        })
        break
      default:
        return this.state
    }
  }

  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label='Increment'
          clicked={() => this.props.onIncrementCounter()}
        />
        <CounterControl
          label='Decrement'
          clicked={() => this.props.onDecrementCounter()}
        />
        <CounterControl label='Add 5' clicked={() => this.props.onAdd()} />
        <CounterControl
          label='Subtract 5'
          clicked={() => this.props.onSubstract()}
        />
        <hr />
        <button onClick={() => this.props.onStoreResult(this.props.ctr)}>
          Store Result
        </button>
        <ul>
          {this.props.storedResults.map((strResult) => (
            <li
              key={strResult.id}
              onClick={() => this.props.onDeleteResult(strResult.id)}
            >
              {' '}
              {strResult.value} {/* ai *value holo result.js reducer er  */}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ctr: state.ctr.counter,
    //*state. ->rootreducer theke *ctr counter->ai reducer e ja return chaisi->counter.js er returned counter
    storedResults: state.res.results,
    //*state. ->rootreducer theke  *.res counter->ai reducer e ja return chaisi->results.js er returned results
  }
}

// below sb dispatch(ai khner gula actionCreator.js theke)
const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch(actionCreators.increment()),
    onDecrementCounter: () => dispatch(actionCreators.decrement()),
    onAdd: () => dispatch(actionCreators.add(10)),
    onSubstract: () => dispatch(actionCreators.substract(15)),
    onStoreResult: (result) => dispatch(actionCreators.storeResult(result)), //check fun used arg inside component
    onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id)), //check fun used arg inside component
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
