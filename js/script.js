// base
var base = prompt('base');

if (isNaN(base)) {
    alert('base is not a number!')
}

base = Math.round(base);

console.log('base=', base);
// exp
var exp = prompt('exp');

if (isNaN(exp)) {
    alert('exp is not a number!')
}

exp = Math.round(exp);

console.log('exp=', exp);
// Math.pow test
var mathPow = Math.pow(base, exp);

console.log('Math.pow=', mathPow);
// pow function
function pow(base, exp) {
    var result = base;

    if (exp < 0) {
        var modul = -1;
        exp = exp * modul;

        for (var i = 1; i < exp; i++) {
            result = result * base;
        }
        result = 1 / result;
        return result;

    } else {
        for (i = 1; i < exp; i++) {
            result = result * base;
        }
        return result;
    }
}
console.log('pow function=', pow(base, exp));
// does the pow function match with Math.pow?
if (mathPow != pow(base, exp)) {
    console.log('pow function dos not match');
} else {
    console.log('pow function is correct');
}
