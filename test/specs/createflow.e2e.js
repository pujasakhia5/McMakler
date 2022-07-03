import advertisementPage from '../pageobjects/advertisement.page';
import { expect } from "chai";
import customMethods from "../helper/elementUtil"
import validation from '../data/validation';
import dataservices from '../service/dataservices'

/**
 * File contains all the tests to create an advertisement in an application
 * @author: Puja Sakhia
 */

var addDetails = {}

describe('Web: Create an advertisement', () => {

    beforeAll('launch herokupp application', async () => {
        await advertisementPage.open();
        await browser.maximizeWindow();
        let isPageHeadingDisplayed = await customMethods.isElementDisplayed(await advertisementPage.pageHeading)
        expect(isPageHeadingDisplayed).to.be.true;
    });

    it('select add advertisement icon', async () => {
        await advertisementPage.clickAddAdvertisementIcon()
        expect(await customMethods.isElementDisplayed(await advertisementPage.advertisementForm)).to.be.true
    });

    it('enter advertisement details to create a new advertisement', async () => {
        addDetails = dataservices.createAdvertisement()
        await advertisementPage.enterAdvertisementDetails(addDetails)
    });

    it('save advertisement', async () => {
        await advertisementPage.saveDetails()
    });

    it('verify toast message is displayed', async () => {
        expect(await advertisementPage.verifyToastMessage()).to.be.equal(validation.validation_messages.toastMessageCreateAdd)
        expect(await customMethods.isElementDisplayed(await advertisementPage.advertisementList)).to.be.true
    });

    it('verify advertisement is added to the list', async () => {
        await advertisementPage.verifyCreatedAdvertisement(addDetails.name)
        console.log("Advertisement entry verified!"+ addDetails.name)
    })

});