import {Actionsheet, Text} from 'native-base';
import React from 'react';

export default function BottomActionSheet({isOpen, onClose, children}) {
  return (
    <>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>{children}</Actionsheet.Content>
      </Actionsheet>
    </>
  );
}
