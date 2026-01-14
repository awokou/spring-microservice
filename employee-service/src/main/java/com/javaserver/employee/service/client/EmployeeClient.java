package com.javaserver.employee.service.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.javaserver.employee.service.dto.DepartmentDto;

@FeignClient(name = "DEPARTMENT-SERVICE", url = "http://localhost:8083")
public interface EmployeeClient {

    @GetMapping("api/departments/{code}")
    DepartmentDto getDepartment(@PathVariable("code") String code);
}
