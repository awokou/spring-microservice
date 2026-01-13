import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { School } from '../models/school.model';

@Injectable({
  providedIn: 'root',
})
export class SchoolService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<School[]> {
    return this.http.get<School[]>('/api/schools');
  }

  getBySchoolId(schoolId: number): Observable<School> {
    return this.http.get<School>('/api/schools/' + schoolId);
  }

  create(schools: School): Observable<School> {
    return this.http.post<School>('/api/schools', schools);
  }

}
