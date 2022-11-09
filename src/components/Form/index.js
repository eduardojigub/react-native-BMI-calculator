import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import ResultIMC from '../ResultIMC';

export default function Form() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [messageImc, setMessageImc] = useState('Preencha o peso e altura');
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState('Calculate');

  return (
    <View>
      <View>
        <Text>Altura</Text>
        <TextInput placeholder="Ex: 1.75" keyboardType="numeric" />
        <Text>Peso</Text>
        <TextInput placeholder="Ex: 80.5kg" keyboardType="numeric" />
        <Button title="Calculate my BMI" />
      </View>
      <ResultIMC messageResultImc={messageImc} resultImc={imc} />
    </View>
  );
}
