(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+2/a":
/*!***********************************!*\
  !*** ./src/app/report.service.ts ***!
  \***********************************/
/*! exports provided: ReportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportService", function() { return ReportService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");





class ReportService {
    constructor(http) {
        this.http = http;
    }
    addScanReport(report) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        const httpOptions = {
            headers: headers
        };
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["APIUrl"] + 'admin/addScanReport', report, httpOptions);
    }
    getReportList() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["APIUrl"] + 'admin/getReportList');
    }
    getReportData(reportID) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        const httpOptions = {
            headers: headers
        };
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["APIUrl"] + 'admin/getReportData', { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('reportID', reportID) });
    }
    submitReport(report) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        const httpOptions = {
            headers: headers
        };
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["APIUrl"] + 'admin/submitReport', report, httpOptions);
    }
}
ReportService.ɵfac = function ReportService_Factory(t) { return new (t || ReportService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
ReportService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ReportService, factory: ReportService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ReportService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "+LoM":
/*!********************************************************!*\
  !*** ./src/app/admin-doctor/admin-doctor.component.ts ***!
  \********************************************************/
/*! exports provided: AdminDoctorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDoctorComponent", function() { return AdminDoctorComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _submit_report_submit_report_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../submit-report/submit-report.component */ "Qqp8");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _report_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../report.service */ "+2/a");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../header/header.component */ "fECr");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-search-filter */ "cZdB");













function AdminDoctorComponent_mat_spinner_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-spinner");
} }
function AdminDoctorComponent_div_2_tr_26_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDoctorComponent_div_2_tr_26_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const report_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r4.showReportModalPopup(report_r3.reportID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "View Report");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminDoctorComponent_div_2_tr_26_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const report_r3 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r6.viewEEG(report_r3.reportID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "View EEG");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const report_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](report_r3.patientID);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](report_r3.patientFullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](report_r3.scanCentre);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](report_r3.reportStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](report_r3.recordingTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](report_r3.reportingTime);
} }
function AdminDoctorComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "notifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AdminDoctorComponent_div_2_Template_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.searchText = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "table", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Patient Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Patient Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Scan Centre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Report Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Recording Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Reporting Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, AdminDoctorComponent_div_2_tr_26_Template, 19, 6, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](27, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.searchText);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](27, 2, ctx_r1.scanReportList, ctx_r1.searchText));
} }
class AdminDoctorComponent {
    constructor(changeDetectorRefs, dialogBox, router, document, reportService) {
        this.changeDetectorRefs = changeDetectorRefs;
        this.dialogBox = dialogBox;
        this.router = router;
        this.document = document;
        this.reportService = reportService;
        this.showReportModalFlag = false;
        this.isDataLoading = false;
        this.reports = [
            { id: 1, name: 'Abishek Kannan', scanCentre: 'XYZ Hospitals', recordingTime: '2021-06-29 15:57:49', reportingTime: '2021-06-29 15:57:49', isReported: true },
            { id: 2, name: 'John Doe', scanCentre: 'Global', recordingTime: '2021-06-29 15:57:49', reportingTime: '2021-06-29 15:57:49', isReported: false },
        ];
    }
    ngOnInit() {
        this.reportService.getReportList().subscribe(result => {
            this.scanReportList = result;
        });
    }
    showReportModalPopup(event) {
        console.log('dialog open');
        const dialogRef = this.dialogBox.open(_submit_report_submit_report_component__WEBPACK_IMPORTED_MODULE_2__["SubmitReportComponent"], {
            width: '800px',
            disableClose: true,
            data: { reportID: event, }
        });
        dialogRef.componentInstance.onSave.subscribe(data => {
            this.reportService.getReportList().subscribe(result => {
                this.scanReportList = result;
                this.isDataLoading = false;
                this.changeDetectorRefs.detectChanges();
            });
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result == 'cancel') {
                this.isDataLoading = false;
            }
            else {
                this.isDataLoading = true;
                this.reportService.getReportList().subscribe(result => {
                    this.scanReportList = result;
                    this.changeDetectorRefs.detectChanges();
                });
            }
        });
    }
    viewEEG(id) {
        this.document.location.href = 'http://desktop-159ue8h:9988/webapps/home/session.html?app=plotfig';
    }
}
AdminDoctorComponent.ɵfac = function AdminDoctorComponent_Factory(t) { return new (t || AdminDoctorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_report_service__WEBPACK_IMPORTED_MODULE_5__["ReportService"])); };
AdminDoctorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AdminDoctorComponent, selectors: [["app-admin-doctor"]], decls: 3, vars: 2, consts: [[4, "ngIf"], ["class", "image", 4, "ngIf"], [1, "image"], ["type", "button", 1, "btn", "btn-primary"], [1, "container"], [1, "row"], [1, "search-hero"], ["type", "text", "name", "search", "autocomplete", "off", "placeholder", "  Start searching for a patient by id or name", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "table", "table-striped"], [4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]], template: function AdminDoctorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AdminDoctorComponent_mat_spinner_1_Template, 1, 0, "mat-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AdminDoctorComponent_div_2_Template, 28, 5, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isDataLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isDataLoading);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatSpinner"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"]], pipes: [ng2_search_filter__WEBPACK_IMPORTED_MODULE_10__["Ng2SearchPipe"]], styles: [".image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 93.8%;\n  background-image: url('dashboard-bg.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFkbWluLWRvY3Rvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EseUNBQUE7RUFFQSw0QkFBQTtFQUNGLHNCQUFBO0FBQUYiLCJmaWxlIjoiYWRtaW4tZG9jdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA5My44JTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnfnNyYy9hc3NldHMvZGFzaGJvYXJkLWJnLnBuZycpIDtcclxuICAgLy9iYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AdminDoctorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-admin-doctor',
                templateUrl: './admin-doctor.component.html',
                styleUrls: ['./admin-doctor.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }] }, { type: _report_service__WEBPACK_IMPORTED_MODULE_5__["ReportService"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Neurostellar\EEGTelemetry\EEGTelemetrySPA\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment, APIUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIUrl", function() { return APIUrl; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
const APIUrl = "https://localhost:44392/api/";
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "CHe2":
/*!********************************************************!*\
  !*** ./src/app/generate-pdf/generate-pdf.component.ts ***!
  \********************************************************/
/*! exports provided: GeneratePdfComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneratePdfComponent", function() { return GeneratePdfComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class GeneratePdfComponent {
    constructor() { }
    ngOnInit() {
    }
}
GeneratePdfComponent.ɵfac = function GeneratePdfComponent_Factory(t) { return new (t || GeneratePdfComponent)(); };
GeneratePdfComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GeneratePdfComponent, selectors: [["app-generate-pdf"]], decls: 2, vars: 0, template: function GeneratePdfComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "generate-pdf works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZW5lcmF0ZS1wZGYuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneratePdfComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-generate-pdf',
                templateUrl: './generate-pdf.component.html',
                styleUrls: ['./generate-pdf.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Qqp8":
/*!**********************************************************!*\
  !*** ./src/app/submit-report/submit-report.component.ts ***!
  \**********************************************************/
/*! exports provided: SubmitReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitReportComponent", function() { return SubmitReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! html2canvas */ "wOnQ");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jspdf */ "i680");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "5JmO");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "TruH");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _report_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../report.service */ "+2/a");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @progress/kendo-angular-dropdowns */ "4lYH");
/* harmony import */ var _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @progress/kendo-angular-dateinputs */ "ZwAT");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "bTqV");

















