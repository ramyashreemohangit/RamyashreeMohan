/**
 * Created by admin on 19/06/20.
 */

var objToPageObjectFile = require("../page objects/Banking_RA_pageobject.js");

describe("This is Banking project",function(){


    it("This is test case",function(){

        objToPageObjectFile.urlHit;

        objToPageObjectFile.customerLogin();

        objToPageObjectFile.selectCustName("Harry Potter");

        objToPageObjectFile.login();

        objToPageObjectFile.selectAccountNumber(1005);

        objToPageObjectFile.clickwithdrawlButton();

        objToPageObjectFile.enterWithdrawAmount(balanceAfterDeposit);

        //objToPageObjectFile.clickOnWithdraw();

        //objToPageObjectFile.readTransactionFailureMsg();

        objToPageObjectFile.clickDepositTab();

        var oldBalance =  objToPageObjectFile.getBalance().then(function(bal){
            return bal;
        })

        var depositedAmount = objToPageObjectFile.enterDepositAmount();

        objToPageObjectFile.clickDepositButton();

        objToPageObjectFile.readDepositSuccessMsg();

        var balanceAfterDeposit =  objToPageObjectFile.getBalance().then(function(bal){
            return bal;
        })

        objToPageObjectFile.verifyBalance(oldBalance,balanceAfterDeposit,depositedAmount);

        objToPageObjectFile.clickTransactionTab();

        objToPageObjectFile.getTransaction(depositedAmount);

        objToPageObjectFile.clickBackButton();

        objToPageObjectFile.clickwithdrawlButton();

        var withdrawAmount = objToPageObjectFile.enterWithdrawAmount(balanceAfterDeposit);

        objToPageObjectFile.readTransactionSuccessMsg();

        var balanceAfterWithdraw = objToPageObjectFile.getBalance().then(function(bal){
            return bal;
        })

        objToPageObjectFile.verifyBalance(balanceAfterDeposit,balanceAfterWithdraw,withdrawAmount);

        objToPageObjectFile.chainedPromise();
    })
})