// What loads when Epic Quotes Context Menu Item is Clicked
{
var ProductImpacted4 = "Product Impacted: Epic Quotes Personal Lines";
var EntireOffice4 = "Entire Office or Just one User?:";
var ClientId4 = "Client ID:";
var ContactName4 = "Contact Name:";
var CarrierTf4 = "Carrier Target Form:";
var Recreate4 = "Able to Recreate Issue?: ";
var DescIssue4 = "Description of Issue: ";
var CastLink4 = "Cast Link for User: ";
var EpicVersion4 = "Epic Version: ";
var EpicLoc4 = "On Prem, Browser, or Epic Cloud?: ";
var EpicDB4 = "Database User is on:";
var ZoomMeeting4 = "If video is included, Zoom Link and Password: ";



//document.activeElement.value = ProductImpacted + "\n" + EntireOffice +"\n" + ClientId +"\n"+ ContactName +"\n"+ CarrierTf +"\n"+ Recreate + "\n"+ DescIssue + "\n" + CastLink +"\n"+ EpicVersion + "\n" + EpicLoc + "\n" + EpicDB + "\n" + ZoomMeeting ;

var myInput4 = ProductImpacted4 + "\n" + EntireOffice4 +"\n" + ClientId4 +"\n"+ ContactName4 +"\n"+ CarrierTf4 +"\n"+ Recreate4 + "\n"+ DescIssue4 + "\n" + CastLink4 +"\n"+ EpicVersion4 + "\n" + EpicLoc4 + "\n" + EpicDB4 + "\n" + ZoomMeeting4 ;

    const copyText4 = myInput4;
    const textArea4 = document.createElement('textarea');
    textArea4.textContent = copyText4;
    document.body.append(textArea4);
    textArea4.select();
    document.execCommand("copy");
    textArea4.remove();
}