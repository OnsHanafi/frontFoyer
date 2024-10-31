import { Component, OnInit } from '@angular/core';
import { Foyer } from '../Foyer';
import { FoyerService } from '../foyer.service';

@Component({
  selector: 'app-foyer-list',
  templateUrl: './foyer-list.component.html',
  styleUrl: './foyer-list.component.css'
})
export class FoyerListComponent implements OnInit {
  foyers: Foyer[] = [];

  constructor(private foyerService: FoyerService) {}

  ngOnInit(): void {
    this.foyerService.getFoyers().subscribe((data: Foyer[]) => {
      this.foyers = data;
    });
  }

}
