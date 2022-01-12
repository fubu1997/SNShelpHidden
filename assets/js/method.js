// 복사버튼을 누루면 복사하기가 실행된다

const methodKakaoBtn = document.querySelector(".사용방법카톡 button");
const methodInstarBtn = document.querySelector(".사용방법인스타 button");
const methodKakaoId = document.querySelector(".사용방법카톡 span").textContent;
const methodInstarId =
  document.querySelector(".사용방법인스타 span").textContent;

methodKakaoBtn.addEventListener("click", function () {
  const textArea = document.createElement("textarea");
  document.body.appendChild(textArea);
  textArea.value = methodKakaoId;

  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
  alert("복사되었습니다.");
});

methodInstarBtn.addEventListener("click", function () {
  const textArea = document.createElement("textarea");
  document.body.appendChild(textArea);
  textArea.value = methodKakaoId;

  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
  alert("복사되었습니다.");
});
