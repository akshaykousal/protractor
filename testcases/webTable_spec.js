describe("Angular Demo Project - Test Suite", function () {

    beforeAll(async function () {
        await browser.get("https://dassdevarajan.github.io/demo-app/");
        await browser.manage().window().maximize();
        await browser.sleep(2000);
    });

    afterEach(async function () {
        await browser.sleep(1000);
    });

    it("Test1 - Validate last product details", async function () {
        await element.all(by.tagName("tr")).last().element(by.id("view")).click();
        await browser.sleep(2000);

        expect(await element(by.tagName("h3")).getText()).toBe("Product View");

        var name = "1001 Activities Book"
        var description = "Designed for preschool kids, the 1001 Activities Book is an educational activity book that promises to engage tiny tots with their first educative lessons in a playful and fun-filled manner."
        var category = "Books"
        var quantity = "300"
        var unitPrice = "4"
        var supplier = "ABC Publications"
        var returnable = "false"

        expect(await element.all(by.tagName("tr")).get(0).element(by.tagName("td")).getText()).toBe(name);
        expect(await element.all(by.tagName("tr")).get(1).element(by.tagName("td")).getText()).toBe(description);
        expect(await element.all(by.tagName("tr")).get(2).element(by.tagName("td")).getText()).toBe(category);
        expect(await element.all(by.tagName("tr")).get(3).element(by.tagName("td")).getText()).toBe(quantity);
        expect(await element.all(by.tagName("tr")).get(4).element(by.tagName("td")).getText()).toBe(unitPrice);
        expect(await element.all(by.tagName("tr")).get(5).element(by.tagName("td")).getText()).toBe(supplier);
        expect(await element.all(by.tagName("tr")).get(6).element(by.tagName("td")).getText()).toBe(returnable);
    });

    it("Test2 - Navigate back to product list", async function () {
        await element(by.id("list-menu")).click();
        await browser.sleep(2000);
        expect(await element(by.tagName("h3")).getText()).toBe("Product List");
    });

    it("Test3 - Delete first Product from the list", async function () {
        var firstProuctName = await element.all(by.tagName("tr")).get(1).element(by.tagName("td")).getText();
        await element.all(by.tagName("tr")).get(1).element(by.id("delete")).click();
        await browser.sleep(2000);
        expect(await element.all(by.tagName("tr")).get(1).element(by.tagName("td")).getText()).not.toBe(firstProuctName);
    });

});