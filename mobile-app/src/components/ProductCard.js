import React from 'react';
import { View, Text } from 'react-native';

export default function ProductCard({ product }) {
  // TODO: Use product prop to render UI
  return (
    <View style={{ borderWidth: 1, borderRadius: 8, margin: 8, padding: 8 }}>
      <Text>{product?.name || 'Product Name'}</Text>
      <Text>₦{product?.price || '0.00'}</Text>
    </View>
  );
}
