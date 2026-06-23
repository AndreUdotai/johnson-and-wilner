// Centralize Mailchimp newsletter subscription logic and API interactions.
const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
});

// Subscribe footer form email addresses to the configured Mailchimp audience.
const subscribeToNewsletter = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.redirect("/?subscribe=missing-email");
  }

  try {
    await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
      email_address: email,
      status: "subscribed",
    });

    return res.redirect("/?subscribe=success");
  } catch (error) {
    console.error("Mailchimp subscription failed:", error.response?.body || error.message);

    if (error.response?.body?.title === "Member Exists") {
      return res.redirect("/?subscribe=already-exists");
    }

    return res.redirect("/?subscribe=error");
  }
};

module.exports = {
  subscribeToNewsletter,
};