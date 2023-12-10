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

const education = [
  {
    id: 1,
    description:
      'Gombe State Government to Establish 3 New Technical Colleges: Governor Yahaya announces plans to establish three new technical colleges in the state. He says the colleges will be located in Billiri, Kaltungo, and Nafada, and will be used to train students in technical and vocational skills.',
  },
  {
    id: 2,
    description:
      'Gombe Working with Advocates to Improve Education Access: Social advocates are collaborating with the Gombe government and educational stakeholders to improve gender sensitivity in budgeting and education financing. This aims to ensure equal access to quality education for both boys and girls.',
  },
  {
    id: 3,
    description:
      "Gov Inuwa's Education Revolution, Another Milestone in Gombe: Governor Inuwa Yahaya's education reform has significantly increased the percentage of public school students passing the WASSCE with 5 credits and above, including Mathematics and English. The rate jumped from 28% in 2019 to 73% and 78% in 2021 and 2022 respectively.",
  },
  {
    id: 4,
    description:
      'Gombe Unveils 10-Year Development Plan: The Development Agenda for Gombe State (DEVAGOM) prioritizes education as a key driver of economic growth and social development. This 10-year plan aims to improve access to quality education, enhance teacher training, and invest in educational infrastructure.',
  },
  {
    id: 5,
    description:
      'Gombe Governor Pledges Continued Investment in Education: Governor Yahaya has emphasized his commitment to ongoing education reforms and infrastructure development. He aims to provide adequate resources, including roads, water supply, and qualified teachers, to further enhance educational opportunities for Gombe students.',
  },
];
export default function Education({route, navigation}) {
  const handleBackButton = () => navigation.goBack();

  return (
    <Box p={'5'}>
      <HeaderBackButton
        headerTitle={'Gombe Educational Sector'}
        onBackButtonPress={handleBackButton}
      />
      <Box mt={4} h={'90%'}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={education}
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
