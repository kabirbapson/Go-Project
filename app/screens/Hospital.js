import {SafeAreaView, StyleSheet} from 'react-native';
import {
  Box,
  Text,
  Select,
  CheckIcon,
  ScrollView,
  Button,
  Actionsheet,
} from 'native-base';

import React from 'react';

import HeaderBackButton from '../components/HeaderBackButton';
import EmergencyContactCard from '../components/EmergencyContactCard';
import BottomActionSheet from '../components/BottomActionSheet';
import EmergencyDetail from '../components/EmergencyDetail';

const policeData = [
  {
    id: 1,
    lga: 'Akko',
    data: [
      {
        id: 1,
        title: 'Akko Division',
        address: 'Adjacent LGA Secretariat Kumo',
      },
      {id: 2, title: 'Kobuwa Police Station', address: 'Kumo West, Akko lga'},
      {id: 3, title: 'Tumu Police Station', address: 'Tumu, Akko lga'},
    ],
  },
  {
    id: 2,
    lga: 'Balanga',
    data: [
      {
        id: 1,
        title: 'Balanga Division',
        address: 'Near INEC Office Talasse',
      },
      {
        id: 2,
        title: 'Nyuwar Police Station',
        address: 'Nyuwar/Jessu, Balanga lga',
      },
    ],
  },
  {
    id: 3,
    lga: 'Billiri',
    data: [
      {
        id: 1,
        title: 'Area Command Billiri',
        address: 'Gombe South, Near FGGC Billiri',
      },
      {
        id: 2,
        title: 'Billiri Division',
        address: 'Near Prison HQ. Yola Road,  Billiri',
      },
    ],
  },
  {
    id: 4,
    lga: 'Dukku',
    data: [
      {
        id: 2,
        title: 'Dukku Division',
        address: 'Adjacent INEC office Darazo Road Dukku',
      },
    ],
  },
  {
    id: 5,
    lga: 'Kaltungo',
    data: [
      {
        id: 1,
        title: 'Area Command Kaltungo',
        address: 'Gombe South, Numan Road, Kaltungo Town',
      },
      {
        id: 2,
        title: 'Kaltungo Division',
        address: 'Near State Hotel Kaltungo',
      },
      {
        id: 3,
        title: 'Nil Police Out post',
        address: 'Awak, Kaltungo lga',
      },
    ],
  },
  {
    id: 6,
    lga: 'Kwami',
    data: [
      {
        id: 1,
        title: 'Kwami Division',
        address: 'Near LGA Secetariat, Mallam Sidi',
      },
    ],
  },
  {
    id: 7,
    lga: 'Shomgom',
    data: [
      {
        id: 1,
        title: 'Lau Iyaka Police Outpost',
        address: 'Kulishin,Shomgom lga',
      },
    ],
  },
  {
    id: 8,
    lga: 'Funakaye',
    data: [
      {
        id: 1,
        title: 'Tongo Police Out Post',
        address: 'Tongo, Funakaye lga',
      },
    ],
  },
  {
    id: 9,
    lga: 'Gombe',
    data: [
      {
        id: 1,
        title: 'State Headquarters Gombe',
        address: 'ASHAKA ROAD GOMBE',
      },
      {
        id: 2,
        title: 'Area Command Gombe',
        address: 'Behind Dukku park, Gombe Metro.',
      },
      {
        id: 3,
        title: 'Gombe Division',
        address: 'Near Emirs Palace Gombe Metro',
      },
      {
        id: 4,
        title: 'Pantami Division',
        address: 'Behind International Stadium Pantami Gombe metro',
      },
      {
        id: 5,
        title: 'Tunfure Division',
        address: 'Near Investment Housing Estate Bauchi Road, Gombe',
      },
    ],
  },
  {
    id: 10,
    lga: 'Nafada/Bajoga',
    data: [
      {
        id: 1,
        title: 'Nafada Division',
        address: 'Near LGA Secretariat Nafada',
      },
      {
        id: 2,
        title: 'Area Command Bajoga',
        address: 'Gombe North, Gombe Road, Bajoga town.',
      },
      {
        id: 3,
        title: 'Bajoga Division',
        address: 'Opp. LGA Secretariat Ashaka Road, Bajoga.',
      },
    ],
  },
  {
    id: 11,
    lga: 'Yamaltu/Deba',
    data: [
      {
        id: 1,
        title: 'Deba Division',
        address: 'Adjacent LGA Secretariat Deba',
      },
      {
        id: 2,
        title: 'Nigeria Police Kinafa Outpost',
        address: 'Kinafa, Yamaltu/Deba lga',
      },
      {
        id: 3,
        title: 'Police Outputs Liji',
        address: 'Liji, Yamaltu/Deba lga',
      },
      {
        id: 4,
        title: 'Shinga Police Outpost',
        address: 'Hinna, Yamaltu/Deba lga',
      },
    ],
  },
];

export default function Hospital({navigation}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedLGA, setSelectedLGA] = React.useState(policeData[8].lga);
  const [cardInfo, setCardInfo] = React.useState({});

  const handleViewEmergencyDetail = info => {
    setIsOpen(true);
    setCardInfo(info);
  };

  const handleBackButton = () => navigation.goBack();

  return (
    <SafeAreaView>
      <Box p={'2'} m={2}>
        <HeaderBackButton
          headerTitle={'Health Care Near You'}
          onBackButtonPress={handleBackButton}
        />

        <Select
          selectedValue={selectedLGA}
          minWidth="200"
          placeholder={'Select LGA to view police stations'}
          _selectedItem={{
            bg: 'teal.600',
            endIcon: <CheckIcon size="5" />,
          }}
          my={5}
          onValueChange={itemValue => setSelectedLGA(itemValue)}>
          {policeData.map(location => (
            <Select.Item
              key={location.id}
              label={location.lga}
              value={location.lga}
            />
          ))}
        </Select>

        <ScrollView showsVerticalScrollIndicator={false}>
          {policeData
            .filter(emergencyData => emergencyData.lga === selectedLGA)
            .map(filteredEmergencyData => (
              <EmergencyContactCard
                key={filteredEmergencyData.id}
                title={filteredEmergencyData.lga}
                data={filteredEmergencyData.data}
                onItemPress={handleViewEmergencyDetail}
              />
            ))}
        </ScrollView>

        {isOpen && (
          <EmergencyDetail
            info={cardInfo}
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
          />
        )}
      </Box>
    </SafeAreaView>
  );
}
