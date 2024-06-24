function downloadCV() {
  const ButtonDownload = document.querySelector(".button-download-cv");
  const IconDownload = document.querySelector(".button-download-cv i");

  ButtonDownload.addEventListener("click", () => {
    const CV_PATH = "../../public/CV_Samuel_Sanchez_2024.pdf";

    const linkToDownloadCV = document.createElement("a");

    linkToDownloadCV.href = CV_PATH;
    linkToDownloadCV.download = "CV Samuel Sanchez 2024.pdf";

    document.body.appendChild(linkToDownloadCV);
    linkToDownloadCV.click();

    document.body.removeChild(linkToDownloadCV);

    IconDownload.classList.remove("ri-loop-right-fill");
    IconDownload.classList.remove("ri-download-line");
    IconDownload.classList.add("ri-checkbox-circle-fill");
    IconDownload.classList.add("fade-in-animation");

    setTimeout(() => {
      IconDownload.classList.remove("ri-checkbox-circle-fill");
      IconDownload.classList.add("ri-loop-right-fill");
      IconDownload.classList.remove("fade-in-animation");
    }, 1000);
  });
}

downloadCV();
