import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import { store } from "./stores";
import UserList from "./components/UserList";

const root = (
  <Provider {...store} >
    <UserList />
  </Provider>
);

ReactDOM.render(root, document.getElementById('root'));