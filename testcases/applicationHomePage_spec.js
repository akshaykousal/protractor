describe("Test Suite", function () {

    beforeEach(function () {
        browser.get("https://angularjs.org/");
        browser.sleep(2000);
        var alert = browser.switchTo().alert().then(function (alert) {
            alert.accept();
        }, function (error) {
            // Here we can handle the exception if we want
        });
        browser.manage().window().maximize();
    });

    it("Test1 - Verify Title", function () {
        expect(browser.getTitle()).toBe("AngularJS — Superheroic JavaScript MVW Framework");
    });

    it("Test2 - Verify Edit Me Button is available", function () {
        var editButton = element(by.buttonText("Edit Me"));
        // console.log("Edit Me button present -> " + editButton.isPresent)
        expect(editButton.isPresent()).toBe(true);
    });

    it("Test3 - Verify User specific greeting message", function () {
        element(by.model("yourName")).sendKeys("Akshay");
        var msg = element(by.css("h1[class='ng-binding']"));
        // console.log("Greeting message -> " + msg)
        expect(msg.getText()).toBe("Hello Akshay!");
    });
});