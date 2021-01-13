package com.vaadin.tutorial.data.entity;

import javax.persistence.Entity;

import com.vaadin.tutorial.data.AbstractEntity;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Category extends AbstractEntity {
  private String name;
}
