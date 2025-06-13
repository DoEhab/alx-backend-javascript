const chai = require('chai');
const expect = chai.expect;
const app = require('./api');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

describe('return http responses', () => {
    it('return status code', (done) =>{
        chai.request(app)
        .get('/')
        .end((err, res) => {
            expect(res).to.have.status(200);
            done();
        });
    });
    it('return data', (done) =>{
        chai.request(app)
        .get('/')
        .end((err, res) => {
            expect(res.text).to.equal('Welcome to the payment system');
            done();
        });
    });
    it('return header', (done) =>{
        chai.request(app)
        .get('/')
        .end((err, res) => {
            expect(res).to.have.header('content-type', /text\/html/);
            done();
        });
    });
});