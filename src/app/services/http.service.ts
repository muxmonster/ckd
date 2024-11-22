import { IPatientList } from './../authentication/components/patient-ckd/patient-list/patient-list.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  private url = 'http://localhost:8001/api/v1/ckd/clinicmembers';

  //* Get all CKD Lab details
  getLabCKD(): Observable<IPatientList> {
    return this.http.get<IPatientList>(this.url);
  }
}
