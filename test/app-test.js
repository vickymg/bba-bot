var app = require('./../app');
var chai = require('chai');
var request = require('supertest');

var expect = chai.expect;

describe('server', function() {
  it('returns a status code of 200', function(done) {
    request(app)
      .get('/')
      .end(function(err, res) {
        expect(res.statusCode).to.equal(200);
        done();
      });
  });

  it('returns a \'Hello, world!\' message', function(done) {
    request(app)
      .get('/')
      .end(function(err, res) {
        expect(res.body.message).to.equal('Hello, world!');
        done();
      });
  });

});