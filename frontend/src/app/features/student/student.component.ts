import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-student',
  imports: [],
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class StudentComponent implements OnInit {

  students: Student[] = [];
  loading = false;
  error?: string;

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(): void {
    this.loading = true;
    this.studentService.getAll().subscribe({
      next: (data) => {
        this.students = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Erreur lors du chargement des students';
        this.loading = false;
      },
      complete: () => {
        console.log('Chargement terminé');
      }
    });
  }
}
