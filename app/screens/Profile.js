import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {hp, wp} from '../utils/dpTopx';

import Feather from 'react-native-vector-icons/Feather';
import SettingsText from '../components/SettingsText';
import SettingsSubTexts from '../components/SettingsSubTexts';

export default function Profile({navigation}) {
  const [tnot, setTNot] = React.useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconView}>
          <Feather
            style={styles.featherIcon}
            name="arrow-left"
            color="#FFFFFF"
            size={25}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.textSettings}>
        <Text style={{fontSize: hp(26), fontWeight: 'bold', color: '#000000'}}>
          Settings
        </Text>
      </View>
      <View style={styles.mainSettings}>
        <View>
          <SettingsText iconName={'user'} text="Account" />
        </View>
        <View>
          <SettingsSubTexts catText="Edit Profile" iconName="chevron-right" />
          <SettingsSubTexts
            catText="Change Password"
            iconName="chevron-right"
          />
          <SettingsSubTexts catText="Privacy" iconName="chevron-right" />
        </View>
      </View>
      <View style={styles.mainSettings}>
        <View>
          <SettingsText iconName={'bell'} text="Notification" />
        </View>
        <View>
          <SettingsSubTexts
            catText="Notification"
            onPress={() => setTNot(!tnot)}
            iconName={tnot ? 'toggle-right' : 'toggle-left'}
          />
          <SettingsSubTexts catText="App Notification" iconName="toggle-left" />
        </View>
      </View>
      <View style={styles.mainSettings}>
        <View>
          <SettingsText iconName={'plus-square'} text="More" />
        </View>
        <View>
          <SettingsSubTexts catText="Notification" iconName="chevron-right" />
          <SettingsSubTexts
            catText="App Notification"
            iconName="chevron-right"
          />
        </View>
      </View>
      <View style={styles.mainSettings}>
        <View>
          <Text />
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <SettingsText iconName={'log-out'} text="Logout" line={false} />
          </TouchableOpacity>
        </View>
      </View>
    </View>

    //
    //     <View>
    //       <View style={styles.profileSettings}>
    //         <Feather name="user" size={24} color="#000000" />
    //         <Text style={styles.profileText}>Account</Text>
    //       </View>

    //       <View>
    //         <View
    //           style={{
    //             flexDirection: 'row',
    //             justifyContent: 'space-between',
    //             alignItems: 'center',
    //           }}>
    //           <Text style={styles.subProfileText}>Edit Profile</Text>
    //           <Feather name="chevron-right" size={30} color="#000000" />
    //         </View>
    //         <View
    //           style={{
    //             flexDirection: 'row',
    //             justifyContent: 'space-between',
    //             alignItems: 'center',
    //           }}>
    //           <Text style={styles.subProfileText}>Change Password</Text>
    //           <Feather name="chevron-right" size={30} color="#000000" />
    //         </View>
    //         <View
    //           style={{
    //             flexDirection: 'row',
    //             justifyContent: 'space-between',
    //             alignItems: 'center',
    //           }}>
    //           <Text style={styles.subProfileText}>Privacy</Text>
    //           <Feather name="chevron-right" size={30} color="#000000" />
    //         </View>
    //       </View>
    //     </View>

    //     <View>
    //       <View style={styles.profileSettings}>
    //         <Feather color="#000000" name="bell" size={30} />
    //         <Text style={styles.profileText}>Notification</Text>
    //       </View>

    //       <View>
    //         <View
    //           style={{
    //             flexDirection: 'row',
    //             justifyContent: 'space-between',
    //             alignItems: 'center',
    //           }}>
    //           <Text style={styles.subProfileText}>Notification</Text>
    //           <Feather name="toggle-right" color={'#E9C46A'} size={30} />
    //         </View>
    //         <View
    //           style={{
    //             flexDirection: 'row',
    //             justifyContent: 'space-between',
    //             alignItems: 'center',
    //           }}>
    //           <Text style={styles.subProfileText}>App Notifications</Text>
    //           <Feather name="toggle-left" size={30} color="#000000" />
    //         </View>
    //       </View>
    //     </View>
    //     <View>
    //       <View style={styles.profileSettings}>
    //         <Feather color="#000000" name="plus-square" size={30} />
    //         <Text style={styles.profileText}>More</Text>
    //       </View>

    //       <View>
    //         <View
    //           style={{
    //             flexDirection: 'row',
    //             justifyContent: 'space-between',
    //             alignItems: 'center',
    //           }}>
    //           <Text style={styles.subProfileText}>Language</Text>
    //           <Feather name="toggle-right" size={30} color="#000000" />
    //         </View>
    //         <View
    //           style={{
    //             flexDirection: 'row',
    //             justifyContent: 'space-between',
    //             alignItems: 'center',
    //           }}>
    //           <Text style={styles.subProfileText}>App Settings</Text>
    //           <Feather name="toggle-left" size={30} color="#000000" />
    //         </View>
    //       </View>
    //     </View>

    //     <View>
    //       <View style={styles.profileLogout}>
    //         <Feather color="#000000" name="log-out" size={30} />
    //         <Text style={[styles.profileText]}>Logout</Text>
    //       </View>
    //     </View>
    //   </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    // backgroundColor: '#e5e5e5',
    flex: 1,
  },
  header: {
    marginHorizontal: hp(20),
    marginTop: hp(20),
    width: wp(322),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  iconView: {
    alignItems: 'center',
    justifyContent: 'center',
    height: hp(40),
    width: hp(40),
    backgroundColor: '#264653',
    borderRadius: hp(20),
  },
  textSettings: {
    marginTop: hp(10),
    width: wp(322),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mainSettings: {
    width: '100%',
    paddingHorizontal: 20,
  },
  profileSettings: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  profileText: {
    fontSize: 20,
    color: '#000000',
    marginHorizontal: 10,
  },
  subProfileText: {
    fontSize: 16,
    color: '#000000',
    // marginHorizontal: 10,
  },
  profileLogout: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 30,
  },
});
