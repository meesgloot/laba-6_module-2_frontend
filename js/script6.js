let group1 = [
	{name: "Иванов", score: 80},
	{name: "Петров", score: 65},
	{name: "Сидоров", score:49},
	{name: "Литвинова", score: 92},
	{name: "Вегнер", score: 100},
	
	{name: "Васин", score: 81},
	{name: "Александров", score: 10},
	{name: "Петухов", score: 87},
	{name: "Березкина", score: 28},
	{name: "Антипова", score: 46}
];

let group2 = [
	{name: "Лихо", score: 68},
	{name: "Капустянская", score: 94},
	{name: "Альховская", score: 47},
	{name: "Чернова", score: 57},
	{name: "Шиловский", score: 83},
	
	{name: "Арлихинов", score: 74},
	{name: "Титов", score: 38},
	{name: "Смирнов", score: 79},
	{name: "Ракуненков", score: 93},
	{name: "Веронт", score: 82}
];

let number1 = group1.filter(item => item.score >= 80);
let number2 = group2.filter(item => item.score >= 80);


alert("В первой группе: " + number1.length);
alert("Во второй группе: " + number2.length);

let group3 = number1.concat(number2);

alert("Всего: " + group3.length);

group3=group3.sort((a,b) => a['score'] < b['score'] ? 1 : -1);

let src = "";
for(let i = 0; i < group3.length; i++){
	src += group3[i].name + "  " + group3[i].score + "\n";
}
alert(src);

let middleNumber = 0;
for(let i = 0; i < group3.length; i++){
	middleNumber += group3[i].score;
}
alert("Средний балл отобранных на работу студентов: " + (middleNumber / group3.length));
