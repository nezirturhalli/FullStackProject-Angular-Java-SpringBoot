package com.example.employeemanagement.service;

import com.example.employeemanagement.dto.request.NewEmployeeRequest;
import com.example.employeemanagement.dto.request.UpdateEmployeeRequest;
import com.example.employeemanagement.dto.response.GenericEmployeeResponse;
import com.example.employeemanagement.exception.ResourceNotFoundException;

import java.util.List;
import java.util.Map;

public interface EmployeeService {

    List<GenericEmployeeResponse> getAllEmployees();
    GenericEmployeeResponse getEmployeeById(Long employeeId) throws ResourceNotFoundException;

    GenericEmployeeResponse createNewEmployee(NewEmployeeRequest employee);

    GenericEmployeeResponse updateEmployee(Long employeeId, UpdateEmployeeRequest employeeDetails) throws ResourceNotFoundException;

    Map<String, Boolean> deleteEmployee(Long employeeId) throws ResourceNotFoundException;


}
