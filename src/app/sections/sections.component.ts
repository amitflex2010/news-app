import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as Sections from '../../assets/menu.json';
import { Section } from '../model/section.js';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {

  filteredSection: Observable<Section[]>;
  sections = [];

  constructor() { 
    const sectionsJSON = JSON.stringify(Sections);
    const parsedSections = JSON.parse(sectionsJSON);

    parsedSections.default.forEach((parsedSection) => {
      const section: Section = {
        title: parsedSection.title,
        link: parsedSection.link
      };
      this.sections.push(section);
  });

  this.filteredSection = of(this.sections.map(
     section => {
      const sectionboj: Section = {
       title: section.title,
       link: section.link
     }
     return sectionboj;
    }));
    
}

ngOnInit() {
  console.log(this.sections)
}

}
