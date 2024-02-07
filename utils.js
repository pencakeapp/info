var MAC_VERSION = "0.0.8";
var WIN_VERSION = "0.0.10";

var baseUrl =
  "https://github.com/diffathy-dev/bbapp-desktop-testing/releases/download";

var urlMacOS_x64 = baseUrl + `/v${MAC_VERSION}/PenCake-${MAC_VERSION}.dmg`;
var urlMacOS_arm64 =
  baseUrl + `/v${MAC_VERSION}/PenCake-${MAC_VERSION}-arm64.pkg`;
var urlWindows = baseUrl + `/v${WIN_VERSION}/PenCake-Setup-${WIN_VERSION}.exe`;

function detectOSAndArchitecture() {
  var os = "Unknown OS";
  var arch = "Unknown Architecture";

  var a = navigator.appVersion || "";
  var b = navigator.userAgent || "";

  // 운영체제 감지
  if (a.indexOf("Win") != -1 || b.indexOf("Win") != -1) os = "Windows";
  if (a.indexOf("Mac") != -1 || b.indexOf("Mac") != -1) os = "macOS";

  // 아키텍처 감지 (navigator.platform은 더 이상 사용되지 않으므로 주의)
  if (b.indexOf("WOW64") != -1 || b.indexOf("Win64") != -1) arch = "x64";
  else arch = "x86";

  // MacOS의 경우, Intel과 Silicon 구분
  if (os === "macOS") {
    if (a.indexOf("Intel") != -1 || b.indexOf("Intel") != -1) arch = "Intel";
    else if (a.indexOf("Silicon") != -1 || b.indexOf("Silicon") != -1)
      arch = "Silicon";
  }

  return { os, arch };
}

function downloadFileFromUrl(url) {
  var a = document.createElement("a");
  a.href = url; // 파일 URL 설정
  a.download = url.split("/").pop(); // 다운로드될 파일명 설정 (URL의 마지막 부분을 파일명으로 사용)

  // 문서에 요소 추가 (보이지 않게 처리)
  document.body.appendChild(a);

  // `<a>` 요소 클릭 이벤트 강제 발생
  a.click();

  // 요소 제거
  document.body.removeChild(a);
}

function downloadMacOS() {
  const { arch } = detectOSAndArchitecture();
  const url = arch === "Silicon" ? urlMacOS_arm64 : urlMacOS_x64;
  downloadFileFromUrl(url);
}

function downloadWindows() {
  downloadFileFromUrl(urlWindows);
}
