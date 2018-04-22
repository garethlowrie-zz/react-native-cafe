import React from 'react';
import { StatusBar, ScrollView, View, Image } from 'react-native';
import styles from './Styles';

const Home = () => (
      <View style={styles.container}>
        <StatusBar
            translucent
            barStyle="dark-content"
            backgroundColor="rgba(0, 0, 0, 0.251)"
        />
        <View style={styles.imageContainer}>
            <Image
                style={styles.logo}
                resizeMode="contain"
                source={require('app/src/images/logo.png')}
            />
        </View>
        <ScrollView style={styles.scrollView}>
            
        </ScrollView>
    </View>
);

export default Home;
