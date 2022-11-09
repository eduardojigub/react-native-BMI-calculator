import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import ResultIMC from '../ResultIMC';

export default function Form() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [messageImc, setMessageImc] = useState('Preencha o peso e altura');
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState('Calculate');

  const imcCalculator = () => {
    return setImc((weight / (height * height)).toFixed(2));
  };

  const validateIMC = () => {
    if (height != null && weight != null) {
      imcCalculator();
      setHeight(null);
      setWeight(null);
      setMessageImc(`Your BMI equals to: `);
      setTextButton('Calculate again');
      return;
    }
    setImc(null);
    setTextButton('Calculate');
    setMessageImc('Fill your weight and height');
  };

  return (
    <View>
      <View>
        <Text>Altura</Text>
        <TextInput
          onChangeText={setHeight}
          value={height}
          placeholder="Ex: 1.75"
          keyboardType="numeric"
        />
        <Text>Peso</Text>
        <TextInput
          onChangeText={setWeight}
          value={weight}
          placeholder="Ex: 80.5kg"
          keyboardType="numeric"
        />
        <Button onPress={() => validateIMC()} title={textButton} />
      </View>
      <ResultIMC messageResultImc={messageImc} resultImc={imc} />
    </View>
  );
}
