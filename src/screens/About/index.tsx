import React from 'react';
import { Linking, ScrollView } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Button } from '../../components/Forms/Button';

import { 
    Container,
    Header,
    Footer,
    Title,
    MidContainer,
    Icon,
    IconAgendamento,
    IconZap,
    TitleZap,
    TextZap,
    TextAgendamento,
    TitleAgendamento,

 } from './styles';

import ZapSvg from '../../assets/whatsapp1.svg';
import ImgMain from '../../assets/imgMain.svg';


const Icons = {
    agendamento: 'schedule',
}


const url = 'https://api.whatsapp.com/send?phone=5511986364371';
interface AboutProps{
    closeAbout: () => void;
}
export const About =({
    closeAbout
}:AboutProps) =>{

    return(
        <Container>
            <Header>
                <Title>
                    teste
                </Title>
            </Header>

        <ScrollView>
            <Footer>
                <MidContainer>
                    <IconAgendamento>
                        <Icon name={Icons.agendamento}/>
                        <TitleAgendamento>
                        Horário de Atendimento
                        </TitleAgendamento>
                        <TextAgendamento>
                            De segunda a sabado {`\n`}
                            das 08:00 as 18:00 horas.
                        </TextAgendamento>
                    </IconAgendamento>
                    <ImgMain 
                        width={RFValue(320)}
                        height={RFValue(300)}
                        alignSelf="center"
                    />
                    <IconZap onPress={() => Linking.openURL(url)}>
                            <ZapSvg 
                                width={RFValue(58)}
                                height={RFValue(58)}
                            />
                            {`\n`}
                            <TitleZap>
                                Contato
                            </TitleZap>
                            {`\n`}
                        <TextZap>
                            Clique no balão acima para {`\n`}
                            entrar em contato conosco {`\n`}
                            via Whatsapp
                        </TextZap>

                    </IconZap>
                </MidContainer>
                <Button title='Fechar'
                    onPress={closeAbout}
                />
            </Footer>
        </ScrollView>


        </Container>

    )
}