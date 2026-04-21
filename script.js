"use strict";

// ======================================================
// SELECT ELEMENTS
// ======================================================
const copyInput = document.getElementById("copyInput");
const copyBtn = document.getElementById("copyBtn");
const clearBtn = document.getElementById("clearBtn");
const toast = document.getElementById("toast");

const charCounter = document.querySelector(".char-counter");
const helperText = document.querySelector(".helper-text");
const toastProgress = document.querySelector(".toast-progress");

// ======================================================
// UPDATE CHARACTER COUNTER
// ======================================================

function characterCounter() {
  const input = copyInput.value;
  const length = input.length;

  charCounter.textContent = `${length}characters`;

  if (length === 0) {
    helperText.textContent = "Press Ctrl + Enter to copy";
    copyBtn.disabled = true;
  } else {
    helperText.textContent = "Typing... (Ctrl + Enter to copy)";
    copyBtn.disabled = false;
  }
}

// ======================================================
// SHOW TOAST MESSAGE
// ======================================================

function showToast() {
  toast.classList.add("show");

  toastProgress.style.animation = "none";
  toastProgress.offsetWidth;
  toastProgress.style.animation = "toastProgress 2s linear forwards";

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
}

// ======================================================
// COPY TEXT FUNCTION
// ======================================================

function copyText() {
  const text = copyInput.value;

  if (text.trim() === "") {
    helperText.textContent = "Write something first";
    return;
  }
  navigator.clipboard.writeText(text);
  helperText.textContent = "Copied successfully";

  showToast();
}

// ======================================================
// CLEAR TEXT FUNCTION
// ======================================================

function clearText() {
  copyInput.value = "";

  helperText.textContent = "Ready to copy";

  characterCounter();
  copyInput.focus();
}

// ======================================================
// EVENT LISTENERS
// ======================================================

copyBtn.addEventListener("click", copyText);

clearBtn.addEventListener("click", clearText);

copyInput.addEventListener("input", characterCounter);

document.addEventListener("keydown", function (e) {
  if (e.ctrlKey && e.key === "Enter") {
    copyText();
  }
});

// ======================================================
// INITIAL CALL
// ======================================================

characterCounter();
