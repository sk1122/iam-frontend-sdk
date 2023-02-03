import axios from "axios"
import { API_URL } from "./config"

export class IAM {
    apiKey = ""

    constructor(apiKey: string) {
        this.apiKey = apiKey
    }

    public addEvent = async (eventName: string, eventData: any) => {
        const project = await this.validateApiKey()
        
        const res = await axios({
            url: `${API_URL}/events`,
            data: {
                id: project.id,
                data: [
                    eventData
                ]
            }
        })

        const data = await res.data

        return {
            status: true,
            data
        }
    }

    public addUser = async (address: string, blockchains: string[]) => {
        const project = await this.validateApiKey()

        const res = await axios({
          url: `${API_URL}/events`,
          data: {
            address,
            blockchains
          },
        });

        const data = await res.data

        return {
            status: true,
            data
        }
    }

    private validateApiKey = async () => {
        return {} as any
    }
}