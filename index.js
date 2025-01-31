// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
  Starters: ["Garlic Bread", "Bruschetta"],
  MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
  Desserts: ["Tiramisu", "Cheesecake"],
};

// Function to display menu items by category
function displayMenuItems(menu) {
  // Get the menu container element from the HTML
  const menuContainer = document.getElementById("menu");
  // Loop through each category and its items in the menu object
  for (let category in menu) {
    // Create an element to represent the category
    const menuCourse = document.createElement("h2");
    // Set the text content of the category element to the category name
    menuCourse.textContent = `${category}`;
    // Append the category element to the menu container
    menuContainer.appendChild(menuCourse);
    // Create an element to represent a list of items
    const menuItemsUl = document.createElement("ul");
    // Append a list of items element to the menu container
    menuContainer.appendChild(menuItemsUl);
    // Loop through the items in the category and create list items
    //for (let meal in menu[category]) {
    //Object.entries(menu).forEach(([course, meals]) => {
    //meals.forEach((meal) => {
    menu[category].forEach((meal) => {
      // Append the category element to the menu container
      const menuItemsLi = document.createElement("li");
      // Append the category element to the menu container
      menuContainer.appendChild(menuItemsUl);
      // Set the text content of the list item element to the item name
      menuItemsLi.textContent = meal;
      // Attach a click event listener to the list item to add it to the order
      //menuItemsLi.addEventListener("click");
      // Append the list item to the list of items
      menuItemsUl.appendChild(menuItemsLi);
    });
  }

  console.log(menu);
}

displayMenuItems(menu);
// Callback function for adding an item to the order
function addToOrder(itemName) {
  // Get the order items list and the order total element from the HTML
  // Create a list item for the order
  // Set the text content of the list item to the item name
  // Append the list item to the order items list
  // Calculate and update the total price
  // Update the text content of the order total element with the new total
}

// Function to initialize the menu system
function initMenuSystem(menu) {
  // Call the function to display menu items
}

// Start the menu system by calling the init function
initMenuSystem(menu);
