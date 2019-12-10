import {moment, sayHi, default as User}  from './moment.js'; // not {User}, just User
//let User = user.default;// the default export
const users=new User('Diego');
sayHi('User');
console.log(users.sayName());
console.log(moment('the owner'));
