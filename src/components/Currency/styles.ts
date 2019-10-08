import { StyleSheet } from 'react-native'
import { getHeight, getWidth } from  '../../theme/styles'
import colors from '../../theme/color'
import fonts from '../../theme/fonts'

const styles = StyleSheet.create({
  container: {
    width: getWidth(160),
    height: getHeight(170),
    backgroundColor: colors.white,
    shadowColor: colors.darkGrey,
    marginHorizontal: getWidth(10),
    marginVertical: getHeight(10),
    borderRadius: getWidth(10),
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingHorizontal: getWidth(10),
    paddingVertical: getHeight(10)
  },
  currencyType: {
    fontFamily: fonts.ubuntu,
    fontSize: getHeight(17)
  },
  symbol: {
    fontFamily: fonts.ubuntu_bold,
    fontSize: getHeight(17),
    marginVertical: getHeight(6)
  },
  icon: {
    height: getWidth(40),
    width: getWidth(40),
    resizeMode: 'contain'
  },
  amount: {
    fontFamily: fonts.ubuntu_bold,
    fontSize: getHeight(17),
    marginVertical: getHeight(2)
  },
  percentageIncrease: {
    marginTop: getHeight(9),
    color: colors.green
  },
  percentageDecrease: {
    marginTop: getHeight(9),
    color: colors.red
  },
  updatedAt: {
    color: colors.darkGrey,
    marginTop: getHeight(4),
    fontSize: getHeight(10)
  }
})


export default styles
