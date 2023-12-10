import {StyleSheet} from 'react-native';
import {
  Box,
  Text,
  Select,
  CheckIcon,
  ScrollView,
  Button,
  Actionsheet,
  FlatList,
} from 'native-base';

import React from 'react';

import HeaderBackButton from '../components/HeaderBackButton';
import EmergencyContactCard from '../components/EmergencyContactCard';
import {hp, wp} from '../utils/dpTopx';
import StatusComponent from '../components/StatusComponent';

const status = [
  {
    id: 1,
    description:
      "President Tinubu Greets Gombe Governor Inuwa Yahaya on 62nd Birthday: President Bola Tinubu congratulates Governor Yahaya for his leadership and commitment to developing Gombe State. He praises the governor's focus on economic empowerment and his dedication to improving the lives of Gombe citizens.",
  },
  {
    id: 2,
    description:
      "Gombe Gov swears in 17 commissioners, warns against corruption: Governor Yahaya warns newly appointed commissioners against corruption and emphasizes his administration's zero-tolerance policy. He stresses the importance of hard work, commitment, and performance in achieving the state's development agenda.",
  },
  {
    id: 3,
    description:
      "Court of Appeal Upholds Governor Inuwa Yahaya's Re-Election: The Court of Appeal dismisses the petition challenging Governor Yahaya's re-election, affirming the judgment of the Gombe State governorship election tribunal.",
  },
  {
    id: 4,
    description:
      'DEVAGOM: Gombe Unveils 10-Year Development Plan: Governor Yahaya launches the Development Agenda for Gombe State (DEVAGOM), a 10-year development plan aimed at achieving economic prosperity and stability for the state.',
  },
  {
    id: 5,
    description:
      "UN Deputy Secretary-General, Ministers, Others Hail Governor Yahaya's Quest to Create Better Future for Gombe: International and national leaders commend Governor Yahaya's leadership and commitment to developing Gombe State. They praise the Governor's focus on education, healthcare, and infrastructure development.",
  },
];
export default function Happenings({route, navigation}) {
  const handleBackButton = () => navigation.goBack();

  return (
    <Box p={'5'}>
      <HeaderBackButton
        headerTitle={"What's Happening"}
        onBackButtonPress={handleBackButton}
      />
      {/* <Select
        selectedValue={service}
        minWidth="200"
        accessibilityLabel="Select a Location..."
        placeholder="Select a Location..."
        _selectedItem={{
          bg: 'teal.600',
          endIcon: <CheckIcon size="5" />,
        }}
        mt={1}
        mb={5}
        onValueChange={itemValue => setService(itemValue)}>
        <Select.Item label="Gombe State" value="gmb" />
        <Select.Item label="Bauchi State" value="bch" />
        <Select.Item label="Borno State" value="brn" />
        <Select.Item label="Yobe State " value="yob" />
        <Select.Item label="Adamawa State " value="adm" />
        <Select.Item label="Taraba State " value="trb" />
      </Select> */}
      <Box mt={4} h={'90%'}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={status}
          renderItem={({item}) => (
            <StatusComponent happenings={item.description} />
          )}
          ItemSeparatorComponent={() => (
            <Box
              w={'100%'}
              h={1}
              my={2}
              bgColor={'gray.200'}
              borderRadius={8}
              opacity={0.5}
            />
          )}
          keyExtractor={item => item.id}
        />
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({});
