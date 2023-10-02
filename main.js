const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-button");
const loading = document.getElementById("loading");

const modal = document.getElementById("main_modal");
const forgotpass = document.getElementById("forgotpass");
const content = document.getElementById("content");

const closeBtns = document.querySelectorAll(".close");
const modalotp = document.getElementById("modal_otp");


const success_otp = document.getElementById("success_otp");

document.addEventListener("DOMContentLoaded", () => {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    loading.style.display = "block";
    loginButton.disabled = true;
    setTimeout(() => {
      loginForm.reset();
      loading.style.display = "none";
      loginButton.disabled = false;
      window.location.href = "dashboard.html";
      alert("Login successful!");
    }, 2000);
  });
  modal.addEventListener("click", () => {
    modal.style.display = "none";
  });
  forgotpass.addEventListener("click", () => {
    modal.style.display = "block";
  });

  closeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.style.display = "none";
      modalotp.style.display = "none";
    });
  });
  content.addEventListener("click", (e) => {
    e.stopPropagation();
  });
});


// OTP INPUT
document.addEventListener("DOMContentLoaded", () => {
  const otpInputFields = document.querySelectorAll(".otp-digit");
  otpInputFields.forEach((inputField, index) => {
    inputField.addEventListener("input", () => {
      const nextField = otpInputFields[index + 1];
      if (nextField && inputField.value) nextField.focus();
    });
    inputField.addEventListener("keydown", (e) => {
      const prevField = otpInputFields[index - 1];
      const isLastField = index === otpInputFields.length - 1;
      if ((e.key === "Backspace" || e.key === "Delete") && prevField) {
        if (!inputField.value) prevField.focus();
      } else if (isLastField && inputField.value.length >= 1) {
        e.preventDefault();
      }
    });
  });
  otpInputFields[0].focus();
});


document.addEventListener("DOMContentLoaded", function () {
  const countdownDisplay = document.getElementById("countdown");
  const countdownDuration = 5 * 60;
  let countdown = countdownDuration;
  function updateCountdown() {
    const minutes = Math.floor(countdown / 60);
    const seconds = countdown % 60;
    const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
    countdownDisplay.textContent = formattedTime;
    if (countdown === 0) {
      clearInterval(countdownInterval);
      countdownDisplay.textContent = "00:00";
    } else {
      countdown--;
    }
  }
  updateCountdown();
  const countdownInterval = setInterval(updateCountdown, 1000);
});



// OTP
function verifyOPT(){
    loading.style.display = "block";
    loginButton.disabled = true;
    modal.style.display = "none";
    modalotp.style.display = "none";
   
    setTimeout(() => {
      modalotp.style.display = "none";
      loginForm.reset();
      loading.style.display = "none";
      loginButton.disabled = false;
      success_otp.style.display = "block"
    }, 2000);
   
}
// EMAIL
function submitEmail(e) {
    loading.style.display = "block";
    loginButton.disabled = true;
    modal.style.display = "none";
    setTimeout(() => {
      modalotp.style.display = "block";
      loginForm.reset();
      loading.style.display = "none";
      loginButton.disabled = false;
    }, 2000);
    console.log("");
  }
  