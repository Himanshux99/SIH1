import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const UserCard = (): JSX.Element => {
  const [selectedTab, setSelectedTab] = useState<'fill' | 'weight'>('fill');

  return (
    <View style={styles.container}>
      {/* Background Elements */}

      <Image
        source={{ uri: 'https://c.animaapp.com/kyDl8311/img/blackleaf1.svg' }}
        style={styles.blackLeaf}
      />

      {/* Main Card */}
      <View style={styles.card}>
        {/* User Info Section */}
        <View style={styles.userSection}>
          <Image
            source={{ uri: 'https://c.animaapp.com/kyDl8311/img/ellipse-1.svg' }}
            style={styles.ellipse}
          />
          <Image
            source={{ uri: 'https://c.animaapp.com/kyDl8311/img/userphoto@2x.png' }}
            style={styles.userPhoto}
          />
          <Text style={styles.userName}>Gayatri Chand</Text>
          <Text style={styles.tagline}>Earn money by recycling !!</Text>
        </View>

        {/* Toggle Buttons */}
        <View style={styles.toggleContainer}>
          <TouchableOpacity
            style={[
              styles.toggleButton,
              selectedTab === 'fill' && styles.toggleButtonActive,
            ]}
            onPress={() => setSelectedTab('fill')}>
            <Text
              style={[
                styles.toggleText,
                selectedTab === 'fill' && styles.toggleTextActive,
              ]}>
              Fill
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.toggleButton,
              selectedTab === 'weight' && styles.toggleButtonActive,
            ]}
            onPress={() => setSelectedTab('weight')}>
            <Text
              style={[
                styles.toggleText,
                selectedTab === 'weight' && styles.toggleTextActive,
              ]}>
              Weight
            </Text>
          </TouchableOpacity>
        </View>

        {/* Total Section */}
        <View style={styles.totalSection}>
          <View style={styles.totalCard}>
            <View style={styles.totalLeft}>
              <Text style={styles.totalLabel}>Total</Text>
              <Text style={styles.earnedLabel}>Earned</Text>
            </View>
            <View style={styles.totalRight}>
              <Image
                source={{ uri: 'https://c.animaapp.com/kyDl8311/img/dollar-sign.svg' }}
                style={styles.dollarSign}
              />
              <Text style={styles.totalAmount}>100.86</Text>
            </View>
          </View>
        </View>

        {/* Decorative Elements */}
        <View style={styles.decorativeSection}>
          <View style={styles.brownRect} />
          <View style={styles.darkCircle} />
          <Image
            source={{ uri: 'https://c.animaapp.com/kyDl8311/img/leaves@2x.png' }}
            style={styles.leaves}
          />
        </View>
      </View>

      {/* Alarm Icon */}
      <Image
        source={{ uri: 'https://c.animaapp.com/kyDl8311/img/alarm@2x.png' }}
        style={styles.alarm}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 372,
    marginHorizontal: 16,
    marginBottom: 20,
    position: 'relative',
  },
  blackLeaf: {
    position: 'absolute',
    top: 0,
    left: 106,
    width: 292,
    height: 141,
    zIndex: 1,
  },
  card: {
    backgroundColor: '#ede3d1',
    borderRadius: 30,
    height: 225,
    marginTop: 122,
    marginHorizontal: 16,
    position: 'relative',

    zIndex: 2,
  },
  userSection: {
    position: 'relative',
    height: 120,
    backgroundColor:'#ffffff',
    justifyContent:'center',
    alignItems:'center',
  },
  ellipse: {
      position: 'absolute',
      top: -88,
      width: 177,
      height: 144,
      backgroundColor: '#ede3d1',
  
      zIndex: 3,
  },
  userPhoto: {
    position: 'absolute',
    top: -40,
    left: '50%',
    width: 85,
    height: 85,
    borderRadius: 42.5,
    zIndex: 4,
  },
  userName: {
    position: 'absolute',
    top: 66,
    left: 124,
    fontSize: 18,
    fontWeight: '400',
    color: '#000000',
  },
  tagline: {
    position: 'absolute',
    top: 89,
    left: 111,
    fontSize: 12,
    color: '#000000',
  },
  toggleContainer: {
    zIndex: 100,
    position: 'absolute',
    bottom: 20,
    left: 97,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 39,
    shadowColor: '#000000',
    shadowOffset: { width: -2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 8,
  },
  toggleButton: {

    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 39,
  },
  toggleButtonActive: {
    backgroundColor: '#202020',
  },
  toggleText: {
    fontSize: 15,
    color: '#000000',
  },
  toggleTextActive: {
    color: '#ffffff',
  },
  totalSection: {
    position: 'absolute',
    bottom: 0,
    left: 36,
    right: 36,
  },
  totalCard: {
    backgroundColor: '#5c3d27',
    borderRadius: 50,
    height: 86,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  totalLeft: {
    flex: 1,
  },
  totalLabel: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '400',
  },
  earnedLabel: {
    color: '#ffffff',
    fontSize: 15,
  },
  totalRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dollarSign: {
    width: 26,
    height: 26,
    marginRight: 8,
  },
  totalAmount: {
    color: '#ffffff',
    fontSize: 35,
    fontWeight: '400',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  },
  decorativeSection: {
    position: 'absolute',
    width: '100%',
  },
  brownRect: {
    backgroundColor: '#995c3e',
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 50,
    width: 71,
    height: 59,
    top: 10,
    left: 10,
  },
  darkCircle: {
    position: 'absolute',
    top: 7,
    right: -45,
    backgroundColor: '#1c1f1f',
    borderRadius: 13,
    width: 26,
    height: 26,
  },
  leaves: {
    position: 'absolute',
    top: 10,
    right: -10,
    width: 94,
    height: 45,
  },
  alarm: {
    position: 'absolute',
    top: 39,
    right: 16,
    width: 36,
    height: 35,
  },
});

export default UserCard;
