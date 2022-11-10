import React from 'react';
import { Text, View, TouchableOpacity, Share } from 'react-native';
import styles from './style';

export default function ResultIMC(props) {
  const onShare = async () => {
    const result = await Share.share({
      message: 'My BMI today is: ' + props.resultImc,
    });
  };

  return (
    <View style={styles.contextImc}>
      <View style={styles.boxSharebutton}>
        {props.resultImc != null ? (
          <TouchableOpacity style={styles.shared} onPress={onShare}>
            <Text style={styles.sharedText}>Share</Text>
          </TouchableOpacity>
        ) : (
          <View />
        )}
      </View>
      <Text style={styles.information}>{props.messageResultImc}</Text>
      <Text style={styles.numberImc}>{props.resultImc}</Text>
    </View>
  );
}
