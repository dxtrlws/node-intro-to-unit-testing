const should = require('chai').should();
const fizz = require('../fizzBuzzer');

//unit tests
describe('fizz', function() {
    it('should return fizz buzz with 0 remainder when devided by 15', function() {
        const answer = fizz(30);
        answer.should.equal('fizz-buzz');
       
    });
});

describe('fizz', function() {
    it('should return buzz with 0 remainder when devided by 5', function() {
        const answer = fizz(20);
        answer.should.equal('buzz');
       
    });
});

describe('fizz', function() {
    it('should return fizz with 0 remainder when devided by 3', function() {
        const answer = fizz(9);
        answer.should.equal('fizz');
       
    });
});
