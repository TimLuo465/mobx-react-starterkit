import { observable } from 'mobx';

export default class UserStore {
    @observable users = [];

    constructor() {
        this.users = [{
            id: "1",
            name: "张三",
        }, {
            id: "2",
            name: "李四"
        }];
    }

    getUsers() {
        return this.users;
    }
}