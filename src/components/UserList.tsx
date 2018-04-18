import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { observer, inject } from 'mobx-react';
import UserStore from "../stores/UserStore";

@inject("userStore")
@observer
export default class UserList extends React.Component<any, {}> {
    render() {
        const { users } = this.props.userStore;

        return (
            <ul>
                {
                    users.map(user => <li key={user.id}>{user.name}</li>)
                }
            </ul>
        );
    }
};