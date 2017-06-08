
function dragAndPos($movable) {

  $("body").prepend("<span id=dragAndPosOutput></span>");

var $output = $("#dragAndPosOutput");
$output.css({"position": "absolute", "top": "0", "left": "0", "color":"red"});
  
  $movable.draggable({
    drag: function() {

      var percentLeft = Math.round($(this).position().left / $(this).parent().width() * 10000) / 100 + "%";
      var percentRight = Math.round($(this).position().top / $(this).parent().height() * 10000) / 100 + "%";

      $output.html("#" + this.id + "{<br>&nbsp;&nbsp;position: absolute;<br>" +
        "&nbsp;&nbsp;left: " +
        percentLeft + ";<br>" + "&nbsp;&nbsp;top: " + percentRight + ";<br>}");
    }
  });
}
