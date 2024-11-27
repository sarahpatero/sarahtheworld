document.querySelector("form").addEventListener("submit", function(event) {
    if (!document.querySelector("#name").value || !document.querySelector("#email").value || !document.querySelector("#message").value) {
      alert("Please fill out all fields!");
      event.preventDefault(); // Prevent form submission
    }
  });
  