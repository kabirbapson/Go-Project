import {Box, Text} from 'native-base';
import React from 'react';

import BottomActionSheet from './BottomActionSheet';
export default function EmergencyDetail({isOpen, onClose, info}) {
  return (
    <BottomActionSheet isOpen={isOpen} onClose={onClose}>
      <Box h={400} bg="gray.100" w={'90%'} p={4} rounded="md">
        <Box mt={50} textAlign="center">
          <Text fontSize="xl" fontWeight="bold">
            {info.title}
          </Text>
          <Text fontSize="lg" color="gray.600" mt={4}>
            Address:
          </Text>
          <Text fontSize="xl" fontWeight="bold" color="gray.600" mt={2}>
            {info.address}
          </Text>
          <Text fontSize="lg" color="gray.600" mt={4}>
            Contact:
          </Text>
          <Text fontSize="lg" fontWeight="bold" mt={2} color="gray.600">
            {info.contact}
          </Text>
        </Box>
      </Box>
    </BottomActionSheet>
  );
}
