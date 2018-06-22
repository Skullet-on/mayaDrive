const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');

const expect = chai.expect;

chai.use(chaiHttp);

describe('News', () => {
	describe('GET /api/news', () => {
		it('should return JSON', (done) => {
			chai.request(server)
				.get('/api/news')
				.end((err, res) => {
					expect(res).to.be.status(200);
					expect(res.body).to.be.a('array');
					done();
			});
		});
	});

	describe('POST api/news', () => {
		it('should create a news', (done) => {
			chai.request(server)
				.post('/api/news')
				.type('json')
				.send({
					'title': 'testTitle',
					'text': 'testText'
				})
				.end((err, res) => {
					expect(res).to.be.status(201);
					expect(res.body).to.be.a('object');
					expect(res.body).to.have.property('title');
					expect(res.body).to.have.property('text');
					expect(res.body.title).to.deep.equal('testTitle');
					expect(res.body.text).to.deep.equal('testText');
					done(err);
			});
		});

		it('should give status 400 if title or text is empty', (done) => {
			chai.request(server)
				.post('/api/news')
				.type('json')
				.send()
				.end((err, res) => {
					expect(res).to.be.status(400);
					expect(res.body.errors).to.be.a('array');
					expect(res.body.errors).to.include('title is empty');
					expect(res.body.errors).to.include('text is empty');
					done(err);
			});
		});

		it('should give status 400 if text too long', (done) => {
			chai.request(server)
				.post('/api/news')
				.type('json')
				.send({
					'title': '123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901',
					'text': '12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901'
				})
				.end((err, res) => {
					expect(res).to.be.status(400);
					expect(res.body.errors).to.be.a('array');
					expect(res.body.errors).to.include('title should contain no more than 200 characters');
					expect(res.body.errors).to.include('text should contain no more than 1000 characters');
					done(err);
			});
		});

		it('should give status 500 if bad request', (done) => {
			chai.request(server)
				.post('/api/news')
				.type('json')
				.send({
					'title': {'lol': 'asd'},
					'text': ';'
				})
				.end((err, res) => {
					expect(res).to.be.status(500);
					done(err);
			});
		});
	});
});
