package com.javaserver.department.service.service;

import com.javaserver.department.service.dto.DepartmentDto;

public interface DepartmentService {

    DepartmentDto saveDepartmentDto(DepartmentDto departmentDto);

    DepartmentDto getDepartmentByCode(String code);
}
