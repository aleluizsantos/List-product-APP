import React from 'react';

import { View, Text, Image } from 'react-native';

import Button from '../Button';

import styles from './styles';

const SubHeader = () => (
    <View style={styles.container}> 
        <Image 
            style={styles.avatar} 
            source={ {uri:'https://i.pinimg.com/originals/e4/33/c1/e433c18f4204b57bcb67c584ef35ef0f.jpg' } } />

            <View style={styles.profileInfo}>
                <Text style={styles.name}>Alessandro L. Santos</Text>
                <Text style={styles.bio}>Heard de Programação fazendo live de layout com o Diego Fernandes da Rocketseat </Text>
                <View style={styles.buttonContainer}>
                    <Button style={styles.firsButton}>Mensagem</Button>
                    <Button type='outline'>Seguir</Button>
                </View>                
            </View>
    </View>
);

export default SubHeader;
