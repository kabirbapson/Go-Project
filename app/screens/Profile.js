import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {hp, wp} from '../utils/dpTopx';
import gLogo from '../../assets/images/GombeLogo.png';
import hhKumo from '../../assets/images/yo.jpg';

import Feather from 'react-native-vector-icons/Feather';
import SettingsText from '../components/SettingsText';
import SettingsSubTexts from '../components/SettingsSubTexts';
import {Avatar, Box, Image, Text} from 'native-base';

export default function Profile({navigation}) {
  return (
    <Box alignItems={'center'} flex={1}>
      <Image source={gLogo} mt={'3%'} alt="gLogo" h={140} w={140} />

      <Text mt={'2%'} color={'#2A9D8F'} fontSize={20} fontWeight={'black'}>
        GoProject
      </Text>

      <Avatar mt={'7%'} size={'xl'} source={hhKumo} alt="gmap" />
      <Text fontStyle={'italic'} mt={'2%'}>
        Inspired by
      </Text>
      <Text color={'#2A9D8F'} fontSize={20} fontWeight={'black'}>
        Hon. Habib Hassan Kumo
      </Text>
    </Box>
  );
}
//   const [tnot, setTNot] = React.useState(false);
//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <TouchableOpacity
//           style={styles.iconView}
//           onPress={() => navigation.goBack()}>
//           <Feather
//             style={styles.featherIcon}
//             name="arrow-left"
//             color="#FFFFFF"
//             size={25}
//           />
//         </TouchableOpacity>
//       </View>
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
//     // backgroundColor: '#e5e5e5',
//     flex: 1,
//   },
//   header: {
//     marginHorizontal: hp(20),
//     marginTop: hp(20),
//     width: wp(322),
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },

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
