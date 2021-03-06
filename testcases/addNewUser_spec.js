describe("Test Suite", function () {

    beforeEach(async function () {
        await browser.get("http://www.trycatchclasses.com/code/demo/angular_crud/#");
        await browser.sleep(2000);
        await browser.switchTo().alert().then(function (alert) {
            alert.accept();
        }, function () {
            // Here we can handle the exception if we want
        });
        await browser.manage().window().maximize();
        await browser.sleep(1000);
    });

    afterEach(async function () {
        await browser.sleep(1000);
    });

    it("Test1 - Validate Application Title", async function () {
        expect(await browser.getTitle()).toBe("ANGULARJS CRUD EXAMPLE - TryCatch Classes");
    });

    it("Test2 - Add User", async function () {
        await element(by.css("span[ng-click='addUser()']")).click();
        await browser.sleep(1000);
        await element(by.model("UserFirstname")).sendKeys("ng-userFirstname");
        await element(by.model("UserLastname")).sendKeys("ng-userLastname");
        await element(by.model("UserType")).sendKeys("5");
        await element(by.model("UserActive")).click();
        await browser.sleep(1000);
        await element(by.css("input[ng-click='AddUpdateUser()']")).click();

        await browser.sleep(3000);

        let alert1 = await browser.switchTo().alert();
        expect(alert1.getText()).toEqual("Error in adding User record");
        alert1.accept();     
    });

    it("Test3 - Select value from dropdown", async function () {
        await element(by.model('search.type')).element(by.css("option[value='number:5']")).click();
    });

});