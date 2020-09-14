import { gql } from '@apollo/client';

export const AllPosts=gql`
query{
  allTimelines{
    eventDate
    eventType
    call{
      name
      callDuration
      incomeType
      callTime
      
      
    }
    message{
      name
      messageTime
      message
      messageIcon
      
    }
  }
}
`