/**
 * Wrapper methods to interact with the web-elements
 * @author: Puja Sakhia
 */
class ElementUtil {

    constructor() {
        const timeout = 180000

        /**
         * Method checks whether the element is displayed or not
         * @param {any} element 
         * @returns {boolean}
         */
        this.isElementDisplayed = async (element) => {
            await element.waitForDisplayed({ timeout })
            return element.isDisplayed()
        }

        /**
        * Method clicks on the element
        * @param {any} element 
        */
        this.clickOnElement = async (element) => {
            await element.waitForEnabled({ timeout })
            await element.waitForDisplayed({ timeout })
            element.click()
        }

        /**
        * Method enters value in the Element fields
        * @param {any} element 
        * @param {string} value
        */
        this.enterValue = async (element, value) => {
            await element.waitForDisplayed({ timeout })
            await element.waitForEnabled({ timeout })
            await element.setValue(value)
        }

        /**
         * Method to receive text value from an element
         * @param {any} element 
         * @param {string} value
         * @return {string}
         */
        this.getElementText = async (element) => {
            await element.waitForDisplayed({ timeout })
            return await element.getText()
        }

        /**
         * Method gets value of any attribute of the element
         * @param {any} element 
         * @param {string} attributeName
         * @returns {string}
         */
        this.getAttributeValue = async (element, attributeName) => {
            await element.waitForDisplayed({ timeout })
            return await element.getAttribute(attributeName)
        }
    }
}

export default new ElementUtil()