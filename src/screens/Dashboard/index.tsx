import React from "react";
import { Text, View } from "react-native";
import { 
  Container,
  Header,
  UserContainer,
  UserInfo,
  Photo,
  User,
  UserGretting,
  UserName,
  Icon,
  Title,
  LogoutButton,
} 
from "./styles";



export const Dashboard = () =>{
    return (
      <Container>
        <Header>
          <UserContainer>
            <UserInfo>
              <Photo 
                source={{ uri: 'https://avatars.githubusercontent.com/u/92161850?v=4'}}
              />
              <User>
                <UserGretting>Olá,</UserGretting>
                <UserName>Ag</UserName>
              </User>
            </UserInfo>
            <LogoutButton onPress={()=>{}}>
              <Icon name="power" />
            </ LogoutButton>
          </UserContainer>
          <Title>Seus Agendamentos</Title>
        </Header>


      </Container>
    );
}