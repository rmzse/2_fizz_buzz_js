function test(number) {
  var ret;
  if( (number % 3 === 0)&&(number % 5 === 0) )  { ret = 'fizzbuzz'; }
  else if( number % 3 === 0) { ret = 'fizz'; }
  else if( number % 5 === 0) { ret = 'buzz'; }
  return ret;
}
