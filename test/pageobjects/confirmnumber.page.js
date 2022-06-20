class ConfirmNumberPage{

    //selectors
    get confirmPhoneField () {
        return $('//input[@automation-id="confirmation-code-answer"]');
    }

    async CheckConfirmNumber(){
        await this.confirmPhoneField.waitForDisplayed();
        await expect(this.confirmPhoneField).toBeDisplayed();
    }

}
module.exports = new ConfirmNumberPage()