import { Component } from '@angular/core';
import { HttpService } from '../../../../services/http.service';
import { IPatientList } from './patient-list.interface';

@Component({
  selector: 'app-patient-list',
  standalone: false,

  templateUrl: './patient-list.component.html',
  styleUrl: './patient-list.component.scss',
})
export class PatientListComponent {
  constructor(private httpService: HttpService) {}

  lab_partient: IPatientList | any;
  rows: number = 0;
  ngOnInit() {
    this.httpService.getLabCKD().subscribe({
      next: (res) => {
        this.lab_partient = res.data;
        this.rows = res.data.length;
        console.log(res.data);
      },
      error: (e) => {
        console.log(e);
      },
      complete: () => {
        console.info('complete');
      },
    });
  }

  patients = [
    {
      hn: '123456',
      fullname: 'John Doe',
      last_lab: '2021-01-01',
      egfr: 10.98,
      detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      hn: '2233441',
      fullname: 'Marrie Doe',
      last_lab: '2021-01-20',
      egfr: 5.34,
      detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      hn: '1245670',
      fullname: 'Sean Doe',
      last_lab: '2021-09-01',
      egfr: 1.23,
      detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      hn: '0989988',
      fullname: 'Bobby Doe',
      last_lab: '2022-01-01',
      egfr: 2.34,
      detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      hn: '7865431',
      fullname: 'McCarthey Doe',
      last_lab: '2021-03-01',
      egfr: 4.928,
      detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      hn: '0329988',
      fullname: 'Akon Doe',
      last_lab: '2024-03-01',
      egfr: 2.12,
      detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      hn: '0329988',
      fullname: 'Sega Doe',
      last_lab: '2024-03-01',
      egfr: 2.12,
      detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      hn: '0329988',
      fullname: 'Bubble Doe',
      last_lab: '2024-03-01',
      egfr: 2.12,
      detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      hn: '0329988',
      fullname: 'Ronaldo Doe',
      last_lab: '2024-03-01',
      egfr: 2.12,
      detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      hn: '0329988',
      fullname: 'Adam Doe',
      last_lab: '2024-03-01',
      egfr: 2.12,
      detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      hn: '0329988',
      fullname: 'Naruto Doe',
      last_lab: '2024-03-01',
      egfr: 2.12,
      detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      hn: '0329988',
      fullname: 'Djkta Doe',
      last_lab: '2024-03-01',
      egfr: 2.12,
      detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ];
}
