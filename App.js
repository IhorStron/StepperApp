import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Stepper from './components/Stepper'; 

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
     <Stepper />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});



