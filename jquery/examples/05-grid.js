$(document).ready(() => {
  let random = () => Math.random() * 255;

  for (let i = 0; i < 600; i++) {
    $('main').append(
      $('<div>')
        .css({ display: 'inline-block' })
        .attr({
          class: 'box',
        })
        .css({
          width: '5em',
          height: '3em',
          backgroundColor: `rgba(${random()}, 0, ${random()}, 0.8)`,
        })
        .data({
          item: i,
        })
        .on('click', () => {
          console.log('Mouse clicked', $(this).data('item'));
        })
        .on('mouseover', function () {
          $(this).css({
            backgroundColor: 'rgb(255, 255, 255)',
          });
        })
        .on('mouseout', function () {
          $(this).css({
            backgroundColor: `rgba(0, ${random()}, 0, 0.8)`,
          });
        })
    );
  }
});
