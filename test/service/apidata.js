const { faker } = require('@faker-js/faker');

/**
 * File contains all the methods to generate data for API Payload
 * @author: Puja Sakhia
 */
var DataServices = function () {

    let name = "ADD " + faker.name.jobDescriptor();
    let street = "Saint Louis 207";
    let rooms = 3;
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
}

module.exports = new DataServices();