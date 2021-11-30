{
var ClientID6 = "Client ID:";
var AgencyName6 = "Agency Name:";
var RatingState6 = "Rating State:";
var LOB6 = "Line Of Business:";
var Network6 = "Network: IVANS";
var ContactName6 = "Contact Name:";
var CarrierTF6 = "Carrier Target Form: ";
var StopRate6 = "Does this stop them from getting a rate?: ";
var DescIssue6 = "Description of Issue: ";
var QuoteID6 = "Quote UUID: ";
var UserID6 = "User ID: ";



//document.activeElement.value = ClientID + "\n" + AgencyName +"\n" + RatingState +"\n"+ LOB +"\n"+ Network +"\n"+ ContactName + "\n"+CarrierTF + "\n"+StopRate +"\n"+ DescIssue + "\n"+QuoteID +"\n"+ UserID ;


var myInput6 = ClientID6 + "\n" + AgencyName6 +"\n" + RatingState6 +"\n"+ LOB6 +"\n"+ Network6 +"\n"+ ContactName6 + "\n"+CarrierTF6 + "\n"+StopRate6 +"\n"+ DescIssue6 + "\n"+QuoteID6 +"\n"+ UserID6 ;
    
    const copyText6 = myInput6;
    const textArea6 = document.createElement('textarea');
    textArea6.textContent = copyText6;
    document.body.append(textArea6);
    textArea6.select();
    document.execCommand("copy");
    textArea6.remove();
}