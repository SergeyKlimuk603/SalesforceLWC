// Create TestPlatformEvent__e platform events
Integer PUBLISH_EVENT_AMOUNT = 1;
List<TestPlatformEvent__e> testEvents = new List<TestPlatformEvent__e>();
for (Integer i = 0; i < PUBLISH_EVENT_AMOUNT; i++) {
    testEvents.add(new TestPlatformEvent__e(
        TextField__c = 'Published from Anonimus ' + i
    ));
}

// Call method to publish events
List<Database.SaveResult> results = EventBus.publish(testEvents);

// Inspect publishing result for each event
for (Database.SaveResult sr : results) {
    if (sr.isSuccess()) {
        System.debug('Successfully published event.');
    } else {
        for(Database.Error err : sr.getErrors()) {
            System.debug('Error returned: ' +
                        err.getStatusCode() +
                        ' - ' +
                        err.getMessage());
        }
    }
}
