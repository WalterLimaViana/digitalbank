"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TrasnferenciaService = void 0;
var core_1 = require("@angular/core");
var TrasnferenciaService = /** @class */ (function () {
    function TrasnferenciaService(httpClient) {
        this.httpClient = httpClient;
        this.url = 'http://localhost:3000/transferencias';
        this.listaTransferencia = [];
    }
    Object.defineProperty(TrasnferenciaService.prototype, "transferencias", {
        get: function () {
            return this.listaTransferencia;
        },
        enumerable: false,
        configurable: true
    });
    TrasnferenciaService.prototype.todas = function () {
        return this.httpClient.get(this.url);
    };
    TrasnferenciaService.prototype.adicionar = function (transferencia) {
        this.hidratar(transferencia);
        return this.httpClient.post(this.url, transferencia);
    };
    TrasnferenciaService.prototype.hidratar = function (transferencia) {
        transferencia.data = new Date();
    };
    TrasnferenciaService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], TrasnferenciaService);
    return TrasnferenciaService;
}());
exports.TrasnferenciaService = TrasnferenciaService;
