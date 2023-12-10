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

const hospitalData = [
  {
    id: 1,
    lga: 'Akko',
    data: [
      {
        id: 1,
        title: 'Akko Primary Health Care',
        address: 'Adjacent LGA Secretariat Kumo',
      },
      {
        id: 2,
        title: 'Kobuwa Health and Maternity',
        address: 'Kumo West, Akko lga',
      },
      {id: 3, title: 'Tumu Clinic', address: 'Tumu, Akko lga'},
    ],
  },
  {
    id: 9,
    lga: 'Gombe',
    data: [
      {
        id: 1,
        title: 'Federal Teaching Hospital Gombe',
        address: 'ASHAKA ROAD GOMBE',
      },
      {
        id: 2,
        title: 'Miyyeti Hospital',
        address: 'Behind Dukku park, Gombe Metro.',
      },
      {
        id: 3,
        title: 'Gombe State University Teaching Hospital',
        address: 'Near Emirs Palace Gombe Metro',
      },
      {
        id: 4,
        title: 'Pantami Hospital',
        address: 'Behind International Stadium Pantami Gombe metro',
      },
      {
        id: 5,
        title: 'Hamdala SPecialist Hospital',
        address: 'Near Investment Housing Estate Bauchi Road, Gombe',
      },
    ],
  },
];

export default function Hospital({navigation}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedLGA, setSelectedLGA] = React.useState(hospitalData[1].lga);
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
          {hospitalData.map(location => (
            <Select.Item
              key={location.id}
              label={location.lga}
              value={location.lga}
            />
          ))}
        </Select>

        <ScrollView showsVerticalScrollIndicator={false}>
          {hospitalData
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
