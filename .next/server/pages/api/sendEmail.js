"use strict";
(() => {
var exports = {};
exports.id = 719;
exports.ids = [719];
exports.modules = {

/***/ 871:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "nodemailer"
const external_nodemailer_namespaceObject = require("nodemailer");
var external_nodemailer_default = /*#__PURE__*/__webpack_require__.n(external_nodemailer_namespaceObject);
;// CONCATENATED MODULE: ./src/pages/api/sendEmail.ts

async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({
            message: "Method Not Allowed"
        });
    }
    const { recipientEmails , subject , message  } = req.body;
    if (!recipientEmails || recipientEmails.length === 0) {
        return res.status(400).json({
            message: "Recipient email(s) required"
        });
    }
    // Create a transporter using your email provider's SMTP settings
    const transporter = external_nodemailer_default().createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });
    const mailOptions = {
        from: `"Banjo Oluwafemi Peace" <${process.env.EMAIL_USER}>`,
        to: recipientEmails.join(","),
        subject,
        text: message,
        html: `<p>${message}</p>`
    };
    try {
        await transporter.sendMail(mailOptions);
        return res.status(200).json({
            message: "Email sent successfully"
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error sending email",
            error
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(871));
module.exports = __webpack_exports__;

})();