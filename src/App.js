import React from 'react';
import { Query } from 'react-apollo';

import { GET_MESSAGES } from './graphql/query';

function App() {
  return (
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
  );
}

export default App;
