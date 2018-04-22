import React from 'react';
import { TouchableHighlight, StatusBar, ScrollView, View, StyleSheet, Text, Image } from 'react-native';
import Collapsible from 'react-native-collapsible-header';
import Header from 'app/src/components/Header/presentational';
import { FOOD } from 'app/src/constants/constants';
import compose from 'recompose/compose';
import withHandlers from 'recompose/withHandlers';
import withState from 'recompose/withState';
import styles from './Styles';

const createRows = (onPress) => {
    return (
        <View style={styles.scrollViewContent}>
            {FOOD.breakfast.map(({ id, item, description, cost, allergies }) =>
                <TouchableHighlight onPress={() => onPress(id)} activeOpacity={0.5} underlayColor="#fff">
                    <View key={id} style={styles.row}>
                        <View style={styles.itemHeaderRow}>
                            <Text style={styles.itemTitle}>{item} - {cost}</Text>
                            <Text style={styles.itemAllergy}>{allergies && `- ${allergies}`}</Text>
                        </View>
                        <Text style={styles.itemDesc}>{description}</Text>
                    </View>
                </TouchableHighlight>
            )}
            {FOOD.panini.map(({ id, item, description, cost, allergies }) =>
                <View key={id} style={styles.row}>
                    <View style={styles.itemHeaderRow}>
                        <Text style={styles.itemTitle}>{item} - {cost}</Text>
                        <Text style={styles.itemAllergy}>{allergies && `- ${allergies}`}</Text>
                    </View>
                    <Text style={styles.itemDesc}>{description}</Text>
                </View>
            )}
        </View>
    );
}

const Menu = ({
    onMenuItemPress,
    selectedItem
}) => {
    return (
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
                {createRows(onMenuItemPress)}
            </ScrollView>
        </View>
    );
}

export default compose(
    withState('selectedItem', 'setSelectedItem', null),
    withHandlers({
        onMenuItemPress: ({ setSelectedItem }) => (value) => {
            setSelectedItem(value);
        }
    })
)(Menu);