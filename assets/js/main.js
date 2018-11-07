let moreAffichage = (classe) => {
    let tableau = $(`.${classe}`).length;
    let compteur = 0;

    for (let i=12;i<tableau;i++) {
        $(`.${classe}`).eq(i).hide();
    }

    $(`#more-${classe}`).click(function() {
        for (let i=12;i<tableau;i++) {
            $(`.${classe}`).eq(i).toggle();
        }

        if (compteur%2 == 0) {
            $(this).text('Moins de films');
        } else {
            $(this).text('Plus de films');
        }
        compteur++;
    })
}

moreAffichage('featured-films');
moreAffichage('featured-series');