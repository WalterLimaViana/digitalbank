"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var nova_transferencia_component_1 = require("./nova-transferencia/nova-transferencia.component");
var extrato_component_1 = require("./extrato/extrato.component");
var common_1 = require("@angular/common");
var pt_1 = require("@angular/common/locales/pt");
common_1.registerLocaleData(pt_1["default"], 'pt');
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent, nova_transferencia_component_1.NovatransferenciaComponent, extrato_component_1.ExtratoComponent],
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
            providers: [
                { provide: core_1.LOCALE_ID, useValue: 'pt' },
                { provide: core_1.DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
