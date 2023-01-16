import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 80,
    marginTop: 20,
    flexDirection: 'row',
    width: '100%',
    alignSelf: 'center',
    backgroundColor: '#262626',
    paddingVertical: 20,
    paddingHorizontal: 8,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 20,
  },
  circle: {
    width: 18,
    height: 18,
    borderRadius: 12,
    borderColor: '#4ea8de',
    borderWidth: 2,
    marginLeft: 8,
  },
  check: {
    marginLeft: 5,
    width: 24,
    height: 24,
  },
  text: {
    flex: 1,
    fontSize: 14,
    color: '#fff',
    marginHorizontal: 10,
  },
  textDone: {
    textDecorationLine: 'line-through',
    flex: 1,
    fontSize: 14,
    color: '#777',
    marginHorizontal: 10,
  },
  trash: {
    width: 36,
    height: 36,
  }
});