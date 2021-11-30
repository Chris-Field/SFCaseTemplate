// What loads when Commercial Lines Context Menu Item is Clicked
{
var ProductImpacted3 = "Product Impacted: Epic Quotes Commercial Lines";
var EntireOffice3 = "Entire Office or Just one User?:";
var ClientId3 = "Client ID:";
var ContactName3 = "Contact Name:";
var CarrierTf3 = "Carrier Target Form:";
var Recreate3 = "Able to Recreate Issue?: ";
var DescIssue3 = "Description of Issue: ";
var CastLink3 = "Cast Link for User: ";
var EpicVersion3 = "Epic Version: ";
var EpicLoc3 = "On Prem, Browser, or Epic Cloud?: ";
var EpicDB3 = "Database User is on:";
var ZoomMeeting3 = "If video is included, Zoom Link and Password: ";



//document.activeElement.value = ProductImpacted + "\n" + EntireOffice +"\n" + ClientId +"\n"+ ContactName +"\n"+ CarrierTf +"\n"+ Recreate + "\n"+ DescIssue + "\n" + CastLink +"\n"+ EpicVersion + "\n" + EpicLoc + "\n" + EpicDB + "\n" + ZoomMeeting ;

var myInput3 = ProductImpacted3 + "\n" + EntireOffice3 +"\n" + ClientId3 +"\n"+ ContactName3 +"\n"+ CarrierTf3 +"\n"+ Recreate3+ "\n"+ DescIssue3 + "\n" + CastLink3 +"\n"+ EpicVersion3 + "\n" + EpicLoc3 + "\n" + EpicDB3 + "\n" + ZoomMeeting3 ;
    
    const copyText3 = myInput3;
    const textArea3 = document.createElement('textarea');
    textArea3.textContent = copyText3;
    document.body.append(textArea3);
    textArea3.select();
    document.execCommand("copy");
    textArea3.remove();
}