import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency',
  headers: {
    'X-CMC_PRO_API_KEY': '65dc0565-1ad9-4d9a-8ed5-46d0e933e129'
  }
})

export default instance
