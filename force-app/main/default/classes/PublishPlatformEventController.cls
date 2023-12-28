public with sharing class PublishPlatformEventController {
    public PublishPlatformEventController() {

    }

    @AuraEnabled
    public static void publishPlatformEvent(){
        try {
            EventBus.publish(new TestPlatformEvent__e(
                TextField__c = 'Published from LWC via Apex '
            ));
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}