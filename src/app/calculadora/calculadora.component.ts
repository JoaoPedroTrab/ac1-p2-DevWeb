import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit  {
  form: FormGroup;

  resultado : any;
  constructor() { }
  peso : number;
  altura : number;
  valorCalculado: any;

  ngOnInit(): void {
    this.form = new FormGroup({
      peso: new FormControl('',[Validators.required, Validators.min(1), Validators.max(500)]),
      altura: new FormControl('', [Validators.required, Validators.min(0.01), Validators.max(3)]),
    });
  }

  calcular(){
    this.valorCalculado = this.form.controls['peso'].value / (this.form.controls['altura'].value * this.form.controls['altura'].value)
    if (this.valorCalculado < 18.5) 
      this.resultado = "Abaixo do peso normal"
    if (this.valorCalculado > 18.5 && this.valorCalculado < 24.9)
      this.resultado = "Peso normal"
    if (this.valorCalculado > 25 && this.valorCalculado < 29.9)
      this.resultado = "Excesso de Peso"
    if (this.valorCalculado > 30 && this.valorCalculado < 34.9)
      this.resultado = "Obesidade Classe I"
    if (this.valorCalculado > 35 && this.valorCalculado < 39.9)
      this.resultado = "Obesidade Classe II"
    if (this.valorCalculado > 40)
      this.resultado = "Obesidade Classe III"
} }
