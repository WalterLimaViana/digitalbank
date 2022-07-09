"use strict";
/* tslint:disable:no-unused-variable */
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var transferencia_service_1 = require("./transferencia.service");
describe('Service: Trasnferencia', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [transferencia_service_1.TransferenciaService]
        });
    });
    it('should ...', testing_1.inject([transferencia_service_1.TransferenciaService], function (service) {
        expect(service).toBeTruthy();
    }));
});
