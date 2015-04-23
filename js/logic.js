(function($){
    //We define the plugin.
    $.fn.starsCf = function(options) {
        var $elm = this;

        //We define the defaults.
        var config = $.extend({
            'cantidad_nubes' : 1,
            'tamanno' : 'big', //Options big - small - medium
            'color' : 'default', //Options default - other
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
       $.each(clouds, function(i,v){
        //???
       })
    }
}(jQuery))

