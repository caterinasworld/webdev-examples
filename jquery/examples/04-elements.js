$(document).ready(function () {
  $('body')
    .css({ fontFamily: 'sans-serif' })
    .append($('<h1>').text('jQuery 04 - Elements'))
    .append(
      $('<main>')
        .css({
          marginTop: '10px',
          padding: '10px',
          backgroundColor: 'lightyellow',
          lineHeight: '1.6em',
        })
        .append(
          $('<ul>')
            .append($('<li>').text('SpongeBob SquarePants'))
            .append($('<li>').text('Patrick Star'))
            .append($('<li>').text('Sandy Cheeks'))
            .append($('<li>').text('Pearl Krabs'))
            .append($('<li>').text('Mr Krabs'))
            .append($('<li>').text('Squidward Tentacles'))
        )
    );
});
