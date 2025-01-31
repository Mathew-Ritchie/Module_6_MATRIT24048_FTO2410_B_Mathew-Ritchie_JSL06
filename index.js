const menu = {
  Starters: ["Garlic Bread", "Bruschetta"],
  MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
  Desserts: ["Tiramisu", "Cheesecake"],
};

// THis is the functions that will take the courses and meal items from the
// menu object and add them to the menu.
function displayMenuItems(menu) {
  const menuContainer = document.getElementById("menu");

  // This loop in is used to loop through the menu categories and display them
  // in the menu sections. Within the loop we also to the necessary dom manipulation
  // to create h3 html elelments, add their text, and append them to the html.
  for (let category in menu) {
    const menuCourse = document.createElement("h3");
    menuCourse.textContent = `${category}`;
    menuContainer.appendChild(menuCourse);
    const menuItemsUl = document.createElement("ul");
    menuContainer.appendChild(menuItemsUl);

    // Here we have used a forEach loop to iterate over the specific meal items in
    // their arrays and add them to the html. We have an event listener which targest
    // the list elements and adds them to the order element.
    menu[category].forEach((meal) => {
      const menuItemsLi = document.createElement("li");
      menuContainer.appendChild(menuItemsUl);
      menuItemsLi.textContent = meal;
      menuItemsLi.addEventListener("click", () => addToOrder(meal));
      menuItemsLi.addEventListener("mouseover", () => (menuItemsLi.style.color = "red"));
      menuItemsLi.addEventListener("mouseout", () => (menuItemsLi.style.color = "black"));
      menuItemsUl.appendChild(menuItemsLi);
    });
  }
  //console.log(menu);
}
// Callback function is added to run the above function.
// this Callback is commented out as the function is now returned in the initMenu System function.
//displayMenuItems(menu);
// currentTotal variable is outside the scope of the function so that
// it doesn't reset to 0 everytime the addToOrder function is called.
let currentTotal = 0;

// Function that gets the order-items and order total elements from the html,
// creates the li html and adds the text and appends it to the order items.
function addToOrder(itemName) {
  const orderItems = document.getElementById("order-items");
  const orderTotal = document.getElementById("order-total");
  const orderListItem = document.createElement("li");
  orderListItem.textContent = itemName;
  orderItems.appendChild(orderListItem);

  //Function to work out the total cost of the order. as mentioned the current
  //total variable is outside of the parent function.
  function costTotal() {
    currentTotal += 90;
    return currentTotal;
  }
  const newTotal = costTotal();
  // Update the text content of the order total element with the new total
  orderTotal.textContent = `${newTotal}`;
}

// Function to initialize the menu system
function initMenuSystem(menu) {
  displayMenuItems(menu);
  // Call the function to display menu items
}

// Start the menu system by calling the init function
initMenuSystem(menu);
