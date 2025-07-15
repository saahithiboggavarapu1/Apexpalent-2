function sendMessage() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields.");
    return;
  }

  document.getElementById("contactResponse").textContent =
    `Thank you, ${name}. Your message has been sent!`;

  // Clear form
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
}

function addImage() {
  const gallery = document.getElementById("galleryImages");

  // Handle file upload
  const file = document.getElementById("uploadFile").files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const img = document.createElement("img");
      img.src = e.target.result;
      gallery.appendChild(img);
    };
    reader.readAsDataURL(file);
  }

  // Handle URL upload
  const url = document.getElementById("imageUrl").value.trim();
  if (url) {
    const img = document.createElement("img");
    img.src = url;
    gallery.appendChild(img);
    document.getElementById("imageUrl").value = "";
  }

  // Clear file input
  document.getElementById("uploadFile").value = "";
}