
// const openModalButtons = document.querySelectorAll("[data-modal-target]");
// const closeModalButtons = document.querySelectorAll("[data-close-button]");
// const overlay = document.getElementById("overlay");
// const para = document.querySelectorAll("[para-modal-target]");

// para.addEventListener("mouseup", () => {
//     const modal = document.querySelector(para.dataset.modalTarget);
//     openModal(modal);
// });



// openModalButtons.forEach((button) => {
//   button.addEventListener("mouseup", () => {
//     const modal = document.querySelector(button.dataset.modalTarget);
//     openModal(modal);
//   });
// });



// overlay.addEventListener("click", () => {
//   const modals = document.querySelectorAll(".modal.active");
//   modals.forEach((modal) => {
//     closeModal(modal);
//   });
// });

// closeModalButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     const modal = button.closest(".modal");
//     closeModal(modal);
//   });
// });

// function openModal(modal) {
//   if (modal == null) return;
//   modal.classList.add("active");
//   overlay.classList.add("active");
// }

// function closeModal(modal) {
//   if (modal == null) return;
//   modal.classList.remove("active");
//   overlay.classList.remove("active");
// }

const API_KEY =
  "a_4boRTqYV6rqy3VPlbsys6SOG7NRaCiqPhx8ax0em1z7u5Hu1PoUxtzBJ3yrmFkmAUQ6nmKtQLK8mEamP"; // Replace with your actual API key
const API_URL = "https://api-b2b.backenster.com/b1/api/v3/translate";

async function translateText(text, sourceLang, targetLang) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      from: sourceLang,
      to: targetLang,
      data: [text],
      platform: "api",
    }),
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }

  const result = await response.json();
  return result.result[0];
}


// paragraph.addEventListener("mouseup", () => {
//   const selection = window.getSelection();
//   const selectedText = selection.toString();

//   if (selectedText) {
//     // Clear any existing bubble
//     document.querySelectorAll(".bubble").forEach((bubble) => bubble.remove());

//     // Create the bubble div
//     const bubble = document.createElement("div");
//     bubble.classList.add("box"); // Apply a class for styling
//     bubble.textContent = "Hi there!"; // Set bubble text content

//     // Position the bubble based on the selection coordinates
//     const range = selection.getRangeAt(0);
//     const rect = range.getBoundingClientRect();
//     bubble.style.position = "absolute";
//     bubble.style.top = `${window.scrollY + rect.top - 30}px`; // Adjust to show above the selected text
//     bubble.style.left = `${window.scrollX + rect.left}px`;

//     // Add the bubble to the body
//     document.body.appendChild(bubble);
//   }
// });
//const paragraph = document.getElementById("text");

// paragraph.addEventListener("mouseup", () => {
//     const selectedText = window.getSelection().toString();
//     const bubble = document.createElement("div");
//     bubble.classList.add(".box");
//     const newText = document.createElement("p");
//     newText.innerHTML = "hi there!";
//     bubble.appendChild(newText);
//     selectedText.appendChild(bubble);
//   });


  const newText = translateText(selectedText, "en_GB", "es_ES")
    .then((translatedText) => console.log(translatedText))
    .catch((error) => console.error(error));
