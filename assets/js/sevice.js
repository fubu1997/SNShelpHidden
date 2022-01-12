$("#serviceImg img").click(function () {
  $(".서비스목록Content").toggle();

  $(".instarSevice").click(function () {
    $(".instarSeviceDescription").toggle();
    $(".youtubeSeviceDescription").hide();
    $(".tiktokSeviceDescription").hide();
    $(".facebookSeviceDescription").hide();
    $(".twitterSeviceDescription").hide();
    $(".pinterestSeviceDescription").hide();
    $(".TelegramSeviceDescription").hide();
    $(".webSeviceDescription").hide();
  });

  $(".youtubeSevice").click(function () {
    $(".instarSeviceDescription").hide();
    $(".youtubeSeviceDescription").toggle();
    $(".tiktokSeviceDescription").hide();
    $(".facebookSeviceDescription").hide();
    $(".twitterSeviceDescription").hide();
    $(".pinterestSeviceDescription").hide();
    $(".TelegramSeviceDescription").hide();
    $(".webSeviceDescription").hide();
  });

  $(".tiktokSevice").click(function () {
    $(".instarSeviceDescription").hide();
    $(".youtubeSeviceDescription").hide();
    $(".tiktokSeviceDescription").toggle();
    $(".facebookSeviceDescription").hide();
    $(".twitterSeviceDescription").hide();
    $(".pinterestSeviceDescription").hide();
    $(".TelegramSeviceDescription").hide();
    $(".webSeviceDescription").hide();
  });

  $(".facebookSevice").click(function () {
    $(".instarSeviceDescription").hide();
    $(".youtubeSeviceDescription").hide();
    $(".tiktokSeviceDescription").hide();
    $(".facebookSeviceDescription").toggle();
    $(".twitterSeviceDescription").hide();
    $(".pinterestSeviceDescription").hide();
    $(".TelegramSeviceDescription").hide();
    $(".webSeviceDescription").hide();
  });

  $(".twitterSevice").click(function () {
    $(".instarSeviceDescription").hide();
    $(".youtubeSeviceDescription").hide();
    $(".tiktokSeviceDescription").hide();
    $(".facebookSeviceDescription").hide();
    $(".twitterSeviceDescription").toggle();
    $(".pinterestSeviceDescription").hide();
    $(".TelegramSeviceDescription").hide();
    $(".webSeviceDescription").hide();
  });

  $(".pinterestSevice").click(function () {
    $(".instarSeviceDescription").hide();
    $(".youtubeSeviceDescription").hide();
    $(".tiktokSeviceDescription").hide();
    $(".facebookSeviceDescription").hide();
    $(".twitterSeviceDescription").hide();
    $(".pinterestSeviceDescription").toggle();
    $(".TelegramSeviceDescription").hide();
    $(".webSeviceDescription").hide();
  });

  $(".telegramSevice").click(function () {
    $(".instarSeviceDescription").hide();
    $(".youtubeSeviceDescription").hide();
    $(".tiktokSeviceDescription").hide();
    $(".facebookSeviceDescription").hide();
    $(".twitterSeviceDescription").hide();
    $(".pinterestSeviceDescription").hide();
    $(".TelegramSeviceDescription").toggle();
    $(".webSeviceDescription").hide();
  });

  $(".webSevice").click(function () {
    $(".instarSeviceDescription").hide();
    $(".youtubeSeviceDescription").hide();
    $(".tiktokSeviceDescription").hide();
    $(".facebookSeviceDescription").hide();
    $(".twitterSeviceDescription").hide();
    $(".pinterestSeviceDescription").hide();
    $(".TelegramSeviceDescription").hide();
    $(".webSeviceDescription").toggle();
  });
});
