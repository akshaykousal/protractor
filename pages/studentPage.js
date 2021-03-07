
let studentPage = function () {

    let txtName = element(by.name("name"));
    let txtContact = element(by.name("contact"));
    let drpSubject = element(by.name("subject"));
    let txtMarks = element(by.name("marks"));
    let btnSubmit = element(by.css("input[value='Submit']"));

    this.get = function (url) {
        browser.get(url);
    }

    this.setName = function (name) {
        txtName.sendKeys(name);
    }

    this.setContact = function (contact) {
        txtContact.sendKeys(contact);
    }

    this.setSubject = function (subject) {
        drpSubject.element(by.xpath("//option[text()='" + subject + "']")).click();
    }

    this.setMarks = function (marks) {
        txtMarks.sendKeys(marks);
    }

    this.clickSubmit = function () {
        btnSubmit.click();
    }

    this.verifyResult = function (name, contact, subject, marks) {

        expect(element.all(by.tagName("tr")).get(0).element(by.xpath("//td[2]")).getText()).toBe(name);
        expect(element.all(by.tagName("tr")).get(0).element(by.xpath("//td[3]")).getText()).toBe(contact);
        expect(element.all(by.tagName("tr")).get(0).element(by.xpath("//td[4]")).getText()).toBe(subject);
        expect(element.all(by.tagName("tr")).get(0).element(by.xpath("//td[5]")).getText()).toBe(marks);

    }

}

module.exports=new studentPage();