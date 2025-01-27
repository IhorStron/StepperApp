import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './StepperStyle';

export default function Stepper() {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [
    'Preface',
    'Introduction',
    'Chapter 1',
    'Chapter 2',
    'Chapter 3',
    'About',
  ];
  const handleStepPress = index => {
    setCurrentStep(index);
  };

  return (
    <View style={styles.container}>
      {steps.map((step, index) => (
        <View key={index} style={styles.stepRow}>
          <View style={styles.circleAndLine}>
            {index > 0 && (
              <View
                style={[
                  styles.line,
                  index <= currentStep
                    ? styles.lineActive
                    : styles.lineInactive,
                ]}
              />
            )}

            <TouchableOpacity
              style={[
                styles.stepCircle,
                index < currentStep
                  ? styles.stepCompleted
                  : index === currentStep
                  ? styles.stepActive
                  : styles.stepInactive,
              ]}
              onPress={() => handleStepPress(index)}>
              <Text
                style={[
                  styles.stepNumber,
                  index < currentStep
                    ? styles.stepNumberCompleted
                    : index === currentStep
                    ? styles.stepNumberActive
                    : styles.stepNumberInactive,
                ]}>
                {index + 1}
              </Text>
            </TouchableOpacity>
          </View>

          <Text
            style={[
              styles.stepLabel,
              index < currentStep
                ? styles.stepLabelCompleted
                : index === currentStep
                ? styles.stepLabelActive
                : styles.stepLabelInactive,
              index !== 0 && {paddingTop: 55},
            ]}>
            {step}
          </Text>
        </View>
      ))}
    </View>
  );
}
