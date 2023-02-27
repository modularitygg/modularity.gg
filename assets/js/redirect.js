const discord = [ "pastebot", "publishbot" ];

document.addEventListener('DOMContentLoaded', function() {
	let path = window.location.pathname;
	let identifier = path.replaceAll("/u/", "").replaceAll("/", "").split("?")[0].trim();
	
	if (discord.includes(identifier)) {
		window.location.replace("https://discord.modularity.gg/" + identifier);
	}

}, false);