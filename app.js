var colors = ["red","orange","yellow","green","blue"];

console.log(colors[0]);
console.log(colors[2]);

colors[4] = "ultraviolet";

var fourthColor = colors[3];

colors.push("black");

colors.unshift("white");

console.log(colors.length);
colors.pop();
console.log(colors.length);

for (var i = 0; i <= 5; i++) {
	console.log(colors[i]);
}

for (var i = 0; i <= 5; i++) {
	console.log(colors[i] +", index number: " + i)
}

var lastColor = console.log(colors[colors.length - 1]);