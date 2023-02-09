import axios from "axios";
import { API_URL } from "./config";
import { GenericError } from "./error";

export class IAM {
  apiKey = "";
  serviceWorker: ServiceWorkerContainer | undefined = undefined;

  constructor(apiKey: string) {
	if(!('serviceWorker' in window.navigator)) throw new GenericError("ServiceWorkerNotPresent", `serviceWorker is not present in window.navigator`)

	this.apiKey = apiKey;
	this.serviceWorker = window.navigator.serviceWorker

	this.serviceWorker.register("./events.js")
  }

  public addEvent = async (eventName: string, eventData: any) => {
	const project = await this.validateApiKey();

	const res = await axios({
	  url: `${API_URL}/events`,
	  data: {
		id: project.id,
		data: [eventData],
	  },
	});

	const data = await res.data;

	return {
	  status: true,
	  data,
	};
  };

  public addUser = async (address: string, blockchains: string[]) => {
	const project = await this.validateApiKey();

	const res = await axios({
	  url: `${API_URL}/events`,
	  data: {
		address,
		blockchains,
	  },
	});

	const data = await res.data;

	return {
	  status: true,
	  data,
	};
  };

  private validateApiKey = async () => {
	return {} as any;
  };
}
