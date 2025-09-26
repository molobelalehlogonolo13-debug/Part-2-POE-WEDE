document.getElementById("enquiryForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const iam = document.getElementById("iam").value;
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !phone || !iam || !message) {
    alert("Please fill in all fields.");
    return;
  }

  alert("Enquiry submitted successfully!");
  this.reset();
});
