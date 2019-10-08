import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Home from './screens/home'
import colors from './theme/color'


const Navigation = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerTitle: 'Crypto!',
      headerStyle: {
        backgroundColor: colors.blue,
      },
      headerTitleStyle: {
        color: colors.white
      }
    }
  }
})


export default createAppContainer(Navigation)
