document.querySelector(".get-started").addEventListener("click", () => {
  alert("Welcome to Barya Business AI!");
});
function showDashboard() {
  document.getElementById("login").classList.add("hidden");
  document.getElementById("dashboard").classList.remove("hidden");
  document.getElementById("chat").classList.add("hidden");
}

function showChat() {
  document.getElementById("dashboard").classList.add("hidden");
  document.getElementById("chat").classList.remove("hidden");
}

function showFeatureDetails() {
  alert("Feature insights coming soon!");
}

function showMarketplace() {
  alert("Marketplace feature is under development!");
}

function sendMessage() {
  const userMessage = document.getElementById("user-message").value;
  if (userMessage) {
    alert("Message sent to BaryaBot AI: " + userMessage);
    document.getElementById("user-message").value = ""; // Clear the input field
  }
}
// For interactivity, we can add dynamic behavior here.
// Example: A simple alert for "Get Started" button
document.querySelector("button").addEventListener("click", () => {
  alert("Welcome to Barya Business AI!");
});
// Show Login Page
function showLogin() {
  document.getElementById("login-page").classList.add("active");
  document.getElementById("signup-page").classList.remove("active");
  document.getElementById("chatbot-page").classList.remove("active");
}

// Show Signup Page
function showSignup() {
  document.getElementById("signup-page").classList.add("active");
  document.getElementById("login-page").classList.remove("active");
  document.getElementById("chatbot-page").classList.remove("active");
}

// Handle Login
function handleLogin() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;
  if (email && password) {
    alert("Login successful!");
    showChatbot();
  } else {
    alert("Please enter valid credentials.");
  }
}

// Handle Signup
function handleSignup() {
  const name = document.getElementById("signup-name").value;
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;
  if (name && email && password) {
    alert("Signup successful! Please login.");
    showLogin();
  } else {
    alert("All fields are required.");
  }
}

// Show Chatbot Page
function showChatbot() {
  document.getElementById("chatbot-page").classList.add("active");
  document.getElementById("login-page").classList.remove("active");
  document.getElementById("signup-page").classList.remove("active");
}

// Handle Chatbot Messages
function sendMessage() {
  const userMessage = document.getElementById("user-message").value;
  const chatArea = document.getElementById("chat-area");

  if (userMessage) {
    // Display user's message
    const userMessageElement = document.createElement("div");
    userMessageElement.className = "message";
    userMessageElement.textContent = userMessage;
    chatArea.appendChild(userMessageElement);

    // Simulate bot response
    const botResponse = document.createElement("div");
    botResponse.className = "message";
    botResponse.textContent = "BaryaBot says: " + userMessage;
    chatArea.appendChild(botResponse);

    // Clear input field
    document.getElementById("user-message").value = "";
  }
}
function openSite(url) {
  window.open(url, "_blank"); // Opens the link in a new tab
}
function openSite(url) {
  window.open(url, "_blank"); // Opens the link in a new tab
}
function sendMessage() {
  const userMessage = document.getElementById("user-message").value.trim();
  const chatArea = document.getElementById("chat-area");

  if (userMessage) {
    // Display user's message
    const userMessageElement = document.createElement("div");
    userMessageElement.className = "message";
    userMessageElement.textContent = `You: ${userMessage}`;
    chatArea.appendChild(userMessageElement);

    // Simulate a bot response
    setTimeout(() => {
      const botMessageElement = document.createElement("div");
      botMessageElement.className = "message";
      botMessageElement.textContent = `BaryaBot: I'm here to assist! You said: "${userMessage}"`;
      chatArea.appendChild(botMessageElement);
    }, 1000);

    document.getElementById("user-message").value = ""; // Clear input
  }
}
// Handle Chatbot Interaction
function sendMessage() {
  const userMessage = document.getElementById("user-message").value;
  const chatArea = document.getElementById("chat-area");

  if (userMessage) {
    // Append user's message
    const userDiv = document.createElement("div");
    userDiv.className = "message";
    userDiv.textContent = "You: " + userMessage;
    chatArea.appendChild(userDiv);

    // Bot's response (simulated)
    const botDiv = document.createElement("div");
    botDiv.className = "message";
    botDiv.textContent = "BaryaBot: Let me assist you with that!";
    chatArea.appendChild(botDiv);

    document.getElementById("user-message").value = ""; // Clear input
  }
}
document.getElementById("clickMe").addEventListener("click", function () {
  document.getElementById("message").innerText = "You clicked the button!";
});
document.getElementById("clickMe").addEventListener("click", function () {
  document.getElementById("message").innerText = "You clicked the button!";
});
// Button Click Event
document.getElementById("clickMe").addEventListener("click", function () {
  alert("You clicked the button! Welcome to Barya Business AI!");
});

// Smooth Scroll Effect
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Auto Typing Effect
const text = "Welcome to Barya Business AI!";
let index = 0;
function typeEffect() {
  if (index < text.length) {
    document.getElementById("typingText").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  }
}
window.onload = typeEffect;
function submitSurvey() {
  let businessType = document.getElementById("businessType").value;
  let challenge = document.getElementById("challenge").value;
  let aiUsage = document.getElementById("aiUsage").value;
  let email = document.getElementById("email").value;

  if (email === "") {
    alert("Please enter your email!");
    return;
  }

  let aiResponse = "Based on your responses, here’s a quick AI suggestion: ";

  if (challenge === "Marketing") {
    aiResponse +=
      "Focus on digital marketing strategies like SEO, social media, and AI-driven ad campaigns.";
  } else if (challenge === "Funding") {
    aiResponse +=
      "Try crowdfunding, angel investors, or AI-powered financial modeling to attract investors.";
  } else if (challenge === "Automation") {
    aiResponse +=
      "Use AI-powered CRM tools to automate business processes and improve efficiency.";
  } else {
    aiResponse +=
      "Growth hacking strategies like customer retention, branding, and AI analytics can help.";
  }

  document.getElementById("responseMessage").innerHTML =
    "Thank you! " + aiResponse + " We will send more AI insights to " + email;
}
async function sendMessage() {
  let userMessage = document.getElementById("userInput").value;
  let chatbox = document.getElementById("chatbox");

  // User message show in chatbox
  chatbox.innerHTML += `<p><b>You:</b> ${userMessage}</p>`;

  // OpenAI API Call (Replace with your API key)
  let response = await fetch("https://api.openai.com/v1/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer YOUR_OPENAI_API_KEY"
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      prompt: userMessage,
      max_tokens: 100
    })
  });

  let data = await response.json();
  let aiResponse = data.choices[0].text;

  // Show AI response
  chatbox.innerHTML += `<p><b>BaryaBot:</b> ${aiResponse}</p>`;

  // Clear input
  document.getElementById("userInput").value = "";
}

