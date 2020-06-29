//This test case selects a product and checks out and valides number of clicks on "Add" is equal to the number shown
// next to "Checkout"


describe("This is ecommerce website", function () {

    function Product(productName) {
        element.all(by.tagName("app-card")).each(function (card) {
            card.element(by.css("h4[class='card-title']")).getText().then(function (phoneName) {
                if (phoneName == productName) {
                    console.log("I am inside if and " + "Phone name that is read is " + phoneName + " and product name is " + productName);
                    card.element(by.css("button[class='btn btn-info']")).click();

                }
            })
        })
    }

    var getTotal = function()
    {
        element(by.xpath("//h3/strong")).getText().then(function(text)
        {
            var textUpdated = text.split(".");
            var textAfterTrim = textUpdated[0].trim();
            console.log("Text after trim "+textAfterTrim);
            return textAfterTrim;
        })
    }

    var returnedValue = getTotal();
     console.log("GET TOTAL IS "+returnedValue);


    it("This is test case for ecommerce website to add items to cart", function () {
        browser.get("https://qaclickacademy.github.io/protocommerce/");

        element(by.linkText("Shop")).click();

        Product("Samsung Note 8");
        Product("iphone X");

        element(by.xpath("//a[@class='nav-link btn btn-primary']")).getText().then(function (text) {
            console.log("Checkout button text is " + text);

            var res = text.split("(");
            console.log("Result is " + res);
            result = res[1].trim().charAt(0);
            console.log("Updated result is " + result);

            expect(result).toBe("2");
        })

        element(by.partialLinkText("Checkout")).click();


       /* var i=1;
        element.all(by.tagName("tr")).each(function(row){
                row.element(by.xpath("//tbody/tr["+i+"]/td[4]")).getText().then(function(price){
                    ++i;
                console.log("Price is "+price);

            })
        })*/

        var total=0;
        var sumOfAll = 0;
        element.all(by.buttonText("Remove")).count().then(function(counts){
            console.log("Counts is "+counts);
            return counts;
        }).then(function(counts){
            console.log("Outside counts is "+counts);
            for(var i=1;i<=counts;i++) {
                element(by.xpath("//tbody/tr[" + i + "]/td[4]")).getText().then(function (price) {
                    //++i;
                    console.log("Price is " + price);
                    priceUpdated = price.split(".");
                    priceUpdatedNow = priceUpdated[1].trim();
                    console.log("Price updated is "+priceUpdatedNow);
                    total = +total + +priceUpdatedNow;
                    sumOfAll = total;
                    console.log("Total is "+total);

                })
            }
        }).then(function(){
           var returnedValue = getTotal();
            console.log("GET TOTAL IS "+returnedValue);
        })

    })

})