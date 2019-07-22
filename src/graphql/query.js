import gql from 'graphql-tag';

export const GET_MESSAGES = gql`
  query {
    allMessages {
      id
      text
    }
  }
`;
