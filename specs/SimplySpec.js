/**
 * Created by admin on 07/06/20.
 */



describe("All method in protractor", function() {
    it("All method test case demo", function() {
        browser.get("https://juliemr.github.io/protractor-demo/");
        var first, second, goButton;
        beforeEach(function() {
            first = element(by.model('first'));
            second = element(by.model('second'));
            goButton = element(by.id('gobutton'));
        });
        it('should start out with an empty memory', function() {
            var memory =
                element.all(by.repeater('result in memory'));
            expect(memory.count()).toEqual(0);
        });
        element(by.model("first")).sendKeys("10");
        element(by.model("second")).sendKeys("90");
        element(by.id("gobutton")).click();
        element(by.model("first")).sendKeys("50");
        element(by.model("second")).sendKeys("150");
        element(by.id("gobutton")).click();
        element(by.model("first")).sendKeys("250");
        element(by.model("second")).sendKeys("50");
        element(by.id("gobutton")).click();
        element.all(by.repeater("result in memory")).count().then(function(count) {
            console.log("Count is " + count);
        });

        /*    element.all(by.repeater("result in memory")).each(function(row) {
         row.element(by.css("td:nth-child(3)")).getText().then(function(text) {
         console.log("text value is " + text);
         });
         });
         */
        function readColumn(columnName) {
            let columnIndexes = {
                'columnA': 0,
                'columnB': 1,
                'columnC': 2
            };
            let columnIndex = columnIndexes[columnName];
            return element.all(by.xpath("//table/tbody/tr/td[3]")).getText();
        }
        let expectValues = ['300', '200', '100'];
        readColumn('columnC').then(function(values) {
            expect(values).toEqual(expectValues)
            console.log(values)
        });
    });
});

