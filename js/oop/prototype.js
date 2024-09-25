const a = [];
// ihertance
const user1 = {
  name: "mostafa",
  showUser() {
    console.log(`user is${this.name}`);
  },
};
user1.showUser();

const user2 = {
  name: "mohammad",
};

user2.__proto__;
console.log(user2.__proto__);
