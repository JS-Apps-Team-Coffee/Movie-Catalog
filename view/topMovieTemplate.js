function getTopMovieTemp (){
    var $topMovieTemplate = "<div class='box4'>"+
        "<a data-info='fb-like' name='{{title}}'></a>"+
        "<figure><img src='{{image}}'></figure>"+
        "<div class='info1 maxheight' style='height: 116px;'>"+
        "<div class='box_inner'>"+
        "<p class='list3title1' data-info='title'>{{title}}</p>"+
        "<p class='list3title3' data-info='description'>{{description}}</p>"+
        "<p class='list3title2' data-info='rating'>{{rating}}</p>"+
        "</div>"+
        "</div>"+
        "<button type='button' class='btn btn-success pull-left' data-info='add-to-cart'><i class='fa fa-shopping-cart'></i> <span>Add to Cart</span></button>"+
        "<a data-info='link' href='{{link}}' class='btn-link btn-link1'>read more<span></span></a>"+
        "<div class='fb-like' data-info='fb-like' data-href='http://moviecatalog.net84.net/#{{title}}' data-layout='button_count' data-action='like' data-show-faces='true' data-share='true'></div>"
        "</div>"
    return $topMovieTemplate;
};