const _c0 = ["pdfTable"];
const _c1 = ["eegInput"];
pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_5___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_6___default.a.pdfMake.vfs;
class SubmitReportComponent {
    constructor(reportService, formBuilder, dialogRef, data) {
        this.reportService = reportService;
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.file = null; // Variable to store file
        this.onSave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.listItems = [
            "Male",
            "Female",
            "Other",
        ];
        this.path = {
            saveUrl: 'https://localhost:44342/api/recruitment/Save',
            removeUrl: 'https://localhost:44342/api/Recruitment/Remove',
            chunkSize: 102400,
        };
        this.reportId = data;
    }
    ngOnInit() {
        var _a;
        this.reportForm = this.formBuilder.group({
            reportID: [],
            patientID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            patientName: [''],
            DOB: [],
            sex: [''],
            lastSeizure: [],
            lastMeal: [],
            currentMedication: [''],
            findings: [''],
            interpretation: [''],
            clinicalCorrelation: ['']
        });
        this.reportService.getReportData((_a = this.reportId) === null || _a === void 0 ? void 0 : _a.reportID).subscribe(result => {
            this.reportData = result;
            this.setTechnicianData(this.reportData);
        });
    }
    setTechnicianData(data) {
        this.reportForm.patchValue({
            reportID: data.reportID,
            patientID: data.patientID,
            patientName: data.patientFullName,
            DOB: data.dob,
            sex: data.sex,
            lastSeizure: data.lastSeizure,
            lastMeal: new Date(data.lastMeal),
            currentMedication: data.currentMedication,
            findings: data.findings,
            interpretation: data.interpretation,
            clinicalCorrelation: data.clinicalCorrelation
        });
        console.log(this.reportForm);
    }
    onCancelClick() {
        this.dialogRef.close('cancel');
    }
    handleFileInput(event) {
        // this.fileToUpload = (event.target as HTMLInputElement).files[0] as File;
        // var reader = new FileReader();
        // reader.readAsDataURL(this.fileToUpload);
    }
    onChange(event) {
        this.file = event.target.files[0];
    }
    addReport() {
        let data = new FormData();
        //data.append("reportDetails", JSON.stringify(this.reportForm.value));
        let datas = document.getElementById('pdfTable');
        html2canvas__WEBPACK_IMPORTED_MODULE_3___default()(datas).then(canvas => {
            const contentDataURL = canvas.toDataURL('image/png');
            let pdf = new jspdf__WEBPACK_IMPORTED_MODULE_4__["default"]('p', 'cm', 'a4'); //Generates PDF in landscape mode
            // let pdf = new jspdf('p', 'cm', 'a4'); Generates PDF in portrait mode
            pdf.addImage(contentDataURL, 'PNG', 0, 0, 29.7, 21.0);
            //pdf.save('Filename.pdf');   
        });
        let docDefinition = {
            content: [
                {
                    text: 'Report',
                    fontSize: 16,
                    alignment: 'center',
                },
                {
                    text: 'Patient ID : ' + this.reportData.patientID,
                    fontSize: 16,
                    alignment: 'left',
                },
                {
                    text: 'Patient Name : ' + this.reportData.patientFullName,
                    fontSize: 16,
                    alignment: 'left',
                },
                {
                    text: 'DOB : ' + this.reportData.dob,
                    fontSize: 16,
                    alignment: 'left',
                },
                {
                    text: 'Sex : ' + this.reportData.sex,
                    fontSize: 16,
                    alignment: 'left',
                },
                {
                    text: 'Current Medication : ' + this.reportData.currentMedication,
                    fontSize: 16,
                    alignment: 'left',
                },
                {
                    text: 'Findings : ' + this.reportData.findings,
                    fontSize: 16,
                    alignment: 'left',
                },
                {
                    text: 'Interpretation : ' + this.reportData.interpretation,
                    fontSize: 16,
                    alignment: 'left',
                },
                {
                    text: 'Clinical Correlation : ' + this.reportData.clinicalCorrelation,
                    fontSize: 16,
                    alignment: 'left',
                },
            ]
        };
        //pdfMake.createPdf(docDefinition).open();
        this.reportService.submitReport(this.reportForm.value).subscribe(result => {
            this.onSave.emit(data);
        });
    }
}
SubmitReportComponent.ɵfac = function SubmitReportComponent_Factory(t) { return new (t || SubmitReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_report_service__WEBPACK_IMPORTED_MODULE_7__["ReportService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])); };
SubmitReportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SubmitReportComponent, selectors: [["app-submit-report"]], viewQuery: function SubmitReportComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.pdfTable = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.eegInput = _t.first);
    } }, decls: 64, vars: 7, consts: [["mat-dialog-title", ""], ["id", "pdfTable"], ["mat-dialog-content", ""], [3, "formGroup", "ngSubmit"], [1, "input-group"], ["for", "email", 1, "control-label", "col-sm-2"], [1, "col-sm-3", "input-fields"], ["type", "email", "id", "email", "formControlName", "patientID", "placeholder", "Enter ID", 1, "form-control"], [1, "col-sm-3"], ["type", "email", "id", "email", "formControlName", "patientName", "placeholder", "", 1, "form-control"], ["matInput", "", "formControlName", "DOB", "placeholder", "Choose a date", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["DOB", ""], ["formControlName", "sex", "value", "", 3, "data"], ["matInput", "", "formControlName", "lastSeizure", "placeholder", "Choose a date", 3, "matDatepicker"], ["lastSeizure", ""], ["for", "lastMeal", 1, "control-label", "col-sm-2"], ["formControlName", "lastMeal"], [1, "form-group"], ["for", "currentMedication"], ["cols", "2", "formControlName", "currentMedication", "rows", "1", "id", "currentMedication", 1, "form-control"], ["for", "findings"], ["cols", "2", "rows", "3", "formControlName", "findings", "id", "findings", 1, "form-control"], ["for", "comment"], ["type", "radio", "value", "Normal", "formControlName", "interpretation"], ["type", "radio", "value", "Abnormal", "formControlName", "interpretation"], ["for", "clinicalCorrelation"], ["cols", "2", "rows", "3", "formControlName", "clinicalCorrelation", "id", "clinicalCorrelation", 1, "form-control"], ["mat-dialog-actions", ""], ["mat-button", "", 3, "click"], ["mat-button", "", "type", "submit", "cdkFocusInitial", "", 3, "mat-dialog-close", "click"]], template: function SubmitReportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "REPORT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SubmitReportComponent_Template_form_ngSubmit_4_listener() { return ctx.addReport(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Patient ID:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Patient Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "DOB:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "mat-datepicker-toggle", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "mat-datepicker", null, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Sex:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "kendo-dropdownlist", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Last Seizure:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "mat-datepicker-toggle", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "mat-datepicker", null, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Last Meal:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "kendo-timepicker", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Current Medications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "textarea", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Findings/Technician Notes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "textarea", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Interpretation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Normal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Abnormal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Clinical Correlation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "textarea", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubmitReportComponent_Template_button_click_60_listener() { return ctx.onCancelClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubmitReportComponent_Template_button_click_62_listener() { return ctx.addReport(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Sign and Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.reportForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.listItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", ctx.reportData.reportID);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepicker"], _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_11__["DropDownListComponent"], _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_12__["TimePickerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"]], styles: [".input-fields[_ngcontent-%COMP%] {\n  margin-right: 45px;\n}\n\n.input-group[_ngcontent-%COMP%] {\n  padding-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHN1Ym1pdC1yZXBvcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksb0JBQUE7QUFDSiIsImZpbGUiOiJzdWJtaXQtcmVwb3J0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0LWZpZWxkcyB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDQ1cHg7XHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubmitReportComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-submit-report',
                templateUrl: './submit-report.component.html',
                styleUrls: ['./submit-report.component.scss']
            }]
    }], function () { return [{ type: _report_service__WEBPACK_IMPORTED_MODULE_7__["ReportService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }]; }, { pdfTable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['pdfTable', { static: false }]
        }], eegInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['eegInput', {
                    static: true
                }]
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'EEGTelemetrySPA';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "TRGY":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _create_report_create_report_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../create-report/create-report.component */ "fHUX");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "5JmO");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "TruH");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _report_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../report.service */ "+2/a");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../header/header.component */ "fECr");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng2-search-filter */ "cZdB");















