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
        backgroundColor: 'rgba(34, 198, 160, 0.3)',
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
        flex: 1,
        height: undefined,
        width: undefined
    },
    imageContainer: {
        height: 150,
        padding: 30
    },
    menuHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#22c6a0'
    },
    headerWrapper: {
        marginTop: 20,
        marginBottom: 5,
        marginLeft: 16,
    }
});