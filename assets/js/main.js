$('#age-oui').click(function() {
    $('#popup-age').hide();
});

$('#age-non').click(function() {
    document.location.href="https://www.imdb.com/";
});

let clic = 0;

let genderAffichage = (type, categ) => {
    $(`#${type}-${categ}`).click(function() {
        $(`.gender-${categ}`).removeClass('active');
        $(this).addClass('active');

        $(`.featured-${categ}`).hide();

        if (type == 'all') {
            $(`.featured-${categ}`).show();
            clic++
        } else {
            $(`.${type}-${categ}`).show();
        }
    });
};

// Séries
genderAffichage('all', 'series');
genderAffichage('action', 'series');
genderAffichage('comed', 'series');
genderAffichage('autres', 'series');
// Films
genderAffichage('all', 'films');
genderAffichage('action', 'films');
genderAffichage('comed', 'films');
genderAffichage('autres', 'films');


let moreAffichage = (classe) => {
    let tableau = $(`.${classe}`).length;

    for (let i=12;i<tableau;i++) {
        $(`.${classe}`).eq(i).hide();
    }

    $(`#more-${classe}`).click(function() {
        for (let i=12;i<tableau;i++) {
            $(`.${classe}`).eq(i).toggle();
        }

        if (clic%2 == 0) {
            $(this).text('Moins de films');
        } else {
            $(this).text('Plus de films');
        }
        clic++;
    })
}

moreAffichage('featured-films');
moreAffichage('featured-series');

let slides = () => {
    let element = $('.shop-preview');
    let indexElem = element.length-1;
    let i = 0;
    let currentElem = element.eq(i);
    
    element.hide();
    currentElem.show();
    
    $('#flechedroite').click(function() {
        i++
        element.hide();
        currentElem = element.eq(i);
        currentElem.show();
    
        if (i >= indexElem) {
            i = -1;
        }
    })
    
    $('#flechegauche').click(function() {
        i--;
        element.hide();
        currentElem = element.eq(i);
        currentElem.show();
        
        if (i <= -1) {
            i = indexElem;
        }
    })
}
slides();

$('#arrow-up').hide();
$(window).scroll(function() {
  if ($(window).scrollTop() > 250) {
    $('#arrow-up').show();
  } else {
    $('#arrow-up').hide();
  }
});

$('#arrow-up').click(function() {
  $('html, body').animate({scrollTop:0}, 'slow');
})


// JS Baptiste

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


