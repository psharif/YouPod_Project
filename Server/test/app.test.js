const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../src/app');
const should = chai.should();

chai.use(chaiHttp);

describe('Get /video', () => {
  it('should return 5 videos', (done) => {
    chai
    .request(app)
    .get('/videos')
    .end(
      (err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.be.eql(5);
        done();
    });
  })
})
