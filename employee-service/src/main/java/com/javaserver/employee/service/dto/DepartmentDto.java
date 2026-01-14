package com.javaserver.employee.service.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DepartmentDto {

    private Integer id;
    private String departmentName;
    private String departmentDescription;
    private String departmentCode;

}
