const year = 2059;

function isLeapYear(year) {
    let leap;
    leap = year % 4 === 0;

    if (year % 100 === 0) {
        leap = year % 400 === 0;
    }

    return leap;
}

if (isLeapYear(year)) {
    console.log(`Rok ${year} jest przestępny`);
} else {
    console.log(`Rok ${year} nie jest przestępny`);
}