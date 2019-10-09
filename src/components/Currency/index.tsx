import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import TimeAgo from 'react-native-timeago'
import styles from './styles'
import IMAGES from '../../theme/icons'

type CurrencyProp = {
  currency: any
} & ScreenProp

const Currency = ({ currency, navigation }: CurrencyProp) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7}>
      <Image source={{ uri: IMAGES[currency.symbol] }} style={styles.icon} />
      <Text style={styles.symbol}>
        {currency.symbol}{' '}
        <Text style={styles.currencyType}>{currency.slug}</Text>
      </Text>
      <Text style={styles.amount}>
        ${Math.round(currency.quote.USD.price * 100) / 100}
      </Text>
      {Math.sign(currency.quote.USD.percent_change_24h) === 1 ? (
        <Text style={styles.percentageIncrease}>
          {currency.quote.USD.percent_change_24h}%
        </Text>
      ) : (
        <Text style={styles.percentageDecrease}>
          {currency.quote.USD.percent_change_24h}%
        </Text>
      )}
      <Text style={styles.updatedAt}>
        Updated <TimeAgo time={currency.last_updated} />{' '}
      </Text>
    </TouchableOpacity>
  )
}

export default Currency
