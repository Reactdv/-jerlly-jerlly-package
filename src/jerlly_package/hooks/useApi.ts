import axios from "axios";

export const useApi = async (
	endPoint: string,
	method: string,
	data: [] | {},
	id: string | number
) => {
	let res;

	switch (method) {
		case "get":
			res = await axios.get(endPoint);
			return res;
			break;
	}
};
