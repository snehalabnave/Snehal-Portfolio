"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("@formspree/react");
function ContactForm() {
    var _a = react_2.useForm("xrbzgega"), state = _a[0], handleSubmit = _a[1];
    if (state.succeeded) {
        return (react_1["default"].createElement("div", { className: "flex items-center overflow-hidden" },
            react_1["default"].createElement("form", { className: "space-y-4 w-full max-w-lg" },
                react_1["default"].createElement("div", { className: "mx-auto max-w-md p-4 bg-green-100 border border-green-400 text-green-700 rounded-md shadow-md" },
                    react_1["default"].createElement("p", { className: "text-center" }, "Thanks for joining!")))));
    }
    return (react_1["default"].createElement("div", { className: "flex items-center" },
        react_1["default"].createElement("form", { action: "https://formspree.io/f/xrbzgega", method: "POST", onSubmit: handleSubmit, className: "space-y-4 w-full max-w-lg" },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("label", { htmlFor: "name", className: "block text-white font-semibold" }, "Name"),
                react_1["default"].createElement("input", { id: "name", type: "text", name: "name", className: "w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500", required: true })),
            react_1["default"].createElement(react_2.ValidationError, { prefix: "Name", field: "name", errors: state.errors, className: "text-red-500" }),
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("label", { htmlFor: "email", className: "block text-white font-semibold" }, "Email Address"),
                react_1["default"].createElement("input", { id: "email", type: "email", name: "email", className: "w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500", required: true })),
            react_1["default"].createElement(react_2.ValidationError, { prefix: "Email", field: "email", errors: state.errors, className: "text-red-500" }),
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("label", { htmlFor: "message", className: "block text-white font-semibold" }, "Message"),
                react_1["default"].createElement("textarea", { id: "message", name: "message", className: "w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500", rows: 4, required: true })),
            react_1["default"].createElement(react_2.ValidationError, { prefix: "Message", field: "message", errors: state.errors, className: "text-red-500" }),
            react_1["default"].createElement("button", { type: "submit", disabled: state.submitting, className: "w-full px-4 py-2 text-white bg-blue-500 rounded-lg " + (state.submitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600') }, state.submitting ? 'Submitting...' : 'Send Message'))));
}
exports["default"] = ContactForm;
