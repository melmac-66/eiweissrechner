$().ready(function(){

  $.ajax({
    url:"lebensmittel.csv",
    contentType: "text/csv"
  }).done(function(data) {
    lines=data.split("\n");
    for (line in lines) {
      if (line>0) {
        parts=lines[line].split("\t");
        $("#lebensmittel").append( '<option value="'+parts[6]+'">'+parts[0]+'</option>');
      }
    }
  })

/*  $('#lebensmittel').change(function() {
    alert($(this).val()+"g eiweiss pro 100 g");
  })
*/
  $("#berechnen").submit(function(event){
    event.preventDefault();
    lebenmittelwert=parseFloat($('#lebensmittel').val().replace(/,/,'.'));
    faktor=parseFloat($('#menge').val().replace(/,/,'.'));
    wertalsstring=(lebenmittelwert/100*faktor).toString();
    alert("hallo Thora, du hast "+wertalsstring.replace('.',',')+" g Eiweiß gegessen");
    return false;
  })
})
