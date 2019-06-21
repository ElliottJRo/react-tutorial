import React from 'react'

import { connect } from 'react-redux'

class Button extends React.Component {

  render() {
    return(
      <button onClick={this.props.clickHandler}>{this.props.children}</button>
    )
  }
}

export default connect(
  null,
  (dispatch) => {
    return {
      clickHandler: () => { dispatch({ type: 'EXTRA_COUNTER/SET', payload: 54 }) }
    }
  }
)(Button)