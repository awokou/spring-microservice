package com.service.school.service.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.server.common.lib.entity.Teacher;

public interface TeacherRepository extends JpaRepository<Teacher, Integer> {

}
