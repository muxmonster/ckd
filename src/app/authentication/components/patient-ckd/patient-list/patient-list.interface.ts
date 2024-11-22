export interface IPatientList {
  count: number;
  code: number;
  status: string;
  title: string;
  message: string;
  data: IPatientLabDetail[];
}

export interface IPatientLabDetail {
  hn: string;
  fullname: string;
  lab_date: string;
  egfr: number;
  detail: string;
}
