import { GET_COINS, GET_COINS_FAILURE, GET_COINS_SUCCESS } from '../actionTypes'

const initialState = {
  coins: [],
  loading: false,
  error: null
}

const reducer = (state: StateT = initialState, action: ActionT) => {
  switch (action.type) {
    case GET_COINS:
      return { ...state, loading: true }
    case GET_COINS_SUCCESS:
      return { ...state, loading: false, coins: action.payload }
    case GET_COINS_FAILURE:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

export default reducer
