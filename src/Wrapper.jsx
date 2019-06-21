import React from 'react'
import PropTypes from 'prop-types'

import Counter from './Counter'

class Wrapper extends React.PureComponent {
  render() {
    return(
      <div style={{ backgroundColor: this.props.backgroundColor }}>
        <Counter count={this.props.passcount} />
      </div>
    )
  }
}

Wrapper.propTypes = {
  backgroundColor: PropTypes.string.isRequired
}

export default Wrapper