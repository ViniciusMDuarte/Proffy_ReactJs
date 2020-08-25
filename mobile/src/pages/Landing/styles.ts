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
        fontFamily: 'Poppins_400Regular',
        fontSize: 20,
        color: '#fff',
        lineHeight: 30,
        marginTop: 80,
    },

    titleBold: {
        fontFamily: 'Poppins_600SemiBold',
    },

    buttonsContainer: {
      flexDirection: 'row',
      marginTop: 40,
      justifyContent: 'space-between',
    },

    buttons: {
        height: 150,
        width: '48%',
        borderRadius: 8,
        padding: 24,
        justifyContent: "space-between",

    },

    buttonPrimary: {
        backgroundColor: '#9871f5',
    },

    buttonSecondary: {
        backgroundColor: '#04d361',
    },

    buttonText: {
        fontFamily: 'Archivo_700Bold',
        fontSize: 20,
        color: '#fff',
    },

    totalConnections: {
        fontFamily: 'Poppins_400Regular',
        color:'#d4c2ff',
        fontSize: 12,
        maxWidth: 160,
        marginTop: 40,
        lineHeight: 20,
    }
});

export default styles;