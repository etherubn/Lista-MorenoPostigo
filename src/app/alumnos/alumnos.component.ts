import { Component } from '@angular/core';

interface Alumno{
  dni:string,
  nombre:string,
  apellidos:string,
  edad:Date,
  cantidadCursos:number,
  promedio:number,
  condicion:string
}

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent {
  alumno1:Alumno={
    dni:"44758958",
    nombre:"Jose Eduardo",
    apellidos:"Marue Verde",
    edad: new Date('1994-01-03'),
    cantidadCursos:6,
    promedio:14,
    condicion:""
  }

  alumno2:Alumno={
    dni:"44758951",
    nombre:"Brian Domeo",
    apellidos:"Zichet Manuy",
    edad: new Date('1992-05-14'),
    cantidadCursos:10,
    promedio:8,
    condicion:""
  }

  alumno3:Alumno={
    dni:"47815400",
    nombre:"Angelo",
    apellidos:"Postim Vera",
    edad: new Date('1980-02-24'),
    cantidadCursos:6,
    promedio:17,
    condicion:""
  }

  alumno4:Alumno={
    dni:"77785846",
    nombre:"Marcelo Tiago",
    apellidos:"Lezama Thaim",
    edad: new Date('1995-08-12'),
    cantidadCursos:8,
    promedio:10,
    condicion:""
  }

  alumno5:Alumno={
    dni:"44758958",
    nombre:"Ruben Antonio",
    apellidos:"Klugg Manzanilla",
    edad: new Date('2002-07-24'),
    cantidadCursos:9,
    promedio:15,
    condicion:""
  }

  alumno6:Alumno={
    dni:"44758958",
    nombre:"Jose Eduardo",
    apellidos:"Marue Verde",
    edad: new Date('2000-05-10'),
    cantidadCursos:6,
    promedio:14,
    condicion:""
  }

  listaAlumno:Alumno[]=[this.alumno1,this.alumno2,this.alumno3,this.alumno4,this.alumno5,this.alumno6]
}

