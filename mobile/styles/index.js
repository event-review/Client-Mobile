import {StyleSheet} from 'react-native'

const padding = 12
const profileImageSize = 36
const profileImageSize2 = 150

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    containerMain: {
        flex: 8,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerFooter: {
        flex: 2,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    column: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    view1: {
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
      },
      view2: {
        flex: 8,
        width: '100%',
        backgroundColor: 'mistyrose',
        alignItems: 'center',
        justifyContent: 'center'
      },
      view3: {
        flex: 1,
        width: '100%',
        backgroundColor: 'mistyrose',
        alignItems: 'center',
        justifyContent: 'center'
      },
      text: { fontWeight: '600' },
      subtitle: {
        opacity: 0.8,
      },
      row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      padding: {
        padding,
      },
      avatar: {
        aspectRatio: 1,
        backgroundColor: '#D8D8D8',
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#979797',
        borderRadius: profileImageSize / 2,
        width: profileImageSize,
        height: profileImageSize,
        resizeMode: 'cover',
        marginRight: padding,
      },
      avatar2: {
        aspectRatio: 1,
        backgroundColor: '#D8D8D8',
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#979797',
        borderRadius: profileImageSize2 / 2,
        width: profileImageSize2,
        height: profileImageSize2,
        resizeMode: 'cover',
        marginRight: padding,
      },
  });
