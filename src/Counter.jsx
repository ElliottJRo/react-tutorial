import React from 'react'
import PT from 'prop-types'

import { connect } from 'react-redux'

class Counter extends React.PureComponent {
  render() {
    return(
      <React.Fragment>
        <p>Count = {this.props.count}</p>
        <p>ExtraCOunt = {this.props.extraCount}</p>
      </React.Fragment>
    )
  }
}

Counter.propTypes = {
  count: PT.number
}

Counter.defaultProps = {
  count: 1000
}

export default connect(
  (globalState) => {
    return {
      count: globalState.counter.foo,
      extraCount: globalState.extraCounter.bar
    }
  }
)(Counter)


// Currying?
// const addGenerator = (add) => {
//   return (value) => {
//     return value + add
//   }
// }

// const addFive = addGenerator(5)

// const seven = addFive(2)

// const eight = addFive(3)

// const ten = addGenerator(1)(5)