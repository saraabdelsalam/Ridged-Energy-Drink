import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule, IconField } from 'primeng/iconfield';
import { InputIconModule, InputIcon } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-register',
  imports: [IconField, InputIcon],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class RegisterComponent {

}
