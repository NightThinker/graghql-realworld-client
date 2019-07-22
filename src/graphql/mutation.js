import gql from 'graphql-tag';

export const ADD_IMAGE = gql`
  mutation uploadImage($file: Upload!) {
    singleUpload(file: $file) {
      filename
      mimetype
      encoding
    }
  }
`;
