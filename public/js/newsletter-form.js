(function () {
  function initNewsletterForm() {
    const form = document.querySelector(".js-newsletter-form");
    const feedback = document.querySelector(".js-newsletter-feedback");

    if (!form || !feedback) {
      return;
    }

    form.addEventListener("submit", async function (event) {
      event.preventDefault();

      const emailInput = form.querySelector('input[name="email"]');
      const submitButton = form.querySelector('button[type="submit"]');
      const email = (emailInput && emailInput.value ? emailInput.value : "").trim();

      feedback.textContent = "";
      feedback.classList.remove("is-error");

      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        feedback.classList.add("is-error");
        feedback.textContent = "Please enter a valid email address.";
        return;
      }

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
          body: new URLSearchParams({ email: email }),
        });

        const data = await response.json().catch(function () {
          return {};
        });

        if (!response.ok || !data.success) {
          throw new Error(
            data.message || "Unable to subscribe right now. Please try again.",
          );
        }

        feedback.textContent = data.message || "Thank you for subscribing!";
        form.reset();
      } catch (error) {
        feedback.classList.add("is-error");
        feedback.textContent =
          error.message || "Unable to subscribe right now. Please try again.";
      } finally {
        if (submitButton) {
          submitButton.disabled = false;
        }
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initNewsletterForm);
  } else {
    initNewsletterForm();
  }
})();
