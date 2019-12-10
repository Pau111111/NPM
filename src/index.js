import {MomentFormat,moment1, sayHi, default as User}  from './moment.js'; // not {User}, just User
//let User = user.default;// the default export
const users=new User('Diego');
sayHi('User');
console.log(users.sayName());
console.log(moment1('the owner'));
console.log(MomentFormat);
