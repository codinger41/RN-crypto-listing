import { StyleSheet } from 'react-native'
import { getHeight, getWidth } from '../../theme/styles'
import colors from '../../theme/color'
import fonts from '../../theme/fonts'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grey
  },
  sectionText: {
    fontSize: getHeight(19),
    color: colors.darkGrey,
    marginVertical: getHeight(20),
    marginLeft: getWidth(30),
    fontWeight: '700',
    fontFamily: fonts.ubuntu_bold
  },
  list: {
    alignItems: 'center'
  }
})

export default styles
