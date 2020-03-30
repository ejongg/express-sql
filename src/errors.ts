export class NotFoundError extends Error {
    public name = 'NotFoundError'
    public status = 404
    constructor(message?: string) {
        super(message)
    }
}
