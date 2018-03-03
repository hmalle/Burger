
$(function(){
  $("#devour").on("click",function(event){
    var id= $(this).data("id");
    var newDevour = $(this).data("devoured");
    console.log("A burger being devoured");
    var newDevouredState = {
      devoured: true
    };
    alert("Another burger devoured");
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
    //that post request
    $.ajax("/api/burgers/",{
      type: "POST",
      data: newBurger
    }).then ( function(){
      location.reload();
    });
  });

});

