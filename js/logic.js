(function($){
    //We define the plugin.
    $.fn.cloudsCf = function(options) {
        var $elm = this;

        //We define the defaults.
        var config = $.extend({
            'cantidad_nubes' : 1,
            'tamanno' : [1, 100],
            'color' : '#fff', //Options default - other
            'speed' : 'normal' //Speed of the animation
        }, options);

        init($elm, config);
    }

    function init($elm, options){
       $elm.append('<div class="clouds-container"></div>');

       for(i=0; i < options.cantidad_nubes; i++){
          $('.clouds-container').append('<div class="cloud"></div>')
       }

       var clouds = $('.cloud');

       setClasses(clouds, options);
       setAnimation($elm, options);

       $('.cloud').css('background', options.color);
       $('body').append('<style>.cloud:after{background: ' + options.color + ';}.cloud:before{background: ' + options.color + ';}</style>');
    }

    function setClasses (clouds, options) {
      var minVal = options.tamanno[0],
          maxVal = options.tamanno[1],
          size = minVal + maxVal,
          className = "";

      if (size <= 25) {
        className = "small";
      } else if (size > 25 && size <= 50) {
        className = "medium";
      } else {
        className = "big";
      }

      // console.log(className);

      clouds.addClass(className);
    }

    function setAnimation (container, options) {
      $(container).find(".clouds-container").attr("data-animation-speed", options.speed);
    }

}(jQuery))