import { MaterialIcons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { View } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    width: 100%;
`;

export const Header= styled.View`
    width: 100%;
    height: ${RFValue(113)}px;

    background-color: ${({ theme }) => theme.colors.secondary};
    
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 19px;
`;

export const Footer= styled.View`
    width: 100%;
    padding: 24px;
`;

export const Title= styled.Text`

`;
export const MidContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 0 20px;
`;

export const Icon = styled(MaterialIcons)`
    justify-content: center;
    align-items: center;

    color: ${({ theme }) => theme.colors.secondary};
    font-size: ${RFValue(72)}px;
`;

export const IconAgendamento = styled.View`

`;
export const IconZap = styled.Text`

`;
export const TitleAgendamento = styled.Text`
    font-size: ${RFValue(12)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
`;
export const TitleZap = styled.Text`
    font-size: ${RFValue(12)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
`;
export const TextAgendamento = styled.Text`
    padding-top: 10px;
    color: ${({ theme }) => theme.colors.text};
`;

export const TextZap = styled.Text`
    color: ${({ theme }) => theme.colors.text};
`;