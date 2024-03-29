import {StyleSheet, TouchableOpacity} from 'react-native';
import {
  Box,
  Text,
  Input,
  Pressable,
  FlatList,
  Image,
  VStack,
  Select,
  CheckIcon,
  Button,
  KeyboardAvoidingView,
  ScrollView,
  HStack,
} from 'native-base';
import React, {useState} from 'react';
import HeaderBackButton from '../components/HeaderBackButton';
import LocationSelector from '../components/LocationSelector';
import {TextInput} from '../components/Input';
import Feather from 'react-native-vector-icons/Feather';
import {COLORS} from '../../assets/colors';
import * as image from '../utils/image';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import axios from 'axios';
import RNFS from 'react-native-fs';

export default function SendTips({navigation}) {
  const [phone, setPhone] = React.useState('');
  const [additionInfo, setAdditionInfo] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const options = {
    title: 'select image',
    type: 'library',
    options: {
      mediaType: 'photo',
      includeBase65: false,
      selectionLimit: 1,
    },
  };

  const handleImagePicker = async () => {
    const myImage = await launchImageLibrary(options);
    setSelectedImage(myImage);
    // launchImageLibrary(options, response => {
    //   setSelectedImage(response.assets[0].uri);
    // });
  };
  // console.log(selectedImage.assets[0]);
  // console.log(selectedImage);
  const [incidentImages, setIncidentImages] = React.useState([]);

  const handleBackButton = () => navigation.goBack();

  const handleSend = async () => {
    setIsLoading(true);
    const apiUrl = 'https://nodev8.onrender.com/sendtips';

    try {
      const imageData = await RNFS.readFile(
        selectedImage.assets[0].uri,
        'base64',
      );
      const formData = new FormData();
      formData.append('phone', phone.length ? phone : 'No phone number');
      formData.append('text', additionInfo);
      formData.append('path', {
        uri: selectedImage.assets[0].uri,
        name: selectedImage.assets[0].fileName,
        type: selectedImage.assets[0].type,
        data: imageData,
      });

      axios
        .post(apiUrl, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(response => {
          setIsLoading(false);
          alert('Quick Alert sent successfully');
          navigation.goBack();
        })
        .catch(error => {
          console.error('Request failed:', error.message);
        });
    } catch (error) {
      console.error(error);
    }
  };

  // const handleAddImage = async () => {
  //   try {
  //     const selectedImage = await image.GetImageFromGallery();
  //     if (selectedImage) {
  //       setIncidentImages([...incidentImages, selectedImage]);
  //     }
  //   } catch (error) {
  //     console.error('Error selecting image:', error);
  //   }
  // };

  return (
    <Box p={'5'}>
      <KeyboardAvoidingView behavior={'height'}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <HeaderBackButton
            headerTitle={'Share a Tip or Suggestion'}
            onBackButtonPress={handleBackButton}
          />
          <Box p={2} mt={5} borderWidth={1} rounded={8} borderColor={'#264653'}>
            <Input
              borderWidth={0}
              // fontFamily={'Lato-Medium'}
              fontSize={'lg'}
              placeholder={
                'You can share a tip or any suggestion to Gombe state government. please include some pictures if possible.'
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

            <HStack justifyContent={'space-between'} alignItems={'center'}>
              <Button
                onPress={handleImagePicker}
                variant={'outline'}
                borderColor={'green.500'}
                p={1}
                borderWidth={2}>
                <HStack alignItems={'center'} space={2}>
                  <Text fontWeight={900}>Add Image</Text>
                  <Feather name={'camera'} color={'black'} size={20} />
                </HStack>
              </Button>
              <Text
                textAlign={'right'}
                fontSize={'sm'}
                color={'gray.500'}
                mt={'2'}>
                {additionInfo.length} / 500
              </Text>
            </HStack>
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
          {/* {selectedImage && (
            <Box>
              {selectedImage.map((image, index) => (
                <TouchableOpacity
                  key={index}
                  // onPress={() => handleImagePress(index)}
                >
                  <Image
                    alt={'jd'}
                    source={{uri: image.uri}}
                    style={{width: 100, height: 100, resizeMode: 'cover'}}
                  />
                </TouchableOpacity>
              ))}
            </Box>
          )} */}
          <Image
            // w={200}
            alt={'jd'}
            source={selectedImage && {uri: selectedImage.assets[0].uri}}
            size={'xl'}
            alignSelf={'center'}
            my={2}
            rounded={10}
          />
          <Button
            isLoading={isLoading}
            bg={'#264653'}
            rounded={10}
            onPress={handleSend}
            // mb={10}
          >
            Send Tips
          </Button>
        </ScrollView>
      </KeyboardAvoidingView>
    </Box>
  );
}
