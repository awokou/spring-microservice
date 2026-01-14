package com.javaserver.department.service.service.impl;

import org.springframework.stereotype.Service;

import com.javaserver.department.service.dto.DepartmentDto;
import com.javaserver.department.service.entity.Department;
import com.javaserver.department.service.repository.DepartmentRepository;
import com.javaserver.department.service.service.DepartmentService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class DepartmentServiceImpl implements DepartmentService {

    private final DepartmentRepository departmentRepository;

    @Override
    public DepartmentDto saveDepartmentDto(DepartmentDto departmentDto) {
        // convert department dto to department jpa entity
        Department department = new Department(
                departmentDto.getId(),
                departmentDto.getCode(),
                departmentDto.getName(),
                departmentDto.getDescription());

        Department savedDepartment = departmentRepository.save(department);

        DepartmentDto savedDepartmentDto = new DepartmentDto(
                savedDepartment.getId(),
                savedDepartment.getCode(),
                savedDepartment.getName(),
                savedDepartment.getDescription());
        return savedDepartmentDto;
    }

    @Override
    public DepartmentDto getDepartmentByCode(String code) {
        Department department = departmentRepository.findByCode(code);

        DepartmentDto departmentDto = new DepartmentDto(
                department.getId(),
                department.getCode(),
                department.getName(),
                department.getDescription());
        return departmentDto;
    }

}
