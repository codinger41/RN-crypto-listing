import React, { useState, useEffect } from 'react'
import { Text, View, FlatList, ScrollView, ActivityIndicator } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { getCoins } from '../../redux/actions/crypto'
import Currency from '../../components/Currency'
import styles from './styles'
import colors from '../../theme/color'


const Home = ({}: ScreenProp) => {
  const dispatch = useDispatch()
  useEffect(() => {
    getCoins(dispatch)
  }, [])

  const { coins, loading, error }: any = useSelector((state: any) => state.crypto)

  return (
    <ScrollView style={styles.container}>
      <View style={styles.topBar}>
      </View>
      <Text style={styles.sectionText}>Cryptocurrencies</Text>
      {loading && (
        <ActivityIndicator size="large" color={colors.blue} />
      )}
      <FlatList
        data={coins}
        numColumns={2}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => <Currency currency={item} />}
        keyExtractor={(i, t) => t.toLocaleString()}
      />
    </ScrollView>
  )
}

export default Home
