"use strict";
(() => {
var exports = {};
exports.id = 767;
exports.ids = [767];
exports.modules = {

/***/ 0:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);



function Confirm(props) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const [task, setTask] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.tasks.task);
    const [timeTaken, setTimeTake] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.tasks.timeTaken);
    const [actualTime, setActualTime] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("complete");
    const handleSubmit = async (event)=>{
        event.preventDefault();
        try {
            const res = await fetch(`http://localhost:8000/api/tasks/${props.tasks._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    task,
                    timeTaken,
                    actualTime,
                    status
                })
            });
            if (!res.ok) {
                throw new Error("Something went wrong");
            }
            router.push("/");
        } catch (error) {
            alert("Failed to update profile");
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
            className: "mx700",
            onSubmit: handleSubmit,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                    className: "mb-3 form-label w-100",
                    children: [
                        "Enter your Task",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            value: task,
                            onChange: (e)=>setTask(e.target.value),
                            type: "text",
                            className: "form-control"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                    className: "mb-3 form-label w-100",
                    children: [
                        "Time taken in minutes",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            value: timeTaken,
                            onChange: (e)=>setTimeTake(parseInt(e.target.value)),
                            type: "number",
                            className: "form-control"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                    className: "mb-3 form-label w-100",
                    children: [
                        "Actual Time taken in minutes",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            value: actualTime,
                            onChange: (e)=>setActualTime(parseInt(e.target.value)),
                            type: "number",
                            className: "form-control"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: "btn btn-dark",
                    type: "submit",
                    children: "Submit"
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Confirm);
async function getStaticPaths() {
    const response = await fetch(`http://localhost:8000/api/tasks`);
    const data = await response.json();
    const thePaths = data.map((task)=>{
        return {
            params: {
                id: task._id
            }
        };
    });
    return {
        paths: thePaths,
        fallback: false
    };
}
async function getStaticProps(context) {
    const response = await fetch(`http://localhost:8000/api/tasks/${context.params.id}`);
    const data = await response.json();
    return {
        props: {
            tasks: data
        }
    };
}


/***/ }),

/***/ 853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(0));
module.exports = __webpack_exports__;

})();