function AdminComponent_mat_spinner_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-spinner");
} }
function AdminComponent_div_2_tr_28_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminComponent_div_2_tr_28_Template_mat_icon_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const report_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r4.downloadAsPdf(report_r3.reportID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " file_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminComponent_div_2_tr_28_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const report_r3 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r6.viewEEG(report_r3.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "View EEG");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const report_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](report_r3.patientID);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](report_r3.patientFullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](report_r3.scanCentre);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](report_r3.reportStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](report_r3.recordingTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](report_r3.reportingTime);
} }
function AdminComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminComponent_div_2_Template_button_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.showReportModalPopup($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Create Report");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "notifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AdminComponent_div_2_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.searchText = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "table", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Patient Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Patient Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Scan Centre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Report Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Recording Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Reporting Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, AdminComponent_div_2_tr_28_Template, 19, 6, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](29, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.searchText);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](29, 2, ctx_r1.scanReportList, ctx_r1.searchText));
} }
pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_3___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_4___default.a.pdfMake.vfs;
class AdminComponent {
    constructor(changeDetectorRefs, dialog, router, document, reportService) {
        this.changeDetectorRefs = changeDetectorRefs;
        this.dialog = dialog;
        this.router = router;
        this.document = document;
        this.reportService = reportService;
        this.showReportModalFlag = false;
        this.isDataLoading = false;
        this.reports = [
            { id: 1, name: 'Abishek Kannan', scanCentre: 'XYZ Hospitals', recordingTime: '2021-06-29 15:57:49', reportingTime: '2021-06-29 15:57:49', isReported: true },
            { id: 2, name: 'John Doe', scanCentre: 'Global', recordingTime: '2021-06-29 15:57:49', reportingTime: '2021-06-29 15:57:49', isReported: false },
        ];
    }
    ngOnInit() {
        this.reportService.getReportList().subscribe(result => {
            this.scanReportList = result;
        });
    }
    showReportModalPopup(event) {
        const dialogRef = this.dialog.open(_create_report_create_report_component__WEBPACK_IMPORTED_MODULE_2__["CreateReportComponent"], {
            width: '800px',
            disableClose: true,
            data: {}
        });
        dialogRef.componentInstance.onSave.subscribe(data => {
            this.reportService.getReportList().subscribe(result => {
                this.scanReportList = result;
                this.isDataLoading = false;
                this.changeDetectorRefs.detectChanges();
            });
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result == 'cancel') {
                this.isDataLoading = false;
            }
            else {
                this.isDataLoading = true;
                this.reportService.getReportList().subscribe(result => {
                    this.scanReportList = result;
                    this.changeDetectorRefs.detectChanges();
                });
            }
        });
    }
    viewEEG(id) {
        this.document.location.href = 'http://desktop-159ue8h:9988/webapps/home/session.html?app=plotfig';
    }
    downloadAsPdf(reportID) {
        this.reportService.getReportData(reportID).subscribe(result => {
            this.reportData = result;
            let docDefinition = {
                content: [
                    {
                        text: 'Report',
                        fontSize: 16,
                        alignment: 'center',
                    },
                    {
                        text: 'Patient ID : ' + this.reportData.patientID,
                        fontSize: 16,
                        alignment: 'left',
                        style: 'sectionHeader'
                    },
                    {
                        text: 'Patient Name : ' + this.reportData.patientFullName,
                        fontSize: 16,
                        alignment: 'left',
                    },
                    {
                        text: 'DOB : ' + this.reportData.dob,
                        fontSize: 16,
                        alignment: 'left',
                    },
                    {
                        text: 'Sex : ' + this.reportData.sex,
                        fontSize: 16,
                        alignment: 'left',
                    },
                    {
                        text: 'Current Medication : ' + this.reportData.currentMedication,
                        fontSize: 16,
                        alignment: 'left',
                    },
                    {
                        text: 'Findings : ' + this.reportData.findings,
                        fontSize: 16,
                        alignment: 'left',
                    },
                    {
                        text: 'Interpretation : ' + this.reportData.interpretation,
                        fontSize: 16,
                        alignment: 'left',
                    },
                    {
                        text: 'Clinical Correlation : ' + this.reportData.clinicalCorrelation,
                        fontSize: 16,
                        alignment: 'left',
                    },
                ],
                styles: {
                    sectionHeader: {
                        bold: true,
                        decoration: 'underline',
                        fontSize: 14,
                        margin: [5, 15, 0, 15]
                    }
                }
            };
            pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_3___default.a.createPdf(docDefinition).download('patientReport.pdf');
        });
    }
}
AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_report_service__WEBPACK_IMPORTED_MODULE_7__["ReportService"])); };
AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["app-admin"]], decls: 3, vars: 2, consts: [[4, "ngIf"], ["class", "image", 4, "ngIf"], [1, "image"], ["type", "button", 1, "create-report", "btn", "btn-primary", 3, "click"], ["type", "button", 1, "notifications", "btn", "btn-primary"], [1, "container"], [1, "row"], [1, "search-hero"], ["type", "text", "name", "search", "autocomplete", "off", "placeholder", "  Start searching for a patient by id or name", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "table", "table-striped"], [4, "ngFor", "ngForOf"], [3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]], template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AdminComponent_mat_spinner_1_Template, 1, 0, "mat-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AdminComponent_div_2_Template, 30, 5, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isDataLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isDataLoading);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatSpinner"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"]], pipes: [ng2_search_filter__WEBPACK_IMPORTED_MODULE_12__["Ng2SearchPipe"]], styles: [".image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 92%;\n  background-image: url('dashboard-bg.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.create-report[_ngcontent-%COMP%] {\n  margin-left: 16px;\n  margin-top: 17px;\n}\n\n.notifications[_ngcontent-%COMP%] {\n  height: 38px;\n  margin-top: 17px;\n  margin-left: 1215px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFkbWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSx5Q0FBQTtFQUVBLDRCQUFBO0VBQ0Ysc0JBQUE7QUFBRjs7QUFHQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFHQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQUYiLCJmaWxlIjoiYWRtaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDkyJTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnfnNyYy9hc3NldHMvZGFzaGJvYXJkLWJnLnBuZycpIDtcclxuICAgLy9iYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgfVxyXG5cclxuLmNyZWF0ZS1yZXBvcnQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxN3B4O1xyXG59XHJcblxyXG4ubm90aWZpY2F0aW9ucyB7XHJcbiAgaGVpZ2h0OiAzOHB4O1xyXG4gIG1hcmdpbi10b3A6IDE3cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEyMTVweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-admin',
                templateUrl: './admin.component.html',
                styleUrls: ['./admin.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }] }, { type: _report_service__WEBPACK_IMPORTED_MODULE_7__["ReportService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin/admin.component */ "TRGY");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng2-search-filter */ "cZdB");
/* harmony import */ var _create_report_create_report_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./create-report/create-report.component */ "fHUX");
/* harmony import */ var _eeg_viewer_eeg_viewer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./eeg-viewer/eeg-viewer.component */ "izdF");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @progress/kendo-angular-inputs */ "xoAz");
/* harmony import */ var _progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @progress/kendo-angular-intl */ "kuX+");
/* harmony import */ var _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @progress/kendo-angular-dateinputs */ "ZwAT");
/* harmony import */ var _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @progress/kendo-angular-dropdowns */ "4lYH");
/* harmony import */ var _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @syncfusion/ej2-angular-inputs */ "QYJQ");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _admin_doctor_admin_doctor_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./admin-doctor/admin-doctor.component */ "+LoM");
/* harmony import */ var _submit_report_submit_report_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./submit-report/submit-report.component */ "Qqp8");
/* harmony import */ var _generate_pdf_generate_pdf_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./generate-pdf/generate-pdf.component */ "CHe2");
































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogRef"],
            useValue: {}
        },
        { provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MAT_DIALOG_DATA"], useValue: {} },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_17__["Ng2SearchPipeModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatNativeDateModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
            _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_22__["InputsModule"],
            _progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_23__["IntlModule"],
            _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_24__["DateInputsModule"],
            _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_25__["DropDownsModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__["MatProgressSpinnerModule"],
            _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_26__["UploaderModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
        _admin_admin_component__WEBPACK_IMPORTED_MODULE_8__["AdminComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
        _create_report_create_report_component__WEBPACK_IMPORTED_MODULE_18__["CreateReportComponent"],
        _eeg_viewer_eeg_viewer_component__WEBPACK_IMPORTED_MODULE_19__["EegViewerComponent"],
        _admin_doctor_admin_doctor_component__WEBPACK_IMPORTED_MODULE_28__["AdminDoctorComponent"],
        _submit_report_submit_report_component__WEBPACK_IMPORTED_MODULE_29__["SubmitReportComponent"],
        _generate_pdf_generate_pdf_component__WEBPACK_IMPORTED_MODULE_30__["GeneratePdfComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"],
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_17__["Ng2SearchPipeModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatNativeDateModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
        _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_22__["InputsModule"],
        _progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_23__["IntlModule"],
        _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_24__["DateInputsModule"],
        _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_25__["DropDownsModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__["MatProgressSpinnerModule"],
        _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_26__["UploaderModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                    _admin_admin_component__WEBPACK_IMPORTED_MODULE_8__["AdminComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
                    _create_report_create_report_component__WEBPACK_IMPORTED_MODULE_18__["CreateReportComponent"],
                    _eeg_viewer_eeg_viewer_component__WEBPACK_IMPORTED_MODULE_19__["EegViewerComponent"],
                    _admin_doctor_admin_doctor_component__WEBPACK_IMPORTED_MODULE_28__["AdminDoctorComponent"],
                    _submit_report_submit_report_component__WEBPACK_IMPORTED_MODULE_29__["SubmitReportComponent"],
                    _generate_pdf_generate_pdf_component__WEBPACK_IMPORTED_MODULE_30__["GeneratePdfComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"],
                    ng2_search_filter__WEBPACK_IMPORTED_MODULE_17__["Ng2SearchPipeModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatNativeDateModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                    _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_22__["InputsModule"],
                    _progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_23__["IntlModule"],
                    _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_24__["DateInputsModule"],
                    _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_25__["DropDownsModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__["MatProgressSpinnerModule"],
                    _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_26__["UploaderModule"]
                ],
                providers: [
                    {
                        provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogRef"],
                        useValue: {}
                    },
                    { provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MAT_DIALOG_DATA"], useValue: {} },
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
                entryComponents: [_create_report_create_report_component__WEBPACK_IMPORTED_MODULE_18__["CreateReportComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ccyI":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AuthService {
    constructor() { }
    login(userInfo) {
        localStorage.setItem('ACCESS_TOKEN', "access_token");
    }
    isLoggedIn() {
        return localStorage.getItem('ACCESS_TOKEN') !== null;
    }
    logout() {
        localStorage.removeItem('ACCESS_TOKEN');
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");






class HeaderComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    logout() {
        this.router.navigateByUrl('/login');
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 20, vars: 1, consts: [["width", "54", "height", "54", "viewBox", "0 0 54 54", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 2, "height", "30px", "margin-top", "10px"], ["id", "mask0", "maskUnits", "userSpaceOnUse", "x", "0", "y", "0", "width", "54", "height", "54", 2, "mask-type", "alpha"], ["cx", "27", "cy", "27", "r", "27", "fill", "#C4C4C4"], ["mask", "url(#mask0)"], ["x", "-5.83789", "y", "-5.83789", "width", "65.6757", "height", "65.6757", "fill", "url(#pattern0)"], ["id", "pattern0", "patternContentUnits", "objectBoundingBox", "width", "1", "height", "1"], [0, "xlink", "href", "#image0", "transform", "scale(0.005)"], ["id", "image0", "width", "200", "height", "200", 0, "xlink", "href", "data:image/png;base64,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"], ["mat-button", "", 1, "button-settings", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", ""], ["type", "button", 1, "button-close", 3, "click"], [2, "margin-top", "10px", "margin-bottom", "0em"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mask", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "circle", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "g", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "rect", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "pattern", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "use", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "image", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-menu", null, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_17_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "hr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuItem"]], styles: [".header-icon[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-left: 10px;\n}\n\n.button-close[_ngcontent-%COMP%] {\n  justify-self: right;\n  float: right;\n  font-size: 20px;\n  border-radius: 14px;\n  background-color: #87CEFA;\n  width: 86px;\n  border: none;\n  height: 30px;\n  outline: none;\n  margin-top: 10px;\n}\n\n.button-close[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.button-settings[_ngcontent-%COMP%] {\n  float: right;\n  font-size: 20px;\n  border: none;\n  height: 30px;\n  background-color: #FFFFFF;\n  outline: none;\n  margin-top: 5px;\n}\n\n.button-settings[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFDQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBRUo7O0FBQUk7RUFDSSxlQUFBO0FBRVI7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUNJO0VBQ0ksZUFBQTtBQUNSIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItaWNvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuLmJ1dHRvbi1jbG9zZSB7XHJcbiAgICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4N0NFRkE7XHJcbiAgICB3aWR0aDogODZweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5idXR0b24tc2V0dGluZ3Mge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "fHUX":
/*!**********************************************************!*\
  !*** ./src/app/create-report/create-report.component.ts ***!
  \**********************************************************/
/*! exports provided: CreateReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateReportComponent", function() { return CreateReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _report_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../report.service */ "+2/a");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @progress/kendo-angular-dropdowns */ "4lYH");
/* harmony import */ var _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @progress/kendo-angular-dateinputs */ "ZwAT");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");













const _c0 = ["eegInput"];
class CreateReportComponent {
    constructor(reportService, formBuilder, dialogRef, data) {
        this.reportService = reportService;
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
        this.file = null; // Variable to store file
        this.onSave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.listItems = [
            "Male",
            "Female",
            "Other",
        ];
        this.path = {
            saveUrl: 'https://localhost:44342/api/recruitment/Save',
            removeUrl: 'https://localhost:44342/api/Recruitment/Remove',
            chunkSize: 102400,
        };
    }
    ngOnInit() {
        this.reportForm = this.formBuilder.group({
            patientID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            patientName: [''],
            DOB: [],
            sex: [''],
            lastSeizure: [],
            lastMeal: [],
            currentMedication: [''],
            findings: [''],
        });
    }
    onCancelClick() {
        this.dialogRef.close('cancel');
    }
    handleFileInput(event) {
        // this.fileToUpload = (event.target as HTMLInputElement).files[0] as File;
        // var reader = new FileReader();
        // reader.readAsDataURL(this.fileToUpload);
    }
    onChange(event) {
        this.file = event.target.files[0];
    }
    addReport() {
        const formData = new FormData();
        // Store form name as "file" with file data
        formData.append("file", this.file, this.file.name);
        let report = {
            reportDetails: this.reportForm.value,
            fileData: this.file
        };
        let data = new FormData();
        data.append("file", this.file, this.file.name);
        data.append("reportDetails", JSON.stringify(this.reportForm.value));
        this.reportService.addScanReport(data).subscribe(result => {
            this.onSave.emit(data);
        });
    }
}
CreateReportComponent.ɵfac = function CreateReportComponent_Factory(t) { return new (t || CreateReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_report_service__WEBPACK_IMPORTED_MODULE_3__["ReportService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])); };
CreateReportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateReportComponent, selectors: [["create-report"]], viewQuery: function CreateReportComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.eegInput = _t.first);
    } }, decls: 56, vars: 8, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], [3, "formGroup", "ngSubmit"], [1, "input-group"], ["for", "email", 1, "control-label", "col-sm-2"], [1, "col-sm-3", "input-fields"], ["type", "email", "id", "email", "formControlName", "patientID", "placeholder", "Enter ID", 1, "form-control"], [1, "col-sm-3"], ["type", "email", "id", "email", "formControlName", "patientName", "placeholder", "", 1, "form-control"], ["matInput", "", "formControlName", "DOB", "placeholder", "Choose a date", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["DOB", ""], ["formControlName", "sex", "value", "", 3, "data"], ["matInput", "", "formControlName", "lastSeizure", "placeholder", "Choose a date", 3, "matDatepicker"], ["lastSeizure", ""], ["for", "lastMeal", 1, "control-label", "col-sm-2"], ["formControlName", "lastMeal", 3, "value", "valueChange"], [1, "form-group"], ["for", "comment"], ["cols", "2", "formControlName", "currentMedication", "rows", "1", "id", "currentMedication", 1, "form-control"], ["cols", "2", "rows", "3", "formControlName", "findings", "id", "findings", 1, "form-control"], ["for", "file"], ["type", "file", 1, "form-control", 3, "change"], ["mat-dialog-actions", ""], ["mat-button", "", 3, "click"], ["mat-button", "", "type", "submit", "cdkFocusInitial", "", 3, "mat-dialog-close", "click"]], template: function CreateReportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "REPORT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CreateReportComponent_Template_form_ngSubmit_3_listener() { return ctx.addReport(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Patient ID:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Patient Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "DOB:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "mat-datepicker-toggle", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "mat-datepicker", null, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Sex:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "kendo-dropdownlist", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Last Seizure:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "mat-datepicker-toggle", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "mat-datepicker", null, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Last Meal:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "kendo-timepicker", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function CreateReportComponent_Template_kendo_timepicker_valueChange_38_listener($event) { return ctx.value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Current Medications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "textarea", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Findings/Technician Notes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "textarea", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Upload EEG");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateReportComponent_Template_input_change_50_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateReportComponent_Template_button_click_52_listener() { return ctx.onCancelClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateReportComponent_Template_button_click_54_listener() { return ctx.addReport(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Sign and Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.reportForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.listItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", ctx.data.technicianId);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepicker"], _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_7__["DropDownListComponent"], _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_8__["TimePickerComponent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"]], styles: [".input-fields[_ngcontent-%COMP%] {\n  margin-right: 45px;\n}\n\n.input-group[_ngcontent-%COMP%] {\n  padding-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNyZWF0ZS1yZXBvcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksb0JBQUE7QUFDSiIsImZpbGUiOiJjcmVhdGUtcmVwb3J0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0LWZpZWxkcyB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDQ1cHg7XHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateReportComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'create-report',
                templateUrl: './create-report.component.html',
                styleUrls: ['./create-report.component.scss']
            }]
    }], function () { return [{ type: _report_service__WEBPACK_IMPORTED_MODULE_3__["ReportService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }]; }, { eegInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['eegInput', {
                    static: true
                }]
        }] }); })();


/***/ }),

/***/ "izdF":
/*!****************************************************!*\
  !*** ./src/app/eeg-viewer/eeg-viewer.component.ts ***!
  \****************************************************/
/*! exports provided: EegViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EegViewerComponent", function() { return EegViewerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/header.component */ "fECr");




class EegViewerComponent {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this.url = "http://desktop-159ue8h:9988/webapps/home/session.html?app=plotfig";
    }
    ngOnInit() {
        this.urlMap = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    }
}
EegViewerComponent.ɵfac = function EegViewerComponent_Factory(t) { return new (t || EegViewerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
EegViewerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EegViewerComponent, selectors: [["eeg-viewer"]], decls: 4, vars: 1, consts: [["width", "100%", "height", "450", "frameborder", "0", "allowfullscreen", "", 2, "border", "0", 3, "src"]], template: function EegViewerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "eeg-viewer works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "iframe", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.urlMap, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZWctdmlld2VyLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EegViewerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'eeg-viewer',
                templateUrl: './eeg-viewer.component.html',
                styleUrls: ['./eeg-viewer.component.scss']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "mH07":
/*!**********************************!*\
  !*** ./src/app/admin.service.ts ***!
  \**********************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");





const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
class AdminService {
    constructor(http) {
        this.http = http;
    }
    getLoginDetails(user) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["APIUrl"] + 'admin', user);
    }
}
AdminService.ɵfac = function AdminService_Factory(t) { return new (t || AdminService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
AdminService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AdminService, factory: AdminService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AdminService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "tIkO":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "ccyI");



class AuthGuard {
    constructor(authService) {
        this.authService = authService;
    }
    canActivate(next, state) {
        return this.authService.isLoggedIn();
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin/admin.component */ "TRGY");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.guard */ "tIkO");
/* harmony import */ var _eeg_viewer_eeg_viewer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./eeg-viewer/eeg-viewer.component */ "izdF");
/* harmony import */ var _admin_doctor_admin_doctor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-doctor/admin-doctor.component */ "+LoM");









const routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'admin-doctor', component: _admin_doctor_admin_doctor_component__WEBPACK_IMPORTED_MODULE_6__["AdminDoctorComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'eeg-viewer/:id', component: _eeg_viewer_eeg_viewer_component__WEBPACK_IMPORTED_MODULE_5__["EegViewerComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "ccyI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../admin.service */ "mH07");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








function LoginComponent_div_32_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Username is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_32_div_1_Template, 2, 0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.formControls.username.errors.required);
} }
function LoginComponent_div_37_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_37_div_1_Template, 2, 0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.formControls.password.errors.required);
} }
function LoginComponent_div_38_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "* Username/password is incorrect");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_38_div_1_Template, 2, 0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isLoginDetailsInvalid);
} }
const _c0 = function (a0) { return { "has-error": a0 }; };
class LoginComponent {
    constructor(authService, router, formBuilder, adminService) {
        this.authService = authService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.adminService = adminService;
        this.isSubmitted = false;
        this.isLoginDetailsInvalid = false;
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    get formControls() {
        return this.loginForm.controls;
    }
    login() {
        this.isSubmitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        this.authService.login(this.loginForm.value);
        this.adminService.getLoginDetails(this.loginForm.value).subscribe(result => {
            if (result && result.adminRole == 'Technician') {
                this.router.navigateByUrl('/admin');
                this.isLoginDetailsInvalid = false;
            }
            else if (result && result.adminRole == 'Doctor') {
                this.router.navigateByUrl('/admin-doctor');
                this.isLoginDetailsInvalid = false;
            }
            else {
                this.isLoginDetailsInvalid = true;
                console.log("invalid login");
            }
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 48, vars: 10, consts: [[1, "image"], ["width", "319", "height", "54", "viewBox", "0 0 319 54", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 1, "neurostellar-logo"], ["d", "M75.5767 40.8649V21.9854H75.6409L88.8053 40.8649H92.2087V18.1324H89.5116V37.012H89.4474L76.2831 18.1324H72.8796V40.8649H75.5767Z", "fill", "black"], ["d", "M98.5122 40.8649H113.378V38.3605H101.209V30.2693H112.03V27.7648H101.209V20.6368H112.8V18.1324H98.5122V40.8649Z", "fill", "black"], ["d", "M118.091 32.26C118.091 37.8147 121.045 41.4429 126.664 41.4429C132.283 41.4429 135.237 37.8468 135.237 32.2921V18.1324H132.54V31.9389C132.54 36.3056 130.549 38.9384 126.664 38.9384C122.779 38.9384 120.788 36.3377 120.788 31.8104V18.1324H118.091V32.26Z", "fill", "black"], ["d", "M144.134 40.8649V30.6546H147.601L153.766 40.8649H157.073L150.62 30.3977C154.344 29.7876 156.303 27.5722 156.303 24.3614C156.303 20.38 154.055 18.1324 147.634 18.1324H141.437V40.8649H144.134ZM144.134 28.1501V20.6368H148.083C151.711 20.6368 153.413 21.8248 153.413 24.3935C153.413 26.5768 152.257 28.1501 147.345 28.1501H144.134Z", "fill", "black"], ["d", "M172.271 17.5544C165.336 17.5544 160.391 22.6596 160.391 29.4987C160.391 36.3377 165.368 41.4429 172.271 41.4429C179.174 41.4429 184.151 36.3056 184.151 29.4987C184.151 22.7238 179.238 17.5544 172.271 17.5544ZM163.281 29.4987C163.281 24.2008 167.07 20.0589 172.239 20.0589C177.505 20.0589 181.261 24.2008 181.261 29.4987C181.261 34.8286 177.473 38.9384 172.271 38.9384C166.973 38.9384 163.281 34.7644 163.281 29.4987Z", "fill", "black"], ["d", "M195.774 17.5544C191.311 17.5544 188.036 20.1552 188.036 24.1045C188.036 27.0906 189.48 28.9207 193.366 30.2693C197.186 31.5857 199.627 31.9389 199.627 34.9891C199.627 37.3651 197.219 38.9384 194.682 38.9384C192.659 38.9384 190.829 38.0394 189.834 36.4019L187.522 38.2963C188.838 40.2549 191.407 41.4429 194.521 41.4429C199.145 41.4429 202.516 38.8742 202.516 34.7965C202.516 31.5536 201.007 29.6271 195.806 28.0859C192.37 27.0584 190.925 26.0952 190.925 23.8797C190.925 21.5358 192.916 20.0589 195.774 20.0589C197.411 20.0589 199.017 20.701 199.916 22.1459L202.131 20.2194C200.429 18.2608 198.31 17.5544 195.774 17.5544Z", "fill", "black"], ["d", "M205.138 20.6368H212.652V40.8649H215.349V20.6368H222.862V18.1324H205.138V20.6368Z", "fill", "black"], ["d", "M226.69 40.8649H241.556V38.3605H229.387V30.2693H240.208V27.7648H229.387V20.6368H240.978V18.1324H226.69V40.8649Z", "fill", "black"], ["d", "M249.062 18.1324H246.365V40.8649H259.465V38.3605H249.062V18.1324Z", "fill", "black"], ["d", "M265.758 18.1324H263.061V40.8649H276.161V38.3605H265.758V18.1324Z", "fill", "black"], ["d", "M280.175 40.8649L282.519 35.2781H293.885L296.197 40.8649H299.343L289.679 18.1324H287.142L277.125 40.8649H280.175ZM283.578 32.7737L288.298 21.6001H288.362L292.858 32.7737H283.578Z", "fill", "black"], ["d", "M305.704 40.8649V30.6546H309.172L315.336 40.8649H318.644L312.19 30.3977C315.914 29.7876 317.873 27.5722 317.873 24.3614C317.873 20.38 315.625 18.1324 309.204 18.1324H303.007V40.8649H305.704ZM305.704 28.1501V20.6368H309.653C313.282 20.6368 314.983 21.8248 314.983 24.3935C314.983 26.5768 313.827 28.1501 308.915 28.1501H305.704Z", "fill", "black"], ["id", "mask0", "maskUnits", "userSpaceOnUse", "x", "0", "y", "0", "width", "54", "height", "54", 2, "mask-type", "alpha"], ["cx", "27", "cy", "27", "r", "27", "fill", "#C4C4C4"], ["mask", "url(#mask0)"], ["x", "-5.83789", "y", "-5.83789", "width", "65.6757", "height", "65.6757", "fill", "url(#pattern0)"], ["id", "pattern0", "patternContentUnits", "objectBoundingBox", "width", "1", "height", "1"], [0, "xlink", "href", "#image0", "transform", "scale(0.005)"], ["id", "image0", "width", "200", "height", "200", 0, "xlink", "href", "data:image/png;base64,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"], [1, "login-box"], [1, "login-datacontainer"], [2, "font-size", "30px", "margin-left", "12px"], [1, "login-container", 3, "formGroup", "ngSubmit"], [2, "color", "#B0B0B0"], [2, "margin-top", "3px", 3, "ngClass"], ["type", "text", "placeholder", "Enter your username", "formControlName", "username", 1, "login-input"], ["class", "help-block", 4, "ngIf"], [2, "color", "#B0B0B0", "margin-top", "20px"], [1, "disable-image", 2, "margin-top", "3px", 3, "ngClass"], ["type", "password", "placeholder", "Enter your password", "formControlName", "password", 1, "login-input"], ["type", "radio", "name", "remember", "value", "Remember me", 2, "position", "absolute", "margin-top", "2px"], [2, "padding-left", "18px", "color", "#808080"], [2, "margin-left", "201px", "color", "blue"], [1, "submit-button"], ["type", "submit", "value", "Sign In", 1, "btn", "btn-primary", "sign-in"], ["value", "Sign Up", 1, "btn", "btn-primary", "sign-up"], [1, "help-block"], ["style", "color: red;padding-bottom: 2px;", 4, "ngIf"], [2, "color", "red", "padding-bottom", "2px"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mask", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "circle", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "g", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "rect", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "pattern", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "use", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "image", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h2", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "form", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_27_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, LoginComponent_div_32_Template, 2, 1, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, LoginComponent_div_37_Template, 2, 1, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, LoginComponent_div_38_Template, 2, 1, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Remember me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Forgot password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.isSubmitted && ctx.formControls.username.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSubmitted && ctx.formControls.username.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.isSubmitted && ctx.formControls.password.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSubmitted && ctx.formControls.password.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSubmitted);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700);\n.login[_ngcontent-%COMP%] {\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  width: 526px;\n  margin: 16px auto;\n  font-size: 16px;\n  padding-top: 126px;\n}\n.login-header[_ngcontent-%COMP%], .login[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.login-triangle[_ngcontent-%COMP%] {\n  width: 0;\n  margin-right: auto;\n  margin-left: auto;\n  border: 12px solid transparent;\n  border-bottom-color: #0f426b;\n}\n.login-header[_ngcontent-%COMP%] {\n  padding: 20px;\n  font-size: 1.4em;\n  font-weight: normal;\n  text-align: center;\n  text-transform: uppercase;\n  color: #fff;\n}\n.login-container[_ngcontent-%COMP%] {\n  padding: 12px;\n}\n.login[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 12px;\n}\n.has-error[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%], .has-error[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%] {\n  border-color: #d80c0c;\n  color: #e60e0e;\n}\n.image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-image: url('login-screen6.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.login-box[_ngcontent-%COMP%] {\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  height: 497px;\n  width: 551px;\n  margin-left: 441px;\n  margin-top: 28px;\n  border-radius: 44px;\n  border: 2px solid #DCDCDC;\n}\n.neurostellar-logo[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  margin-left: 561px;\n}\n.login-datacontainer[_ngcontent-%COMP%] {\n  margin-left: 43px;\n  margin-top: 58px;\n}\n.login-input[_ngcontent-%COMP%] {\n  width: 421px;\n  border: none;\n  border-bottom: 1px solid;\n  background: none;\n}\n.login-input[_ngcontent-%COMP%]:focus {\n  width: 421px;\n  border: none !important;\n  border-bottom: 1px solid !important;\n  background: none;\n  box-shadow: none !important;\n}\n.sign-in[_ngcontent-%COMP%] {\n  width: 213px;\n  height: 33px;\n  margin-top: 54px;\n  background-color: #8DC8FF;\n  margin-left: 111px;\n  color: black !important;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 0px !important;\n}\n.sign-up[_ngcontent-%COMP%] {\n  width: 213px;\n  height: 33px;\n  margin-top: 54px;\n  margin-left: 111px;\n  color: black !important;\n  background-color: transparent !important;\n}\ninput[type=text][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  outline: none;\n}\n.disable-image[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLHNFQUFBO0FBR1I7RUFDRSxtQ0FBQTtVQUFBLDJCQUFBO0VBRUEsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBRkY7QUFLQTs7RUFFRSxhQUFBO0VBQ0EsZ0JBQUE7QUFGRjtBQUtBO0VBQ0UsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLDRCQUFBO0FBRkY7QUFLQTtFQUVFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUFIRjtBQU1BO0VBRUUsYUFBQTtBQUpGO0FBT0E7RUFDRSxhQUFBO0FBSkY7QUE4Q0E7O0VBRUkscUJBQUE7RUFDQSxjQUFBO0FBM0NKO0FBOENBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtFQUVBLDRCQUFBO0VBQ0Ysc0JBQUE7QUE1Q0E7QUErQ0E7RUFDRSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsYUFBQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQTVDSjtBQStDQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUE1Q0Y7QUFnREE7RUFDRSxpQkFBQTtFQUNFLGdCQUFBO0FBN0NKO0FBZ0RBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FBN0NGO0FBK0NBO0VBQ0UsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0FBNUNGO0FBK0NBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDRSx1QkFBQTtBQTVDSjtBQW1EQTtFQUNFLHVCQUFBO0FBaERGO0FBb0RBO0VBQ0UsWUFBQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDRix3Q0FBQTtBQWpERjtBQW9EQTtFQUNFLGFBQUE7QUFqREY7QUFvREE7RUFDRSxhQUFBO0FBakRGIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2Fuczo0MDAsNzAwKTtcclxuXHJcblxyXG4ubG9naW4ge1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcclxuIFxyXG4gIHdpZHRoOiA1MjZweDtcclxuICBtYXJnaW46IDE2cHggYXV0bztcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgcGFkZGluZy10b3A6IDEyNnB4O1xyXG59XHJcblxyXG4ubG9naW4taGVhZGVyLFxyXG4ubG9naW4gcCB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4ubG9naW4tdHJpYW5nbGUge1xyXG4gIHdpZHRoOiAwO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBib3JkZXI6IDEycHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiKDE1LCA2NiwgMTA3KTtcclxufVxyXG5cclxuLmxvZ2luLWhlYWRlciB7XHJcbiAgLy9iYWNrZ3JvdW5kOiByZ2IoMTIsIDc3LCAxMjkpO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAxLjRlbTtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ubG9naW4tY29udGFpbmVyIHtcclxuIC8vIGJhY2tncm91bmQ6ICNlYmViZWI7XHJcbiAgcGFkZGluZzogMTJweDtcclxufVxyXG5cclxuLmxvZ2luIHAge1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbn1cclxuXHJcbi8vIC5sb2dpbiBpbnB1dCB7XHJcbi8vICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuLy8gICBkaXNwbGF5OiBibG9jaztcclxuLy8gICB3aWR0aDogMTAwJTtcclxuLy8gICBib3JkZXItd2lkdGg6IDFweDtcclxuLy8gICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4vLyAgIHBhZGRpbmc6IDE2cHg7XHJcbi8vICAgb3V0bGluZTogMDtcclxuLy8gICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuLy8gICBmb250LXNpemU6IDAuOTVlbTtcclxuLy8gfVxyXG5cclxuLy8gLmxvZ2luIGlucHV0W3R5cGU9XCJlbWFpbFwiXSxcclxuLy8gLmxvZ2luIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSB7XHJcbi8vICAgYmFja2dyb3VuZDogI2ZmZjtcclxuLy8gICBib3JkZXItY29sb3I6ICNiYmI7XHJcbi8vICAgY29sb3I6ICM1NTU7XHJcbi8vIH1cclxuXHJcbi8vIC5sb2dpbiBpbnB1dFt0eXBlPVwiZW1haWxcIl06Zm9jdXMsXHJcbi8vIC5sb2dpbiBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl06Zm9jdXMge1xyXG4vLyAgIC8vYm9yZGVyLWNvbG9yOiAjODg4O1xyXG4vLyB9XHJcblxyXG4vLyAubG9naW4gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XHJcbi8vICAgYmFja2dyb3VuZDogcmdiKDEsIDI5LCA1MSk7XHJcbi8vICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuLy8gICBjb2xvcjogI2ZmZjtcclxuLy8gICBjdXJzb3I6IHBvaW50ZXI7XHJcbi8vIH1cclxuXHJcbi8vIC5sb2dpbiBpbnB1dFt0eXBlPVwic3VibWl0XCJdOmhvdmVyIHtcclxuLy8gICAvL2JhY2tncm91bmQ6ICMxN2M7XHJcbi8vIH1cclxuXHJcbi8vIC5sb2dpbiBpbnB1dFt0eXBlPVwic3VibWl0XCJdOmZvY3VzIHtcclxuLy8gICBib3JkZXItY29sb3I6ICMwNWE7XHJcbi8vIH1cclxuXHJcbi5oYXMtZXJyb3IgaW5wdXRbdHlwZT1cImVtYWlsXCJdLFxyXG4uaGFzLWVycm9yIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSB7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYigyMTYsIDEyLCAxMik7XHJcbiAgICBjb2xvcjogcmdiKDIzMCwgMTQsIDE0KTtcclxufVxyXG5cclxuLmltYWdlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6MTAwJTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ35zcmMvYXNzZXRzL2xvZ2luLXNjcmVlbjYucG5nJykgO1xyXG4gLy9iYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLmxvZ2luLWJveCB7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xyXG4gIGhlaWdodDogNDk3cHg7XHJcbiAgICB3aWR0aDogNTUxcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNDQxcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDRweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNEQ0RDREM7XHJcbn1cclxuXHJcbi5uZXVyb3N0ZWxsYXItbG9nb3tcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1NjFweDtcclxuICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5sb2dpbi1kYXRhY29udGFpbmVye1xyXG4gIG1hcmdpbi1sZWZ0OiA0M3B4O1xyXG4gICAgbWFyZ2luLXRvcDogNThweDtcclxufVxyXG5cclxuLmxvZ2luLWlucHV0IHtcclxuICB3aWR0aDogNDIxcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG59XHJcbi5sb2dpbi1pbnB1dDpmb2N1cyB7XHJcbiAgd2lkdGg6IDQyMXB4O1xyXG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2lnbi1pbiB7XHJcbiAgd2lkdGg6IDIxM3B4O1xyXG4gIGhlaWdodDogMzNweDtcclxuICBtYXJnaW4tdG9wOiA1NHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM4REM4RkY7XHJcbiAgbWFyZ2luLWxlZnQ6IDExMXB4O1xyXG4gICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zdWJtaXQtYnV0dG9uIHtcclxuICBcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAvLyBwYWRkaW5nLXRvcDogNTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2lnbi11cCB7XHJcbiAgd2lkdGg6IDIxM3B4O1xyXG4gICAgaGVpZ2h0OiAzM3B4O1xyXG4gICAgbWFyZ2luLXRvcDogNTRweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMTFweDtcclxuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdLCBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0sIHRleHRhcmVhLCBzZWxlY3QgeyBcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uZGlzYWJsZS1pbWFnZSBkaXYge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map