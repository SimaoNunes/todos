// Check off specific todos by clicking
// CHECK THE THREE ARGUMENTS IN ON
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

// Click on X to delete
$("ul").on("click", "span", function(event){
  // get the rest of the li (parent):
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  event.stopPropagation();
  // ^^^ stop the bubble propagation
})

// Add a todo after press enter
$("input[type='text']").keypress(function(event){
  if(event.which===13){
    // grabbing new todo text from input
    var todoText = $(this).val();
    $(this).val("");
    // create a new li and add to ul
    // WITH APPEND!
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> "+todoText+"</li>");
  }
});

// Hide and show the new todo input
$(".fa-plus").click(function(){
  $("input[type='text']").fadeToggle();
});
