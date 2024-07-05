document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const videoContainer = document.getElementById("videoContainer");
  
    function openModal(videoId) {
      const videoSrc = {
        video1: "https://www.youtube.com/embed/eKL3TceSxvk?si=qaESR3zj6gZF4fBC",
        video2: "https://www.youtube.com/embed/eKL3TceSxvk?si=qaESR3zj6gZF4fBC",
        video3: "https://www.youtube.com/embed/eKL3TceSxvk?si=qaESR3zj6gZF4fBC",
      };
  
      videoContainer.innerHTML = `<iframe src="${videoSrc[videoId]}" width="100%" height="400" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`;
      modal.classList.add("active");
    }
  
    function closeModal() {
      modal.classList.remove("active");
      videoContainer.innerHTML = "";
    }
  
    // Bind click events to open buttons
    document.querySelectorAll("[data-modal-trigger]").forEach((button) => {
      button.addEventListener("click", function () {
        openModal(this.dataset.modalTrigger);
      });
    });
  
    // Bind click event to close button
    document.querySelectorAll("[data-modal-close]").forEach((button) => {
      button.addEventListener("click", closeModal);
    });
  
    // Close modal when clicking outside of modal content
    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        closeModal();
      }
    });
  });
  