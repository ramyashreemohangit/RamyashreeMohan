//This test case describes the user of "all" and "each" method


describe("All method in protractor", function () {
    it("All method test case demo", function () {
        browser.get("https://juliemr.github.io/protractor-demo/");
        element(by.model("first")).sendKeys("10");
        element(by.model("second")).sendKeys("90");
        element(by.id("gobutton")).click();

        element(by.model("first")).sendKeys("50");
        element(by.model("second")).sendKeys("150");
        element(by.id("gobutton")).click();

        element(by.model("first")).sendKeys("250");
        element(by.model("second")).sendKeys("50");
        element(by.id("gobutton")).click();

        element.all(by.repeater("result in memory")).count().then(function (count) {
            console.log("Count is " + count);
        })

        /* element.all(by.repeater("result in memory")).each(function(row){
         row.element(by.xpath("//td[3][@class='ng-binding']")).getText().then(function(text){
         console.log("text value is "+text);
         })
         })*/

        /*  element.all(by.repeater("result in memory")).each(function(row) {
         row.element(by.css("td:nth-child(3)")).getText().then(function(text) {
         console.log("text value is "+text);
         })
         })*/


        element.all(by.repeater("result in memory")).each(function (row) {
            row.element(by.xpath("//td[contains(text(),'100')]")).getText().then(function (text) {
                console.log("text value is " + text);
            })
        })

    })
})