// What loads when Applied Rater Context Menu Item is Clicked
{
var ProductImpacted = "Product Impacted: Applied Rater";
var EntireOffice = "Entire Office or Just one User?:";
var ClientId = "Client ID:";
var ContactName = "Contact Name:";
var CarrierTf = "Carrier Target Form:";
var Recreate = "Able to Recreate Issue?: ";
var DescIssue = "Description of Issue: ";
var CastLink = "Cast Link for User ";
var ZoomMeeting = "If video is included, Zoom Link and Password: ";

var myInput =ProductImpacted + "\n" + EntireOffice +"\n" + ClientId +"\n"+ ContactName +"\n"+ CarrierTf +"\n"+ Recreate + "\n"+ DescIssue + "\n" + DescIssue + "\n"+ CastLink +"\n"+ ZoomMeeting ;


    const copyText = myInput;
    const textArea = document.createElement('textarea');
    textArea.textContent = copyText;
    document.body.append(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();
}