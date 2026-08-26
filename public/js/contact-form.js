(function () {
  function initContactForm() {
    const form = document.querySelector(".contact-form form");
    const feedback = document.querySelector(".contact-form .message-status");

    if (!form || !feedback) {
      return;
    }

    form.addEventListener("submit", async function (event) {
      event.preventDefault();

      const submitButton = form.querySelector('button[type="submit"]');
      feedback.textContent = "";
      feedback.classList.remove("is-error");

      if (submitButton) {
        submitButton.disabled = true;
      }

      try {
        const response = await fetch(form.action, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "X-Requested-With": "XMLHttpRequest",
          },
          body: new URLSearchParams(new FormData(form)),
        });

        const data = await response.json().catch(function () {
          return {};
        });

        if (!response.ok || !data.success) {
          throw new Error(
            data.message || "Unable to send your message. Please try again.",
          );
        }

        feedback.textContent = "Message sent successfully!";
        form.reset();
      } catch (error) {
        feedback.classList.add("is-error");
        feedback.textContent =
          error.message || "Unable to send your message. Please try again.";
      } finally {
        if (submitButton) {
          submitButton.disabled = false;
        }
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initContactForm);
  } else {
    initContactForm();
  }
})();
