import { makeAutoObservable } from "mobx";
import Category from "./generated/com/vaadin/tutorial/data/entity/Category";
import ListItem from "./generated/com/vaadin/tutorial/data/entity/ListItem";
import {
  getCategories,
  getShoppingList,
  saveListItem,
} from "./generated/ShoppingListEndpoint";

class Store {
  items: ListItem[] = [];
  categories: Category[] = [];

  constructor() {
    makeAutoObservable(this);
    this.initFromServer();
  }

  async initFromServer() {
    this.setItems(await getShoppingList());
    this.setCategories(await getCategories());
  }

  setCategories(categories: Category[]) {
    this.categories = categories;
  }

  setItems(items: ListItem[]) {
    this.items = items;
  }

  async saveItem(item: ListItem) {
    const saved = await saveListItem(item);

    if (item.id) {
      this.setItems(this.items.map((i) => (i.id === saved.id ? saved : i)));
    } else {
      this.setItems([...this.items, saved]);
    }
  }

  get itemsByCategory() {
    const grouped = this.items.reduce(
      (map, item) =>
        map.set(item.category.name, [
          ...(map.get(item.category.name) || []),
          item,
        ]),
      new Map<string, ListItem[]>()
    );

    return Array.from(grouped.entries());
  }

  get countByCategory() {
    return this.itemsByCategory.map(([category, items]) => ({
      name: category,
      y: items.reduce((sum, i) => (sum += i.quantity), 0),
    }));
  }
}

export const store = new Store();
