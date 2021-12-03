function task1 (x) {
  var x = parseInt(prompt("Please, insert X"));
  var y = x * x + 2 * x - 1;
  console.log(y);
}

function task2 (x, y) {
  var x = parseInt(prompt("Please, insert number X"));
  var y = parseInt(prompt("Please, insert number Y"));

  if (x % y == 0) {
    alert('Divisible');
  } else {
    alert('Not Divisible')
  }
}

function task3 () {
  var name = prompt("Please, enter Your name");
  var surname = prompt("Please, enter Your surname");
  var city = prompt("Please, enter Your city");
  var age = parseInt(prompt("Please, enter Your age"));
  console.log('Name: ' + name);
  console.log('Surname: ' + surname);
  console.log('City: ' + city);
  console.log('Age: ' + age);
}

function task4 (a, b, c) {
  var a = parseInt(prompt("Please, enter number a"));
  var b = parseInt(prompt("Please, enter number b"));
  var c = parseInt(prompt("Please, enter number c"));

  var sum = a + b + c;
  var minus = a - b - c;
  var multi = a * b * c;

  console.log('a + b + c = ' + sum);
  console.log('a - b - c = ' + minus);
  console.log('a * b * c = ' + multi);
}

function task5 (n, k) {
  var n = parseInt(prompt("Enter amount of pupils"));
  var k = parseInt(prompt("Enter amount of apples"));

  var div = k / n;

  console.log(Math.trunc(div));
}

function task6 (a, b) {
  var a = parseInt(prompt("Enter lenght of leg a"));
  var b = parseInt(prompt("Enter lenght of leg b"));

  var c = Math.sqrt(a * a + b * b);
  console.log('Lenght of hypohenuse = ' + c);
}

function task7 (avgSpeed, distance) {
  var avgSpeed = parseInt(prompt("Enter average speed"));
  var distance = parseInt(prompt("Enter distance"));

  if (distance / avgSpeed <= 2.25) {
    console.log('Yes, you can reach!');
  } else {
    console.log('Sorry, you can not reach!')
  }
}

function task8 (countOfWiskas) {
  var count = parseInt(prompt("Enter count"));

  if (countOfWiskas * 120 > 4000) {
    var sum = countOfWiskas * 120 * 0.9;
    console.log('Sum ' + sum + ' KZT');
  } else {
    var sum = countOfWiskas * 120;
    console.log('Sum ' + sum + ' KZT');
  }
}

function task9 (amountOfMoney, command) {
  var amountOfMoney = parseInt(prompt('Please, insert Your amount in KZT'));
  var command = prompt('Please, choose command: 1-convert to USD, 2-convert to EUR, 3-convert to GBP');

  switch(command) {
    case '1':
      var USD = amountOfMoney / 380;
      console.log(USD + ' USD');
      break;
    case '2':
      var EUR = amountOfMoney / 430;
      console.log(EUR + ' EUR');
      break;
    case '3':
      var GBR = amountOfMoney / 480;
      console.log(GBR + ' GBR');
      break;
    default:
      console.log('Error: such command is not exist!')
  }
}

function task10 (login, pass) {
  var login = prompt('Enter login');
  var pass = prompt('Enter password')

  if (login == 'user' && pass == 'qwerty') {
    console.log('Authentication completed');
  } else {
    console.log('Invalid login or password');
  }
}

function task11 (year) {
  var year = parseInt(prompt('Enter year'));

  if (year % 4 == 0 && year % 100 > 0) {
    console.log('YES');
  } else {
    console.log('NO');
  }
}

function task12 (score) {
  var score = parseInt(prompt('Enter Your score'));

  if (score >= 90) {
    console.log('A');
  } else if (score >= 75 && score < 90) {
    console.log('B');
  } else if (score >= 60 && score < 75) {
    console.log('C');
  } else if (score >= 50 && score < 60) {
    console.log('D');
  } else {
    console.log('not passed');
  }
}

