(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    if (!console[method]) {
      console[method] = noop;
    }
  }
}());

$('.project-percent').each(function(){
  var $this = $(this);
  var percent = $this.attr('percent');
  $this.css("width",percent+'%');
  $({animatedValue: 0}).animate({animatedValue: percent},{
      duration: 2000,
      step: function(){
          $this.attr('percent', Math.floor(this.animatedValue) + '%');
      },
      complete: function(){
          $this.attr('percent', Math.floor(this.animatedValue) + '%');
      }
  });
});