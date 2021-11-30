{
var ClientID2 = "Client ID:";
var AgencyName2 = "Agency Name:";
var RatingState2 = "Rating State:";
var LOB2 = "Line Of Business:";
var Network2 = "Network: AutoPilot";
var ContactName2 = "Contact Name:";
var CarrierTF2 = "Carrier Target Form: ";
var StopRate2 = "Does this stop them from getting a rate?: ";
var DescIssue2 = "Description of Issue: ";
var QuoteID2 = "Quote UUID: ";
var UserID2 = "User ID: ";



//document.activeElement.value = ClientID + "\n" + AgencyName +"\n" + RatingState +"\n"+ LOB +"\n"+ Network +"\n"+ ContactName + "\n"+CarrierTF + "\n"+StopRate +"\n"+ DescIssue + "\n"+QuoteID +"\n"+ UserID ;

var myInput2  = ClientID2 + "\n" + AgencyName2 +"\n" + RatingState2 +"\n"+ LOB2 +"\n"+ Network2 +"\n"+ ContactName2 + "\n"+CarrierTF2 + "\n"+StopRate2 +"\n"+ DescIssue2 + "\n"+QuoteID2 +"\n"+ UserID2 ;
    
    const copyText2 = myInput2;
    const textArea2 = document.createElement('textarea');
    textArea2.textContent = copyText2;
    document.body.append(textArea2);
    textArea2.select();
    document.execCommand("copy");
    textArea2.remove();

}