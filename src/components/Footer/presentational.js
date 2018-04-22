import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    footer: {
        width: '100%',
        height: 40,
        padding: 10,
        backgroundColor: '#d9e5d6',
    },
    text: {
        textAlign: 'center'
    }
});

const Footer = () => {
    return (
        <View style={styles.footer}>
            <Text style={styles.text}>Footer</Text>
        </View>
    );
};

export default Footer;