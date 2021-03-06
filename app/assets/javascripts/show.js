$(document).ready(function(){
  WaldoModule.setupListeners();
})

var WaldoModule = (function(){
  var setupListeners = function(){
    $("img").click(makeTag);
  };

  var Tag = function(x,y){
    this.x = x;
    this.y = y;
    this.width = 26;
    this.height = 26;
  };

  var makeTag = function(e){
    var tag = new Tag(e.pageX, e.pageY);
    var $newTag = $("<div>")
                  .addClass("tag")
                  .css("left", tag.x - (tag.width/2))
                  .css("top", tag.y - (tag.height/2));
    $("#image-container").append($newTag);
  };

  return{
    setupListeners: setupListeners
  };
})()