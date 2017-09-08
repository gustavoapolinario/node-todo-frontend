const chai = require('chai')
	, expect = chai.expect
	, TodoRequestOptions = require('./TodoRequestOptions')


describe('TodoRequestOptions', function() {
	const host = 'http://mockedurl.test/'
		, todoUrl = 'todo/'
		, todoRequestOptions = new TodoRequestOptions( host, todoUrl )

	// getTodoIdUrl
	it('getTodoIdUrl() should return empty', function() {
		expect( todoRequestOptions.getTodoIdUrl() ).to.be.empty;
	});

	it('getTodoIdUrl({id: Int}) should return Int/', function() {
		var filter = {id: 1}
		expect(todoRequestOptions.getTodoIdUrl( filter )).to.equal(filter.id + '/')

		filter = {id: 2}
		expect(todoRequestOptions.getTodoIdUrl( filter )).to.equal(filter.id + '/')

		filter = {id: 13467839}
		expect(todoRequestOptions.getTodoIdUrl( filter )).to.equal(filter.id + '/')
	});


	// getQueryFilters
	it('getQueryFilters() should return empty', function() {
		expect(todoRequestOptions.getQueryFilters()).to.be.empty;
	});

	it('getQueryFilters({description: String}) should return description regex query url', function() {
		var filter = {description: 'find'}
		expect( todoRequestOptions.getQueryFilters( filter ) ) .to.have.string('find');


		filter = {description: 'found'}
		expect( todoRequestOptions.getQueryFilters( filter ) ) .to.have.string('found');

	});



	// getUrl
	it('getUrl() should return url', function() {
		var url = host + todoUrl
		expect(todoRequestOptions.getUrl()).to.equal(url)
	});
	it('getUrl({id: Int}) should return url with task id', function() {
		var filter = {id: 1123}
		var url = host + todoUrl + todoRequestOptions.getTodoIdUrl(filter)
		expect(todoRequestOptions.getUrl(filter)).to.equal(url)
	});

	it('getUrl({description: Int}) should return url with queryString filter', function() {
		var filter = {description: 'searchText'}
		var url = host + todoUrl + todoRequestOptions.getQueryFilters(filter)
		expect(todoRequestOptions.getUrl(filter)).to.equal(url)
	});


	// testing constructor
	it('new TodoRequestOptions(host, url) should get different urls', function() {
		var host2 = 'http://mockedurl-different.test'
		var todoUrl2 = 'diff/'
		var todoRequestOptions2 = new TodoRequestOptions(host2, todoUrl2)

		var url = host2 + todoUrl2
		expect(todoRequestOptions2.getUrl()).to.equal(url)
	});

});