import { Component, OnInit } from '@angular/core';
import { ApiService, HelloResponse } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  message?: HelloResponse;
  error?: string;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getHello().subscribe({
      next: (data) => (this.message = data),
      error: (err) => (this.error = 'Erro ao conectar ao backend 😢'),
    });
  }
}
