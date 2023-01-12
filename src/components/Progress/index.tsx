import { View, Text } from 'react-native'

import { styles } from './styles'

export function Progress() {
  return (
    <View style={styles.container}>
      <View style={styles.task}>
        <Text style={styles.taskText}>Criadas</Text>
        <Text style={styles.number}>0</Text>
      </View>
      <View style={styles.concluded}>
        <Text style={styles.concludedText}>Concluídas</Text>
        <Text style={styles.number}>1</Text>
      </View>
    </View>
  );
}