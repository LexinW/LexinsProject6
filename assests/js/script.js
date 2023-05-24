
var timePassedEl = document.querySelector('#time');

var today = dayjs();
var formatDate = dayjs(today, 'M-D-YYYY').format('dddd, MMM D');
$('#titleDate').text(formatDate);

