import React from 'react';
import { View } from 'react-native';

import styles from './styles';
import PageHeader from '../../Components/PageHeader';
import { ScrollView } from 'react-native-gesture-handler';
import TeacherItem from '../../Components/TeacherItem';

function Favorites() {
    return (

    <View style={styles.container} >
        <PageHeader title="Meu Proffys favoritos"/>

        <ScrollView 
        style={styles.teacherList}
        contentContainerStyle={{
            paddingHorizontal: 16,
            paddingBottom: 16,
        }}
        >
            <TeacherItem />
            <TeacherItem />
            <TeacherItem />
            <TeacherItem />
            <TeacherItem />
            <TeacherItem />
            
        </ScrollView>
    </View>  

    ); 
}

export default Favorites;