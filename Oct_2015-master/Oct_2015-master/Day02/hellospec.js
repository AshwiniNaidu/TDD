describe("Hello specs",function(){
	
	it("is a dummy test",function(){
		expect(true).toBe(true);
	});
	
	it("should print hello given a name",function(){
		var message = sayHello("Sam");
		expect(message).toBe("Hello Sam");
	});
	
	it("should print bye given a name",function(){
		var message = sayBye("Sam");
		expect(message).toBe("Bye Bye Sam");
	});
	
});