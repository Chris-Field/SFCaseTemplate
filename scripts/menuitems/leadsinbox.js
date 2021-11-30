// What loads when Epic Quotes Context Menu Item is Clicked
{
var ProductImpacted7 = "Product Impacted: Leads Inbox";
var EntireOffice7 = "Entire Office or Just one User?:";
var ClientId7 = "Client ID:";
var ContactName7 = "Contact Name:";
var CarrierTf7 = "Carrier Target Form:";
var Recreate7 = "Able to Recreate Issue?: ";
var DescIssue7 = "Description of Issue: ";
var CastLink7 = "Cast Link for User: ";
var EpicVersion7 = "Epic Version: ";
var EpicLoc7 = "On Prem, Browser, or Epic Cloud?: ";
var EpicDB7 = "Database User is on:";
var ZoomMeeting7 = "If video is included, Zoom Link and Password: ";



//document.activeElement.value = ProductImpacted + "\n" + EntireOffice +"\n" + ClientId +"\n"+ ContactName +"\n"+ CarrierTf +"\n"+ Recreate + "\n"+ DescIssue + "\n" + CastLink +"\n"+ EpicVersion + "\n" + EpicLoc + "\n" + EpicDB + "\n" + ZoomMeeting ;

var myInput7 = ProductImpacted7 + "\n" + EntireOffice7 +"\n" + ClientId7 +"\n"+ ContactName7 +"\n"+ CarrierTf7 +"\n"+ Recreate7 + "\n"+ DescIssue7 + "\n" + CastLink7 +"\n"+ EpicVersion7 + "\n" + EpicLoc7 + "\n" + EpicDB7 + "\n" + ZoomMeeting7 ;

    const copyText7 = myInput7;
    const textArea7 = document.createElement('textarea');
    textArea7.textContent = copyText7;
    document.body.append(textArea7);
    textArea7.select();
    document.execCommand("copy");
    textArea7.remove();

}