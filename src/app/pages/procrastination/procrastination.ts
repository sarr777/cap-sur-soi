import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-procrastination',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './procrastination.html',
  styleUrl: './procrastination.css'
})
export class Procrastination {}
