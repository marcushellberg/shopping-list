package com.vaadin.tutorial.data.endpoint;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import javax.annotation.PostConstruct;

import com.vaadin.flow.server.connect.Endpoint;
import com.vaadin.flow.server.connect.auth.AnonymousAllowed;
import com.vaadin.tutorial.data.entity.Category;
import com.vaadin.tutorial.data.entity.ListItem;
import com.vaadin.tutorial.data.service.CategoryRepository;
import com.vaadin.tutorial.data.service.ListItemRepository;

import lombok.RequiredArgsConstructor;

@Endpoint
@AnonymousAllowed
@RequiredArgsConstructor
public class ShoppingListEndpoint {
  private final ListItemRepository listRepo;
  private final CategoryRepository categoryRepo;

  public List<ListItem> getShoppingList() {
    return listRepo.findAll();
  }

  public ListItem saveListItem(ListItem listItem) {
    return listRepo.save(listItem);
  }

  public List<Category> getCategories() {
    return categoryRepo.findAll();
  }

  @PostConstruct
  public void init() {
    if (categoryRepo.count() == 0) {
      categoryRepo.saveAll(Stream
          .of("Produce", "Deli", "Bakery", "Meat & Seafood", "Dairy, Cheese & Eggs", "Breakfast", "Coffee & Tea",
              "Nut Butters, Honey & Jam", "Baking & Spices", "Rice, Grains & Beans", "Canned & Jarred Goods",
              "Pasta & Sauces", "Oils, Sauces & Condiments", "International", "Frozen", "Snacks",
              "Nuts, Seeds & Dried Fruit", "Candy", "Beverages", "Wine, Beer & Spirits", "Personal Care", "Health",
              "Baby", "Household", "Kitchen", "Cleaning Products", "Pet Care", "Party", "Floral", "Other")
          .map(Category::new).collect(Collectors.toList()));
    }
  }

}
