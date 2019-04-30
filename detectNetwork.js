// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  // Input: String (credit card #)
  // Output: String (Identified cc)
  // Method: 1.
  // Constraints: First few numbers of string are prefix, and the total number of digits in the number
  //Cards Tested: Diner's Club(3), American Express, Visa, MasterCard, Discover, Maestro, China UnionPay, Switch

  var length12 = {};
  length12[JSON.stringify(_.flatten([5018, 5020, 5038, 6304]))] = 'Maestro';

  var length13 = {};
  length13[JSON.stringify(_.flatten([5018, 5020, 5038, 6304]))] = 'Maestro';
  length13[JSON.stringify(_.flatten([4]))] = 'Visa';

  var length14 = {};
  length14[JSON.stringify(_.flatten([5018, 5020, 5038, 6304]))] = 'Maestro';
  length14[JSON.stringify(_.flatten([38, 39]))] = "Diner's Club";

  var length15 = {};
  length15[JSON.stringify(_.flatten([5018, 5020, 5038, 6304]))] = 'Maestro';
  length15[JSON.stringify(_.flatten([34, 37]))] = 'American Express';
  //length15[JSON.stringify(_.flatten([36, 2014, 2149]))] = "Diner's Club"

  var length16 = {};
  length16[JSON.stringify(_.flatten([5018, 5020, 5038, 6304]))] = 'Maestro';

  //length16[JSON.stringify(_.flatten([36, 54, 55, _.range(38, 40), _.range(300, 306), 3095]))] = "Diner's Club";
  length16[JSON.stringify(_.flatten([_.range(51, 56)]))] = 'MasterCard';
  length16[JSON.stringify(_.flatten([6011, _.range(644, 650), 65]))] = 'Discover';
  length16[JSON.stringify(_.flatten([_.range(622126, 622926),_.range(624, 627), _.range(6282, 6289)]))] = 'China UnionPay';
  length16[JSON.stringify(_.flatten([4903, 4905, 4911, 4936, 564182, 633110, 6333, 6759]))] = 'Switch';
  length16[JSON.stringify(_.flatten([4]))] = 'Visa';


  var length17 = {};
  length17[JSON.stringify(_.flatten([5018, 5020, 5038, 6304]))] = 'Maestro';
  //length17[JSON.stringify(_.flatten([36, _.range(38, 40), _.range(300, 306), 3095]))] = "Diner's Club";
  //length17[JSON.stringify(_.flatten([6011, _.range(622126, 622926), _.range(624000, 627000), _.range(628200, 628900), 64, 65]))] = 'Discover Card';
  length17[JSON.stringify(_.flatten([_.range(622126, 622926),_.range(624, 627), _.range(6282, 6289)]))] = 'China UnionPay';

  var length18 = {};
  length18[JSON.stringify(_.flatten([5018, 5020, 5038, 6304]))] = 'Maestro';
  //length18[JSON.stringify(_.flatten([36, _.range(38, 40), _.range(300, 306), 3095]))] = "Diner's Club";
  //length18[JSON.stringify(_.flatten([6011, _.range(622126, 622926), _.range(624000, 627000), _.range(628200, 628900), 64, 65]))] = 'Discover Card';
  length18[JSON.stringify(_.flatten([_.range(622126, 622926),_.range(624, 627), _.range(6282, 6289)]))] = 'China UnionPay';
  length18[JSON.stringify(_.flatten([4903, 4905, 4911, 4936, 564182, 633110, 6333, 6759]))] = 'Switch';

  var length19 = {};
  length19[JSON.stringify(_.flatten([5018, 5020, 5038, 6304]))] = 'Maestro';
  length19[JSON.stringify(_.flatten([6011, _.range(644, 650), 65]))] = 'Discover';
  length19[JSON.stringify(_.flatten([_.range(622126, 622926),_.range(624, 627), _.range(6282, 6289)]))] = 'China UnionPay';
  length19[JSON.stringify(_.flatten([4903, 4905, 4911, 4936, 564182, 633110, 6333, 6759]))] = 'Switch';
  //length19[JSON.stringify(_.flatten([36, _.range(38, 40), _.range(300, 306), 3095]))] = "Diner's Club"
  length19[JSON.stringify(_.flatten([4]))] = 'Visa';

  if(cardNumber.length === 12){
    for(var i = 7; i > 0; i--){
      var cardSlice = cardNumber.slice(0, i);
      for(var key in length12){//
        //console.log(key.split(","))
        var newArr = key.split(',');//split array
        newArr[0] = newArr[0].replace(/\[/g, ''); //parse brackets out
        newArr[newArr.length-1] = newArr[newArr.length-1].replace(/\]/g, '');
        if(newArr.includes(cardSlice)){
          return length12[key];
        }
      }
    }
  }
  else if(cardNumber.length === 13){
    for(var i = 7; i > 0; i--){
      var cardSlice = cardNumber.slice(0, i);
      for(var key in length13){//
        //console.log(key.split(","))
        var newArr = key.split(',');//split array
        newArr[0] = newArr[0].replace(/\[/g, ''); //parse brackets out
        newArr[newArr.length-1] = newArr[newArr.length-1].replace(/\]/g, '');
        if(newArr.includes(cardSlice)){
          return length13[key];
        }
      }
    }
  }
  else if(cardNumber.length === 14){
    for(var i = 7; i > 0; i--){
      var cardSlice = cardNumber.slice(0, i);
      for(var key in length14){//
        //console.log(key.split(","))
        var newArr = key.split(',');//split array
        newArr[0] = newArr[0].replace(/\[/g, ''); //parse brackets out
        newArr[newArr.length-1] = newArr[newArr.length-1].replace(/\]/g, '');
        if(newArr.includes(cardSlice)){
          return length14[key];
        }
      }
    }
  }
  else if(cardNumber.length === 15){
    for(var i = 7; i > 0; i--){
      var cardSlice = cardNumber.slice(0, i);
      for(var key in length15){//
        //console.log(key.split(","))
        var newArr = key.split(',');//split array
        newArr[0] = newArr[0].replace(/\[/g, ''); //parse brackets out
        newArr[newArr.length-1] = newArr[newArr.length-1].replace(/\]/g, '');
        if(newArr.includes(cardSlice)){
          return length15[key];
        }
      }
    }
  }
  else if(cardNumber.length === 16){
    for(var i = 7; i > 0; i--){
      var cardSlice = cardNumber.slice(0, i);
      for(var key in length16){//
        //console.log(key.split(","))
        var newArr = key.split(',');//split array
        newArr[0] = newArr[0].replace(/\[/g, ''); //parse brackets out
        newArr[newArr.length-1] = newArr[newArr.length-1].replace(/\]/g, '');
        if(newArr.includes(cardSlice)){
          return length16[key];
        }
      }
    }
  }
  else if(cardNumber.length === 17){
    for(var i = 7; i > 0; i--){
      var cardSlice = cardNumber.slice(0, i);
      for(var key in length17){//
        //console.log(key.split(","))
        var newArr = key.split(',');//split array
        newArr[0] = newArr[0].replace(/\[/g, ''); //parse brackets out
        newArr[newArr.length-1] = newArr[newArr.length-1].replace(/\]/g, '');
        if(newArr.includes(cardSlice)){
          return length17[key];
        }
      }
    }
  }
  else if(cardNumber.length === 18){
    for(var i = 7; i > 0; i--){
      var cardSlice = cardNumber.slice(0, i);
      for(var key in length18){//
        //console.log(key.split(","))
        var newArr = key.split(',');//split array
        newArr[0] = newArr[0].replace(/\[/g, ''); //parse brackets out
        newArr[newArr.length-1] = newArr[newArr.length-1].replace(/\]/g, '');
        if(newArr.includes(cardSlice)){
          return length18[key];
        }
      }
    }
  }
  else if(cardNumber.length === 19){
    for(var i = 7; i > 0; i--){
      var cardSlice = cardNumber.slice(0, i);
      for(var key in length19){//
        //console.log(key.split(","))
        var newArr = key.split(',');//split array
        newArr[0] = newArr[0].replace(/\[/g, ''); //parse brackets out
        newArr[newArr.length-1] = newArr[newArr.length-1].replace(/\]/g, '');
        if(newArr.includes(cardSlice)){
          return length19[key];
        }
      }
    }
  }
  else{
    return "";
  }
}


