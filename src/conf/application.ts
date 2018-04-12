import { Conf } from './index';

const conf: Conf = {
	http: {
		port: 6686,
		logLevel: 'dev', // log format for morgan
		routingController: {
			classTransformer: false,
		}
	}
};

export default conf;