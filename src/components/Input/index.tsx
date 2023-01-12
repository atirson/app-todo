import { TextInput, View } from 'react-native';
import { styles } from './styles'

export const Input = () => {
  return (
    <View>
      <TextInput 
        style={styles.input}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={'#808080'}
      />
    </View>
  )
}