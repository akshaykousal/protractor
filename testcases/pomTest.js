let studentPage = require("../pages/studentPage")

describe("Test Suite", function () {

    it("Test1 - Add record", function () {

        studentPage.get("http://www.trycatchclasses.com/code/demo/angular4_crud/");
        studentPage.setName("ABC");
        studentPage.setContact("1234")
        studentPage.setSubject("Angular")
        studentPage.setMarks("100")
        browser.sleep(5000);

        studentPage.clickSubmit();

        browser.sleep(3000);
        
    })

    it("Test2 - Validate record", function () {

        studentPage.verifyResult("ABC","1234","Angular","100")
        browser.sleep(5000);

    })

})