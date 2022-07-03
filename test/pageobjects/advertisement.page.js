

import Page from './page';
import customMethods from "../helper/elementUtil"
import { expect } from "chai";

/**
 * File contains all the page objects for Advertisement page
 * @author: Puja Sakhia
 */
class AdvertisementPage extends Page {
    /**
     * define selectors using getter methods
     */
    get pageHeading() {
        return $('//h2[normalize-space(text()) = "Advertisements"]');
    }

    get addAdvertisementLink() {
        return $('//a[@href="/advertisement/new"]');
    }

    get advertisementForm() {
        return $('//form[@name]');
    }

    get advertisementNameInput() {
        return $("//input[@name='name']")
    }

    get streetNameInput() {
        return $("//input[@name='street']")
    }

    get noOfRoomsInput() {
        return $("//input[@name='rooms']")
    }

    get priceInput() {
        return $("//input[@name='price']")
    }

    get statusCheckbox() {
        return $("//md-checkbox[@aria-label='Status']")
    }

    get saveBtn() {
        return $('//span[normalize-space(text()) = "save"]/parent::button');
    }

    get advertisementList() {
        return $('//table[@md-table]')
    }

    get addSaveToastMsg() {
        return $('div.md-toast-content span')
    }

    get numberOfExistingDataRows() {
        return this.advertisementList.$$('//tbody//tr')
    }

    /**
     * Method clicks on the Advertisement icon
     */
    clickAddAdvertisementIcon = async() => {
        await customMethods.clickOnElement(this.addAdvertisementLink)
    }

    /**
     * Enters value in the create advertisement form
     * @param {Object} inputDetails 
     */
    enterAdvertisementDetails = async(inputDetails) => {
        console.log(inputDetails)
        await customMethods.enterValue(this.advertisementNameInput, inputDetails.name)
        await customMethods.enterValue(this.streetNameInput, inputDetails.street)
        await customMethods.enterValue(this.noOfRoomsInput, inputDetails.noOfRoomsInput)
        await customMethods.enterValue(this.priceInput, inputDetails.price)
        if (inputDetails.status == true) {
            await customMethods.clickOnElement(this.statusCheckbox)
        }
    }

    /**
     * Save the details to create new advertisement
     */
    saveDetails = async() => {
        await customMethods.clickOnElement(this.saveBtn)
    }

    /**
     * Verify toast message text to check correctness
     * @returns {string}
     */
    verifyToastMessage = async() => {
        return customMethods.getElementText(this.addSaveToastMsg)
    }

    /**
     * Get the number of advertisement rows on list
     */
    checkExistingListOfAdvertisement = async() =>  {
        return await this.numberOfExistingDataRows.length
    }

    /**
     * Verify the advertisement is created successfully or not
     * @param {string} addName 
     */
    verifyCreatedAdvertisement = async(addName) => {
        let isEntryAdded = false
        console.log("Advertisement to verify: " + addName)
        const addNamesList = await browser.$$('//table/tbody/tr/td[1]').map((img) => img.getText())
        console.log(addNamesList);
        if(addNamesList.includes(addName)){
            isEntryAdded = true
        }
        expect(isEntryAdded).to.be.true
    }

    /**
     * Select random row to edit that advertisement (Selects random row from 1-10 or less than 10 whichever is true)
     * @param {number} rowToSelect 
     */
    selectRandomExistingAdvertisement = async(rowToSelect) => {
        const randomRowSelector = Math.floor(Math.random() * (rowToSelect - 1) + 1)
        console.log("Random row to update: " + randomRowSelector)
        const rowValues = await browser.$$('//table/tbody/tr['+(randomRowSelector)+']/td').map((img) => img.getText())
        console.log("Row to be updated: "+rowValues)
        await customMethods.clickOnElement($('//table/tbody/tr['+(randomRowSelector)+']/td[1]'))
    }

    /**
     * Update the existing user details
     * @param {string} parameterToUpdate 
     * @param {Object} newDetails 
     */
    updateExistingDetails = async(parameterToUpdate, newDetails) => {
        let newParamValue = "";
        switch (parameterToUpdate) {
            case "name": await customMethods.enterValue(this.advertisementNameInput, newDetails.name)
            newParamValue = newDetails.name
                break;
            case "street": await customMethods.enterValue(this.streetNameInput, newDetails.street)
            newParamValue = newDetails.street
                break;
            case "rooms": await customMethods.enterValue(this.noOfRoomsInput, newDetails.rooms)
            newParamValue = newDetails.rooms
                break;
            case "price": await customMethods.enterValue(this.priceInput, newDetails.price)
            newParamValue = newDetails.price
                break;
            case "status": await customMethods.clickOnElement(this.statusCheckbox)
            newParamValue = newDetails.status
                break;
        }
        console.log("Updated "+parameterToUpdate+ "to :: "+newParamValue)
    }

    open() {
        return super.open('advertisements');
    }
}

export default new AdvertisementPage();
