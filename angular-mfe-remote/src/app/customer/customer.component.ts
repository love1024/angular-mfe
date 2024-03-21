import { Component } from '@angular/core';

interface Note {
  heading: string;
  description: string;
}

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css',
})
export class CustomerComponent {
  notes: Note[] = [
    {
      heading: 'File Taxes',
      description: 'File taxes before April 31st',
    },
    {
      heading: 'Post an Article',
      description: 'Post an article to medium every week',
    },
    {
      heading: 'Jog',
      description: 'Make sure to jog today at 5:00 PM before you go out.',
    },
    {
      heading: 'Grocery',
      description: 'Bring some food for friends when you go out today.',
    },
  ];
}
