import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import publishPlatformEvent from '@salesforce/apex/PublishPlatformEventController.publishPlatformEvent';
import TEST_PLATFORM_EVENT from '@salesforce/schema/TestPlatformEvent__e';
import TEXT_FIELD from '@salesforce/schema/TestPlatformEvent__e.TextField__c';

// const recordMetadata = {
//     TextField__c: 'Publish Platform Event From LWC via RESR'
// };
const recordMetadata = {
    name: 'name',
    email: 'email',
    website: 'url',
    amount: 'currency',
    phone: 'phoneNumber',
    closeAt: 'dateInFuture',
};
//const ENDPOINT ='https://senlapdp2-dev-ed.develop.my.salesforce.com/services/data/v57.0/sobjects/TestPlatformEvent__e';
// const ENDPOINT ='https://senlapdp2-dev-ed.develop.my.salesforce.com/services/data/v57.0/sobjects/TestObject__c';
const ENDPOINT ='https://data-faker.herokuapp.com/collection&#39';
const POST_METHOD = 'POST'; //POST method
const CONTENT_TYPE = 'application/json; charset=utf-8';

export default class PublishPlatformEvent extends LightningElement {
    publishPlatformEventsViaApex() {
        console.log('-----publishPlatformEventsViaApex()')
        publishPlatformEvent()
            .then(res => console.log('-----Platform Event was published'))
    }

    handleClick() {
        console.log('-----handleClick()');
        // const fields = {TextField__c: 'Published from LWC'};
        const fields = {};
        fields.TestField__c = 'Published from LWC';
        let recordInput = {
            //apiName: TEST_PLATFORM_EVENT.objectApiName,
            apiName: 'TestPlatformEvent__c',
            fields
        };

        console.log('-----TEST_PLATFORM_EVENT.objectApiName: ', TEST_PLATFORM_EVENT.objectApiName);

        console.log('-----=: ', TEST_PLATFORM_EVENT.objectApiName === 'TestPlatformEvent__c');

        console.log('-----recordInput: ', recordInput);

        createRecord(recordInput)
            .then((record) => {
                console.log('-----record: ', record);
            })
            .catch(error => {
                console.error('Error publishing event:', error);
            });
    }

    handlePublishRest() {
        console.log('-----handlePublishRest()');
        const amountOfRecords = 1;
        fetch(ENDPOINT, {
            method: POST_METHOD,
            headers: {
                'Content-Type': CONTENT_TYPE,
                'Authorization': 'Bearer 00D2t000000ePWoEAM!AR8AQHdK9wtD5taoys2bMA9BGTUu5zcvrlkjp1RBkKMJcdv0oNjMtWIJzgZj1Rry7263Je9eS430Yd63AYw9QugRAqMNVcDV'
            },
            body: JSON.stringify({
                amountOfRecords,
                recordMetadata,
            })
        })
        .then((response) => {
            console.log('-----response.json(): ', response.json());
            response.json();
        })
        .catch(error => {
            console.error('Error publishing event via REST:', error);
        });
    }

    proxyToObject(proxi, proxiName) {
        console.log('-----' + proxiName +': ', JSON.stringify(proxi));
        // const proxiMap = new Map(Object.entries(proxi));
        // console.log('-----proxiMap: ', proxiMap);
        // console.log('-----3: ');
        // console.log('-----' + proxiName +': ', JSON.parse(JSON.stringify(proxi)));
        // console.log('-----' + proxiName +': ', JSON.stringify(proxi));
        // console.log('-----' + proxiName +': ' + JSON.parse(JSON.stringify(proxi)));
        // console.log(proxi, null, Infinity);
        // console.info(proxi);
        // console.dir(proxi);
    }

    // proxyToObj(obj){
    //     return JSON.parse(JSON.stringify(obj));
    // }
}