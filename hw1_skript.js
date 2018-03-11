<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<script>

// Перше завдання

// var day = prompt('Який сьогодні день?', ' ');
// alert('Сьогодні ' + day) ;


// (Друге завдання)


// var message;
// var role = prompt('Ты кто?')
// if (role == 'Гость') {
//   message = 'Привет';
// } else if (role == 'Директор') {
//   message = 'Здравствуйте';
// } else if (role == '') {
//   message = 'Познаqомимся?';
// } else {
//   message = ''; 
// }
// alert(message);


// var role = prompt('Ти хто?', '');

// var message = (role == "Директор") ? "Доборого дня!":
// 			(role == "Гость") ? "Привіт!": "Познайомимся?";
// alert(message);


// Третє завдання


// var name = prompt('Какое "официальное" название Javascript?','');
// if (name == "EcmaScript") {
// alert("Верно!");
// }
// else {
// alert("Не знаете?EcmaScript!");
// }


// Четверте завдання


// var passwords;
// var name = prompt('Хто прийшов?','') ;

// if (name == "Адмін"){
// 	pass = prompt("А пароль не забув?","");
// 	if ( passwords == "Чорний Властелин") {
// 		alert("Все вірно!") ;
// 	} else if (passwords == 0){
// 		alert("Вхід відменено!") ;
// 	} else {
// 		alert("Пароль невірний!") ;
// 	} 
// } else if (name == null) {
// 	alert("Вхід відмінено") ;
// } else {
// 	alert("Я вас не знаю") ;


// Пяте завдання


// 	var fibo = [0,1];
 //	for(i=0; i<13; i++){
 // fibo.push(fibo[i]+fibo[i+1]);
 // }
 // console.log(fibo);
// var value = prompt ('введіть ціле число', '');
// if ( value > 0) 
// {
//  	alert( 1 );
//  } 
// else if (value < 0 ) 
//  {
// 	alert( -1 );
// }
// else 
//  {
// 	alert( 0 );
// }

//Факторіал-рекурсія;

// function factorial(n) {
// 	return n != 1 ? n * factorial(n - 1) : 1;
// 	}





// Шосте завдання


// // Возвращает случайное целое число между min (включительно) и max (не включая max)
// // Использование метода Math.round() даст вам неравномерное распределение!
// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// 
// while (1) {
// 	var first = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
// 	var second = Math.floor(Math.random() * (20 - 10 + 1)) + 10;

//  	if (+prompt(first + ' + ' + second + '?') === first + second) {
// 		alert ('True');
// 		break;
// 		}
// 	}

	</script>

</body>
</html>