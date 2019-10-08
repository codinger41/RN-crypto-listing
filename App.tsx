import React, { useEffect, useState } from 'react'
import * as Font from 'expo-font'
import { StatusBar, View } from 'react-native'
import { Provider } from 'react-redux'
import Navigation from './src'
import store from './src/redux/store'

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)

  useEffect(() => {
    StatusBar.setBarStyle('light-content')
    Font.loadAsync({
      'ubuntu': require('./assets/ubuntu.ttf'),
      'ubuntu-bold': require('./assets/ubuntu-bold.ttf'),
    }).then(() => setFontLoaded(true))
  })

  if (!fontLoaded) {
    return <View />
  }
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}
