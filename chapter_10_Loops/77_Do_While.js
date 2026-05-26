let a = 10;

while (a < 10) {
    console.log(a);
    a++;
}// will not execute as condition is not matched

do {
    console.log(a);//10 Execute atleat 1 time
    a++;
} while (a < 10);