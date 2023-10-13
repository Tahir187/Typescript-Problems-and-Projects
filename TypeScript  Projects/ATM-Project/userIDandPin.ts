export const userID = Math.random().toString(36).substring(2);
export const userPIN = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
console.log(userID);
console.log(userPIN);
