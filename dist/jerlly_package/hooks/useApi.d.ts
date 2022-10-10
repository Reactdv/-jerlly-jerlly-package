interface Method {
    get: (endPoint: Param['endPoint']) => Promise<any>;
    post: (params: Param) => Promise<any>;
    update: (params: Param) => Promise<any>;
    destroy: (params: Param) => Promise<any>;
}
interface Param {
    endPoint: string;
    data?: any[] | object;
    id?: string | number;
}
export declare const useApi: () => Method;
export {};
