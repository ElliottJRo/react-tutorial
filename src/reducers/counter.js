
const initialState = {
  foo: 600
}

const counterReducer = (state = initialState, action) => {
  console.log('counterReducer Action dispatched!', state, action)
  switch (action.type) {
    case 'COUNTER/ADD':
      return { foo: state.foo + 1 }
    case 'COUNTER/SUBTRACT':
      return { foo: state.foo - 1 }
    case 'COUNTER/SET':
      return { foo: action.payload }
    default:
      return state
  }
}

export default counterReducer