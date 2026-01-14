package com.javaserver.department.service.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.javaserver.department.service.entity.Department;

public interface DepartmentRepository extends JpaRepository<Department, Integer> {

    Department findByCode(String code);
}
