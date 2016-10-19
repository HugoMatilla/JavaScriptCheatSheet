$('#login').click(function(){
    var userGreeter = G$('John', 'Doe');
    userGreeter.setLang($('#lang').val()).HTMLgreeting("#greeting",true).log();
})
