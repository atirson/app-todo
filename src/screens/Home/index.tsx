import { StyleSheet, Text, View } from 'react-native';
import { Input } from '../../components/Input';
import { Logo } from '../../components/Logo';
import { styles } from './styles';

export const Home = () => {
  return (
    <>
      <Logo />
      <View style={styles.form}>
        <Input />
      </View>
    </>
  )
}