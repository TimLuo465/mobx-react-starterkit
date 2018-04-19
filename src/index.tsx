import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import store from "./store";
import router from "./router";

const root = (
  <Provider {...store} >
    {router}
  </Provider> 
);

ReactDOM.render(root, document.getElementById('root'));