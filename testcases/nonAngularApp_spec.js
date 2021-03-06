describe("Non Angular Application - Test Suite", function () {

    it("Test1", function () {

        browser.waitForAngularEnabled(false);

        browser.get("http://demowebshop.tricentis.com/");
        browser.manage().window().maximize();
        browser.sleep(2000);

        element(by.id("small-searchterms")).sendKeys("14.1-inch Laptop");
        browser.sleep(1000);
        element(by.css("input[value='Search']")).click()
        browser.sleep(1000);

        expect(element(by.css("img[alt='Picture of 14.1-inch Laptop']")).isPresent()).toBe(true);

    });

});