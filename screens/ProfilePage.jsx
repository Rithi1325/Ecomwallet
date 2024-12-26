import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import icons from '../assets/icons';

const ProfilePage = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={icons.back} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity>
          <Image source={icons.more} style={styles.moreIcon} />
        </TouchableOpacity>
      </View>

      {/* Profile Info */}
      <View style={styles.profileSection}>
        <Image 
          source={icons.profile}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Thomas Djono</Text>
        <Text style={styles.profileId}>ID 223141</Text>
        <TouchableOpacity style={styles.editButton}>
          <Image source={icons.edit} style={styles.editIcon} />
        </TouchableOpacity>
      </View>

      {/* Quick Actions */}
      <View style={styles.quickActions}>
        <TouchableOpacity style={styles.actionItem}>
          <Image source={icons.order} style={styles.actionIcon} />
          <Text style={styles.actionText}>Order</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionItem}>
          <Image source={icons.wishlist} style={styles.actionIcon} />
          <Text style={styles.actionText}>Wishlist</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionItem}>
          <Image source={icons.coupon} style={styles.actionIcon} />
          <Text style={styles.actionText}>Coupons</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionItem}>
          <Image source={icons.helpCenter} style={styles.actionIcon} />
          <Text style={styles.actionText}>Help Center</Text>
        </TouchableOpacity>
      </View>

      {/* Account Settings */}
      <View style={styles.settingsSection}>
        <Text style={styles.sectionTitle}>Account Settings</Text>
        
        <TouchableOpacity style={styles.settingItem}>
          <Image source={icons.user} style={styles.settingIcon} />
          <Text style={styles.settingText}>Edit Profile</Text>
          <Image source={icons.chevronRight} style={styles.chevronIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <Image source={icons.location} style={styles.settingIcon} />
          <Text style={styles.settingText}>Saved Addresses</Text>
          <Image source={icons.chevronRight} style={styles.chevronIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <Image source={icons.language} style={styles.settingIcon} />
          <Text style={styles.settingText}>Select Language</Text>
          <Image source={icons.chevronRight} style={styles.chevronIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <Image source={icons.notification} style={styles.settingIcon} />
          <View style={styles.notificationContainer}>
            <Text style={styles.settingText}>Notification</Text>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>2</Text>
            </View>
          </View>
          <Image source={icons.chevronRight} style={styles.chevronIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <Image source={icons.logout} style={styles.settingIcon} />
          <Text style={styles.settingText}>Log Out</Text>
          <Image source={icons.chevronRight} style={styles.chevronIcon} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  moreIcon: {
    width: 24,
    height: 24,
  },
  profileSection: {
    alignItems: 'center',
    padding: 20,
    position: 'relative',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 12,
  },
  profileName: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 4,
  },
  profileId: {
    fontSize: 14,
    color: '#666',
  },
  editButton: {
    position: 'absolute',
    right: 20,
    top: 20,
  },
  editIcon: {
    width: 24,
    height: 24,
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: '#FFF1F5',
  },
  actionItem: {
    alignItems: 'center',
  },
  actionIcon: {
    width: 24,
    height: 24,
    marginBottom: 8,
  },
  actionText: {
    fontSize: 12,
  },
  settingsSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 16,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  settingIcon: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  settingText: {
    flex: 1,
    fontSize: 16,
  },
  chevronIcon: {
    width: 20,
    height: 20,
  },
  notificationContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  badge: {
    backgroundColor: '#007AFF',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
    paddingHorizontal: 6,
  },
});

export default ProfilePage;