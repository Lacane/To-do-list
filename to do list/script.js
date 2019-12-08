$("#field").on("keydown", function(event){
    var item;
    var counter = 0;;
    if(event.which == 13){
        counter++;
        item = $("<li>1.</li>");
        item.addClass("list-group-item todo-item");
        item.html($(this).val());
        $(this).val(" ");
        
        item.click(function(){
           $(this).toggleClass("list-group-item-info"); 
        });
        $("#list").append(item);
    }
});

var removeItems = function(event){
    $(".list-group-item-info").remove();
    $("#remove-dialog").modal("hide");
}

$(document).on("keydown", function(){
    if (event.which == 46){
        $("#remove-dialog").modal("show");        
    }
});

$("#remove-dialog__ok").on("click", removeItems);

$("#remove-dialog").on("keydown", function(event){
    if (event.which == 13){
        removeItems();
    }
});




              