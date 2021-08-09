$(document).ready(() => {
  let count = 0;
  $('#input')
    .css({
      width: '200px',
      height: '100px',
      fontSize: '2em',
    })
    .on('click', function () {
      $(this).val('clicked: ' + count++);
      console.log('This is a click event');
    })
    .on('mouseover', () => {
      console.log('This is a mouseover event');
    })
    .on('mousemove', () => {
      console.log('This is a mousemove event');
    })
    .on('mouseout', () => {
      console.log('This is a mouseout event');
    });
});
