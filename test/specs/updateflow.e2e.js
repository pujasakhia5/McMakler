import advertisementPage from '../pageobjects/advertisement.page';
import { expect } from "chai";
import customMethods from "../helper/elementUtil"
import dataservices from '../service/dataservices';
import validation from '../data/validation';


/**
 * File contains all the tests to update an advertisement in an application
 * @author: Puja Sakhia
 */

const statusTypeOptions = ["name", "street", "rooms", "price", "status"]

describe('Update an advertisement', () => {

    beforeAll('launch herokupp application', async () => {
        await advertisementPage.open();
        await browser.maximizeWindow();
        let isPageHeadingDisplayed = await customMethods.isElementDisplayed(await advertisementPage.pageHeading)
        expect(isPageHeadingDisplayed).to.be.true;
    });

    it('select any existing advertisement', async () => {
        let rowToSelect;
        let numberOfExistingDataRows = await advertisementPage.checkExistingListOfAdvertisement()
        expect(numberOfExistingDataRows).to.not.equal(0)
        if (await advertisementPage.numberOfExistingDataRows.length > 10)
        rowToSelect = 10;
        else
        rowToSelect = await advertisementPage.numberOfExistingDataRows.length
        await advertisementPage.selectRandomExistingAdvertisement(rowToSelect)
    });

    it('update any detail(s) to edit an advertisement', async () => {
        let updatedAdvDetails = dataservices.createAdvertisement()
        console.log("New details to update: "+ JSON.stringify(updatedAdvDetails,null,9))
        await advertisementPage.updateExistingDetails(statusTypeOptions[3], updatedAdvDetails)
    });

    it('save advertisement', async () => {
        await advertisementPage.saveDetails()
        expect(await customMethods.isElementDisplayed(await advertisementPage.advertisementList)).to.be.true
    });

    it('verify toast message is displayed', async () => {
        expect(await advertisementPage.verifyToastMessage()).to.be.equal(validation.validation_messages.toastMessageCreateAdd)
        expect(await customMethods.isElementDisplayed(await advertisementPage.advertisementList)).to.be.true
    });

});



