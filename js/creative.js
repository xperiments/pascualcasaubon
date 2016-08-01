(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize and Configure Scroll Reveal Animation
    window.sr = ScrollReveal();
    sr.reveal('.sr-icons', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('.sr-button', {
        duration: 1000,
        delay: 200
    });
    sr.reveal('.sr-contact', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 300);

    // Initialize and Configure Magnific Popup Lightbox Plugin
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });

    var testimonials = [
        {   "index": "008",
            "author": "Fernando Gutiérrez",
            "text": "Creo que lo que Casaubon pretende es alcanzar la esencia de unas imágenes desde la manipulación lírica de la geometría del espacio."
        },
        {
            "index": "010",
            "author": "Lina Font",
            "text": "Casaubon, se nos antoja un incansable y entusiasta conocedor de un duro oficio, vocacionalmente entregado a la búsqueda, casi de un modo místico, diríamos quienes bien le conocemos."
        },
        {
            "index": "011",
            "author": "Santos Torroella",
            "text": "Los dibujos son poderosos, de grandes ritmos, tanto lineales como de claroscuros, y acusan esa apretada energía que un concepto de plasticidad táctil y briosa suele inducir a los escultores."
        },
        {
            "index": "012",
            "author": "Dorothy Roaiz",
            "text": "Maneja el espacio, positiva y negativamente, de una manera única propia; y el equilibrio se logra debido a la relacion entre areas y componentes."
        },
        {
            "index": "014",
            "author": "Jose M. Cadena",
            "text": "Casaubon ha hallado su propio centro conceptual y desde él se expande de una manera coherente, seguro en la comunicación que quiere establecer. Su obra de escultor es sólida en la materia y aérea en la fluidez que le comunica."
        },
        {
            "index": "015",
            "author": "Mª.Aurelia Capmany",
            "text": "Hay en su obra un deseo de síntesis, de vida entendida por la mente, de contacto real con la tierra."
        },
        {
            "index": "016",
            "author": "Cesáreo Rodríguez-Aguilera",
            "text": "Por tanto, mundo exterior y mundo interior en la obra de Pascual Casaubón. Aproximación al misterio del Cosmos, de la Tierra y de la Vida en sus profundidades. Y todo ello en un lenguaje de perfiles propios que pide lectura e interpretación, aproximándose al trance que la creatividad supone, hasta identificarnos con ella."
        },
        {
            "index": "026",
            "author": "Miguel Viribay",
            "text": "A mis ojos, después de precisado el universo del escultor dentro de las formas simplificadas de las tendencias escultóricas más novedosas de los años que corresponden a su desarrollo, es obligado afirmar que posee unas dotes especiales para ver el espacio, o, por mejor decir, para ocuparlo con sus formas tridimensionales, linealmente concebidas o curvadamente sentidas, dentro del pálpito geológico que hace posible sus particulares paisajes."
        },
        {
            "index": "021",
            "author": "Christa Gottschewsky y Jose M.Carandell",
            "text": "Pascual Casaubón, tan expresivo en sus primeras obras, es, actualmente esencial. Su lenguaje de antes era juvenil, cálido, sensual; su lenguaje de ahora es maduro, lucido, intelectual. Pero dice lo mismo, y en el mismo decir de progresiva profundización y simplificación, se detecta al gran artista."
        },
        {
            "index": "024",
            "author": "Jose Marin Medina",
            "text": "A mediados de la década de 1980 Casaubón encontraría su estilo personal, inconfundible, en una serie de trabajos titulados “Natura y vida” ( Naturaleza y Vida), en los que la piedra adopta atrevidas y altivas composiciones verticales, basándose su lenguaje en formas orgánicas: Floraciones, germinaciones, referentes fálicos, ovoides, formas que se superponen en complicados equilibrios, en contraposición a la condición natural de la propia piedra. Se trata de una abstracción organicista con notas de carácter fantástico, de imaginación y de ironía."
        },
        {
            "index": null,
            "author": "J.Corredor-Matheos",
            "text": "Casaubón deja en principio que las formas crezcan solas, pero por el camino va poniendo – poniéndonos- piedras. En este camino ascendente, en que no solo peligra la vida del artista, nadie puede dormirse. Para esto, como el centinela, vela con la punta de la bayoneta bajo la garganta. Y puntas de bayoneta vienen a ser estas redondeces, estas extrañas floraciones, las fálicas hinchazones, los redondeados torsos y las primordiales formas ovoides. A través de ellas, Casaubón se expresa y afirma orgullosamente bajo la ondulante superficie. El arte es siempre un juego. Se nos revela algo, que al tiempo resulta mas velado y misterioso. Todo tiende a crecer, y según lo hace - tanto la forma esculpida como la conciencia del artista-, mayor es el riesgo. Y de todo ello no somos solamente testigos, aunque sea privilegiados: entre la obra, su creador y nosotros no existe en el momento de la creación diferencia alguna."
        }
    ];
    function getImage( image ) {
        var template = `
            <div class="col-lg-4 col-sm-6">
                <a href="img/portfolio/fullsize/0${image}.jpg" class="portfolio-box">
                    <img src="img/portfolio/thumbnails/0${image}.jpg" class="img-responsive" alt="">
                    <div class="portfolio-box-caption"></div>
                </a>
            </div>
        `;
        return template;
    }

    function getTestimonial( obj ){
        var result = `
            <section class="bg-primary" id="about">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 col-lg-offset-2 text-center">
                            <h5 class="text-faded">${obj.text}</h5>
                            <h5>${obj.author}</h5>
                        </div>
                    </div>
                </div>
            </section>`;
            if( obj.index ){
                result+=`<header class="contain" style="background-image:url(img/portfolio/fullsize/${obj.index}.jpg)"><div class="header-content"></div></header>`;
            }
        return result;

    }
    function getTestimonials(){
        var output = '';
        for( var i=0; i<testimonials.length; i++ ){
            output+=getTestimonial( testimonials[i],i );
            console.log('paso')
        }
        return output;
    }
    function getPorfolioImages(){
        var output = '';
        for( var i=1; i<27; i++ ){
            output+=getImage( i > 9 ? i:'0'+i );
        }
        return output;
    }
    $('.popup-gallery').html( getPorfolioImages() );
    // $('#services .container .row').html( getTestimonials() );
    $('.testimonials').html( getTestimonials() );


})(jQuery); // End of use strict
