const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const {TITLE_MAX_LENGTH, TEXT_MAX_LENGTH} = require('../utils/variables');

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

	describe('GET /api/news/:news_id', () => {
		it('should return JSON', (done) => {
			chai.request(server)
				.get('/api/news/4')
				.end((err, res) => {
					expect(res).to.be.status(200);
					expect(res.body.id).to.be.equal(4);
					done();
			});
		});
	});

	describe('PUT /api/news/:news_id', () => {
		it('should have status 202', (done) => {
			chai.request(server)
				.put('/api/news/4')
				.type('json')
				.send({
					'title': 'updated title',
					'text': 'updated text'
				})
				.end((err, res) => {
					expect(res).to.be.status(202);
					done(err);
			});
		});

		it('should give status 400 if text too long', (done) => {
			chai.request(server)
				.put('/api/news/4')
				.type('json')
				.send({
					'title': '123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901',
					'text': '12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901'
				})
				.end((err, res) => {
					expect(res).to.be.status(400);
					expect(res.body.errors).to.be.a('array');
					expect(res.body.errors).to.include(`title should contain 1 - ${TITLE_MAX_LENGTH} characters`);
					expect(res.body.errors).to.include(`text should contain 1 - ${TEXT_MAX_LENGTH} characters`);
					done(err);
			});
		});

		it('should give status 400 if title or text is empty', (done) => {
			chai.request(server)
				.put('/api/news/4')
				.type('json')
				.send({
					'title': '',
					'text': ''
				})
				.end((err, res) => {
					expect(res).to.be.status(400);
					expect(res.body.errors).to.be.a('array');
					expect(res.body.errors).to.include(`title should contain 1 - ${TITLE_MAX_LENGTH} characters`);
					expect(res.body.errors).to.include(`text should contain 1 - ${TEXT_MAX_LENGTH} characters`);
					done(err);
			});
		});

		it('should have status 500', (done) => {
			chai.request(server)
				.put('/api/news/a')
				.type('json')
				.send({
					'title': {'123': 'sdasdasd'},
					'text': 'updated text'
				})
				.end((err, res) => {
					expect(res).to.be.status(500);
					done(err);
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
				.send({
					'title': '',
					'text': ''
				})
				.end((err, res) => {
					expect(res).to.be.status(400);
					expect(res.body.errors).to.be.a('array');
					expect(res.body.errors).to.include(`title should contain 1 - ${TITLE_MAX_LENGTH} characters`);
					expect(res.body.errors).to.include(`text should contain 1 - ${TEXT_MAX_LENGTH} characters`);
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
					expect(res.body.errors).to.include(`title should contain 1 - ${TITLE_MAX_LENGTH} characters`);
					expect(res.body.errors).to.include(`text should contain 1 - ${TEXT_MAX_LENGTH} characters`);
					done(err);
			});
		});

		it('should give status 500 if error', (done) => {
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
