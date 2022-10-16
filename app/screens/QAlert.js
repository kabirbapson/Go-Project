import {StyleSheet} from 'react-native';
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
} from 'native-base';
import React from 'react';
import HeaderBackButton from '../components/HeaderBackButton';
import LocationSelector from '../components/LocationSelector';
import {TextInput} from '../components/Input';
import Feather from 'react-native-vector-icons/Feather';
import {COLORS} from '../../assets/colors';
import * as image from '../utils/image';

export default function QAlert({navigation}) {
  const [service, setService] = React.useState('');
  const [incidentImages, setIncidentImages] = React.useState([]);
  const [additionInfo, setAdditionInfo] = React.useState('');
  const [category, setCategory] = React.useState('');

  const handleBackButton = () => navigation.goBack();

  const handleSend = () =>
    console.log(category, service, incidentImages.entries(), additionInfo);

  const handleAddIncidentImage = async () => {
    const pickImage = await image.GetImageFromGallery();
    if (pickImage) {
      setIncidentImages([...incidentImages, pickImage]);
    }
  };

  return (
    <Box p={'5'}>
      <HeaderBackButton
        headerTitle={"Share What's Happening"}
        onBackButtonPress={handleBackButton}
      />
      <Box
        p={2}
        mt={5}
        borderWidth={1}
        rounded={8}
        borderColor={'#264653'}
      >
        <Input
          borderWidth={0}
          fontFamily={'Lato-Medium'}
          fontSize={'sm'}
          placeholder={"What's happening in your area?"}
          placeholderTextColor={'gray.700'}
          multiline={true}
          numberOfLines={10}
          textAlignVertical={'top'}
          value={additionInfo}
          onChangeText={itemValue => setAdditionInfo(itemValue)}
          // onChange={itemValue => setAdditionInfo(itemValue)}
        />
        <Pressable
          m={'2'}
          // mx={2}
          // px={2}
          flexDir="row"
          alignItems={'center'}
          justifyContent={'flex-end'}
          onPress={handleAddIncidentImage}>
          <Box mx={1}><Feather name={'map-pin'} color={'black'} size={20} /></Box>
          <Box mx={2}><Feather name={'camera'} color={'black'} size={20} /></Box>
          <Box mx={1}><Feather name={'video'} color={'black'} size={20} /></Box>
        </Pressable>
      </Box>
      <Box mt={'5'}>
        <FlatList
          data={incidentImages}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <Box ml={'4'}>
              <Image
                source={{uri: item.path}}
                alt={'user image'}
                width={100}
                h={100}
              />
              {/* <Box width={100} h={100} background={'red.100'} /> */}
            </Box>
          )}
        />
      </Box>

      <Button bg={'#264653'} onPress={() => handleSend()} mt={'10%'}>
        Send
      </Button>
    </Box>
  );
}

const styles = StyleSheet.create({});
