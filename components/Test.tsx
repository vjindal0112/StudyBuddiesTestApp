import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface TestProps {
  text: String;
}

export const Test: React.FC<TestProps> = ({text}) => {
  return (
    <Text>{text}</Text>
  ) 
}