export class UsuarioDTO {
    constructor(
        public cedula: string = '',
        public nombre: string = '',
        public telefono: string = '',
        public direccion: string = ''
    ) {}
}
