describe("Non Angular Application - Test Suite", function () {

    it("Test1", function () {

        //use either of below to work with non-angular application

        browser.waitForAngularEnabled(false);
        // browser.ignoreSynchronization=true;

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