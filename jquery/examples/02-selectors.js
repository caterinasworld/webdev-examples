$(document).ready(() => {
  console.group(`('#list').find('li')`);
  console.log($('#list').find('li'));
  console.groupEnd();

  console.group(`('#list').find('li').eq(0)`);
  console.log($('#list').find('li').eq(0));
  console.groupEnd();

  console.group(`('#list').find('li:nth-child(2n)')`);
  console.log($('#list').find('li:nth-child(2n)'));
  console.groupEnd();

  console.group(`('#list').children()`);
  console.log($('#list').children());
  console.groupEnd();

  console.group(`('#list').parent()`);
  console.log($('#list').parent());
  console.groupEnd();

  console.group(`('#list').parents()`);
  console.log($('#list').parents());
  console.groupEnd();

  console.group(`('li.one').siblings()`);
  console.log($('li.one').siblings());
  console.groupEnd();

  console.group(`('li.two').next()`);
  console.log($('li.two').next());
  console.groupEnd();

  console.group(`('li.four').prev()`);
  console.log($('li.four').prev());
  console.groupEnd();

  console.group(`('li.five').next().prev()`);
  console.log($('li.five').next().prev());
  console.groupEnd();

  console.group(`('li.seven').siblings()`);
  console.log($('li.seven').siblings());
  console.groupEnd();
});
