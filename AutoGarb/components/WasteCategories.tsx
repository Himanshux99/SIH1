import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const WasteCategories = (): JSX.Element => {
  return (
    <View style={styles.container}>
      {/* Organic Category */}
      <View style={styles.categoryContainer}>
        <View style={[styles.categoryIcon, styles.organicBorder]}>
          <Image
            source={{ uri: 'https://c.animaapp.com/kyDl8311/img/organiclogo-1@2x.png' }}
            style={styles.iconImage}
          />
        </View>
        <Text style={styles.categoryLabel}>ORGANIC</Text>
      </View>

      {/* Inorganic Category */}
      <View style={[styles.categoryContainer, styles.rotatedContainer]}>
        <View style={[styles.categoryIcon, styles.inorganicBorder, styles.rotated]}>
          <Image
            source={{ uri: 'https://c.animaapp.com/kyDl8311/img/inorganiclogo-1@2x.png' }}
            style={styles.iconImage}
          />
        </View>
        <Text style={styles.categoryLabel}>INORGANIC</Text>
      </View>

      {/* Hazardous Category */}
      <View style={[styles.categoryContainer, styles.rotatedContainer]}>
        <View style={[styles.categoryIcon, styles.hazardousBorder, styles.rotated]}>
          <Image
            source={{ uri: 'https://c.animaapp.com/kyDl8311/img/hazardlogo-1@2x.png' }}
            style={styles.iconImage}
          />
        </View>
        <Text style={styles.categoryLabel}>HAZARDOUS</Text>
      </View>

      {/* Rejected Category */}
      <View style={styles.categoryContainer}>
        <View style={[styles.categoryIcon, styles.rejectedBorder]}>
          <Image
            source={{ uri: 'https://c.animaapp.com/kyDl8311/img/rejectlogo-1@2x.png' }}
            style={styles.iconImage}
          />
        </View>
        <Text style={styles.categoryLabel}>REJECTED</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 15,
    height: 74,
  },
  categoryContainer: {
    alignItems: 'center',
    width: 60,
  },
  rotatedContainer: {
    marginTop: -15,
  },
  categoryIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 3,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
    marginBottom: 8,
  },
  organicBorder: {
    borderColor: '#77fe8b',
  },
  inorganicBorder: {
    borderColor: '#a7ceff',
  },
  hazardousBorder: {
    borderColor: '#ff897e',
  },
  rejectedBorder: {
    borderColor: '#141313',
  },
  rotated: {
    transform: [{ rotate: '22.5deg' }],
  },
  iconImage: {
    width: 37,
    height: 36,
  },
  categoryLabel: {
    color: '#ede3d1',
    fontSize: 10,
    textAlign: 'center',
    textShadowColor: 'rgba(237, 227, 209, 0.2)',
    textShadowOffset: { width: 0.2, height: 0.2 },
    textShadowRadius: 0.2,
  },
});

export default WasteCategories;
