function Valide(){
// Get the input elements by name
const nameInput = document.getElementsByName("T1")[0];
const emailInput = document.getElementsByName("T2")[0];
const addressInput = document.getElementsByName("T3")[0];
const phoneInput = document.getElementsByName("T4")[0];
const deptSelect = document.getElementsByName("D1")[0];

// Add event listeners to validate input when user types
nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
addressInput.addEventListener("input", validateAddress);
phoneInput.addEventListener("input", validatePhone);
deptSelect.addEventListener("input", validateDepartment);

// Define validation functions for each input field
function validateName() {
  const value = nameInput.value.trim();
  if (value === "") {
    nameInput.setCustomValidity("Name is required");
  } else {
    nameInput.setCustomValidity("");
  }
}

function validateEmail() {
  const value = emailInput.value.trim();
  const emailRegex = /^\S+@\S+\.\S+$/;
  if (value === "") {
    emailInput.setCustomValidity("Email is required");
  } else if (!emailRegex.test(value)) {
    emailInput.setCustomValidity("Invalid email format");
  } else {
    emailInput.setCustomValidity("");
  }
}

function validateAddress() {
  const value = addressInput.value.trim();
  if (value === "") {
    addressInput.setCustomValidity("Address is required");
  } else {
    addressInput.setCustomValidity("");
  }
}

function validatePhone() {
  const value = phoneInput.value.trim();
  const phoneRegex = /^\d{10}$/;
  if (value === "") {
    phoneInput.setCustomValidity("Phone number is required");
  } else if (!phoneRegex.test(value)) {
    phoneInput.setCustomValidity("Invalid phone number format (10 digits)");
  } else {
    phoneInput.setCustomValidity("");
  }
}

function validateDepartment() {
  const value = deptSelect.value;
  if (value === "Select") {
    deptSelect.setCustomValidity("Please select a department");
  } else {
    deptSelect.setCustomValidity("");
  }
}}