import { UsuarioDTO } from './usuario-dto';
import { Rol } from './rol.enum';

export class CrearCuentaDTO {
    constructor(
        public correo: string = '',
        public password: string = '',
        public confirmaPassword: string ='',
        public rol: Rol = Rol.CLIENTE,
        public fechaNacimiento: Date = new Date(),
        public usuario: UsuarioDTO = new UsuarioDTO()
    ) {}
}
