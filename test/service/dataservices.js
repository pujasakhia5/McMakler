import { faker } from "@faker-js/faker";
/**
 * File contains all the methods to generate data for Web application
 * @author: Puja Sakhia
 */
class DataServices {
    constructor() {
        let name = "ADD " + faker.name.jobDescriptor();
        let street = faker.address.streetAddress();
        let rooms = parseInt(faker.random.numeric());
        let price = faker.random.numeric(faker.random.numeric(1));
        let status = faker.helpers.arrayElement([true, false]);

        let _id;

        let advertisementDetails = {
            name,
            street,
            rooms,
            price,
            status
        };

        let editAdvertisementDetails = {
            _id,
            name,
            street,
            rooms,
            price,
            status
        }

        let advertisementSchema = {
            type: 'object',
            properties: {
                name: { type: 'string' },
                street: { type: 'string' },
                rooms: { type: 'number' },
                price: { type: 'string' },
                status: { type: 'boolean' },
                _id: { type: 'string' }
            },
            required: ['name', 'price', '_id']
        };

        this.advertisementSchema = () => {
            return advertisementSchema;
        };

        this.createAdvertisement = () => {
            return advertisementDetails;
        };

        this.editAdvertisement = () => {
            return editAdvertisementDetails;
        };

        this.setEditAdvertisement = (editDetails) => {
            this.editAdvertisementDetails = editDetails
        }

        this.getAdvertisementName = () => {
            return name;
        }

        this.setAdvertisementName = (addName) => {
            this.name = addName;
        }

        this.setAdvertisementId = (id) => {
            this._id = id
        }

        this.getAdvertisementId = () => {
            return _id
        }
    }
}

export default new DataServices()