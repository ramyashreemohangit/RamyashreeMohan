//This test case is calculator program.

describe("Calculator program", function () {

    function Calc(a, b, c) {
        //In this function enter the values iin two text fields and then select which operation you want to do and
        //click on "Go" button.

        element(by.model("first")).sendKeys(a);
        element(by.model("second")).sendKeys(b);
        element.all(by.tagName("option")).each(function (row) {
            row.getAttribute("value").then(function (operation) {
                console.log("Operation is " + operation);
                if (c == operation) {
                    row.click();
                }
            })
        })

        element(by.id("gobutton")).click();
    }

    it("Calculator test case", function () {

        browser.get("https://juliemr.github.io/protractor-demo/");
        Calc(100, 200, "MULTIPLICATION");
        Calc(800, 100, "DIVISION");
        Calc(100, 50, "MODULO");
        Calc(100, 2400, "ADDITION");
        Calc(100, 0, "SUBTRACTION");

        //Below code prints the output of the above operations

        element.all(by.repeater("result in memory")).each(function (row) {
            row.element(by.css("td:nth-child(3)")).getText().then(function (output) {
                console.log("Output is " + output);
            })
        })
    })
})