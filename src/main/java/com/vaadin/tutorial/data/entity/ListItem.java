package com.vaadin.tutorial.data.entity;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;

import com.vaadin.tutorial.data.AbstractEntity;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class ListItem extends AbstractEntity {
  private int quantity = 1;
  private String name;
  @ManyToOne
  private Category category;
}
