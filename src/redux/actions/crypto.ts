import axios from '../../utils/axios'
import {
  GET_COINS,
  GET_COINS_FAILURE,
  GET_COINS_SUCCESS,
  REFRESH_COINS
} from '../actionTypes'

type getCoinsType = 'load' | 'refresh'

export const getCoins = async (
  dispatch: Function,
  type: getCoinsType = 'load'
) => {
  type === 'load'
    ? dispatch({ type: GET_COINS })
    : dispatch({ type: REFRESH_COINS })
  try {
    const {
      data: { data }
    } = await axios.get('/listings/latest')
    return dispatch({ type: GET_COINS_SUCCESS, payload: data })
  } catch (error) {
    return dispatch({
      type: GET_COINS_FAILURE,
      payload: error.message || error.response.data.message
    })
  }
}
