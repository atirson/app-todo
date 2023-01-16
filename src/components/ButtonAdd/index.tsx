import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';


interface ButtonAddProps {
  onAdd: (todo: any) => void;
}

export function ButtonAdd({ onAdd }: ButtonAddProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onAdd}>
      <Image source={require('../../../assets/plus.png')} />
    </TouchableOpacity>
  );
}