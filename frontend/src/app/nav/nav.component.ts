import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, DialogComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  visible = false;

  showDialog() {
    this.visible = true;
  }
}
