
$(function(){
  $(".devour").on("click",function(event){
    var id= $(this).data("id");
    var newDevour = $(this).data("newDevour");

    var newDevouredState = {
      devevour: newDevour
    };
    //send that put request
    $.ajax("api/burgers/" +id, {
      type: "PUT",
      data: newDevouredState
    }).then( function(){
      console.log("changed state to ",newDevour);
      location.reload();
    });
  });

  $(".create-form").on("submit",function(event){
    event.preventDefault();
    var newBurger = {
      burger_name: $("#burgerName").val().trim();
    };

    $.ajax("/api/burgers",{
      type: "POST",
      data: newBurger
    }).then ( function(){
      console.log("created a new burger");
      location.reload();
    }
  });

});

