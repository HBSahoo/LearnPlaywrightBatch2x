/* Bug Severity Classifier

Problem: Given a bug's impact score (1–10), classify the severity.
9–10 → Critical (block release)
7–8 → High
4–6 → Medium
1–3 → Low
Anything else → Invalid score
Sample Input/Output:
Input: 9
Output: Severity: Critical — Block release
Input: 5
Output: Severity: Medium */

let input = 8;

if(input >=9 && input <= 10){
    console.log("Severity: Critical-block release");
}
else if(input >= 7 && input <=8){
    console.log("Severity: High");
}
else if(input >= 4 && input <=6){
    console.log("Severity: Medium");
}
else if(input >= 1 && input <=3){
    console.log("Severity: Low");
}
else{
    console.log("invalid sevierity");
}