"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NovatransferenciaComponent = void 0;
var core_1 = require("@angular/core");
var NovatransferenciaComponent = /** @class */ (function () {
    function NovatransferenciaComponent(service, router) {
        this.service = service;
        this.aoTransferir = new core_1.EventEmitter();
    }
    NovatransferenciaComponent.prototype.transferir = function () {
        var _this = this;
        console.log('Solicitada nova transferencia');
        var valorEmitir = {
            valor: this.valor,
            destino: this.destino
        };
        this.service.adicionar(valorEmitir).subscribe(function (resultado) {
            console.log(resultado);
            _this.limparCampos();
            _this.router.navigateByUrl('extrato');
        }, function (error) { return console.error(error); });
    };
    NovatransferenciaComponent.prototype.limparCampos = function () {
        this.valor = 0;
        this.destino = 0;
    };
    __decorate([
        core_1.Output()
    ], NovatransferenciaComponent.prototype, "aoTransferir");
    NovatransferenciaComponent = __decorate([
        core_1.Component({
            selector: 'app-nova-transferencia',
            templateUrl: './novatransferencia.component.html',
            styleUrls: ['./nova-transferencia.component.scss']
        })
    ], NovatransferenciaComponent);
    return NovatransferenciaComponent;
}());
exports.NovatransferenciaComponent = NovatransferenciaComponent;
