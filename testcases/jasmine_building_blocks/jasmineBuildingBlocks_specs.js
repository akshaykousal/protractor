describe("Test Suite",function(){

    beforeAll(function(){
        console.log("Executes once BEFORE ALL IT blocks...LAUNCHING APPLICATION")
    })

    afterAll(function(){
        console.log("Executes once AFTER ALL IT blocks...CLOSING APPLICATION")
    })

    beforeEach(function(){
        console.log("ALWAYS Executes BEFORE ALL IT blocks...LOGIN APPLICATION")
    })

    afterEach(function(){
        console.log("ALWAYS Executes AFTER ALL IT blocks...LOGOUT APPLICATION")
    })

    it("Test 1",function(){
        console.log("TEST 1")
    })

    it("Test 2",function(){
        console.log("TEST 2")
    })

})