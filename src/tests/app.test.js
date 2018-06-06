const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const server = require('../app');

const expect = chai.expect;

chai.use(chaiHttp);

describe('/GET app', () => {
	it('it should GET status is server up', (done) => {
		chai.request(server)
			.get('/api/status')
			.end((err, res) => {
				res.should.have.status(200);
        expect(res).to.be.status(200);
				res.body.should.be.a('object');
			done();
		});
	});
});
