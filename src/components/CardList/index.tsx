import { View, FlatList } from 'react-native'
import { Card, Todo } from '../Card'
import { EmptyList } from '../EmptyList'

import { styles } from './styles'


interface CardListProps {
  items: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

export const CardList = ({ setTodos, items }: CardListProps) => {
  const handleRemoveTodo = (id: string): void => {
    const filteredTodos = items.filter(todo => todo.id !== id)
    setTodos(filteredTodos)
  }

  const handleUpdateTodo = (id: string): void => {
    const updatedTodos = items.map(todo => {
      if (todo.id === id && todo.status === 'pending') {
        todo.status = 'done'
      } else if (todo.id === id && todo.status === 'done') {
        todo.status = 'pending'
      }
      return todo
    })

    setTodos(updatedTodos)
  }

  return (
    <FlatList 
      style={styles.container}
      data={items}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <Card
          id={item.id}
          title={item.title}
          status={item.status}
          onRemove={() => handleRemoveTodo(item.id)}
          onUpdate={() => handleUpdateTodo(item.id)}
        />
       )}
       ListEmptyComponent={() => <EmptyList />}
    />
  )
}