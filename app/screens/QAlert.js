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
        headerTitle={'Send A Quick Alert'}
        onBackButtonPress={handleBackButton}
      />
      <Box mt={'5'}>
        <LocationSelector />
      </Box>
      <Text mt={'10'} fontFamily={'Lato-Bold'} fontSize={'lg'}>
        Category:{' '}
      </Text>
      <Input
        p={'2'}
        fontFamily={'Lato-Medium'}
        fontSize={'md'}
        placeholder={'Category: example Fire, Hurricane, ...'}
        variant={'underlined'}
        value={category}
        onChangeText={itemValue => setCategory(itemValue)}
      />
      <Text mt={'10'} fontFamily={'Lato-Bold'} fontSize={'lg'}>
        Additional Information:
      </Text>
      <Input
        p={'2'}
        fontFamily={'Lato-Medium'}
        fontSize={'md'}
        placeholder={'Enter information...'}
        multiline={true}
        numberOfLines={4}
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
      <Box>
        <Text mt={'5'}>Send To:</Text>
        <Select
          selectedValue={service}
          minWidth="200"
          accessibilityLabel="Choose Service"
          placeholder="Choose Service"
          _selectedItem={{
            bg: 'teal.600',
            endIcon: <CheckIcon size="5" />,
          }}
          mt={1}
          onValueChange={itemValue => setService(itemValue)}>
          <Select.Item label="UX Research" value="ux" />
          <Select.Item label="Web Development" value="web" />
          <Select.Item label="Cross Platform Development" value="cross" />
          <Select.Item label="UI Designing" value="ui" />
          <Select.Item label="Backend Development" value="backend" />
        </Select>
      </Box>
      <Button bg={'#264653'}  onPress={() => handleSend()} mt={'10%'}>
        Send
      </Button>
    </Box>
  );
}

const styles = StyleSheet.create({});
