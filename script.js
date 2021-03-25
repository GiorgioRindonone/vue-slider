var app = new Vue(
  {
    // aggiungo l'elemento su cui abbia effetto il nostro Vue
    el: "#app",
    data: {
      images: [
        "https://www.venezia-help.com/wp-content/uploads/xcampeggi2-2.jpg.pagespeed.ic.AprYmGpuiy.jpg"
        "https://www.radiomontecarlo.net/resizer/-1/-1/true/venezia-1570777493606.jpg--.jpg?1570777494000"
        "https://wips.plug.it/cips/initalia.virgilio.it/cms/2021/02/venezia-citta-fondata-da-una-donna.jpg"
      ],
      imageIndex: 0
    },
    methods: {
      // invoco nextImage e al click mi fa aumentare il valore di imageIndex per far incrementare l'indice dell'array

      nextImage: function() {
        this.imageIndex++;

        if (this.imageIndex == this.images.length) {
          this.imageIndex = 0;
        }
      },
      nextImage: function() {
        this.imageIndex--;

        if (this.imageIndex < 0 ) {
          this.imageIndex = this.images.length;
        }
      },
      // bulletImage: function(i) {
      //   this.imageIndex = i;
      // }

    }
  }
)

// se vogliamo farlo con dissolvenza ci stampiamo le classi e impostiamo una dissolvenza fra le classi
