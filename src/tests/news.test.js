const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');

const expect = chai.expect;

chai.use(chaiHttp);

describe('News', () => {
	it('News GET /api/news should return JSON', (done) => {
		chai.request(server)
			.get('/api/news')
			.end((err, res) => {
				expect(res).to.be.status(200);
				expect(res.body).to.be.a('array');
				done();
		});
	});

	it('it should POST News is create new news', (done) => {
		chai.request(server)
			.post('/api/news')
			.type('json')
			.send({
				'title': 'testTitle',
				'text': 'testText'
			})
			.end((err, res) => {
				expect(res).to.be.status(200);
				expect(res.body).to.be.a('object');
				expect(res.body).to.have.property('title');
				expect(res.body).to.have.property('text');
				expect(res.body.title).to.deep.equal('testTitle');
				expect(res.body.text).to.deep.equal('testText');
				done(err);
		});
	});
});