export class nuevoEntidad {
    nro_documento: string;
    razon_social: string;
    nombre_comercial: string;
    direccion: string;
    telefono: string;
    estado: number;


    constructor(nro_documento: string, razon_social: string, nombre_comercial: string, direccion: string,
    telefono: string,
    estado: number) {
        this.nro_documento = nro_documento;
        this.razon_social = razon_social;
        this.nombre_comercial = nombre_comercial;
        this.direccion = direccion;
        this.telefono = telefono;
        this.estado = estado;
    }
}
