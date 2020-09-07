import React from 'react';
import { View, Image, Text } from 'react-native';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whattsappIcon from '../../assets/images/icons/whatsapp.png'


import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';


function TeacherItem() {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{ uri:'https://github.com/ViniciusMDuarte.png' }}
                />

                <View style={styles.profileInfo}>
                    < Text style={styles.name}>Vinicius Duarte</Text>
                    < Text style={styles.subject}>Mobile</Text>
                </View> 

            </View>

            <Text style={styles.bio}>
                    Programador Mobile Senior, 12 anos de experiência em apps.
                    {'\n'} {'\n'}
                    Apaixonado por ensinar jovens a alavançar a carreira no mundo mobile.
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {'   '}
                    <Text style={styles.priceValue}>R$ 20,00</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.favoriteButton, styles.favorited ]}>
                        {/* <Image source={heartOutlineIcon}/> */}
                        <Image source={unfavoriteIcon}/>

                    </RectButton>

                    <RectButton style={styles.contactButton}>
                        <Image source={whattsappIcon}/>
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>

        </View>
    )
}

    export default TeacherItem;