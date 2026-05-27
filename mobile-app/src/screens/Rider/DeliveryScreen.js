import React from 'react';
import { View, Text } from 'react-native';

export default function DeliveryScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Delivery In Progress</Text>
      {/* TODO: Live location, delivery details */}
    </View>
  );
}
