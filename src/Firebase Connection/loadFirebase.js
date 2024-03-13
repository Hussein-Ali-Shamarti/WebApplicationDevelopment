function loadFirebaseSDK() {
  const script1 = document.createElement("script");
  script1.src = "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
  document.head.appendChild(script1);

  const script2 = document.createElement("script");
  script2.src = "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";
  document.head.appendChild(script2);
}

loadFirebaseSDK();
