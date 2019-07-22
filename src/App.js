import React, { useRef, useState } from 'react';
import { Query, Mutation } from 'react-apollo';

import { GET_MESSAGES } from './graphql/query';
import { ADD_IMAGE } from './graphql/mutation';

function App() {
  const [fileName, setFileName] = useState();
  const inputFileRef = useRef();

  const handleChange = () => {
    const file = inputFileRef.current.files[0];

    // if (!file) return;
    // const fileName = file.name;

    setFileName(file);
  };
  return (
    <React.Fragment>
      <Mutation mutation={ADD_IMAGE}>
        {(uploadImage, { data }) => (
          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                uploadImage({ variables: { file: fileName } });
                console.log('TCL: App -> fileName', fileName);
              }}
            >
              <input type="file" name="myFile" ref={inputFileRef} onChange={handleChange} />
              <button type="submit">Add Image</button>
            </form>
            <Query query={GET_MESSAGES}>
              {({ loading, error, data }) => {
                console.log('TCL: App -> data', data);
                if (loading) return 'Loading...';
                if (error) return `Error! ${error.message}`;

                return (
                  <ul>
                    {data.allMessages.map((message) => (
                      <li key={message.id}>{message.text}</li>
                    ))}
                  </ul>
                );
              }}
            </Query>
          </div>
        )}
      </Mutation>
    </React.Fragment>
  );
}

export default App;
