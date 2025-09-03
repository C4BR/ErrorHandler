import { ErrorBase } from "./errorBase";

type UserErrorName = 'USER_NOT_FOUND' | 'USER_UNAUTHORIZED'

class UserError extends ErrorBase<UserErrorName>{
    constructor(name: UserErrorName) {
        const messages = {
            USER_NOT_FOUND: { 
                message: "Usuário não existe", 
                status: 404},
            USER_UNAUTHORIZED: { 
                message: "Acesso negado", 
                status: 401}
        }
        super(name, messages[name].message, messages[name].status)
    }
}

throw new UserError('USER_UNAUTHORIZED')
