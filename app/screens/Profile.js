import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {hp, wp} from '../utils/dpTopx';
import gLogo from '../../assets/images/GombeLogo.png';
import hhKumo from '../../assets/images/yo.jpg';

import Feather from 'react-native-vector-icons/Feather';
import SettingsText from '../components/SettingsText';
import SettingsSubTexts from '../components/SettingsSubTexts';
import {Avatar, Box, Image, ScrollView, Text, VStack} from 'native-base';
import HeaderBackButton from '../components/HeaderBackButton';

export default function Profile({navigation}) {
  const handleBackButton = () => navigation.goBack();

  return (
    <ScrollView flex={1}>
      <Box px={'4'} position={'absolute'} zIndex={2}>
        <HeaderBackButton onBackButtonPress={handleBackButton} />
      </Box>
      <Box alignItems={'center'} m={4}>
        {/* <Image source={gLogo} mt={'3%'} alt="gLogo" h={140} w={140} /> */}

        {/* <Text mt={'2%'} color={'#2A9D8F'} fontSize={20} fontWeight={'black'}>
        GoProject
      </Text> */}

        <Avatar mt={'7%'} size={'xl'} source={hhKumo} alt="gmap" />
        <Text fontStyle={'italic'} mt={'2%'}>
          Inspired by
        </Text>
        <Text color={'#2A9D8F'} fontSize={20} fontWeight={'black'}>
          Hon. Habib Hassan Kumo
        </Text>

        <VStack mt={2} space={4}>
          <Text>
            About the App Welcome to the Gombe State Leaders & News App,
            inspired by the visionary leadership of Hon. Habib Hassan Kumo.
          </Text>
          <Text>
            This platform is designed to empower the people of Gombe State with
            comprehensive information about their leaders, senators, local
            government chairmen, representatives, and the state government.
          </Text>
          <Text>
            Our Vision At the core of this app is a commitment to fostering
            transparency, civic engagement, and awareness. We believe that an
            informed citizenry is the foundation of a thriving democracy. By
            providing easy access to information about our leaders and the state
            government, we aim to empower you to actively participate in the
            democratic process.
          </Text>
          <Text fontWeight={900}>Key Features</Text>

          <Text>
            Leader Profiles: Explore detailed profiles of leaders, senators,
            local government chairmen, representatives, and more.
          </Text>

          <Text>
            News Updates: Stay informed with the latest news directly from the
            Gombe State government house, ensuring you are always in the know
            about important developments and initiatives.
          </Text>

          <Text>
            Connect with Your Representatives: Engage with your leaders, share
            your concerns, and participate in the conversations that shape your
            community.
          </Text>

          <Text>
            Our Mission Our mission is to bridge the gap between the people and
            their leaders, fostering a sense of community and shared
            responsibility. By providing a central hub for information, we aim
            to strengthen the bond between citizens and their representatives,
            creating a more engaged and empowered society.
          </Text>
          <Text fontStyle={'italic'}>
            Join us in building a Gombe State where every voice is heard, and
            every citizen is informed. Thank you for being a part of this
            journey toward a more connected and informed community.
          </Text>
        </VStack>
      </Box>
    </ScrollView>
  );
}
//   const [tnot, setTNot] = React.useState(false);
//   return (
//     <View style={styles.container}>
// <View style={styles.header}>
//   <TouchableOpacity
//     style={styles.iconView}
//     onPress={() => navigation.goBack()}>
//     <Feather
//       style={styles.featherIcon}
//       name="arrow-left"
//       color="#FFFFFF"
//       size={25}
//     />
//   </TouchableOpacity>
// </View>
//       <View style={styles.textSettings}>
//         <Text style={{fontSize: hp(26), fontWeight: 'bold', color: '#000000'}}>
//           Settings
//         </Text>
//       </View>
//       <View style={styles.mainSettings}>
//         <View>
//           <SettingsText iconName={'user'} text="Account" />
//         </View>
//         <View>
//           <SettingsSubTexts catText="Edit Profile" iconName="chevron-right" />
//           <SettingsSubTexts
//             catText="Change Password"
//             iconName="chevron-right"
//           />
//           <SettingsSubTexts catText="Privacy" iconName="chevron-right" />
//         </View>
//       </View>
//       <View style={styles.mainSettings}>
//         <View>
//           <SettingsText iconName={'bell'} text="Notification" />
//         </View>
//         <View>
//           <SettingsSubTexts
//             catText="Notification"
//             onPress={() => setTNot(!tnot)}
//             iconName={tnot ? 'toggle-right' : 'toggle-left'}
//           />
//           <SettingsSubTexts catText="App Notification" iconName="toggle-left" />
//         </View>
//       </View>
//       <View style={styles.mainSettings}>
//         <View>
//           <SettingsText iconName={'plus-square'} text="More" />
//         </View>
//         <View>
//           <SettingsSubTexts catText="Notification" iconName="chevron-right" />
//           <SettingsSubTexts
//             catText="App Notification"
//             iconName="chevron-right"
//           />
//         </View>
//       </View>
//       <View style={styles.mainSettings}>
//         <View>
//           <Text />
//           <TouchableOpacity onPress={() => navigation.navigate('Home')}>
//             <SettingsText iconName={'log-out'} text="Logout" line={false} />
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//     backgroundColor: '#E5E5E5',
//     flex: 1,
//   },
//   header: {
//     marginHorizontal: hp(20),
//     marginTop: hp(20),
//     width: wp(322),
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//
//   iconView: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: hp(40),
//     width: hp(40),
//     backgroundColor: '#264653',
//     borderRadius: hp(20),
//   },
//   textSettings: {
//     marginTop: hp(10),
//     width: wp(322),
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   mainSettings: {
//     width: '100%',
//     paddingHorizontal: 20,
//   },
//   profileSettings: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 10,
//   },
//   profileText: {
//     fontSize: 20,
//     color: '#000000',
//     marginHorizontal: 10,
//   },
//   subProfileText: {
//     fontSize: 16,
//     color: '#000000',
//     // marginHorizontal: 10,
//   },
//   profileLogout: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 30,
//   },
// });
