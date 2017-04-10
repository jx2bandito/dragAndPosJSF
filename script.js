function dragAndShow($movable, $output) {

  $movable.draggable({
    drag: function() {

      var percentLeft = Math.round($(this).position().left / $(this).parent().width() * 1000) / 10 + "%";
      var percentRight = Math.round($(this).position().top / $(this).parent().height() * 1000) / 10 + "%";

      $output.html("#" + this.id + "{<br>&nbsp;&nbsp;position: absolute;<br>" +
        "&nbsp;&nbsp;left: " +
        percentLeft + ";<br>" + "&nbsp;&nbsp;top: " + percentRight + ";<br>}");
    }
  });
}
