import {
  GET_COINS,
  GET_COINS_FAILURE,
  GET_COINS_SUCCESS,
  REFRESH_COINS
} from '../actionTypes'

const initialState = {
  coins: [],
  loading: false,
  error: null,
  refreshing: false
}

const reducer = (state: StateT = initialState, action: ActionT) => {
  switch (action.type) {
    case GET_COINS:
      return { ...state, loading: true }
    case GET_COINS_SUCCESS:
      return {
        ...state,
        loading: false,
        refreshing: false,
        coins: action.payload
      }
    case GET_COINS_FAILURE:
      return {
        ...state,
        loading: false,
        refreshing: false,
        error: action.payload
      }
    case REFRESH_COINS:
      return { ...state, loading: true }
    default:
      return state
  }
}

export default reducer
