export default class User { // just add "default"
  constructor(name) {
    this.name = name;
  }
  sayName(){
    return `Hi, I'm ${this.name}`;
  }
}
export function sayHi(user) {
    alert(`Hello, ${user}!`);  
}
export const moment=(gretting)=>{
    return `Grettings from ${gretting}`
}
