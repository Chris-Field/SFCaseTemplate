{
var ClientID5 = "Client ID:";
var AgencyName5 = "Agency Name:";
var RatingState5 = "Rating State:";
var LOB5 = "Line Of Business:";
var Network5 = "Network: EZ Lynx";
var ContactName5 = "Contact Name:";
var CarrierTF5 = "Carrier Target Form: ";
var StopRate5 = "Does this stop them from getting a rate?: ";
var DescIssue5 = "Description of Issue: ";
var QuoteID5 = "Quote UUID: ";
var UserID5 = "User ID: ";



//document.activeElement.value = ClientID + "\n" + AgencyName +"\n" + RatingState +"\n"+ LOB +"\n"+ Network +"\n"+ ContactName + "\n"+CarrierTF + "\n"+StopRate +"\n"+ DescIssue + "\n"+QuoteID +"\n"+ UserID ;

var myInput5 = ClientID5 + "\n" + AgencyName5 +"\n" + RatingState5 +"\n"+ LOB5 +"\n"+ Network5 +"\n"+ ContactName5 + "\n"+CarrierTF5 + "\n"+StopRate5 +"\n"+ DescIssue5 + "\n"+QuoteID5 +"\n"+ UserID5 ;
    

    const copyText5 = myInput5;
    const textArea5 = document.createElement('textarea');
    textArea5.textContent = copyText5;
    document.body.append(textArea5);
    textArea5.select();
    document.execCommand("copy");
    textArea5.remove();

}