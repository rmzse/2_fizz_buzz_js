describe('FizzBuzz Logic', function() {

    it('accepts a number and checks for its division by 15', function() {
      expect(test(45)).toEqual('fizzbuzz');
    });

    it('accepts a number and checks for its division by 5', function() {
      expect(test(20)).toEqual('buzz');
    });

    it('accepts a number and checks for its division by 3', function() {
      expect(test(63)).toEqual('fizz');
    });

    it('accepts a number which if not divisable by 3 or 5 returns the number itself', function(){
      expect(test(8)).toEqual(8);
    });

});
