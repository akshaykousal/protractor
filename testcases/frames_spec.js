describe("Switch between frames- Test Suite", function () {

    it("Test1", function () {

        browser.waitForAngularEnabled(false);
        // browser.ignoreSynchronization=true;

        browser.get("https://www.selenium.dev/selenium/docs/api/java/index.html?overview-summary.html");
        browser.manage().window().maximize();
        browser.sleep(2000);

        browser.switchTo().frame("packageListFrame");
        element(by.linkText("org.openqa.selenium.support.ui")).click();
        browser.sleep(2000);
        browser.switchTo().defaultContent();

        browser.switchTo().frame("packageFrame");
        element(by.linkText("WebDriverWait")).click();
        browser.sleep(2000);
        browser.switchTo().defaultContent();

        browser.switchTo().frame("classFrame");
        element(by.xpath("//header[@role='banner']/descendant::a[text()='Index']")).click();
        browser.sleep(2000);

        expect(element(by.xpath("//header[@role='banner']/descendant::a[text()='Frames']")).isPresent()).toBe(true);

    });

});