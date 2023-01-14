import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 80,
    marginTop: 40,
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
    width: 24,
    height: 24,
    borderRadius: 12,
    borderColor: '#4ea8de',
    borderWidth: 2,
    marginLeft: 5,
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
  trash: {
    width: 36,
    height: 36,
  }
});