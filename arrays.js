const exampleArray = [100, 200, "hello", "world", true, false, {este: "es objeto", propiedad: "value"}, ["otro", "array"]];

exampleArray.length; // 8
exampleArray[0]; // 100
exampleArray.indexOf("hello"); // 2
exampleArray.pop(); // ["otro", "array"]
exampleArray.push("new value"); // 8
exampleArray.shift(); // 100
exampleArray.unshift("new value"); // 8
exampleArray.splice(1, 2); // [200, "hello"]
exampleArray.slice(1, 2); // [200]
exampleArray.reverse(); // ["new value", false, true, "world", "hello", 200, 100]
exampleArray.sort(); // [100, 200, "hello", "new value", true, false, {este: "es objeto", propiedad: "value"}, ["otro", "array"]]
exampleArray.concat([1, 2, 3]); // [100, 200, "hello", "new value", true, false, {este: "es objeto", propiedad: "value"}, ["otro", "array"], 1, 2, 3]
exampleArray.join(" "); // "100 200 hello new value true false [object Object] otro,array"
exampleArray.toString(); // "100,200,hello,new value,true,false,[object Object],otro,array"
exampleArray.includes("hello"); // true
exampleArray.includes("not included"); // false
exampleArray.every((value) => value > 0); // false
exampleArray.some((value) => value > 0); // true
exampleArray.filter((value) => value > 0); // [100, 200]
exampleArray.map((value) => value * 2); // [200, 400]
exampleArray.reduce((accumulator, currentValue) => accumulator + currentValue); // 100
exampleArray.reduce((accumulator, currentValue) => accumulator + currentValue, 10); // 110
exampleArray.find((value) => value > 0); // 100
exampleArray.findIndex((value) => value > 0); // 0
exampleArray.fill("new value"); // ["new value", "new value", "new value", "new value", "new value", "new value", "new value", "new value"]
exampleArray.copyWithin(2, 0); // ["new value", "new value", "new value", "new value", "new value", "new value", "new value", "new value"]
exampleArray.flat(); // ["new value", "new value", "new value", "new value", "new value", "new value", "new value", "new value"]
exampleArray.flatMap((value) => value); // ["new value", "new value", "new value", "new value", "new value", "new value", "new value", "new value"]
