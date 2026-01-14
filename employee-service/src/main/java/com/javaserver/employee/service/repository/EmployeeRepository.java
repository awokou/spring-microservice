package com.javaserver.employee.service.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.javaserver.employee.service.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

}
