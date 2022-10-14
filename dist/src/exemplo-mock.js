"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* prettier-ignore */
function realizarParaAdultos(pessoas, callback) {
    for (let i = 0; i < pessoas.length; i++) {
        if (pessoas[i].idade >= 18) {
            callback(pessoas[i]);
        }
    }
}
function aguardarTimer(callback) {
    setTimeout(() => {
        callback();
    }, 3000);
}
exports.default = {
    realizarParaAdultos,
    aguardarTimer,
};
