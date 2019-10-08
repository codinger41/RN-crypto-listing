import axios from '../../utils/axios'
import { GET_COINS, GET_COINS_FAILURE, GET_COINS_SUCCESS } from '../actionTypes'

export const getCoins = async (dispatch: Function) => {
  dispatch({ type: GET_COINS })
  try {
    const { data: { data } } = await axios.get('/listings/latest')
    return dispatch({ type: GET_COINS_SUCCESS, payload: data })
  } catch (error) {
    return dispatch({ type: GET_COINS_FAILURE, payload: error.message })
  }
}

