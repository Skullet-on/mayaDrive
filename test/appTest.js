let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
let App = require('../app');

chai.use(chaiHttp);

describe('/GET app', () => {
	it('it should GET status is server up', (done) => {
		chai.request(app)
			.get('/api/status')
			.end((err, res) => {
				res.should.have.status(200);
				res.body.should.be.a('hash');
				done();
			});
	});
});
