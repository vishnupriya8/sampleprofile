$('#save_button').click(function() {
  rootRef.set({
    name:$('#name').val(),
    dob:$('#dob').val(),
    username:$('#username').val(),
    gender:$('#gender').val(),
    contact_number:$('#contact_number').val()
});
})