function task13 (choice) {
  var choice = prompt('Choose Your brunch: 1-Science, 2- Humanitarian subjects, 3-Art, 4-Sport');

  switch(choice) {
    case '1':
      var subChoice = prompt('Вы выбрали Science - Науку. Выбор: 1-Math, 2-Physics');
      switch(subChoice) {
        case '1':
          alert('You are Financier');
          break;
        case '2':
          alert('You are Engineer');
          break;
        default:
          alert('error');
      }
      break;
    case '2':
      var subChoice = prompt('Вы выбрали Humanitarian subjects - Гуманитарные предметы. Выбор: 1-History, 2-Foreign Language');
      switch(subChoice) {
        case '1':
          alert('You are Historic or Diplomat');
          break;
        case '2':
          alert('You are Translator');
          break;
        default:
          alert('error');
      }
      break;
      case '3':
        var subChoice = prompt('Вы выбрали Art - Искусство. Выбор: 1-Drawing, 2-Singing');
        switch(subChoice) {
          case '1':
            alert('You are Painter or Architect');
            break;
          case '2':
            alert('You are Singer or Tamada');
            break;
          default:
            alert('error');
        }
        break;
        case '4':
          var subChoice = prompt('Вы выбрали Sport - Спорт. Выбор: 1-Team, 2-Individual');
          switch(subChoice) {
            case '1':
              alert('You are Footballer or Basketballer player');
              break;
            case '2':
              alert('You are Boxer or Tennis player');
              break;
            default:
              alert('error');
          }
          break;
        default:
          alert('Error')
  }
}

function task14 (a, b, c) {
  var a = parseInt(prompt('Enter side a'));
  var b = parseInt(prompt('Enter side b'));
  var c = parseInt(prompt('Enter side c'));

  if (a + b > c && a + c > b && c + b >a) {
    alert('YES');
  } else {
    alert('NO');
  }
}

function task15 (x1, y1, x2, y2) {
  var x1 = parseInt(prompt('Enter x1'));
  var y1 = parseInt(prompt('Enter y1'));
  var x2 = parseInt(prompt('Enter x2'));
  var y2 = parseInt(prompt('Enter y2'));

  if (x1 == x2 || y1 == y2) {
    console.log('YES');
  } else {
    console.log('NO');
  }

}

function task16 (amountOfMoney) {
  var amountOfMoney = parseInt(prompt('Please, insert Your amount in KZT'));
  var dollars, cents;

  var temp = amountOfMoney / 380;

  if (temp % 1 == 0) {
    alert('ONLY ' + temp + ' USD')
  } else {
    dollars = temp - temp % 1;
    cents = temp % 1 * 100;
    alert(dollars + ' USD and ' + cents.toPrecision(2) + ' Cents')
  }
}

function task17 (minutes) {
  var minutes = parseInt(prompt('Enter amount of minutes'));

  var hours, min;

  if (minutes % 60 == 0) {
    hours = minutes / 60;
    alert('ONLY ' + hours + ' HOURS');
  } else {
    hours = (minutes - minutes % 60) / 60;
    min = minutes % 60;
    alert(hours + ' HOURS and ' + min + ' MINUTES');
  }
}

function task18 (n) {
  var n = parseInt(prompt('Enter n'));
  var multiply = 1;

  for (var i = 1; i <= n; i++) {
    multiply = multiply * i;
  }
  console.log(multiply);
}

function task19 (n) {
  var multiply = 1;

  while(true) {
    var number = prompt('Enter a number');
    if (number == 0) {
      break;
    }
    multiply = multiply * number;
  }
  console.log(multiply);
}

function task20 () {
  var sum = 0;

  while(true) {
    var number = parseInt(prompt('Enter a number'));
    if (number == 0) {
      break;
    }
    if (number % 2 != 0) {
      sum = sum + number;
    }
  }
  console.log(sum);
}

function task21 (a, b) {
  var a = parseInt(prompt('Enter a'));
  var b = parseInt(prompt('ENter b'));
  var result = 1;

  for (var i = 0; i < b; i++) {
    result = result * a;
  }

  console.log(result);
}

function task22 (n) {
  var n = parseInt(prompt('Enter n'));
  var sum = 0;

  for (var i = 1; i <= n; i++) {
    sum = sum + 1/i;
  }
  console.log(sum);
}

function twoSum (nums, target) {
  var nums = [3,2,4];
  var target = 6;
  var sum = 0;

  for (var i = 0; i < nums.length-1; i++) {
    for (var j = i+1; j < nums.length; j++) {
      sum = nums[i] + nums[j];
      // console.log(sum);
      if (sum == target) {
        console.log('[' + i + ',' + j + ']');
        break;
      }
    }
    if (sum == target) break;
  }
}

function maxSumRow () {
  const array = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
          ];

  let maxSum = 0;
  let maxIndex;

  for (let i = 0; i < array.length; i++) {
    let sum = 0;
    for (let j = 0; j < array.length; j++) {
      sum += array[i][j];
    }
    if (sum > maxSum) {
      maxSum = sum;
      maxIndex = i;
    }
  }


  console.log('maxSum = ' + maxSum);
  console.log(array[maxIndex]);

  return maxIndex;
}

let index = maxSumRow();

// alert('Max sum index is: ' + index)