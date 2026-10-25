// Rest of the param.
//"...results" is array of object & this one be present in last not in 1st
//function logResult(...results, suiteName)// wrong
//function logResult(suiteName, ...results)// correct

function logResult(suiteName, ...results){
    console.log(suiteName);
    console.log(results);
}

logResult('Login Test', 1, 2, 3);
logResult('Reg Test', "Hello", "Pramod");