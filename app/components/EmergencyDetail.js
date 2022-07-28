import {Box, Pressable, Text, Spinner, Center} from 'native-base';
import React from 'react';

import BottomActionSheet from './BottomActionSheet';
export default function EmergencyDetail({isOpen, onClose}) {
  const [loading, setLoading] = React.useState(true);

  return (
    <BottomActionSheet isOpen={isOpen} onClose={onClose}>
      <Box h={400}>
        <Center mt={50}>
          <Spinner />
          <Text>Getting department data...</Text>
        </Center>
      </Box>
    </BottomActionSheet>
  );
}
