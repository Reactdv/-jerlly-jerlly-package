import axios from "axios";

interface Method {
	get: (params:Param['endPoint']) => Promise<any>;
	post: (params: Param) => Promise<any>;
	update: (params:Param) => Promise<any>;
	destroy: (params:Param) => Promise<any>;
}

interface Param {
	endPoint: string;
	data?: any[] | object;
	id?: string | number;
}

export const useApi = (): Method => {
	const get = async (endPoint:Param['endPoint']):Promise<any> => {
		const res = await axios.get(endPoint);
		return res;
	};
	const post = async (params: Param): Promise<any> => {
		const { endPoint,data } = params
		const res = await axios.post(endPoint, data);
		return res
	};
	const update = async (params:Param): Promise<any> => {
		const { endPoint,id } = params

		const res = await axios.put(`${endPoint}${id}`)
		return res
	};
	const destroy = async (params:Param): Promise<any> => {
		const { endPoint,id } = params
		const res = await axios.delete(`${endPoint}${id}`)
		return res

	};

	return { get, post, update, destroy };
};
