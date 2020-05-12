$(function(){
// IDEA: scroll
  $("a").click(function(event) {
    if (this.hash !== "") {
    event.preventDefault();

    var gato = this.hash;

    $('html, body').animate({
      scrollTop: $(gato).offset().top
    }, 800, function(){
      window.location.hash = gato;
    });
    }
  });
// IDEA: modal
  $('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})

// IDEA: tooltip
  $('[data-toggle="tooltip"]').tooltip()
});
