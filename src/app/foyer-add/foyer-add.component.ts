import { Component } from '@angular/core';
import { FoyerService } from '../foyer.service';
import { Foyer } from '../../foyer';

@Component({
  selector: 'app-foyer-add',
  templateUrl: './foyer-add.component.html',
  styleUrl: './foyer-add.component.css'
})
export class FoyerAddComponent {
  foyer: Foyer = { nomFoyer: '', capaciteFoyer: 0 };

  constructor(private foyerService: FoyerService) {}

  addFoyer(): void {
    this.foyerService.addFoyer(this.foyer).subscribe(() => {
      alert('Foyer added successfully');
      this.foyer = { nomFoyer: '', capaciteFoyer: 0 };
    });
  }
}
