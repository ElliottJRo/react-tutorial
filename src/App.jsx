import React from 'react'

import Wrapper from './Wrapper'
import Button from './Button'


class App extends React.Component {
  render() {
    console.log('render')
    return(
      <div>
        <h1>Hello World</h1>
        <Wrapper backgroundColor="red" />
        <Button>ClickMe</Button>
      </div>
    )
  }
}

export default App