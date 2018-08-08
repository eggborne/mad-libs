
$(document).ready(function(){
  $("form#mad-lib-form").submit(function(event) {
    var nameInput1 = $("input#name-input-1").val(); //
    var nameInput2 = $("input#name-input-2").val();//
    var verbInput1 = $("input#verb-input-1").val();
    var verbInput2 = $("input#verb-input-2").val();
    var nounInput1 = $("input#noun-input-1").val(); //
    var nounInput2 = $("input#noun-input-2").val();//
    var adjInput1 = $("input#adj-input-1").val();//
    var adjInput2 = $("input#adj-input-2").val();

    var story = nameInput1 + " was the son of "+nameInput2+", a laborer, and Aretha (or Reatha) Williams. At the time, his mother was a "+adjInput1+" orphan "+verbInput2+" a living as a "+nounInput2+" driver. They lived in "+nounInput1+", Florida with Robinson's father and his wife, Mary Jane Robinson. The Robinson family had informally "+verbInput1+" Aretha (or Reatha), and she took the "+adjInput2+" surname Robinson."
    $('#output').append(story)
    $('#output').css({
      'transform':'scaleX(1) scaleY(1)',
      'opacity':'1'
    })
    event.preventDefault();
  });
});
