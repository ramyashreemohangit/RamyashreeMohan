/**
 * Created by admin on 18/06/20.
 */

describe("This is multi form test suite",function(){

    function getProfileDetails()
    {
        element(by.model("formData.name")).sendKeys("Protractor");
        element(by.model("formData.email")).sendKeys("Protractor@test.com");

        //Below locator did not work. Hence used xpath
        // element(by.buttonText("Next Section")).click();

        element(by.xpath("//a[@ui-sref='form.interests']")).click();
        browser.sleep(2000);
    }

    function getInterests()
    {
        element.all(by.model("formData.type")).last().click();
        element(by.xpath("//a[@ui-sref='form.payment']")).click();
        browser.sleep(2000);
    }

    function makePayment()
    {
        element(by.buttonText("Submit")).click();

        var alertDialog = browser.switchTo().alert();

        alertDialog.getText().then(function(textInAlert){
            console.log("Text in alert is "+textInAlert);
        })

        expect(alertDialog.getText()).toEqual("awesome!");

         alertDialog.accept().then(function(){
         browser.sleep(2000);
         })
    }


    it("This is multi form test case",function(){
        browser.get("http://www.way2automation.com/angularjs-protractor/multiform/#/form/profile");

        getProfileDetails();
        getInterests();
        makePayment();

    })
})