import {
  Box,
  Text,
  Input,
  Button,
  ScrollView,
  KeyboardAvoidingView,
} from 'native-base';
import React from 'react';
import HeaderBackButton from '../components/HeaderBackButton';
import axios from 'axios';

export default function QAlert({navigation}) {
  const [phone, setPhone] = React.useState('No Phone added');
  const [additionInfo, setAdditionInfo] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const handleBackButton = () => navigation.goBack();

  const handleSend = () => {
    setIsLoading(true);
    const apiUrl = 'https://nodev8.onrender.com/sendtips';

    const formdata = new FormData();
    formdata.append('phone', phone);
    formdata.append('text', additionInfo);

    axios
      .post(apiUrl, formdata, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(response => {
        setIsLoading(false);
        alert('Quick Alert sent successfully');
        navigation.goBack();
        // Handle successful response
        // console.log('Request was successful:', response.data);
      })
      .catch(error => {
        // Handle errors
        console.error('Request failed:', error.message);
      });
  };

  return (
    <Box p={'5'}>
      <KeyboardAvoidingView behavior={'position'}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <HeaderBackButton
            headerTitle={'Share a quick alert'}
            onBackButtonPress={handleBackButton}
          />
          <Box p={2} mt={5} borderWidth={1} rounded={8} borderColor={'#264653'}>
            <Input
              borderWidth={0}
              // fontFamily={'Lato-Medium'}
              fontSize={'lg'}
              placeholder={
                "What's happening in your area? - this message will be sent to a representative of the Gombe State Government."
              }
              // letterSpacing={2}
              placeholderTextColor={'gray.700'}
              multiline={true}
              numberOfLines={15}
              textAlignVertical={'top'}
              value={additionInfo}
              maxLength={500}
              onChangeText={setAdditionInfo}
              // onChange={itemValue => setAdditionInfo(itemValue)}
            />

            <Text
              textAlign={'right'}
              fontSize={'sm'}
              color={'gray.500'}
              mt={'2'}>
              {additionInfo.length} / 500
            </Text>
          </Box>
          <Box mt={'5'} rounded={8} borderWidth={1} borderColor={'#264653'}>
            <Input
              borderWidth={0}
              // fontFamily={'Lato-Medium'}
              fontSize={'md'}
              placeholder={'Add a phone number (optional)'}
              placeholderTextColor={'gray.700'}
              numberOfLines={1}
              value={phone}
              maxLength={15}
              onChangeText={setPhone}
            />
          </Box>

          <Button
            isLoading={isLoading}
            bg={'#264653'}
            rounded={10}
            onPress={handleSend}
            mt={'10%'}>
            Send Quick Alert
          </Button>
        </ScrollView>
      </KeyboardAvoidingView>
    </Box>
  );
}
