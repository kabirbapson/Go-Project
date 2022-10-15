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
        headerTitle={"Share What'\s Happening"}
        onBackButtonPress={handleBackButton}
      />
      
      <Input
        mt={5}
        p={'2'}
        fontFamily={'Lato-Medium'}
        fontSize={'md'}
        placeholder={'What\'s happening in your area?'}
        multiline={true}
        numberOfLines={10}
        textAlignVertical={'top'}
        value={additionInfo}
        onChangeText={itemValue => setAdditionInfo(itemValue)}
        // onChange={itemValue => setAdditionInfo(itemValue)}
      />
      <Pressable
        mt={'4'}
        flexDir="row"
        alignItems={'center'}
        onPress={handleAddIncidentImage}>
        <Feather name={'camera'} color={'black'} size={25} />
        <Text px={'3'}>Add Image (Optional)</Text>
      </Pressable>
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
