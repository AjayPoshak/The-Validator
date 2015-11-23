var loc = window.location.href;
console.log("This page's URL::"+loc);
identifyProtocol();
function identifyProtocol()
{
	var protocol = loc.search("localhost");
	console.log("Identified Protocol::"+protocol);
	if(protocol == -1){
		console.log("Not a localhost");
		var value = loc.slice(0,5);
		console.log("Value::"+loc.slice(0,5));
		if(value === 'https'){
			console.log("HTTPS:: "+value);
			//var newUrl = loc.slice(8);
			//console.log("New Url::"+newUrl);
			var newUrl = encodeURIComponent(loc);
			/*var flag = true;
			var i = 0;
			while(flag){
				if(i == 0){
					window.location.href = "https://validator.w3.org/nu/?doc="+newUrl;
					i = 1;
					console.log("Redirecting...");
				}
				else{
					window.stop();
					console.log("Stopping...");
					flag = false;
				}
			}*/
			window.location.href = "https://validator.w3.org/nu/?doc="+newUrl;
			/*console.log("Redirecting...");
			setTimeout(function(){
				window.stop();
				
			},7000);*/
			
			
		}
		if(value === 'http:'){
			console.log("HTTP:: "+value);
			//var newUrl = loc.slice(7);
			//console.log("New Url::"+newUrl);
			var newUrl = encodeURIComponent(loc);
			window.location.href = "https://validator.w3.org/nu/?doc="+newUrl;
		}
		
	}
	else{
		console.log("This is a localhost machine");
	}
	
}	
//window.location.href = "https://validator.w3.org/nu/?doc="+"https%3A%2F%2Fdeveloper.chrome.com%2Fextensions%2Fcontent_scripts";
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting == "hello")
      sendResponse({farewell: "goodbye"});
  });











