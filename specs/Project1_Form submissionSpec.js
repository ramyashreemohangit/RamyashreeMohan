//This is 1st demo project.

describe("This is Protractor first demo project", function () {
    it("Text case of first Protractor project", function () {
        browser.get("https://qaclickacademy.github.io/protocommerce/");

        element(by.name("name")).sendKeys("TestingName");
        element(by.name("email")).sendKeys("testing@gmail.com");
        element(by.id("exampleInputPassword1")).sendKeys("Bhoomi@123");
        element(by.id("exampleCheck1")).click();
        element(by.cssContainingText("select[id='exampleFormControlSelect1'] option", "Female")).click();
        element(by.id("inlineRadio1")).click();
        element(by.name("bday")).sendKeys("01/01/2000");
        element(by.buttonText("Submit")).click();
        element(by.css("div[class='alert alert-success alert-dismissible'] strong")).getText().then(function (value) {
            console.log("Message contains " + value);
        })
        expect(element(by.css("div[class='alert alert-success alert-dismissible'] strong")).getText()).toContain("Success");
        browser.sleep(2000);
    })
})