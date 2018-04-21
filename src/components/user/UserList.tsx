import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { observer, inject } from 'mobx-react';
import * as styles from "./index.css";

@inject("userStore")
@observer
export default class UserList extends React.Component<any, {}> {
  render() {
    const { users } = this.props.userStore;

    return (
      <ul className={styles.c}>
        {
          users.map(user => <li key={user.id}>{user.name}</li>)
        }
      </ul>
    );
  }
};