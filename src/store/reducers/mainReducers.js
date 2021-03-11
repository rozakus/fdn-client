const initialState = {
  orders: [],
  pivots: [],
  products: []
}

export default function MainReducers(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_ORDERS':
      return {
        ...state,
        orders: JSON.parse(JSON.stringify(action.payload))
      }
    case 'UPDATE_PIVOTS':
      return {
        ...state,
        pivots: JSON.parse(JSON.stringify(action.payload))
      }
    case 'UPDATE_PRODUCTS':
      return {
        ...state,
        products: JSON.parse(JSON.stringify(action.payload))
      }
    default: return state
  }
}