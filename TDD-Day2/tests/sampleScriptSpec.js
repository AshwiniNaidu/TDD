describe("Sample test", function(){
	it("should print Hi followed by the given name", function(){
		var msg= sayHi("Ashwini");
		expect(msg).toBe("Hi Ashwini");
	});

	it("should print Bye followed by the given name", function() {
		var msg = sayBye("Ashwini");
		expect(msg).toBe("Bye Ashwini");
	});
})