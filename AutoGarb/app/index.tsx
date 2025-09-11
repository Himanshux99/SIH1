import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BinCard from '../components/BinCard';
import UserCard from '../components/UserCard';

const { width: screenWidth } = Dimensions.get('window');

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>YOUR BIN</Text>
        </View>

        {/* User Card */}
        <UserCard />

        {/* Bin Cards */}
        <View style={styles.binCardsContainer}>
          <BinCard binNumber="404" />
          <BinCard binNumber="201" />
        </View>

        {/* Bottom Navigation Placeholder */}
        <View style={styles.bottomNav}>
          <Image
            source={{ uri: 'https://c.animaapp.com/kyDl8311/img/group-11@2x.png' }}
            style={styles.bottomNavImage}
            resizeMode="contain"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#375e3e',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 16,
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: '400',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  },
  binCardsContainer: {
    paddingHorizontal: 24,
    gap: 16,
  },
  bottomNav: {
    paddingHorizontal: 24,
    paddingVertical: 20,
    alignItems: 'center',
  },
  bottomNavImage: {
    width: screenWidth - 48,
    height: 54,
  },
});
