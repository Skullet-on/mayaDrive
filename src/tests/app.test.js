const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');

const expect = chai.expect;

chai.use(chaiHttp);

describe('/GET app', () => {
	it('it should GET status is server up', (done) => {
		chai.request(server)
			.get('/api/status')
			.end((err, res) => {
        		expect(res).to.be.status(200);
				expect(res.body).to.be.a('object');
				expect(res.body).to.deep.eql({'status': 'server up'});
			done();
		});
	});
});
