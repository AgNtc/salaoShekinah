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
import LogoSvg3 from '../../assets/Cabelereiro3.svg';

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
    TitleAbout
} from './styles';




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

    

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <TitleWrapper>
              <LogoSvg3
                width={RFValue(200)}
                height={RFValue(150)}
                marginTop={RFValue(50)}
              />
              <Title>Bem Vindo ao Salão Shekinah!{`\n`}</Title>
            </TitleWrapper>

            <LoginTitle>
              Faça seu login com {`\n`}
              uma das contas abaixo {`\n`}
            </LoginTitle>
          </Header>

          <Footer>
            <FooterWrapper>
              <LoginSocialButton title="Entrar com Google" svg={GoogleSvg} />
              <LoginSocialButton title="Entrar com Apple" svg={AppSvg} />
            </FooterWrapper>
            <TextMain>
              Agora em sua versão app com uma cara {`\n`}
              totalmente nova para melhor atende-lo. {`\n`}
              trazendo novas funcionalidades: {`\n`}
              {`\n`}
              *Agendamentos diretamente do seu Smartphone {`\n`}
              *Consultar seus Agendamentos Cadastrados {`\n`}
            </TextMain>
            <TitleAbout onPress={handleOpenModal}>
                Clique aqui para ver nossos serviços
            </TitleAbout>
          </Footer>
          <Modal visible={aboutModalOpen}>
            <About closeAbout={handleCloseModal} />
          </Modal>
        </Container>
      </TouchableWithoutFeedback>
    );
};