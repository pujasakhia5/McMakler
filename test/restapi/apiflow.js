require('dotenv').config();
const { validate } = require('json-schema');
var expect = require('chai').expect,
    dataServices = require('../service/apidata'),
    supertest = require('supertest'),
    herokuppApi = supertest(process.env.API_URL)
    
/**
 * File contains all the API end to end tests
 * @author: Puja Sakhia
 */
describe('Create an Advertisement: ', () => {

    it('POST: should create an advertisement', (done) => {
        let jsonRequestData = dataServices.createAdvertisement()
        herokuppApi.post('/advertisements')
            .set('Accept', 'application/json')
            .send(jsonRequestData)
            .expect(200)
            .end((err, res) => {
                console.log("Advertisement created for: " + JSON.stringify(jsonRequestData, null, 9))
                console.log("Advertisement id: " + res.body._id)
                jsonData = jsonRequestData
                advertisementId = res.body._id
                expect(err).to.be.null
                expect(res.body).to.have.property("_id")
                var result = validate(res.body, dataServices.advertisementSchema())
                expect(result.valid).to.be.true;
                expect(result.errors).to.be.empty;
                if (err) return done(err);
                done();
            })
    })

    it('GET: should verify the created advertisement', (done) => {
        herokuppApi.get('/advertisements/' + advertisementId)
            .set('Accept', 'application/json')
            .expect(200)
            .end((err, res) => {
                console.log("verify advertisement for: " + advertisementId)
                addresponse = res.body
                expect(err).to.be.null
                expect(res.body).to.have.property("_id")
                var result = validate(res.body, dataServices.advertisementSchema());
                expect(result.valid).to.be.true;
                expect(result.errors).to.be.empty;
                if (err) return done(err);
                done();
            })
    })

    it('PUT: should update the same advertisement', (done) => {
        var jsonRequestDataPut = dataServices.editAdvertisement()
        herokuppApi.put('/advertisements/' + advertisementId)
            .set('Accept', 'application/json')
            .send(jsonRequestDataPut)
            .expect(200)
            .end((err, res) => {
                console.log("New Advertisement details: " + JSON.stringify(jsonRequestDataPut, null, 9))
                console.log("Edit Advertisement for " + advertisementId)
                expect(err).to.be.null
                expect(res.body).to.equal(1)
                if (err) return done(err);
                done();
            })
    })

    it('GET: should verify updated advertisement value', (done) => {
        herokuppApi.get('/advertisements/' + advertisementId)
            .set('Accept', 'application/json')
            .expect(200)
            .end((err, res) => {
                console.log("verify advertisement for: " + advertisementId)
                console.log("Updated advertisement details: " + JSON.stringify(res.body, null, 9))
                expect(err).to.be.null
                expect(res.body).to.have.property("_id")
                var result = validate(res.body, dataServices.advertisementSchema());
                expect(jsonData.name).to.equal(res.body.name)
                expect(jsonData.street).to.equal(res.body.street)
                expect(jsonData.rooms).to.equal(res.body.rooms)
                expect(jsonData.price).to.equal(res.body.price)
                expect(jsonData.status).to.equal(res.body.status)
                expect(result.valid).to.be.true;
                expect(result.errors).to.be.empty;
                if (err) return done(err);
                done();
            })
    })
})
