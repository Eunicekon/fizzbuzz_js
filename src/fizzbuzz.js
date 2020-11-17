class Fizzbuzz {

  play(number) {
    if (number % 3 === 0 && number % 5 === 0) {
      return 'fizzbuzz'
    };
    if (number % 5 === 0) {
      return 'buzz'
    };
    if (number % 3 === 0){
      return 'fizz'
    };
    return number;
  }; 
};

var answer = new Fizzbuzz();

var count = 0;
while (count <= 99){
  count ++;
  console.log(answer.play(count));
};


