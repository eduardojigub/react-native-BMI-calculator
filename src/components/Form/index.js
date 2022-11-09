import React from 'react';
import { View, Text, TextInput } from 'react-native';

export default function Form() {
  return (
    <View>
      <View>
        <Text>Altura</Text>
        <TextInput placeholder="Ex: 1.75" KeyboardType="numeric" />
        <Text>Peso</Text>
        <TextInput placeholder="Ex: 80.5kg" KeyboardType="numeric" />
      </View>
    </View>
  );
}
