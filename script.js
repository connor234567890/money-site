document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("signupForm");
const emailInput = document.getElementById("emailInput");
const msg = document.getElementById("formMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = emailInput.value.trim().toLowerCase();
  if (!email) return;

  // Demo capture (local only). Replace with ConvertKit/Mailchimp embed later.
  const existing = JSON.parse(localStorage.getItem("subscribers") || "[]");
  if (!existing.includes(email)) existing.push(email);
  localStorage.setItem("subscribers", JSON.stringify(existing));

  msg.textContent = "You’re in. Watch for weekly deals.";
  emailInput.value = "";
});