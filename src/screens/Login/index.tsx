import React, { useState } from 'react';
import { 
    ScrollView,
    Linking,
    Modal,
    Text,
    TouchableWithoutFeedback,
    Keyboard 
} from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';


import AppSvg from '../../assets/apple.svg';
import GoogleSvg from '../../assets/google.svg'
import ZapSvg from '../../assets/whatsapp1.svg'
import LogoSvg3 from '../../assets/Cabelereiro3.svg';
import ImgMain from '../../assets/imgMain.svg';

import { LoginSocialButton } from '../../components/LoginSocialButton';
import { About } from '../About';

import { 
    Container,
    Header,
    TitleWrapper,
    Title,
    LoginTitle,
    Footer,
    TextMain,
    FooterWrapper,
    MidContainer,
    Icon,
    IconAgendamento,
    IconZap,
    TitleZap,
    TextZap,
    TextAgendamento,
    TitleAgendamento,

} from './styles';

const Icons = {
    agendamento: 'schedule',
}


const url = 'https://api.whatsapp.com/send?phone=5511986364371';

export const Login = () =>{
    const [aboutModalOpen, setAboutModalOpen] = useState(false);

    const handleOpenModal = () => {
        setAboutModalOpen(true);
        console.log('abriu');
    };

    const handleCloseModal = () =>{
        setAboutModalOpen(false);
        console.log('fechou');
    };

    console.log('modal', aboutModalOpen);
    

    return(
        <ScrollView>
        <Container>
            <Header>
                <TitleWrapper>
                    <LogoSvg3 
                        width={RFValue(200)}
                        height={RFValue(150)}
                        marginTop={RFValue(50)}
                    />
                    <Title>
                 Bem Vindo ao Salão Shekinah!{`\n`}
                    </Title>
                </TitleWrapper>

                <LoginTitle>
                    Faça seu login com {`\n`}
                    uma das contas abaixo {`\n`}
                </LoginTitle>
            </Header>
            <Footer>
                <FooterWrapper>
                    <LoginSocialButton 
                    title='Entrar com Google'
                    svg={GoogleSvg}
                    />
                    <LoginSocialButton 
                    title='Entrar com Apple'
                    svg={AppSvg}
                    />
                </FooterWrapper>
                <TextMain>
                Agora em sua versão app com uma cara {`\n`}
                totalmente nova para melhor atende-lo. {`\n`}
                trazendo novas funcionalidades: {`\n`}
                    {`\n`}  
                    *Agendamentos diretamente do seu Smartphone {`\n`}
                    *Consultar seus Agendamentos Cadastrados {`\n`}
                </TextMain>
               <ImgMain 
                        width={RFValue(320)}
                        height={RFValue(300)}
                        alignSelf="center"
                    />

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
                <Text onPress={handleOpenModal}>
                        Alguns Procedimentos
                </Text>
            </Footer>
                    <Modal visible={aboutModalOpen}>
                        <About closeAbout={handleCloseModal}/>
                    </Modal>
            </Container>
        </ScrollView>
    )
};