import { useState } from 'react';
import { TextInput, TextInputProps, View } from 'react-native';
import { styles } from './styles'

interface InputProps extends TextInputProps {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>
}

export const Input = ({text, setText}: InputProps) => {
  return (
    <View>
      <TextInput 
        style={styles.input}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={'#808080'}
        onChangeText={value => setText(value)}
        value={text}
      />
    </View>
  )
}