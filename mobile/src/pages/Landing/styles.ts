import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8287e5',
        justifyContent: 'center',
        padding: 40,

    },

    banner: {
        width:'100%',
        resizeMode: 'contain',
    },

    title: {
        fontSize: 20,
        color: '#fff',
        lineHeight: 30,
        marginTop: 80,
    },

    titleBold: {
        fontWeight: 'bold',
    }
});

export default styles;