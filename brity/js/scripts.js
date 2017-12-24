jQuery(function(){

    var minimized_elements = $('p.truncate');
    var max_lenght = 220;
    minimized_elements.each(function(){    
        var t = $(this).text();        
        if(t.length < max_lenght) return;
        
        $(this).html(
            t.slice(0,max_lenght)+'<span>... </span><a href="#" class="truncate-more colored-hyperlink">More <i class="fa fa-chevron-down" aria-hidden="true"></i></a>'+
            '<span style="display:none;">'+ t.slice(max_lenght,t.length)+' <a href="#" class="truncate-less colored-hyperlink">Less <i class="fa fa-chevron-up" aria-hidden="true"></i></a></span>'
        );
        
    }); 
    
    $('a.truncate-more', minimized_elements).click(function(event){
        event.preventDefault();
        $(this).hide().prev().hide();
        $(this).next().show();        
    });
    
    $('a.truncate-less', minimized_elements).click(function(event){
        event.preventDefault();
        $(this).parent().hide().prev().show().prev().show();    
    });
});

$('.collapse').on('shown.bs.collapse', function(){
$(this).parent().find(".glyphicon-plus").removeClass("glyphicon-plus").addClass("glyphicon-minus");
}).on('hidden.bs.collapse', function(){
$(this).parent().find(".glyphicon-minus").removeClass("glyphicon-minus").addClass("glyphicon-plus");
});