//In "AllMethos.js" it is not optimised code. We are repeateing sendKeys to "first" and "second" textbox multiple times. Hence,
//the sane can be optimised using "Functions"

describe("Functions", function () {

    function Add(a, b) {
        element(by.model("first")).sendKeys(a);
        element(by.model("second")).sendKeys(b);
        element(by.id("gobutton")).click();
    }

    it("Functions test case", function () {
        browser.get("https://juliemr.github.io/protractor-demo/");
        Add(10, 290);
        Add(300, 600);
        Add(1000, 3000);
        Add(2000, 6000);

        element.all(by.repeater("result in memory")).each(function (row) {
            row.element(by.css("td:nth-child(3)")).getText().then(function (output) {
                console.log("Output is ", +output);
            })
        })


    })
})