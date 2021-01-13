package com.vaadin.tutorial.data.service;

import com.vaadin.tutorial.data.entity.ListItem;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ListItemRepository extends JpaRepository<ListItem, Integer> {

}
