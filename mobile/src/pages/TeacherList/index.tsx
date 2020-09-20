import React, { useState } from 'react';
import { View, Text } from 'react-native';
import PageHeader from '../../Components/PageHeader';
import TeacherItem, { Teacher } from '../../Components/TeacherItem';
import { ScrollView, TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler';
import api from '../../services/api';

import { Feather } from '@expo/vector-icons';

import styles from './styles';


function TeacherList() {

    const [teachers, setTeachers] = useState([]);


    const [isFilterVisible, setFilterVisible] = useState(false)

    const [subject, setSubject] = useState('');

    const [week_day, setWeekDay] = useState('');

    const [time, setTime] = useState('');


    function handleTooggleFilterVisible() {
        setFilterVisible(!isFilterVisible)
    }

    async function handleFilterSubmit() {
        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time
            }
        });

       setFilterVisible(false)

       setTeachers(response.data)
   
    }

    return (

    <View style={styles.container} >
        <PageHeader title="Proffys disponíveis"
         headerRight={(
            <BorderlessButton onPress={handleTooggleFilterVisible}> 
               <Feather name="filter" size={20} color="#fff"/> 
            </BorderlessButton>

         )}>

            {isFilterVisible && (
            
            <View style={styles.searchForm}> 
                    
                <Text style={styles.label}>Matéria</Text>

                <TextInput 
                style={styles.input} 
                value={subject}
                onChangeText={text => setSubject(text)}
                placeholder="Qual a Matéria?"
                placeholderTextColor="#c1bccc"
                />
                <View style={styles.inputGroup}>
                    <View style={styles.inputBlock}> 
                        
                        <Text style={styles.label}>Dia da semana</Text>
        
                        <TextInput 
                            style={styles.input} 
                            value={week_day}
                            onChangeText={text => setWeekDay(text)}
                            placeholder="Qual o dia ?"
                            placeholderTextColor="#c1bccc"
                        />
                    </View>
                    <View style={styles.inputBlock}> 
                        
                            <Text style={styles.label}>Horário</Text>
            
                            <TextInput 
                            style={styles.input} 
                            value={time}
                            onChangeText={text => setTime(text)}
                            placeholder="Qual o horário ?"
                            placeholderTextColor="#c1bccc"
                            />
                        </View>
                </View>
                <RectButton onPress={handleFilterSubmit} style={styles.submitButton}>
                    <Text style={styles.submitButtonText}>Filtrar</Text>
                </RectButton>

            </View>
            )}
        </PageHeader>

        <ScrollView 
            style={styles.teacherList}
            contentContainerStyle={{
                paddingHorizontal: 16,
                paddingBottom: 16,
            }}
            >
            {teachers.map((teacher: Teacher) => {
                return <TeacherItem key={teacher.id} teacher={teacher} />
            })}
        </ScrollView>
        
    </View>  
    );
}

export default TeacherList;