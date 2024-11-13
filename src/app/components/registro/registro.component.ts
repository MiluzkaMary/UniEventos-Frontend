import { Component } from '@angular/core';
import { CrearCuentaDTO } from '../../dto/crear-cuenta-dto';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-registro',
    standalone: true,
    imports: [FormsModule, CommonModule],
    templateUrl: './registro.component.html',
    styleUrls: ['./registro.component.css']
})
export class RegistroComponent{
    crearCuentaDTO: CrearCuentaDTO;


    constructor() {
        this.crearCuentaDTO = new CrearCuentaDTO();
    }

    public registrar() {
        console.log(this.crearCuentaDTO);
    }

    public sonIguales(): boolean {
      return this.crearCuentaDTO.password === this.crearCuentaDTO.confirmaPassword;
   }
   
}
