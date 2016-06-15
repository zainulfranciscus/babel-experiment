import {Person} from '../src/person';
describe('Unit test for Person', function () {
  it('one is equal to one', function () {
    expect(1).toBe(1);
  });

  it('greet should return', function(){
  	var p = new Person("Tyler")
  	expect(p.greet()).toBe("Hello my name is Tyler");
  })
});