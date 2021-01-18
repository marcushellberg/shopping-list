package com.vaadin.tutorial.data.entity;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import com.vaadin.tutorial.data.AbstractEntity;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class ListItem extends AbstractEntity {
  @Min(1)
  private int quantity;
  @NotBlank
  private String name;
  @ManyToOne
  @NotNull
  private Category category;
}
