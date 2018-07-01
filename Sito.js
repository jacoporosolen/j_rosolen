

$('.mail').on('click',function(){
     window.location.href = "mailto:jacopo.rosolen@hotmail.it?subject=Subject&body=message%20goes%20here";
  });

var nomefoto1;
var nomefoto2;
var nomefoto3;
var nomefoto4;
var text_par;
var text_par2;

$(".row > a").on("click", function(){
$("#pg1").css("display","block")
$("#pg2").css("display","block")
nomefoto1=$(this).find("img");
nomefoto2=nomefoto1.attr("src");
nomefoto3=$(this).find(".colore_link_t");
nomefoto4=nomefoto3.html();
text_par=$(this).find(".testo_paragrafo");
text_par2=text_par.html();



$("#pg1 > #Titolo").html(nomefoto4)
$("#pg2 > img").attr("src", nomefoto2)
$("#pg1 > #paragrafo").html(text_par2)


});

$("").ready(setTimeout(loading, 2500))
function loading(){
  $(".loading").css('display', 'none');

}


$("foto").ready(setTimeout(loading, 2500))
function loading(){
  $(".loading").css('display', 'none');

}

$("about").ready(setTimeout(loading, 2500))
function loading(){
  $(".loading").css('display', 'none');

}

$("foto").on("click",function(){
  $('a.photo').zoom({url: 'andre.jpg'});
});



$(".about").on("mouseenter", function(){
  $(".fotos").css("display", "block")})

  $(".about").on("mouseleave", function(){
    $(".fotos").css("display", "none")})




$(".foto").on("mouseenter", function(){
      $(".fotoss").css("display", "block")})

      $(".foto").on("mouseleave", function(){
        $(".fotoss").css("display", "none")})
