/**
 * Created by admin on 18/06/20.
 */

//This is registration form automation

describe("This is registration form",function(){

    function login()
    {
        element(by.id("username")).sendKeys("angular");
        element(by.name("password")).sendKeys("password");
        element(by.model("model[options.key]")).sendKeys("angular");
        element(by.buttonText("Login")).click();
        expect(element(by.linkText("Logout")).isPresent()).toBe(true);
        browser.sleep(2000);
    }

    function logout(){
        element(by.linkText("Logout")).click();
        expect(element(by.buttonText("Login")).isPresent()).toBe(true);
        browser.sleep(2000);
    }


    it("This is registration form test case",function()
    {
        browser.get("http://www.way2automation.com/angularjs-protractor/registeration/#/login");
        browser.manage().window().maximize();
        login();
        logout();
    })
})