import { View, Image, Text, TouchableOpacity } from 'react-native'

import { styles } from './styles'

export const CardList = () => {
  return (
    <View style={styles.container}>
      {/* <Image style={styles.check} source={require('../../../assets/check.png')} /> */}
      <View style={styles.circle} />
      <Text 
        numberOfLines={2} 
        ellipsizeMode="tail" 
        style={styles.text}
      >
        Você ainda não tem tarefas cadastradas.
        Crie tarefas e organize seus itens a fazer.
      </Text>
      <TouchableOpacity>
        <Image style={styles.trash} source={require('../../../assets/trash.png')} />
      </TouchableOpacity>
    </View>
  )
}