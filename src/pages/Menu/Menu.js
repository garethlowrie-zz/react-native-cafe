import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    AlertIOS,
    ListView,
    ListItem,
    TouchableHighlight,
    StatusBar,
    ScrollView,
    View,
    Text,
    Image
} from 'react-native';
import { FOOD } from 'app/src/constants/constants';
import compose from 'recompose/compose';
import withHandlers from 'recompose/withHandlers';
import withState from 'recompose/withState';
import lifecycle from 'recompose/lifecycle';
import getContext from 'recompose/getContext';
import styles from './Styles';

class Menu extends Component {
    constructor(props) {
        super(props);
    }

    onPressRow(id) {
        this.props.onMenuItemPress(id);
    }

    renderRow(item) {
        return (
            <TouchableHighlight onPress={() => this.onPressRow(item.id)} activeOpacity={0.5} underlayColor="#fff">
                <View key={item.id} style={styles.row}>
                    <View style={styles.itemHeaderRow}>
                        <Text style={styles.itemTitle}>{item.item} - {item.cost}</Text>
                        <Text style={styles.itemAllergy}>{item.allergies && `- ${item.allergies}`}</Text>
                    </View>
                    <Text style={styles.itemDesc}>{item.description}</Text>
                </View>
            </TouchableHighlight>
        );
    }

    render() {
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
                    <View style={styles.headerWrapper}>
                        <Text style={styles.menuHeader}>Breakfast</Text>
                    </View>
                    <ListView
                        dataSource={this.props.breakfastDataSource}
                        renderRow={this.renderRow.bind(this)}
                        style={styles.listview}
                    />
                    <View style={styles.headerWrapper}>
                        <Text style={styles.menuHeader}>Paninis</Text>
                    </View>
                    <ListView
                        dataSource={this.props.paniniDataSource}
                        renderRow={this.renderRow.bind(this)}
                        style={styles.listview}
                    />
                </ScrollView>
            </View>
        )
    };
};

export default compose(
    getContext({
        db: PropTypes.any
    }),
    withState('selectedItem', 'setSelectedItem', null),
    withState(
        'breakfastDataSource',
        'setBreakfastDataSource', 
        new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        })
    ),
    withState(
        'paniniDataSource',
        'setPaniniDataSource', 
        new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        })
    ),
    withHandlers({
        onMenuItemPress: ({ setSelectedItem }) => (value) => {
            setSelectedItem(value);
        },
        listenForItems: ({ breakfastDataSource, setBreakfastDataSource, paniniDataSource, setPaniniDataSource }) => (itemsRef) => {
            itemsRef.on('value', (snap) => {
                const json = snap.val();
                // get children as an array
                const breakfast = [];
                json.breakfast.forEach((child) => {
                    breakfast.push({
                    item: child.item,
                    description: child.description,
                    cost: child.cost,
                    allergies: child.allergies,
                    id: child.id,
                    _key: child.id
                  });
                });

                const panini = [];
                json.panini.forEach((child) => {
                    panini.push({
                    item: child.item,
                    description: child.description,
                    cost: child.cost,
                    allergies: child.allergies,
                    id: child.id,
                    _key: child.id
                  });
                });
               
                setBreakfastDataSource(breakfastDataSource.cloneWithRows(breakfast));
                setPaniniDataSource(paniniDataSource.cloneWithRows(panini));
              });
        }
    }),
    lifecycle({
        componentDidMount() {
            this.props.listenForItems(this.props.db);
          }
    })
)(Menu);