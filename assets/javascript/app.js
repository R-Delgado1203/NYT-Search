// Built by LucyBot. www.lucybot.com
var apiKey = "6ce9d0b8eff54c99bd7ffcee733ccbcf";
var search, rec, startDate, endDate;
var pages = -1;
function setVars() {
  search = $("#search-var").val();
  rec = $("#record-var").val();
  startDate = $("#start-var").val();
  endDate = $("#end-var").val();
  switch (rec) {
    case 1:
    case 5:
      pages = 0;
      break;
    case 10:
    case 20:
      pages = 1;
      break;
  }



  var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
  if (trim(startDate) === "") {
    url += '?' + $.param({
      'api-key': "6ce9d0b8eff54c99bd7ffcee733ccbcf",
      'q': search,
      'page': pages,
    });
  }
  else {
    url += '?' + $.param({
      'api-key': "6ce9d0b8eff54c99bd7ffcee733ccbcf",
      'q': search,
      'page': pages,
      'begin_date': startDate,
      'end_date': endDate
    });
  }


  $.ajax({
    url: url,
    method: 'GET',
  }).done(function (result) {
    console.log(result);
    console.log(url);
  }).fail(function (err) {
    throw err;
  });
}
$(document).ready(function () {

});