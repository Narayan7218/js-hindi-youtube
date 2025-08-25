const accountId = 14453
let accountEmail = "nara@google.com"
var accountPassword = "12344"
accountCity = "pune"
let accountState;

//accountId = 2  // not allowed

accountEmail = "na@hv.com"
accountPassword = "122344"
accountCity = "Bengaluru"

console.log(accountId);

/*
prefer not to use var
becuse of issue in block scope and functional scope
*/

console.table([accountId, accountPassword, accountCity, accountState])
