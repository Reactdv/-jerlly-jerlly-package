"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useApi = void 0;
const axios_1 = __importDefault(require("axios"));
const useApi = () => {
    const get = (params) => __awaiter(void 0, void 0, void 0, function* () {
        const { endPoint } = params;
        const res = yield axios_1.default.get(endPoint);
        return res;
    });
    const post = (params) => __awaiter(void 0, void 0, void 0, function* () {
        const { endPoint, data } = params;
        const res = yield axios_1.default.post(endPoint, data);
        return res;
    });
    const update = (params) => __awaiter(void 0, void 0, void 0, function* () {
        const { endPoint, id } = params;
        const res = yield axios_1.default.put(`${endPoint}${id}`);
        return res;
    });
    const destroy = (params) => __awaiter(void 0, void 0, void 0, function* () {
        const { endPoint, id } = params;
        const res = yield axios_1.default.delete(`${endPoint}${id}`);
        return res;
    });
    return { get, post, update, destroy };
};
exports.useApi = useApi;
//# sourceMappingURL=useApi.js.map