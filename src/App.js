import React from 'react';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import { withAuthenticator } from "aws-amplify-react";
Amplify.configure(aws_exports);

function App() {
  return(
    <div>Hello</div>
  );
}

export default withAuthenticator(App, { includeGreetings: true });
