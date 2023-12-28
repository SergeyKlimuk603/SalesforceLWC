//---------------------------------------------------------------------------------------------
// Delete all log TestObjects
List<TestObject__c> testObjectsForDelete = [SELECT Id FROM TestObject__c WHERE Name = 'TestPlatformEvent__e'];
delete testObjectsForDelete;


System.debug(UserInfo.getOrganizationId() + '' + UserInfo.getSessionId().SubString(15));