let modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

let modale = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modale) {
        modale.style.display = "none";
    }
}
//cookie

function toggle(cookie)
{
	node = document.getElementById(cookie);
	if (node.style.visibility=="hidden")
	{
		// Contenu caché, le montrer
		node.style.visibility = "visible";
		node.style.height = "auto";			// Optionnel rétablir la hauteur
	}
	else
	{
		// Contenu visible, le cacher
		node.style.visibility = "hidden";
		node.style.height = "0";			// Optionnel libérer l'espace
	}
}
$('#boutcook').click(function() {
  $('#cookie').hide(1000);
});