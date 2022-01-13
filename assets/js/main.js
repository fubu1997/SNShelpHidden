//------------------------------------------------------------//
// 1. 각버튼을 누르면 가겨표를 보여줌

$(".instarImg").click(function () {
  $(".instaPage").toggle();
  $(".youtubePage").hide();
  $(".tiktokPage").hide();
  $(".facebookPage").hide();
  $(".twitterPage").hide();
  $(".pinterestPage").hide();
  $(".telegramPage").hide();
  $(".webPage").hide();
});

$(".youtubeImg").click(function () {
  $(".instaPage").hide();
  $(".youtubePage").toggle();
  $(".tiktokPage").hide();
  $(".facebookPage").hide();
  $(".twitterPage").hide();
  $(".pinterestPage").hide();
  $(".telegramPage").hide();
  $(".webPage").hide();
});

$(".tiktokImg").click(function () {
  $(".instaPage").hide();
  $(".youtubePage").hide();
  $(".tiktokPage").toggle();
  $(".facebookPage").hide();
  $(".twitterPage").hide();
  $(".pinterestPage").hide();
  $(".telegramPage").hide();
  $(".webPage").hide();
});

$(".facebookImg").click(function () {
  $(".instaPage").hide();
  $(".youtubePage").hide();
  $(".tiktokPage").hide();
  $(".facebookPage").toggle();
  $(".twitterPage").hide();
  $(".pinterestPage").hide();
  $(".telegramPage").hide();
  $(".webPage").hide();
});

$(".twitterImg").click(function () {
  $(".instaPage").hide();
  $(".youtubePage").hide();
  $(".tiktokPage").hide();
  $(".facebookPage").hide();
  $(".twitterPage").toggle();
  $(".pinterestPage").hide();
  $(".telegramPage").hide();
  $(".webPage").hide();
});

$(".pinterestImg").click(function () {
  $(".instaPage").hide();
  $(".youtubePage").hide();
  $(".tiktokPage").hide();
  $(".facebookPage").hide();
  $(".twitterPage").hide();
  $(".pinterestPage").toggle();
  $(".telegramPage").hide();
  $(".webPage").hide();
});

$(".telegramImg").click(function () {
  $(".instaPage").hide();
  $(".youtubePage").hide();
  $(".tiktokPage").hide();
  $(".facebookPage").hide();
  $(".twitterPage").hide();
  $(".pinterestPage").hide();
  $(".telegramPage").toggle();
  $(".webPage").hide();
});

$(".webImg").click(function () {
  $(".instaPage").hide();
  $(".youtubePage").hide();
  $(".tiktokPage").hide();
  $(".facebookPage").hide();
  $(".twitterPage").hide();
  $(".pinterestPage").hide();
  $(".telegramPage").hide();
  $(".webPage").toggle();
});

//------------------------------------------------------------//
// 2. 인스타 주문수량 입력

$(".instarInput1").on("propertychange change keyup paste input", function () {
  let instaInputValue1 = $(".instarInput1").val();
  $(".instarPrice1").text(`${instaInputValue1 * 3.5}원`);
  $(".넘버").text(`1`);
  $(".수량").text(`${instaInputValue1}개`);
  $(".가격").text(`${instaInputValue1 * 3.5}원`);
});

$(".instarID").on("propertychange change keyup paste input", function () {
  let instarIdValue = $(".instarID").val();
  $(".주소").text(`${instarIdValue}`);
});
