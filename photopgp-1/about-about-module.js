(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about-about-module"],{

/***/ "+wPt":
/*!***********************************************!*\
  !*** ./src/app/about/about-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AboutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutRoutingModule", function() { return AboutRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _about_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-info.component */ "EmUN");





const routes = [
    { path: '', component: _about_info_component__WEBPACK_IMPORTED_MODULE_2__["AboutInfoComponent"] }
];
class AboutRoutingModule {
}
AboutRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AboutRoutingModule });
AboutRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AboutRoutingModule_Factory(t) { return new (t || AboutRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AboutRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "EmUN":
/*!***********************************************!*\
  !*** ./src/app/about/about-info.component.ts ***!
  \***********************************************/
/*! exports provided: AboutInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutInfoComponent", function() { return AboutInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _img_caption_image_caption_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img-caption/image-caption.component */ "SZgg");



class AboutInfoComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutInfoComponent.ɵfac = function AboutInfoComponent_Factory(t) { return new (t || AboutInfoComponent)(); };
AboutInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutInfoComponent, selectors: [["app-about-info"]], decls: 44, vars: 0, consts: [[2, "font-size", "2em", "padding", "0em 0em 0em 1em"], [2, "text-align", "center"], ["imgSrc", "assets/img/generic/photographer.png", "title", "Image Files", "caption", "Images can be created, viewed, captioned, signed, encrypted, moved around in storage/folders, sent to Google Drive, Gmail, or deleted.  Types:    .jpg    .jpeg    .png", "format", "width75"], ["imgSrc", "assets/img/generic/cyber.png", "title", "Encrypted Image Files", "caption", "Encrypted image files can be created, viewed, captioned, signed, decrypted, moved around in storage/folders, sent to Google Drive, Gmail or deleted.  Types:  {image}.pgp (binary PGP), or {image}.asc (ASCII Armor)", "format", "width75"], ["imgSrc", "assets/img/generic/confidential.png", "title", "Folders", "caption", "You can create new folders, which can be \"opened\" (using the INDEX tab). A folder can be captioned, moved around in storage, deleted or copied to a new ZIP file.   ", "format", "width75"], ["imgSrc", "assets/img/generic/zip.jpg", "title", "ZIP Files", "caption", "You can convert a folder into ZIP file, then back into a folder. ZIP files may also be captioned, moved or deleted.    This enables easy backup to another device or cloud storage.    Type: {folder}.zip   ", "format", "width75"], ["imgSrc", "assets/img/generic/data_security.png", "title", "Encrypted Notes", "caption", "You can create encrypted text that is associated with: an image, folder, ZIP-file, key-file, or as standalone notes.      Notes can be viewed, signed, and sent to Google Drive, etc.      Types: {filename}.txt.asc", "format", "width75"], ["imgSrc", "assets/img/generic/keys.png", "title", "Key Files", "caption", "You can import PGP keys (public key or private key) into OpenKeychain just by clicking on them.  Types: {key}.pgp or {key}.asc ", "format", "width75"], [2, "padding", "2em 0em"], [1, "title"], [2, "padding", "0em 4em"], [2, "text-align", "left"], ["imgSrc", "assets/img/icon/ic_folder_shared_black_24dp.png", "title", "Public Shared Storage", "caption", "Public places accessible to other apps: Download directory, Pictures Directory, DCIM Directory - No longer available in Android 10+, only available on older devices ", "format", "width75"], ["imgSrc", "assets/img/icon/ic_folder_shared_black_24dp.png", "title", "Public Internal Storage", "caption", "Public directory where PhotoPGP can always access files. Other apps can access these files too.  This is where you will find the demo private-key", "format", "width75"], ["imgSrc", "assets/img/icon/ic_folder_special_black_24dp.png", "title", "Private Internal Storage", "caption", "Private directory where only PhotoPGP can access files.    No other apps can access.    Not available in Demo edition.", "format", "width75"], ["imgSrc", "assets/img/icon/ic_settings_applications_black_24dp.png", "title", "Internal CACHE", "caption", "Cache thumbnail images.  Cache file captions.  Session settings.", "format", "width75"], [2, "font-size", "1em", "text-align", "center", "padding", "0em"], ["imgSrc", "assets/img/logo/ic_openkeychain.png", "title", "Install OpenKeychain app", "caption", "OpenKeychain is an implementation of the OpenPGP cryptographic standard for Android - available from the Google Play Store, F-Droid or GitHub as open-source. Then import your keys into OpenKeychain.", "format", "width75"], ["imgSrc", "assets/img/icon/ic_vpn_key_black_24dp.png", "title", "Obtain your own private key", "caption", "You will need to create an OpenPGP private key, if you do not already have one. OpenKeychain is one way to create a key - make sure you keep a backup of this key, off your phone. Demo edition only requires the Demo key provided", "format", "width75"], ["imgSrc", "assets/img/icon/ic_cloud_download_black_24dp.png", "title", "Public Keys of recipients", "caption", "If you have the full edition, you can download and install public keys to authorize others to access (decrypt) specific files...", "format", "width75"], [2, "padding", "2em 1em"], [2, "font-size", "2.5em", "text-align", "center", "padding", "0em"]], template: function AboutInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "PhotoPGP can create / view / manage many types of files.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-image-caption", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-image-caption", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-image-caption", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-image-caption", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-image-caption", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-image-caption", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Access to your Android device");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Important Notes:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Android 10+ devices no longer allow apps to access what was Public Shared Storage: Downloads, Pictures, DCIM. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " These newer devices now require an authorized file management app to copy/move files between Public Shared Storage and Public Internal Storage, e.g.: .../data/com.photopgp.full/files ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " With permissision to write_extenal_storage, older devices are allowed to continue using public shared storage directly. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "app-image-caption", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "app-image-caption", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "app-image-caption", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "app-image-caption", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Prerequisites");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Here are a few things you'll need before you start using PhotoPGP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "app-image-caption", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "app-image-caption", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "app-image-caption", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Keep Your Private Data Private");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "and share only what you want - in confidence.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_img_caption_image_caption_component__WEBPACK_IMPORTED_MODULE_1__["ImageCaptionComponent"]], styles: ["p.title[_ngcontent-%COMP%] {\r\n  font-size: 1.5em;\r\n  text-align: center;\r\n  padding: 0em;\r\n  -webkit-text-decoration: green underline;\r\n          text-decoration: green underline;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LWluZm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWix3Q0FBZ0M7VUFBaEMsZ0NBQWdDO0FBQ2xDIiwiZmlsZSI6ImFib3V0LWluZm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5wLnRpdGxlIHtcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwZW07XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBncmVlbiB1bmRlcmxpbmU7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about-info',
                templateUrl: './about-info.component.html',
                styleUrls: ['./about-info.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "FQ1g":
/*!***************************************!*\
  !*** ./src/app/about/about.module.ts ***!
  \***************************************/
/*! exports provided: AboutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _img_caption_img_caption_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img-caption/img-caption.module */ "kw37");
/* harmony import */ var _material_table_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../material/table.module */ "1Q3v");
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about-routing.module */ "+wPt");
/* harmony import */ var _about_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about-info.component */ "EmUN");







class AboutModule {
}
AboutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AboutModule });
AboutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AboutModule_Factory(t) { return new (t || AboutModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _img_caption_img_caption_module__WEBPACK_IMPORTED_MODULE_2__["ImgCaptionModule"],
            _material_table_module__WEBPACK_IMPORTED_MODULE_3__["TableModule"],
            _about_routing_module__WEBPACK_IMPORTED_MODULE_4__["AboutRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AboutModule, { declarations: [_about_info_component__WEBPACK_IMPORTED_MODULE_5__["AboutInfoComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _img_caption_img_caption_module__WEBPACK_IMPORTED_MODULE_2__["ImgCaptionModule"],
        _material_table_module__WEBPACK_IMPORTED_MODULE_3__["TableModule"],
        _about_routing_module__WEBPACK_IMPORTED_MODULE_4__["AboutRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_about_info_component__WEBPACK_IMPORTED_MODULE_5__["AboutInfoComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _img_caption_img_caption_module__WEBPACK_IMPORTED_MODULE_2__["ImgCaptionModule"],
                    _material_table_module__WEBPACK_IMPORTED_MODULE_3__["TableModule"],
                    _about_routing_module__WEBPACK_IMPORTED_MODULE_4__["AboutRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=about-about-module.js.map