public with sharing class CL_1506_DataTable1 {
   @AuraEnabled(cacheable=true)
   public static LiST<Contact> getContactList(){
     List<contact> contacts;
    if(
        Contact.SObjectType.getDescribe().isAccessible() &&
        Schema.SObjectType.Contact.fields.Name.isAccessible() &&
        Schema.SObjectType.Contact.fields.Phone.isAccessible()
    ){
        contacts= [Select Id, Name, Phone, Email from Contact limit 10 ];
    }
    return contacts;
    //commenting for checking git
}
}