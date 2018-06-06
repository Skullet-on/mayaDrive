const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const app = require('../app');

chai.use(chaiHttp);

describe('/GET app', () => {
	it('it should GET status is server up', (done) => {
		chai.request(app)
			.get('api/status')
			.end((err, res) => {
				res.should.have.status(200);
				res.body.should.be.a('object');
				done();
			});
	});
});
