import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { Auth } from 'aws-amplify';
import Entypo from 'react-native-vector-icons/Entypo';
import Steve from '../assets/images/steve.jpeg';

const CustomDrawer = (props) => (
  <DrawerContentScrollView {...props}>
    <View style={{ backgroundColor: 'black', padding: 15 }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            backgroundColor: '#cacaca',
            width: 50,
            height: 50,
            borderRadius: 25,
            marginRight: 15,
          }}
        >
          <Image
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
            }}
            source={Steve}
          />
        </View>
        <View
          style={{
            flexDirection: 'column',
          }}
        >
          <View>
            <Text
              style={{
                color: 'white',
                fontSize: 24,
                flex: 1,
                marginBottom: 5,
              }}
            >
              Steve Kriz
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
            }}
          >
            <Text style={{ color: 'lightgrey' }}>5.00</Text>
            <Entypo
              name='star'
              size={15}
              color='lightgrey'
              style={{ marginLeft: 2 }}
            />
          </View>
        </View>
      </View>

      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: '#919191',
          borderTopWidth: 1,
          borderTopColor: '#919191',
          paddingVertical: 5,
          marginVertical: 10,
        }}
      >
        <Pressable
          onPress={() => console.warn('Messages')}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Text style={{ color: 'white', paddingVertical: 5 }}>Messages</Text>
          <Entypo
            name='chevron-thin-right'
            size={15}
            color='#ffffff'
            style={{ marginLeft: 2 }}
          />
        </Pressable>
      </View>

      <Pressable onPress={() => console.warn('Do more with your account')}>
        <Text style={{ color: '#dddddd', paddingVertical: 5 }}>
          Do more with your account
        </Text>
      </Pressable>

      <Pressable onPress={() => console.warn('Make money driving')}>
        <Text style={{ color: 'white', paddingVertical: 5 }}>
          Make money driving
        </Text>
      </Pressable>
    </View>

    <DrawerItemList {...props} />

    <Pressable onPress={() => Auth.signOut()}>
      <Text style={{ padding: 5, paddingLeft: 19, color: 'red' }}>
        Sign Out
      </Text>
    </Pressable>
  </DrawerContentScrollView>
);
export default CustomDrawer;
