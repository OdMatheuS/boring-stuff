let thisIsFriends:string[] = ["Ryan", "Kieran", "Jason", "Yous"] // ["Ryan", "Yous"]
let notFriends: string[] = ["Peter", "Stephen", "Joe"]; // []

const isMyFriend = (listFriends: string[]) => {
  return listFriends.filter((name) => name.length === 4);
};

console.log(isMyFriend(thisIsFriends));
