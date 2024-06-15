import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css',
})
export class TemplateFormComponent {
  lista: any = [];

  onSubmit(form: any) {
    // console.log('Submit Ativado!');

    if (form.valid) {
      const user: any = {
        name: form.value.name,
        email: form.value.email,
      };

      // console.log(user);

      this.lista.push(user);
      form.reset();

      console.log(this.lista);
    } else {
      console.log('formulário inválido');
    }
  }
}
