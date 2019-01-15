var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', () => {
      FormView.handleSubmit(this);
      return false;
    });
  },

  handleSubmit: function(event) {
    Messages.setMessage($('#message').val());
    $('#message').val('');
    Parse.create(Messages.getMessage(), () =>
      MessagesView.renderMessage(Messages.message), () => console.log("FAIL"));
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};
