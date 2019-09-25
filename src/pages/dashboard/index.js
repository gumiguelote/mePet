import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import {
   Container,
   Title,
   HorizontalCard,
   SquareCard,
   HorizontalList,
   CardText,
   CardTitle,
   PetDataText,
   PetTypeIcon,
   PetInformation
}
   from './styles';

const Dashboard = (props) => {

   const selectIconTypePet = (petType) => {
      if (petType === "dog") {
         return '🐶';
      } else {
         return '🐱';
      }
   }

   const mock = [
      {
         id: 1,
         imageUrl: "http://placekitten.com/200/100",
         title: "Proxima compra de Ração",
      },
      {
         id: 4,
         imageUrl: "http://placekitten.com/200/105",
         title: "Próxima Consulta"
      },
      {
         id: 3,
         imageUrl: "http://placekitten.com/200/103",
         title: "Próxima Vacina"
      },
   ];

   const personalDataMock =
   {
      petName: "Link",
      petType: "cat",
      petBirth: "11/11/2018",
      petYears: 3,
      petVetName:"Eduardo Rumon",
      petWeight: "1.32",
      lastVetVisitDate: "11/11/2018",
      lastVacineDate:"11/02/2019",
      lastVacineName:"Raiva",
      lastFoodBuyDate: new Date().toLocaleDateString('pt-BR')
   }


   const [data, setData] = useState(mock);
   const [personalData, setPersonalData] = useState(personalDataMock);

   return (
      <Container>
         <Title>Minha Rotina</Title>
         <HorizontalList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={data}
            renderItem={({ item }) => {
               return (
                  <TouchableOpacity onPress={() => alert('Pressed!')}>
                     <HorizontalCard source={{ uri: item.imageUrl }}>
                        <CardText>{item.title} </CardText>
                     </HorizontalCard>
                  </TouchableOpacity>
               );
            }}
            keyExtractor={(item => item.id.toString())}
         />
         <SquareCard>
            <CardTitle>Ficha do Pet</CardTitle>
            <PetInformation>Nome:
            <PetDataText> {personalData.petName}</PetDataText>
               <PetTypeIcon>{selectIconTypePet(personalData.petType)}</PetTypeIcon>
            </PetInformation>
            <PetInformation>Idade:
               <PetDataText> {personalData.petYears} Anos</PetDataText>
            </PetInformation>
            <PetInformation>Data da adoção:
               <PetDataText> {personalData.petBirth}</PetDataText>
            </PetInformation>
            <PetInformation>Peso estimado:
               <PetDataText> {personalData.petWeight} Kg</PetDataText>
            </PetInformation>
            <PetInformation>Vet. responsável:
               <PetDataText> {personalData.petVetName}</PetDataText>
            </PetInformation>
         </SquareCard>
         <SquareCard>
            <CardTitle>Últimas atividades</CardTitle>
            <PetInformation>Últ. compra ração:
               <PetDataText> {personalData.lastFoodBuyDate}</PetDataText>
            </PetInformation>
            <PetInformation>Últ. ida veterinário:
               <PetDataText> {personalData.lastVetVisitDate}</PetDataText>
            </PetInformation>
            <PetInformation>Úti. vacina:
               <PetDataText> {personalData.lastVacineName} em {personalData.lastVacineDate}</PetDataText>
            </PetInformation>
         </SquareCard>
      </Container>
   )
}

export default Dashboard
