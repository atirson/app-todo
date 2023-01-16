import { View, Image, Text, TouchableOpacity } from 'react-native'

import { styles } from './styles'

type StatusTodo = 'pending' | 'done'

export interface Todo {
  id: string;
  title: string;
  status: StatusTodo;
}

interface CardProps extends Todo {
  onRemove: (id: string) => void;
  onUpdate: (id: string) => void;
}

export const Card = ({ onRemove, onUpdate, id, status, title }: CardProps) => {

  return (
    <View style={styles.container} key={id}>
      <TouchableOpacity onPress={() => onUpdate(id)}>
        {(status === 'pending') ? 
          <View style={styles.circle} /> :
          <Image style={styles.check} source={require('../../../assets/check.png')} />
        }
      </TouchableOpacity>
      
      <Text 
        numberOfLines={2} 
        ellipsizeMode="tail" 
        style={status === 'pending' ? styles.text : styles.textDone}
      >
        {title}
      </Text>
      <TouchableOpacity onPress={() => onRemove(id)}>
        <Image style={styles.trash} source={require('../../../assets/trash.png')} />
      </TouchableOpacity>
    </View>
  )
}