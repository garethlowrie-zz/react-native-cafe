import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
		flex: 1,
		backgroundColor: '#fff',
        marginTop: 20
    },
    scrollView: {
        flex: 1
    },
    row: {
        height: 80,
        padding: 10,
        margin: 16,
        backgroundColor: '#D3D3D3',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    itemTitle: {
        fontWeight: 'bold',
        fontSize: 14,
        display: 'inline-block'
    },
    itemDesc: {
        fontSize: 12,
    },
    itemAllergy: {
        fontStyle: 'italic',
        display: 'inline-block'
    },
    itemHeaderRow: {
        flexDirection: 'row'
    },
    logo: {
        flex:1,
        height: undefined,
        width: undefined
    },
    imageContainer: {
        height: 150,
        padding: 30
    }
});