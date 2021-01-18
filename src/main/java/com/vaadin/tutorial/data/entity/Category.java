package com.vaadin.tutorial.data.entity;

import javax.persistence.Entity;

import com.vaadin.tutorial.data.AbstractEntity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Category extends AbstractEntity {
  private String name;
}
