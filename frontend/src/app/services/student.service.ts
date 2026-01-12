import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root',
})
export class StudentService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Student[]> {
    return this.http.get<Student[]>('/api/students');
  }

  getBySchoolId(schoolId: number): Observable<Student> {
    return this.http.get<Student>('/api/students/school/' + schoolId);
  }
}
