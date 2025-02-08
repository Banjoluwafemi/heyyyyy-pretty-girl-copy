"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/sendEmail";
exports.ids = ["pages/api/sendEmail"];
exports.modules = {

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ "(api)/./src/pages/api/sendEmail.ts":
/*!************************************!*\
  !*** ./src/pages/api/sendEmail.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    if (req.method !== \"POST\") {\n        return res.status(405).json({\n            message: \"Method Not Allowed\"\n        });\n    }\n    const { recipientEmails , subject , message  } = req.body;\n    if (!recipientEmails || recipientEmails.length === 0) {\n        return res.status(400).json({\n            message: \"Recipient email(s) required\"\n        });\n    }\n    // Create a transporter using your email provider's SMTP settings\n    const transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0___default().createTransport({\n        service: \"gmail\",\n        auth: {\n            user: process.env.EMAIL_USER,\n            pass: process.env.EMAIL_PASS\n        }\n    });\n    const mailOptions = {\n        from: `\"Banjo Oluwafemi Peace\" <${process.env.EMAIL_USER}>`,\n        to: recipientEmails.join(\",\"),\n        subject,\n        text: message,\n        html: `<p>${message}</p>`\n    };\n    try {\n        await transporter.sendMail(mailOptions);\n        return res.status(200).json({\n            message: \"Email sent successfully\"\n        });\n    } catch (error) {\n        return res.status(500).json({\n            message: \"Error sending email\",\n            error\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3NlbmRFbWFpbC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDb0M7QUFFckIsZUFBZUMsT0FBTyxDQUFDQyxHQUFtQixFQUFFQyxHQUFvQixFQUFFO0lBQy9FLElBQUlELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLE1BQU0sRUFBRTtRQUN6QixPQUFPRCxHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLE9BQU8sRUFBRSxvQkFBb0I7U0FBRSxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVELE1BQU0sRUFBRUMsZUFBZSxHQUFFQyxPQUFPLEdBQUVGLE9BQU8sR0FBRSxHQUFHTCxHQUFHLENBQUNRLElBQUk7SUFFdEQsSUFBSSxDQUFDRixlQUFlLElBQUlBLGVBQWUsQ0FBQ0csTUFBTSxLQUFLLENBQUMsRUFBRTtRQUNwRCxPQUFPUixHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLE9BQU8sRUFBRSw2QkFBNkI7U0FBRSxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUVELGlFQUFpRTtJQUNqRSxNQUFNSyxXQUFXLEdBQUdaLGlFQUEwQixDQUFDO1FBQzdDYyxPQUFPLEVBQUUsT0FBTztRQUNoQkMsSUFBSSxFQUFFO1lBQ0pDLElBQUksRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFVBQVU7WUFDNUJDLElBQUksRUFBRUgsT0FBTyxDQUFDQyxHQUFHLENBQUNHLFVBQVU7U0FDN0I7S0FDRixDQUFDO0lBRUYsTUFBTUMsV0FBVyxHQUFHO1FBQ2xCQyxJQUFJLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRU4sT0FBTyxDQUFDQyxHQUFHLENBQUNDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDM0RLLEVBQUUsRUFBRWhCLGVBQWUsQ0FBQ2lCLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDN0JoQixPQUFPO1FBQ1BpQixJQUFJLEVBQUVuQixPQUFPO1FBQ2JvQixJQUFJLEVBQUUsQ0FBQyxHQUFHLEVBQUVwQixPQUFPLENBQUMsSUFBSSxDQUFDO0tBQzFCO0lBRUQsSUFBSTtRQUNGLE1BQU1LLFdBQVcsQ0FBQ2dCLFFBQVEsQ0FBQ04sV0FBVyxDQUFDLENBQUM7UUFDeEMsT0FBT25CLEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUMsT0FBTyxFQUFFLHlCQUF5QjtTQUFFLENBQUMsQ0FBQztJQUN0RSxFQUFFLE9BQU9zQixLQUFLLEVBQUU7UUFDZCxPQUFPMUIsR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFQyxPQUFPLEVBQUUscUJBQXFCO1lBQUVzQixLQUFLO1NBQUUsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGV5eXl5eS1wcmV0dHktZ2lybC1jb3B5Ly4vc3JjL3BhZ2VzL2FwaS9zZW5kRW1haWwudHM/YTI1YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IG5vZGVtYWlsZXIgZnJvbSBcIm5vZGVtYWlsZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkge1xuICBpZiAocmVxLm1ldGhvZCAhPT0gXCJQT1NUXCIpIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBtZXNzYWdlOiBcIk1ldGhvZCBOb3QgQWxsb3dlZFwiIH0pO1xuICB9XG5cbiAgY29uc3QgeyByZWNpcGllbnRFbWFpbHMsIHN1YmplY3QsIG1lc3NhZ2UgfSA9IHJlcS5ib2R5O1xuXG4gIGlmICghcmVjaXBpZW50RW1haWxzIHx8IHJlY2lwaWVudEVtYWlscy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBtZXNzYWdlOiBcIlJlY2lwaWVudCBlbWFpbChzKSByZXF1aXJlZFwiIH0pO1xuICB9XG5cbiAgLy8gQ3JlYXRlIGEgdHJhbnNwb3J0ZXIgdXNpbmcgeW91ciBlbWFpbCBwcm92aWRlcidzIFNNVFAgc2V0dGluZ3NcbiAgY29uc3QgdHJhbnNwb3J0ZXIgPSBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydCh7XG4gICAgc2VydmljZTogXCJnbWFpbFwiLCAvLyBDaGFuZ2UgdGhpcyBpZiB1c2luZyBhbm90aGVyIHByb3ZpZGVyXG4gICAgYXV0aDoge1xuICAgICAgdXNlcjogcHJvY2Vzcy5lbnYuRU1BSUxfVVNFUiwgLy8gWW91ciBlbWFpbCBhZGRyZXNzXG4gICAgICBwYXNzOiBwcm9jZXNzLmVudi5FTUFJTF9QQVNTLCAvLyBBcHAtc3BlY2lmaWMgcGFzc3dvcmQgKG5vdCB5b3VyIG5vcm1hbCBwYXNzd29yZClcbiAgICB9LFxuICB9KTtcblxuICBjb25zdCBtYWlsT3B0aW9ucyA9IHtcbiAgICBmcm9tOiBgXCJCYW5qbyBPbHV3YWZlbWkgUGVhY2VcIiA8JHtwcm9jZXNzLmVudi5FTUFJTF9VU0VSfT5gLFxuICAgIHRvOiByZWNpcGllbnRFbWFpbHMuam9pbihcIixcIiksIC8vIE11bHRpcGxlIHJlY2lwaWVudHNcbiAgICBzdWJqZWN0LFxuICAgIHRleHQ6IG1lc3NhZ2UsXG4gICAgaHRtbDogYDxwPiR7bWVzc2FnZX08L3A+YCwgLy8gT3B0aW9uYWw6IHNlbmQgSFRNTCBjb250ZW50XG4gIH07XG5cbiAgdHJ5IHtcbiAgICBhd2FpdCB0cmFuc3BvcnRlci5zZW5kTWFpbChtYWlsT3B0aW9ucyk7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogXCJFbWFpbCBzZW50IHN1Y2Nlc3NmdWxseVwiIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6IFwiRXJyb3Igc2VuZGluZyBlbWFpbFwiLCBlcnJvciB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIm5vZGVtYWlsZXIiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJyZWNpcGllbnRFbWFpbHMiLCJzdWJqZWN0IiwiYm9keSIsImxlbmd0aCIsInRyYW5zcG9ydGVyIiwiY3JlYXRlVHJhbnNwb3J0Iiwic2VydmljZSIsImF1dGgiLCJ1c2VyIiwicHJvY2VzcyIsImVudiIsIkVNQUlMX1VTRVIiLCJwYXNzIiwiRU1BSUxfUEFTUyIsIm1haWxPcHRpb25zIiwiZnJvbSIsInRvIiwiam9pbiIsInRleHQiLCJodG1sIiwic2VuZE1haWwiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/sendEmail.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/sendEmail.ts"));
module.exports = __webpack_exports__;

})();