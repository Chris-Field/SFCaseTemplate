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

var myInput =`Problem/Question

Troubleshooting/Answer

Resolve/Conclusion`;


    const copyText = myInput;
    const textArea = document.createElement('textarea');
    textArea.textContent = copyText;
    document.body.append(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();
    document.querySelector('ql-editor ql-blank slds-rich-text-area__content slds-text-color_weak slds-grow').innerHTML = "New text!";
}
