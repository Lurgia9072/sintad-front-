export class Login {
    nombreComercial: string;
    nroDocumento: string;

    constructor(user: string, password: string) {
        this.nombreComercial = user;
        this.nroDocumento = password;
    }
}
