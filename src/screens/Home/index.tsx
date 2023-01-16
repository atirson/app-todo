import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { ButtonAdd } from '../../components/ButtonAdd';
import { Todo } from '../../components/Card';
import { CardList } from '../../components/CardList';
import { Input } from '../../components/Input';
import { Logo } from '../../components/Logo';
import { Progress } from '../../components/Progress';
import { styles } from './styles';

export const Home = () => {
  const [text, setText] = useState('' as string)
  const [todos, setTodos] = useState<Todo[]>([] as Todo[])

  const handleAddTodo = (): void => {
    const todo: Todo = {
      id: String(new Date().getTime()),
      title: text,
      status: 'pending'
    }

    setTodos([...todos, todo])
    setText('')
  }

  const handleRemoveTodo = (id: string): void => {
    const filteredTodos = todos.filter(todo => todo.id !== id)
    setTodos(filteredTodos)
  }

  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.form}>
        <Input text={text} setText={setText} />
        <ButtonAdd onAdd={handleAddTodo} />
      </View>
      <Progress items={todos} />

      <View style={styles.list}>
        <CardList items={todos} setTodos={setTodos} />
      </View>
      
    </View>
  )
}