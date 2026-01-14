package com.javaserver.employee.service.service;

import com.javaserver.employee.service.dto.APIResponseDto;
import com.javaserver.employee.service.dto.EmployeeDto;

public interface EmployeeService {

    EmployeeDto saveEmployee(EmployeeDto employeeDto);

    APIResponseDto getEmployeeById(Integer employeeId);
}
