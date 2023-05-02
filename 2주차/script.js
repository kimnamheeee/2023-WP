function HelloWorld() {
    alert("Hello World!");
}

function printGugudan(dan, i) {
    if (i > 9) {
        return;
    }

    let result = dan * i;
    console.log(`${dan} x ${i} = ${result}`);

    printGugudan(dan, i + 1);
}

function printAllGugudan(dan) {
    if (dan > 9) {
        return;
    }

    console.log(`${dan}단`);
    printGugudan(dan, 1);
    console.log();

    printAllGugudan(dan + 1);
}

function Gugudan() {
    printAllGugudan(2);
}

Gugudan();