var util = require('util');
describe('slow calculator', function() {
    beforeEach(function() {
        browser.get('http://localhost:3456');
    });

    xit('should add numbers', function() {
        element(by.model('first')).sendKeys(4);
        element(by.model('second')).sendKeys(5);

        element(by.id('gobutton')).click();

        expect(element(by.binding('latest')).getText()).
        toEqual('9');
    });

    xdescribe('memory', function() {
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

        it('should fill the memory with past results', function() {
            first.sendKeys(1);
            second.sendKeys(1);
            goButton.click();

            first.sendKeys(10);
            second.sendKeys(20);
            goButton.click();

            var memory = element.all(by.repeater('result in memory').column('result.value'));
            memory.then(function(arr) {
                expect(arr.length).toEqual(2);
                expect(arr[0].getText()).toEqual('30'); // 10 + 20 = 30
                expect(arr[1].getText()).toEqual('2'); // 1 + 1 = 2
            });

            var test = element.all(by.repeater("result in memory")).column('result.value');
            test.then(function(arr) {
                expect(arr.length).toEqual(3)
                row.element(by.xpath("//td[contains(text(),'" + col + "')]")).getText().then(function(text) {
                    console.log("text value is " + text);
                });
            });
        });
    });

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
});