// love-incease
document
  .getElementById("heartContainer")
  .addEventListener("click", function (e) {
    if (e.target.classList.contains("hIcon")) {
      let heartCount = parseInt(document.getElementById("love").innerText);
      heartCount += 1;
      document.getElementById("love").innerText = heartCount;
    }
  });

//copy-clip
const copyButtons = document.querySelectorAll(".copyClip");
copyButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    let coinsc = parseInt(document.getElementById("coinCount").innerText);
    coinsc += 1;
    document.getElementById("coinCount").innerText = coinsc;
    const card = button.closest(".shadow");
    const numberEl = card.querySelectorAll("h2")[1];
    const number = numberEl.innerText;
    navigator.clipboard
      .writeText(number)
      .then(() => {
        alert("Copied: " + number);
      })
      .catch((err) => {
        console.error("Failed to copy!", err);
      });
  });
});

// Call messages
const messages = [
  "📞 Calling National Emergency Number 999,,,",
  "📞 Calling Police Helpline Number 999,,,",
  "📞 Calling Fire Service Number 999,,,",
  "📞 Calling Ambulance Service 1994-999999,,,",
  "📞 Calling Women & Child Helpline 109,,,",
  "📞 Calling Anti-Corruption Helpline 106,,,",
  "📞 Calling Electricity Helpline 16216,,,",
  "📞 Calling Brac Helpline 16445,,,",
  "📞 Calling Bangladesh Railway Helpline 163,,,",
];

const customTexts = [
  "National Emergency Number <br> 999",
  "Police Helpline Number  <br> 999",
  "Fire Service Number  <br> 999",
  "Ambulance Service  <br> 1994-999999",
  "Women & Child Helpline  <br> 109",
  "Anti-Corruption Helpline  <br> 106",
  "Electricity Helpline  <br> 16216",
  "Brac Helpline  <br> 16445",
  "Bangladesh Railway Helpline  <br> 163",
];

// Call buttons
for (let i = 0; i < 9; i++) {
  const btn = document.getElementById("call" + (i + 1));
  if (!btn) continue;

  btn.addEventListener("click", function () {
    const coinEl = document.getElementById("callCoin");
    let coins = parseInt(coinEl.innerText);

    if (coins < 20) {
      alert("❌ Not enough coins!");
      return;
    }

    coins -= 20;
    coinEl.innerText = coins;
    alert(messages[i]);
    const history = document.getElementById("callHistory");
    const div = document.createElement("div");
    const now = new Date();
    const time = now.toLocaleTimeString();
    div.innerHTML = `<strong>${customTexts[i]}</strong><span style="float:right;">${time}</span>`;
    div.style.backgroundColor = "#ededed";
    div.style.padding = "10px";
    div.style.borderRadius = "15px";
    div.style.color = "black";
    history.prepend(div);
  });
}
const clearBtn = document.querySelector("aside button");
if (clearBtn) {
  clearBtn.addEventListener("click", function () {
    document.getElementById("callHistory").innerHTML = "";
  });
}
