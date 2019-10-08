import React from 'react'
import { Text, View, Image } from 'react-native'
import TimeAgo from 'react-native-timeago'
import styles from './styles'
import IMAGES from '../../theme/icons'

interface CurrencyProp {
  currency: any
}

const Currency = ({ currency }: CurrencyProp) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: IMAGES[currency.symbol] }} style={styles.icon} />
      <Text style={styles.symbol}>
        {currency.symbol} {' '}
        <Text style={styles.currencyType}>
          {currency.slug}
        </Text>
      </Text>
      <Text style={styles.amount}>${currency.quote.USD.price}</Text>
      {
        Math.sign(currency.quote.USD.percent_change_24h) === 1 ? (
          <Text style={styles.percentageIncrease}>{currency.quote.USD.percent_change_24h}</Text>
        ) : (
          <Text style={styles.percentageDecrease}>{currency.quote.USD.percent_change_24h}</Text>
        )
      }
      <Text style={styles.updatedAt}>Updated <TimeAgo time={currency.last_updated} /> </Text>
    </View>
  )
}

export default Currency
