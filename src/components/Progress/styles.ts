import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginHorizontal: 35,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
    paddingBottom: 20,
  },
  task: {
    flexDirection: 'row'
  },
  taskText: {
    color: '#4EA8DE',
    fontSize: 17,
    fontWeight: 'bold',
    marginRight: 10,
  },
  concluded: {
    flexDirection: 'row'
  },
  concludedText: {
    color: '#8284FA',
    fontSize: 17,
    fontWeight: 'bold',
    marginRight: 10,
  },
  number: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: '#333',
    width: 30,
    height: 25,
    borderRadius: 15,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
