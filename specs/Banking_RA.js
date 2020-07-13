/**
 * Created by admin on 19/06/20.
 */

var bankPO = require("../pageObjects/Banking_RA_pageobject.js");

describe("This is Banking project", function() {
    it("This is test case", function() {
        bankPO.urlHit;
        bankPO.customerLogin();
        bankPO.selectCustName("Harry Potter");
        bankPO.login();
        bankPO.selectAccountNumber(1005);
        bankPO.clickwithdrawlButton();
        bankPO.enterWithdrawAmount(balanceAfterDeposit);
        //bankPO.clickOnWithdraw();
        //bankPO.readTransactionFailureMsg();
        bankPO.clickDepositTab();
        var oldBalance = bankPO.getBalance().then(function(bal) {
            return bal;
        })
        var depositedAmount = bankPO.enterDepositAmount();
        bankPO.clickDepositButton();
        bankPO.readDepositSuccessMsg();
        var balanceAfterDeposit = bankPO.getBalance().then(function(bal) {
            return bal;
        })
        bankPO.verifyBalance(oldBalance, balanceAfterDeposit, depositedAmount);
        bankPO.clickTransactionTab();
        bankPO.getTransaction(depositedAmount);
        bankPO.clickBackButton();
        bankPO.clickwithdrawlButton();
        var withdrawAmount = bankPO.enterWithdrawAmount(balanceAfterDeposit);
        bankPO.readTransactionFailureMsg();
        var balanceAfterWithdraw = bankPO.getBalance().then(function(bal) {
            return bal;
        })
        bankPO.verifyBalance(balanceAfterDeposit, balanceAfterWithdraw, withdrawAmount);
        //bankPO.chainedPromise();
    })
})