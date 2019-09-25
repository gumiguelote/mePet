import styled from 'styled-components/native';
import { Fonts } from '../../defaultStyles';
import  Colors from '../../colors';

export const Container = styled.ScrollView`
`;

export const Title = styled.Text`
   font-size:30px;
   font-weight:600;
   padding:10px 15px 0px 15px;
`;

export const HorizontalCard = styled.View.attrs({
   imageStyle:{borderRadius:10, opacity:1}
})`
   border-radius:10px;
   width:200px;
   height:100px;
   margin:10px;
   margin-top:0px;
   box-shadow:2px 1px 10px rgba(36,37,38,0.13);
   display:flex;
   justify-content:center;
   background-color:${Colors.primary}
`;

export const HorizontalList = styled.FlatList`
  padding:10px 0px;
  padding-top:15px;
`;

export const SquareCard = styled.View`
   border-radius:5px;
   background-color:blue;
   width:95%;
   box-shadow:2px 1px 10px rgba(36,37,38,0.13);
   background-color: ${Colors.white};
   margin:0px 10px;
   padding-top:10px;
   padding-bottom:10px;
   margin-bottom:20px;
   border-color:${Colors.primary};
   border-style:dashed;
   border-width:2px;
`;

export const CardText = styled.Text`
  padding:20px;
  font-size:17px;
  font-weight:800;
  text-transform:uppercase;
  text-align:center;
  color:${Colors.white};
`;

export const CardTitle = styled.Text`
  padding:0px 0px 10px 15px;
  font-size:26px;
  font-weight:600;
  text-align:center;
`;

export const PetInformation = styled.Text`
  padding:2px 0px 2px 15px;
  font-size:18px;
  font-weight:600;
  text-align:left;
`;

export const PetDataText = styled.Text`
  padding:5px 20px;
  font-size:18px;
  font-family:${Fonts.bold};
  text-align:left;
  color:${Colors.primary};
`;

export const PetTypeIcon = styled.Text`
  font-size:30px;
`;

export const PetImage = styled.Image`
  font-size:30px;
  text-align:right;
  left:0
`;

