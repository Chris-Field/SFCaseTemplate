const MENUDB = [];


function createChromeContextMenuItem(id, title) {
  const contextMenuItem = {
    "id": id,
    "title": title,
    "contexts": ['all'],
  };
  chrome.contextMenus.create(contextMenuItem);
}


function doMenuAction(menuItem){
  if (menuItem.type == "script"){
    chrome.tabs.executeScript(null, {
      file:menuItem.file
    });
  }
  else if (menuItem.type == "url"){
    chrome.windows.create({
      url: chrome.runtime.getURL(menuItem.file),
      type: "normal"
    });
  }
}


function createContextMenus(){
  for (let i=0; i<MENUDB.length; i++){
    createChromeContextMenuItem(MENUDB[i].id, MENUDB[i].title);
  };
}


function findItemInDatabase(itemIdFromContextMenu){

  return MENUDB.find(
    function(itemFromDatabase){
      return itemFromDatabase.id === itemIdFromContextMenu;
  });
}


function debug(debugText){
  const textArea4 = document.createElement('textarea');
  textArea4.textContent = debugText;
  document.body.append(textArea4);
  textArea4.select();
  document.execCommand("copy");
  textArea4.remove();
}



// Load the database of menu items to generate
let requestURL = 'scripts/menuitems/_menuitems.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  const menuItemDatabase = request.response;
  for (let i=0; i<menuItemDatabase.length; i++){
    MENUDB.push(menuItemDatabase[i]);
  }
  createContextMenus();
}


chrome.contextMenus.removeAll(function() {
  let openlinks = [
    "https://docs.google.com/spreadsheets/d/1QLd3L7SdA6O-sI49GLfpiyj73UG7UgrLBEbzO5B0q7U/edit#gid=1687205523",
    "https://msn.com",
    "https://yahoo.com"
  ];
});

chrome.contextMenus.onClicked.addListener( (clickData) => {
  let itemIdFromContextMenu = clickData.menuItemId;
  let itemInDatabase = findItemInDatabase(itemIdFromContextMenu);

  doMenuAction(itemInDatabase);
});

chrome.browserAction.onClicked.addListener(() => {
  chrome.runtime.openOptionsPage(() => console.log('options page opened'));
});
