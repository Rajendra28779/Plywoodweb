import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plywoodtab',
  templateUrl: './plywoodtab.component.html',
  styleUrls: ['./plywoodtab.component.css']
})
export class PlywoodtabComponent implements OnInit {

  selectedButton: number = 1; // Button 1 is selected by default


  constructor() { }

  ngOnInit(): void {
  }

  selectButton(buttonNumber: number) {
    this.selectedButton = buttonNumber; // Update selected button number
  }

}
