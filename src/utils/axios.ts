import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency',
  headers: {
    'X-CMC_PRO_API_KEY': '<INSERT KEY HERE>'
  }
})

export default instance
