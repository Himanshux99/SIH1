import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import WasteCategories from './WasteCategories';

interface BinCardProps {
  binNumber: string;
}

const BinCard = ({ binNumber }: BinCardProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.outerRect}>
        <View style={styles.innerRect}>
          {/* Header Section */}
          <View style={styles.header}>
            <View style={styles.iconContainer}>
              <Image
                source={{ uri: 'https://c.animaapp.com/kyDl8311/img/waste-1@2x.png' }}
                style={styles.wasteIcon}
              />
            </View>
            <Text style={styles.title}>Smart Bin</Text>
            <Text style={styles.binNumber}>{binNumber}</Text>
            <TouchableOpacity style={styles.seeMoreButton}>
              <Text style={styles.seeMoreText}>See More</Text>
            </TouchableOpacity>
          </View>

          {/* Waste Categories */}
          <WasteCategories />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  outerRect: {
    backgroundColor: '#ede3d1',
    borderRadius: 30,
    shadowColor: '#000000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 8,
    padding: 10,
  },
  innerRect: {
    backgroundColor: '#5c3e28',
    borderRadius: 19,
    padding: 13,
    minHeight: 137,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    position: 'relative',
  },
  iconContainer: {
    backgroundColor: '#202020',
    borderRadius: 19,
    width: 38,
    height: 38,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  wasteIcon: {
    width: 26,
    height: 25,
  },
  title: {
    color: '#fff5eb',
    fontSize: 18,
    fontWeight: '400',
    marginLeft: 16,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  },
  binNumber: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '400',
    marginLeft: 'auto',
    marginRight: 80,
  },
  seeMoreButton: {
    position: 'absolute',
    right: 0,
    backgroundColor: '#000000',
    borderRadius: 50,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  seeMoreText: {
    color: '#ffffff',
    fontSize: 10,
    textShadowColor: 'rgba(237, 227, 209, 0.2)',
    textShadowOffset: { width: 0.2, height: 0.2 },
    textShadowRadius: 0.2,
  },
});

export default BinCard;
