$('.owl-carousel').owlCarousel({
    loop:true,
    margin:25,
    dots:true,
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    smartSpeed:900,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        300:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});

var btn = document.getElementById('btntop');

window.onscroll = function (){
    if(window.pageYOffset >=800){
        btn.style.display = "block"
    }else{
        btn.style.display = "none"
    } 
}

btn.onclick = function(){
    window.scroll({ top: 0, left: 0, behavior: 'smooth' })
}

