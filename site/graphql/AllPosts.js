import { gql } from '@apollo/client';

export const AllPosts=gql`
query{
    allPosts{
     dateList
     call{
       name
     }
   
     message{
       name
     }
   } 
   
   
   }

`