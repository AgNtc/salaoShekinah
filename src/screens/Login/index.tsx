import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

// import AppSvg from '../../assets/apple.svg';
// import GoogleSvg from '../../assets/google.svg';
// import LogoSvg from '../../assets/Cabelereiro.svg';
import LogoSvg2 from '../../assets/Cabelereiro2.svg';

import { 
    Container,
    Header,
    TitleWrapper,
    Title,
    LoginTitle,
    Footer,
} from './styles';



export const Login = () =>{
    return(
        <Container>
            <Header>
                <TitleWrapper>
                    <LogoSvg2 
                        width={RFValue(120)}
                        height={RFValue(80)}
                    />
                    <Title>
                        Seu agendamento {`\n`}
                        na palma da mão {`\n`}
                        aqui no nosso App {`\n`}
                    </Title>
                </TitleWrapper>

                <LoginTitle>
                    Faça seu login com {`\n`}
                    uma das contas abaixo {`\n`}
                </LoginTitle>
            </Header>

            <Footer>

            </Footer>
        </Container>
    )
};