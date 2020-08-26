import React from 'react';
import { View } from 'react-native';

import styles from './styles';
import PageHeader from '../../Components/PageHeader/Index';

function Favorites() {
    return (

    <View style={styles.container} >
        <PageHeader title="Meu Proffys favoritos"/>
    </View>  
    ); 
}

export default Favorites;