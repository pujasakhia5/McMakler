
/**
 * File contains all the base page actions
 * @author: Puja Sakhia
 */
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        return browser.url(`https://admin-advertisement.herokuapp.com/${path}`)
    }
}
