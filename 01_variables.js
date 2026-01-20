const accountId = 14453
let accountEmail = "nupur@google.com"
var accountPassword = "123"
accountCity = "Bangalore"
let accountState;

// semi colon lgao ya na lgao frak nahi padta..js me dono chalte hai..but consistency ke liye ek jaisa use karna chahiye..ek jgah semicolon lagao to sab jagah lagao
// js me 3 tarah ke variable hote hai..var, let and const
// var is function scoped as whenever we declare any var of same name then it creates huge confusion in code..same name ke do varibale hojate the to jo change krna hai uski jgah dusra change hojata hai..isliye var ka use kam se kam karna chahiye..let and const ka use karna chahiye
/* prefer not to use var */
// let and const are block scoped

// accountId = 2 not allowed as const variable cannot be changed
console.log(accountId);
accountEmail = "newemail@example.com";
accountPassword = "newpassword123";
accountCity = "New York";
console.table([accountId, accountEmail, accountPassword, accountCity , accountState]);
// using console.table we can print multiple values in tabular format


