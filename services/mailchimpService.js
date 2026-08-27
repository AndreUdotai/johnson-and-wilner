// Centralize Mailchimp newsletter subscription logic and API interactions.
const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
});

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Subscribe footer form email addresses to the configured Mailchimp audience.
const subscribeToNewsletter = async (req, res) => {
  const email = (req.body.email || "").trim();

  if (!email || !EMAIL_PATTERN.test(email)) {
    return sendSubscribeResponse(req, res, {
      success: false,
      status: 400,
      message: "Please enter a valid email address.",
      redirect: "/?subscribe=missing-email",
    });
  }

  try {
    await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
      email_address: email,
      status: "subscribed",
    });

    return sendSubscribeResponse(req, res, {
      success: true,
      status: 200,
      message: "Thank you for subscribing!",
      redirect: "/?subscribe=success",
    });
  } catch (error) {
    console.error(
      "Mailchimp subscription failed:",
      error.response?.body || error.message,
    );

    if (error.response?.body?.title === "Member Exists") {
      return sendSubscribeResponse(req, res, {
        success: false,
        status: 409,
        message: "This email is already subscribed.",
        redirect: "/?subscribe=already-exists",
      });
    }

    return sendSubscribeResponse(req, res, {
      success: false,
      status: 502,
      message: "Unable to subscribe right now. Please try again.",
      redirect: "/?subscribe=error",
    });
  }
};

function wantsJson(req) {
  const accept = req.get("Accept") || "";
  return (
    req.xhr === true ||
    req.get("X-Requested-With") === "XMLHttpRequest" ||
    accept.includes("application/json")
  );
}

function sendSubscribeResponse(req, res, { success, status, message, redirect }) {
  if (wantsJson(req)) {
    return res.status(status).json({ success, message });
  }

  return res.redirect(redirect);
}

module.exports = {
  subscribeToNewsletter,
};
