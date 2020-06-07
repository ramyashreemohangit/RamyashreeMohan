/**
 * This spec file enters values in textboxes and then clicks on a button.
 * Then reads the output and then resolves it and then stores the value in a variable and prints it.
 * Then using Jasmine framework, expect statement is used to tell the test cases is passed or failed.
 */

//This is 1st practice program

describe("Open a browser", function () {

    it("Test case to open a browser", function () {
        browser.driver.manage().window().maximize();

        browser.get("https://juliemr.github.io/protractor-demo/");

        element(by.model("first")).sendKeys("8");
        element(by.model("second")).sendKeys("11");

        element(by.id("gobutton")).click();

        //Below line is Jasmine framework. "expect" can be written inside ".then" also. It works.
        expect(element(by.xpath("//h2[@class='ng-binding']")).getText()).toBe("19");


        element(by.xpath("//h2[@class='ng-binding']")).getText().then(function (value) {
            console.log("Output is " + value);
        })


        browser.sleep(5000);
    });


});

