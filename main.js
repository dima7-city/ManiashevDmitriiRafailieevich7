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

//8.Добавить примеры явного преобразования типов.
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