/**
 * Created by admin on 22/06/20.
 */

var custLoginButton = element(by.buttonText("Customer Login"));
var customerSelection = element.all(by.repeater("cust in Customers"));
var loginButton = element(by.buttonText("Login"));
var accountNumber = element.all(by.tagName("option"));
var withDrawlButton = element(by.buttonText("Withdrawl"));
var enterAmountToWithdraw = element(by.model("amount"));
var withDrawButton = element(by.buttonText("Withdraw"));
var transactionFailureMessage = element(by.xpath("//span[@ng-show='message']"));
var depositButton = element.all(by.buttonText("Deposit"));
var enterAmountToDeposit = element(by.model("amount"));
var readBalance = element(by.xpath("//div[@class='borderM box padT20 ng-scope']/div[2]/strong[2]"));
var depositSuccessMessage = element(by.xpath("//span[@ng-show='message']"));
var transactionsTab = element(by.buttonText("Transactions"));
var rowsCountInTransactionTable = element.all(by.tagName("tr"));
var backButton=element(by.buttonText("Back"));
var transactionSuccessMessage = element(by.xpath("//span[@class='error ng-binding']"));

function pageObj()
{
    this.urlHit = browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
    browser.sleep(1000);

    this.customerLogin=function()
    {
        custLoginButton.click();
        browser.sleep(1000);

    }

    this.selectCustName=function(customerName)
    {
        customerSelection.each(function(row){
            row.getText().then(function(name){
                //console.log("Name is "+name);
                if(name==customerName)
                {
                    row.click();
                    browser.sleep(1000);
                }
            })
        })
    }

    this.login=function()
    {
        loginButton.click();
        browser.sleep(1000);
    }

    this.selectAccountNumber=function(acctNumber)
    {
        accountNumber.each(function(acctDetails){
            acctDetails.getAttribute("value").then(function(text){

                //console.log("Text is "+text);
                //console.log("acctNumber is "+acctNumber);

                textUpdate = text.split(":");
                //console.log("textUpdate[1] is "+textUpdate[1]);

                textUpdate =  +textUpdate[1];//This is to convert '1005' to 1005
                if(textUpdate==acctNumber)
                {
                    acctDetails.click();
                    browser.sleep(1000);

                }
            })
        })
    }

    this.clickwithdrawlButton=function()
    {
        withDrawlButton.click();
        browser.sleep(1000);
    }

  /*  this.enterWithdrawAmount=function(newBalance){
        var withdrawAmount = "400";
        enterAmountToWithdraw.sendKeys(withdrawAmount);
        browser.sleep(1000);

        if(newBalance!=undefined)
        {

            newBalance.then(function(newBal){
                newBal = +newBal; //This is to convert string to integer
                withdrawAmount = +withdrawAmount; //This is to convert string to integer
                if(withdrawAmount>newBal)
                {
                    console.log("WITHDRAW AMOUNT IS "+withdrawAmount);
                    console.log("NEW BALANCE IS WHEN DEFINED "+newBal);
                    this.clickOnWithdraw();
                    this.readTransactionFailureMsg();

                }
                else
                {
                    //Call clickOnWithdraw()
                    this.clickOnWithdraw();
                    browser.sleep(2000);
                }
            })

        }
        else
        {
            this.clickOnWithdraw();
        }



    }*/


    ////////////////////////

    this.enterWithdrawAmount=  function(newBalance){
        var withdrawAmount = "40000";
        var withDrawnAmountStored=0;
        enterAmountToWithdraw.sendKeys(withdrawAmount);
        browser.sleep(1000);

        if(newBalance!=undefined)
        {

             newBalance.then(function(newBal){
                newBal = +newBal; //This is to convert string to integer
                withdrawAmount = +withdrawAmount; //This is to convert string to integer
                if(withdrawAmount>newBal)
                {
                   // console.log("WITHDRAW AMOUNT IS "+withdrawAmount);
                    //console.log("NEW BALANCE IS "+newBal);
                   // this.clickOnWithdraw();

                    withDrawButton.click();
                    browser.sleep(1000);


                 // this.readTransactionFailureMsg();

                   transactionFailureMessage.getText().then(function(msg){
                        //console.log("Message is "+msg);

                        expect(msg).toContain("Transaction Failed");
                        browser.sleep(1000);
                    });

                    withdrawAmount = 400;
                    withDrawnAmountStored = withdrawAmount;
                    //console.log("NEW WITHDRAW AMOUNT IS "+withdrawAmount);
                    enterAmountToWithdraw.sendKeys(withdrawAmount);
                    // this.clickOnWithdraw();

                    browser.sleep(2000);
                    withDrawButton.click();
                    browser.sleep(1000);
                }
                else
                {
                    //Call clickOnWithdraw()
                   // this.clickOnWithdraw();
                    withDrawButton.click();
                    browser.sleep(1000);

                }
                 return withDrawnAmountStored;
            })/*.then(function(){
                 console.log("WITHDRAWN AMOUNT STORED IS "+withDrawnAmountStored);
                 return withDrawnAmountStored;
             });*/

         //return withDrawnAmountStored;
        }
        else
        {
            this.clickOnWithdraw();
        }

    }



    ///////////////////////

    this.clickOnWithdraw=function()
    {
        withDrawButton.click();
        browser.sleep(1000);

    }

    this.readTransactionFailureMsg=function()
    {
        transactionFailureMessage.getText().then(function(msg){
            //console.log("Message is "+msg);

            expect(msg).toContain("Transaction Failed");
            browser.sleep(1000);
            return;
        })
    }

    this.getBalance=function()
    {
        var storeBalance = readBalance.getText().then(function(balance){
            return balance;
        });

        return storeBalance;
    }

    this.clickDepositTab=function()
    {
        depositButton.first().click();
        browser.sleep(1000);
    }

    this.enterDepositAmount=function()
    {
        var depoAmt = "2000";
        enterAmountToDeposit.sendKeys(depoAmt);
        browser.sleep(1000);
        return depoAmt;
    }

    this.clickDepositButton=function()
    {
        depositButton.last().click();
        browser.sleep(1000);
    }

    this.readDepositSuccessMsg=function()
    {
        depositSuccessMessage.getText().then(function(text){
            //console.log("DEPOSIT SUCCESS MESSAGE IS "+text);
            expect(text).toContain("Deposit Successful");
        })
    }

    this.verifyBalance=function(oldBalance,newBalance,amountEntered)
    {
        console.log("AMOUNT ENTERED IS "+amountEntered);
        oldBalance.then(function(oldBal){
           console.log("OLD BALANCE IS "+oldBal)
            return oldBal;
        }).then(function(oldBal){
            newBalance.then(function(newBal){
                console.log("NEW BALANCE IS "+newBal);



                totalBalance = +oldBal + +amountEntered;

                console.log("TOTAL BALANCE IS "+totalBalance);

                newBal = +newBal; //This is to convert '2000' to 2000

                expect(newBal).toBe(totalBalance);
            })
        })
    }

    this.clickTransactionTab = function()
    {
        transactionsTab.click();
        browser.sleep(5000);
    }

    this.getTransaction=function(depositedAmount)
    {
    /*  rowsCountInTransactionTable.count().then(function(cnt){
          console.log("Count is "+cnt);
          cnt=cnt-1;
          rowsCountInTransactionTable.get(cnt).getText(function(text){
              console.log("Table data is "+text);
          })
      })*/

       var lastRow =  rowsCountInTransactionTable.last();
        var cells = lastRow.all(by.tagName("td"));

        var cellTexts = cells.map(function (elm) {
             elm.getText().then(function(tableText){
               //  console.log("TABLE TEXT IS "+tableText);
                if(tableText==depositedAmount)
                {
                    expect(tableText).toBe(depositedAmount);
                }
                 if(tableText=="Credit")
                 {
                    // console.log("Success");
                 }
             })
        });

        //console.log("DEPOSITED AMOUNT inside getTransaction() ",depositedAmount);

    }

    this.clickBackButton=function()
    {
        backButton.click();
        browser.sleep(2000);
    }

    this.readTransactionSuccessMsg = function()
    {
        transactionSuccessMessage.getText().then(function(successMsg){
            expect(successMsg).toContain("Transaction successful");
        })
    }

    this.chainedPromise=function()
    {
        readBalance.getText()
            .then(function(firstResponse) {
                firstResponse = firstResponse + 1;
                return firstResponse;
            }).then(function(secondResponse) {
                secondResponse = secondResponse + 2;
                return secondResponse;
                return Promise.all(firstResponse,secondResponse);
            }).then(function(finalResponse) {
                console.log('Final response: ' + finalResponse);
                console.log("First response is "+firstResponse);
            })
    }



}

module.exports=new pageObj()