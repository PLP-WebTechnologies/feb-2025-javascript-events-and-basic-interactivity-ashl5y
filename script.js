document.getElementById("changeBtn").addEventListener("click", () => {
  const msg = document.getElementById("message");
  msg.textContent = "Welcome to the JS Event Playground!";
  msg.style.color = "brown";
});

document.getElementById("hoverBox").addEventListener("mouseover", () => {
  document.getElementById("hoverBox").textContent = "Good job!";
});

document.getElementById("keyInput").addEventListener("keydown", (e) => {
  console.log("Key pressed:", e.key);
});

document.getElementById("changeBtn").addEventListener("dblclick", () => {
  alert(" Yes, it is possible to double-click the button!");
});

function changeImage(img) {
  const main = document.getElementById("mainImage");
  if (img === "img1") {main.src = "https://images.pexels.com/photos/31859402/pexels-photo-31859402/free-photo-of-woman-running-with-dogs-in-queens-park-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";}
  if (img === "img2") {main.src = "https://images.pexels.com/photos/32019319/pexels-photo-32019319/free-photo-of-serene-cat-on-stairway-in-istanbul-grove.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";}
}

// Tabs
const tabButtons = document.querySelectorAll(".tabBtn");
tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tabContent").forEach((tab) => tab.style.display = "none");
    document.getElementById("tab" + btn.dataset.tab).style.display = "block";
  });
});

// Form Validation
document.getElementById("myForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  let feedback = "";

  if (!name || !email || !password) {
    feedback = "Please fill out all fields.";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    feedback = "Invalid email format.";
  } else if (password.length < 8) {
    feedback = "Password must be at least 8 characters.";
  } else {
    feedback = "Form submitted successfully!";
  }

  document.getElementById("formFeedback").textContent = feedback;
});

// Real-time Password Feedback
document.getElementById("password").addEventListener("input", (e) => {
  const feedback = document.getElementById("formFeedback");
  if (e.target.value.length < 8) {
    feedback.textContent = "Password too short.";
  } else {
    feedback.textContent = "";
  }
});

