describe("Non Angular Application - Test Suite", function () {

    it("Test1 - Mouse Hover", function () {

        //use either of below to work with non-angular application

        browser.waitForAngularEnabled(false);
        // browser.ignoreSynchronization=true;

        browser.get("https://opensource-demo.orangehrmlive.com/");
        browser.manage().window().maximize();
        browser.sleep(2000);

        element(by.id("txtUsername")).sendKeys("Admin");
        element(by.id("txtPassword")).sendKeys("admin123");
        element(by.id("btnLogin")).click();
        browser.sleep(2000);

        var admin = element(by.id("menu_admin_viewAdminModule"));
        var userManagement = element(by.id("menu_admin_UserManagement"));
        var systemUsers = element(by.id("menu_admin_viewSystemUsers"));

        browser.actions().mouseMove(admin).mouseMove(userManagement).mouseMove(systemUsers).click().perform();
        browser.sleep(2000);

        expect(element(by.xpath("//h1[text()='System Users']")).isPresent()).toBe(true);

    });

    it("Test2 - Double click", function () {

        browser.waitForAngularEnabled(false);

        browser.get("http://testautomationpractice.blogspot.com/");
        browser.manage().window().maximize();
        browser.sleep(2000);

        var button = element(by.xpath("//button[text()='Copy Text']"));

        //1st approach
        // browser.actions().mouseMove(button).doubleClick().perform();

        //2nd approach
        browser.actions().doubleClick(button).perform();

        browser.sleep(2000);

        var field1 = element(by.id("field1"));
        var field2 = element(by.id("field2"));
        expect(field2.getText()).toBe(field1.getText());

    });

    it("Test3 - Right click", function () {

        browser.waitForAngularEnabled(false);

        browser.get("http://swisnl.github.io/jQuery-contextMenu/demo.html");
        browser.manage().window().maximize();
        browser.sleep(2000);

        var button = element(by.xpath("//span[text()='right click me']"));
        browser.actions().click(button, protractor.Button.RIGHT).perform();
        browser.sleep(6000);

        var copyMenuItem = element(by.xpath("//*[text()='Copy']"));
        copyMenuItem.click();
        browser.sleep(2000);

        expect(browser.switchTo().alert().getText()).toBe("clicked: copy");

    });

    it("Test4 - Drag and Drop", function () {

        browser.get("http://codef0rmer.github.io/angular-dragdrop/#!/");
        browser.manage().window().maximize();
        browser.sleep(2000);

        sourceEle = element(by.model("list1"));
        targetEle = element(by.model("list2"));

        browser.actions().dragAndDrop(sourceEle,targetEle).perform();
        browser.sleep(5000);

    });

});