/**
 * Created by admin on 01/06/20.
 */

//This is demonstration of chain locators concept in Protractor

describe("This is chain locators demonstration test case", function () {
    it("Chain Locators", function () {
        //browser.get("https://juliemr.github.io/protractor-demo/");
        element(by.model("first")).sendKeys("90");
        browser.sleep(5000);

        //element(by.xpath("//option[@value='MULTIPLICATION']")) will be serached inside element(by.model("operator"))
        element(by.model("operator")).element(by.xpath("//option[@value='MULTIPLICATION']")).click();
        browser.sleep(5000);
        element(by.model("second")).sendKeys("110");
        element(by.id("gobutton")).click();
        browser.sleep(5000);


        //element(by.xpath("//td[3][@class='ng-binding']")) will be searched inside element(by.repeater("result in memory"))
        element(by.repeater("result in memory")).element(by.xpath("//td[3][@class='ng-binding']")).getText().then(function (readValue) {
            console.log("Value that is read is " + readValue);
            browser.sleep(5000);
        })
    })
})