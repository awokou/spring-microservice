import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student.model';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../../services/student.service';
import { CommonModule } from '@angular/common';
// PrimeNG modules
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessageService, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    ToastModule,
    ConfirmDialogModule
  ],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css',
  providers: [MessageService, ConfirmationService]
})
export class StudentList implements OnInit {

  students: Student[] = [];
  loading = false;
  error?: string;

  studentDialog = false;
  selectedStudent!: Student;
  isEdit = false;

  constructor(
    private studentService: StudentService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(): void {
    this.loading = true;
    this.studentService.getAll().subscribe({
      next: (students) => {
        this.students = students;
        this.loading = false;
      },
      error: () => {
        this.error = 'Erreur lors du chargement des étudiants';
        this.loading = false;
      }
    });
  }

  openNew(): void {
    this.selectedStudent = {
      id: 0,
      firstname: '',
      lastname: '',
      email: '',
      schoolId: 0
    };
    this.isEdit = false;
    this.studentDialog = true;
  }

  editStudent(student: Student): void {
    this.selectedStudent = { ...student };
    this.isEdit = true;
    this.studentDialog = true;
  }

  confirmDelete(student: Student): void {
    this.confirmationService.confirm({
      message: `Supprimer ${student.firstname} ${student.lastname} ?`,
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.studentService.delete(student.id).subscribe({
          next: () => {
            this.loadStudents();
            this.showSuccess('Étudiant supprimé');
          },
          error: () => this.showError('Erreur lors de la suppression')
        });
      }
    });
  }

  saveStudent(): void {
    if (!this.isFormValid()) return;

    if (this.isEdit) {
      this.studentService.update(this.selectedStudent).subscribe({
        next: () => {
          this.loadStudents();
          this.studentDialog = false;
          this.showSuccess('Étudiant modifié');
        },
        error: () => this.showError('Erreur lors de la modification')
      });
    } else {
      this.studentService.create(this.selectedStudent).subscribe({
        next: () => {
          this.loadStudents();
          this.studentDialog = false;
          this.showSuccess('Étudiant ajouté');
        },
        error: () => this.showError('Erreur lors de l’ajout')
      });
    }
  }

  isFormValid(): boolean {
    const s = this.selectedStudent;
    return !!(s.firstname && s.lastname && s.email && s.schoolId);
  }

  showSuccess(msg: string): void {
    this.messageService.add({
      severity: 'success',
      summary: 'Succès',
      detail: msg
    });
  }

  showError(msg: string): void {
    this.messageService.add({
      severity: 'error',
      summary: 'Erreur',
      detail: msg
    });
  }
}


