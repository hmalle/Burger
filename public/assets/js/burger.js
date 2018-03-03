
$(function(){
  $(document).on("click","#devour",function(event){
    var id= $(this).data("id");
    var newDevour = $(this).data("devoured");
    var newDevouredState = {
      devoured: true
    };
    //send that put request
    $.ajax("/api/burgers/" +id, {
      type: "PUT",
      data: newDevouredState
    }).then( function(){
      location.reload();
    });
  });

  $(".create-form").on("submit",function(event){
    event.preventDefault();
    var newBurger = {
      burger_name: $("#burgerName").val().trim()
    };
    $("#burgerName").val("");
    //that post request
    $.ajax("/api/burgers/",{
      type: "POST",
      data: newBurger
    }).then ( function(){
      location.reload();
    });
  });

});

