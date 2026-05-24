/*Test Case Pass/Fail Verdict
Problem: Compare actual result with expected result and print test verdict.
Sample Input/Output:
expected = "Login Successful"
actual   = "Login Successful"
Output: ✅ Test Passed
expected = "Login Successful"
actual   = "Invalid Credentials"
Output: ❌ Test Failed — Expected: Login Successful, Got: Invalid Credentials*/

expected = "Login Successful"
actual   = "Login Successful"
//actual   = "Invalid Credentials"

if (expected === actual){
     console.log("✅ Test Passed");
}
else if("Invalid Credentials" === actual){
     console.log("❌ Test Failed — Expected: Login Successful, Got: Invalid Credentials");
}
else{
    console.log(" Test not started");
}