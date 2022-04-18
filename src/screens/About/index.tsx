import React from 'react';
import { ScrollView } from 'react-native';
import { Button } from '../../components/Forms/Button';

import { 
    Container,
    Header,
    Footer,
    Title
 } from './styles';

interface AboutProps{
    closeAbout: () => void;
}
export const About =({
    closeAbout
}:AboutProps) =>{

    return(
        <ScrollView>
        <Container>
            <Header>
                <Title>
                    teste
                </Title>
            </Header>

            <Footer>
                <Button title='Fechar'
                    onPress={closeAbout}
                />
            </Footer>

        </Container>
        </ScrollView>

    )
}