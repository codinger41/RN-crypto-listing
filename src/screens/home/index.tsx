import React, { useState, useEffect } from 'react'
import {
  Text,
  View,
  FlatList,
  ScrollView,
  ActivityIndicator,
  RefreshControl
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { showMessage as displayMessage } from 'react-native-flash-message'
import { getCoins } from '../../redux/actions/crypto'
import Currency from '../../components/Currency'
import styles from './styles'
import colors from '../../theme/color'

const showMessage: any = displayMessage

const Home = ({ navigation }: ScreenProp) => {
  const dispatch = useDispatch()
  useEffect(() => {
    getCoins(dispatch)
  }, [])

  const { coins, loading, error, refreshing }: any = useSelector(
    (state: any) => state.crypto
  )

  if (error) {
    showMessage({
      message: 'Error!',
      description: error,
      type: 'danger',
      duration: 5000
    })
  }

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={() => getCoins(dispatch, 'refresh')}
        />
      }
      style={styles.container}
    >
      <Text style={styles.sectionText}>Cryptocurrencies</Text>
      {loading && <ActivityIndicator size="large" color={colors.blue} />}
      <FlatList
        data={coins}
        numColumns={2}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <Currency navigation={navigation} currency={item} />
        )}
        keyExtractor={(i, t) => t.toLocaleString()}
      />
    </ScrollView>
  )
}

export default Home
