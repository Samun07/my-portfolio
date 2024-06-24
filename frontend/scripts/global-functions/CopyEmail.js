function copyMainEmail() {
  const emailElement = document.querySelector(".email");
  const IconEmail = document.querySelector(".email i");

  emailElement.addEventListener("click", () => {
    const email = emailElement.innerText;
    navigator.clipboard.writeText(email);
    IconEmail.classList.remove("ri-file-copy-line");
    IconEmail.classList.add("ri-checkbox-circle-fill");
    IconEmail.classList.add("fade-in-animation");

    setTimeout(() => {
      IconEmail.classList.remove("ri-checkbox-circle-fill");
      IconEmail.classList.add("ri-file-copy-line");
      IconEmail.classList.remove("fade-in-animation");
    }, 1000);
  });
}

copyMainEmail();
