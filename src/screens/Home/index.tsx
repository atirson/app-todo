import { StyleSheet, Text, View } from 'react-native';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CardList } from '../../components/CardList';
import { EmptyList } from '../../components/EmptyList';
import { Input } from '../../components/Input';
import { Logo } from '../../components/Logo';
import { Progress } from '../../components/Progress';
import { styles } from './styles';

export const Home = () => {
  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.form}>
        <Input />
        <ButtonAdd />
      </View>
      <Progress />

      <View style={styles.list}>
        <EmptyList />
        <CardList />
      </View>
      
    </View>
  )
}