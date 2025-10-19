const name = "Dmitrii";
const age = 33;
const isFalse = false;
const car = null;
const home = undefined;

console.log(name);
console.log(age);
console.log(isFalse);
console.log(car);
console.log(home);

console.log(typeof(name));
console.log(typeof(age));
console.log(typeof(isFalse));
console.log(typeof(car));
console.log(typeof(home));

// 8.Добавить примеры явного преобразования типов.
// Строковое преобразование.

console.log(typeof String(age)); // число 33 можно преобразовать в тип данных "строка", значение будет "33";
console.log(typeof String(isFalse)); // false можно преобразовать в тип данных "строка", значение будет "false";
console.log(typeof String(car)); // null можно преобразовать в тип данных "строка", значение будет "null";
console.log(typeof String(home)); // undefined можно преобразовать в тип данных "строка", значение будет "undefined".

// Численное преобразование.

console.log(typeof Number(name)); // имя Dmitrii можно преобразовать в тип данных "число", но значение будет NaN;
console.log(typeof Number(isFalse)); // false можно преобразовать в тип данных "число", но значение будет 0;
console.log(typeof Number(car)); // null можно преобразовать в тип данных "число", но значение будет 0;
console.log(typeof Number(home)); // undefined можно преобразовать в тип данных "число",но значение будет NaN.

// Логическое преобразование.

console.log(typeof Boolean(age)); // число 33 можно преобразовать в тип данных "boolean", но значение будет true;
console.log(typeof Boolean(name)); // имя Dmitrii можно преобразовать в тип данных "boolean", но значение будет true;
console.log(typeof Boolean(car)); // null можно преобразовать в тип данных "boolean", но значение будет false;
console.log(typeof Boolean(home)); // undefined можно преобразовать в тип данных "boolean",но значение будет false.

// 9.Добавить примеры неявного преобразования типов.
let a = 1;
let b = true;
let c = false;

console.log(a+(b+c)); //значение будет 2, так как true это единица, а false это ноль (1+(1+0))=2 (если есть + с хотя бы одним "boolean", все другие значения автоматически превращаются в числа);
console.log(typeof(a+(b+c))); // а тип бует number;

let d = 1;
let e = 3;
let f = "груши";

console.log(d+e+f); //значение будет "4 груши" (если есть + с хотя бы одной "строкой", все другие значения автоматически превращается в строку);
console.log(typeof(d+e+f)); // а тип бует string;

let g = null;
let h = 5;
let i = undefined;

console.log(g+h+i); //значение будет NaN;
console.log(typeof(g+h+i)); // а тип бует number.

// 10. Добавить примеры операторов сравнения.

let j = "хлеб";
let k = "сахар";

console.log(j>k); // При сравнение строчных переменных между собой. Сначала сравниваются первые символы строк. Если первый символ первой строки больше (меньше), чем первый символ второй, то первая строка больше (меньше) второй. Сравнение завершено. В нашем случае будет true.

let l = 5;
let m = null;

console.log(l===m); // Если l и m имеют разные типы, то проверка l === m немедленно возвращает false безпопытки их преобразования.