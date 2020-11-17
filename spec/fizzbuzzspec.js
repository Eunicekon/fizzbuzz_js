// Print the numbers from 1 to 100
// If a number is divisible by 3 print "Fizz" instead
// If a number is divisible by 5 print "Buzz" instead
// If a number is divisible by 3 and 5 print "FizzBuzz" instead

// open SpecRunner.html = to run app on this Jamine app

describe ('fizzbuzz', function() {
  var fizzbuzz;

  describe('spy on output', function(){
    it('should print numbers 1-100', function(){
      fizzbuzz = new Fizzbuzz();
      spyOn(console, "log")
      var count = 0;
      while (count <= 99){
        count ++;
        console.log(answer.play(count));
      };
      expect(console.log).toHaveBeenCalledTimes(100);
    });
  })

  describe('knows when a number is', function(){
    it('divisible by 3', function(){
      fizzbuzz = new Fizzbuzz();
      expect(fizzbuzz.play(3)).toEqual('fizz');
    });
  });

  describe('knows when a number is', function() {
    it('divisible by 5', function(){
      fizzbuzz = new Fizzbuzz();
      expect(fizzbuzz.play(5)).toEqual('buzz');
    });
  });

  describe('knows when a number is', function(){
    it('divisible by 3 and 5', function(){
      fizzbuzz = new Fizzbuzz();
      expect(fizzbuzz.play(15)).toEqual('fizzbuzz')
    })
  })
});
