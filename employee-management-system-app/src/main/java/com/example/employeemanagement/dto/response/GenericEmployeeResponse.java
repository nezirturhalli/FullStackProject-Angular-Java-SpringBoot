package com.example.employeemanagement.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class GenericEmployeeResponse {
    private Long employeeId;
    private String firstName;
    private String lastName;
    private String email;
}
