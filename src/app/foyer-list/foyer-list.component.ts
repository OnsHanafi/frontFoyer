import { Component, OnInit } from '@angular/core';
import { FoyerService } from '../foyer.service';
import { Foyer } from '../../foyer';

@Component({
  selector: 'app-foyer-list',
  templateUrl: './foyer-list.component.html',
  styleUrl: './foyer-list.component.css'
})
export class FoyerListComponent implements OnInit {
  foyers: Foyer[] = [];

  constructor(private foyerService: FoyerService) {}

  ngOnInit(): void {
      this.getFoyers();
  }

  getFoyers(): void {
    this.foyerService.getFoyers().subscribe(
      (data) => {
        this.foyers = data; // Handle data as needed
      },
      (error) => {
        console.error('Error retrieving foyers:', error);
      }
    );
  }

}
