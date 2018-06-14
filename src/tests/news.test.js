const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');

const expect = chai.expect;

chai.use(chaiHttp);

describe('/GET news', () => {
	it('it should GET News is return JSON', (done) => {
		chai.request(server)
			.get('/api/news')
			.end((err, res) => {
				expect(res).to.be.status(200);
				expect(res.body).to.be.a('array');
				expect(res.body.length).to.be.equal(3);
			done();
		});
	});
});
