import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  stepRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circleAndLine: {
    alignItems: 'center',
    marginRight: 10,
  },
  line: {
    width: 2,
    height: 60,
    backgroundColor: '#ccc',
  },
  lineActive: {
    backgroundColor: '#ffa500',
  },
  lineInactive: {
    backgroundColor: '#ccc',
  },
  stepCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepCompleted: {
    backgroundColor: '#ffa500',
  },
  stepActive: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#ffa500',
  },
  stepInactive: {
    backgroundColor: '#ccc',
  },
  stepNumber: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  stepNumberCompleted: {
    color: '#fff',
  },
  stepNumberActive: {
    color: '#ffa500',
  },
  stepNumberInactive: {
    color: '#fff',
  },
  stepLabel: {
    fontSize: 16,
    textAlign: 'left',
  },
  stepLabelCompleted: {
    color: '#ffa500',
  },
  stepLabelActive: {
    color: '#ffa500',
  },
  stepLabelInactive: {
    color: '#ccc',
  },
});

export default styles;
