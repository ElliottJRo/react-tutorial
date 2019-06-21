
const initialState = {
  bar: 10
}

const extraCounterReducer = (state = initialState, action) => {
  console.log('Extra Reducer Action dispatched!', state, action)
  switch (action.type) {
    case 'EXTRA_COUNTER/ADD':
      return { bar: state.bar + 1 }
    case 'EXTRA_COUNTER/SUBTRACT':
      return { bar: state.bar - 1 }
    case 'EXTRA_COUNTER/SET':
      return { bar: action.payload }
    default:
      return state
  }
}

export default extraCounterReducer