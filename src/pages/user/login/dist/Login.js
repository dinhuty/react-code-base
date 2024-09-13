"use strict";
exports.__esModule = true;
// Libs
var bind_1 = require("classnames/bind");
// Others
// Styles, images, icons
var Login_module_scss_1 = require("./Login.module.scss");
var react_i18next_1 = require("react-i18next");
var cx = bind_1["default"].bind(Login_module_scss_1["default"]);
var Login = function () {
    //#region Destructuring Props
    //#endregion Destructuring Props
    //#region Declare Hook
    var t = react_i18next_1.useTranslation().t;
    //#endregion Declare Hook
    //#region Selector
    //#endregion Selector
    //#region Declare State
    //#endregion Declare State
    //#region Implement Hook
    //#endregion Implement Hook
    //#region Handle Function
    //#endregion Handle Function
    return React.createElement("div", { className: cx('mainLayout') },
        React.createElement("div", { className: cx('modalTicket') },
            React.createElement("div", null,
                React.createElement("h1", { className: cx('modalTicketTitle') }, t('admin_ticket_notification_title')),
                React.createElement("p", { className: cx('modalTicketDesc') }, t('admin_ticket_notification_description'))),
            React.createElement("button", { className: cx('modalTicketButton') }, t('admin_ticket_notification_button'))));
};
exports["default"] = Login;
