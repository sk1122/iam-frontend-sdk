export class GenericError extends Error {
    name = ""

    constructor(name: string, message: string) {
        super(message)

        this.name = name
    }
}