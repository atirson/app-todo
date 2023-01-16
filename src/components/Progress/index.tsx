import { useMemo, useState } from 'react';
import { View, Text } from 'react-native'
import { Todo } from '../Card';

import { styles } from './styles'

interface ProgressProps {
  items: Todo[]
}

export function Progress({ items }: ProgressProps) {
  const [created, setCreated] = useState(0)
  const [concluded, setConcluded] = useState(0)

  useMemo(() => {
    const created = items.filter(item => item.status === 'pending').length
    const concluded = items.filter(item => item.status === 'done').length

    setCreated(created)
    setConcluded(concluded)
  }, [items])

  return (
    <View style={styles.container}>
      <View style={styles.task}>
        <Text style={styles.taskText}>Criadas</Text>
        <Text style={styles.number}>{created}</Text>
      </View>
      <View style={styles.concluded}>
        <Text style={styles.concludedText}>Concluídas</Text>
        <Text style={styles.number}>{concluded}</Text>
      </View>
    </View>
  );
}