import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';

export function ButtonAdd() {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={require('../../../assets/plus.png')} />
    </TouchableOpacity>
  );
}