function getError(code: number, message: string): never {
    throw {
        code
        , message
    }
}