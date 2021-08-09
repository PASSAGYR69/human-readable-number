module.exports = function toReadable (num) {

  this.exept = {
    '0' : 'zero',
    '1' : 'one',
    '2' : 'two',
    '3' : 'three',
    '4' : 'four',
    '5' : 'five',
    '6' : 'six',
    '7' : 'seven',
    '8' : 'eight',
    '9' : 'nine' ,
    '10' : 'ten', 
    '11' : 'eleven',
    '12' : 'twelve',
    '13' : 'thirteen',
    '14' : 'fourteen',
    '15' : 'fifteen',
    '16' : 'sixteen',
    '17' : 'seventeen',
    '18' : 'eighteen',
    '19' : 'nineteen',
    '20' : 'twenty',
    '30' : 'thirty',
    '40' : 'forty',
    '50' : 'fifty',
    '60' : 'sixty',
    '70' : 'seventy',
    '80' : 'eighty',
    '90' : 'ninety',
    '100' : 'hundred',
  }
  if (num == 100) {return 'one hundred'}
 
  stringNum = num.toString()
 
  for (let key in this.exept) { // ЕСЛИ ЧИСЛО ПОПАЛО В ИСКЛЮЧЕНИЯ
    if (stringNum == key) {return this.exept[key]}
  }
 
  this.method = (strNum) => {        // МЕТОД ДЛЯ 20 - 100
        
    for (let key in this.exept) { 
      if (strNum == key) {return this.exept[key]}
   }
    a1 = strNum.slice(1);
    a2 = strNum.slice(0, 1) + '0';
    return this.exept [a2] + ' ' + this.exept [a1] ;
  } 
 
  if (num > 20 && num < 100) {     //ВОЗВРАЩАЕТ ЧИСЛО 20-100
    return this.method(stringNum);
  }
 
  if (num > 100 && num < 1000) {    //ВОЗВРАЩАЕТ ЧИСЛО 100-1000
    const a1 = stringNum.slice(0, 1);
    stringNum = stringNum.slice(1, 3);

    if (stringNum == '00') {a2 = ''}
    else if (stringNum[0] == '0') {a2 = ' ' + this.exept[stringNum[1]]}
    else {a2 = ' ' + this.method(stringNum)};

    return this.exept[a1] + ' hundred' + a2;
  }
}
