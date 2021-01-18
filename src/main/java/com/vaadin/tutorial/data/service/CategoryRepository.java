package com.vaadin.tutorial.data.service;

import com.vaadin.tutorial.data.entity.Category;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Integer> {

}
