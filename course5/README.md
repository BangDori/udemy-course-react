## course5 Simple Component Diagram

```
App
  ├ cartIsShown && Cart
    ├ Modal
    └ CartItem
     
  ├ Header
    └ HeaderCartButton
      └ CartIcon
  └ Meals
    ├ MealsSummary
    └ AvailableMeals
      ├ MealItem
      └ MealItemForm
UI
  ├ Card
  ├ Input
  └ Modal
  
store
  ├ cart-context
  └ CartProvider
```
