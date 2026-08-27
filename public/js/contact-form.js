(function () {
  function bindContactForm(form) {
    if (form.dataset.ajaxBound === "true") {
      return;
    }

    const feedback = form.nextElementSibling;
    if (!feedback || !feedback.classList.contains("message-status")) {
      return;
    }

    form.dataset.ajaxBound = "true";

    form.addEventListener("submit", async function (event) {
      event.preventDefault();

      const submitButton = form.querySelector(
        'button[type="submit"], input[type="submit"]',
      );
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

  function initContactForms() {
    document
      .querySelectorAll('form[action="/contact"]')
      .forEach(bindContactForm);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initContactForms);
  } else {
    initContactForms();
  }
})();
