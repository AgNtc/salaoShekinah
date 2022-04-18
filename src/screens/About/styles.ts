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