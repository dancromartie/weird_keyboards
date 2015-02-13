var i = 0;
$(".template-option").each(function () {
    $("<div class='code-reference'></div>").text(i).insertBefore($(this));
    i++;
});

$("#code-input").focus();

$("#code-input").on("keyup", function(event){
    if(event.keyCode == 13){
        var index = parseInt($(this).val());
        add_template(index);
        check_for_blank_inputs();
    }
});

$("#full-text").on("keyup", ".placeholder", function(event){
    if(event.keyCode == 13){
        var val = $(this).val();
        $(this).replaceWith("<span>" + val + "</span>");
        $("#code-input").focus(); 
    }
});

$("#undo-button").on("click", function(){
    $("#full-text div:last").remove();
});

var add_template = function(index){
    // Apparently this only returns the DOM node and not like a jQueryfied object?
    // Wrap in dollar sign
    var template = $($('.template-option').get(parseInt(index))).text();
    var html = "<span>" + template + "</span>";
    html = html.replace("_x_", "<input class='placeholder'/>");
    $("<div class='template-result'></div>").html(html).appendTo("#full-text");
    $("#code-input").val("").focus();
};

var check_for_blank_inputs = function(){
    $(".placeholder").each(function(){
        var input_val = $(this).val();
        if(input_val == ""){
            $(this).focus();
        }
    });
}

$("#combine-button").click(function () {
    $(".placeholder").each(function () {
        var text = $(this).val();
    });
});
