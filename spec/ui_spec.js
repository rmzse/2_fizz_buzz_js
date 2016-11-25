describe('FizzBuzz UI', function(){
  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = 'base/spec/fixtures';
    loadFixtures('fizzbuzz_index.html');
    $.holdReady(false);
  });

  it('accepts the number 45 and displays \"fizzbuzz\"', function(){
    $('#number').val('45');
    $('#btn').click();
    expect($('#message').text()).toEqual('fizzbuzz');
  });
});
