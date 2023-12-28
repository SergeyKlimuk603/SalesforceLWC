trigger TestPlatformEventTrigger on TestPlatformEvent__e (after insert) {
    List<TestPlatformEvent__e> testEventsNew = Trigger.new;

    List<TestObject__c> testObjectsForEventLogs = new List<TestObject__c>();
    for (TestPlatformEvent__e event : testEventsNew) {
        testObjectsForEventLogs.add(new TestObject__c(
            Name = 'TestPlatformEvent__e',
            TextField__c =  event.TextField__c
        ));
    }

    insert testObjectsForEventLogs;
}
