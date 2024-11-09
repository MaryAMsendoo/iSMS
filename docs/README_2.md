# Project Structure and Guidelines

Welcome to the **Smart Inventory And Sales Management System** project! Please follow the guidelines below to maintain consistency and efficiency across the team.

## Folder Structure

### 1. **api/**
- **Purpose:** All backend server-side code goes here.
- Add all PHP scripts, API endpoints, or any server-related logic in this folder.

### 2. **assets/**
- **Purpose:** Store all frontend-related assets here.
- **Subfolders:**
  - **css/**: Stylesheets (CSS files)
  - **js/**: JavaScript files
  - **images/**: All images and media files

### 3. **classes/**
- **Purpose:** Contains all PHP classes and libraries.
- Use the **`ConnectionPool.php`** class provided for efficient database connections.

### 4. **docs/**
- **Purpose:** Place all documentation or `README` files here for reference.

### 5. **sql/**
- **Purpose:** Store all database exports, schemas, or SQL scripts here for easy access.

### 6. **index.php**
- The main entry point of the application.

---

## Guidelines
1. **API Development:**  
   - All server-side logic, including authentication or data fetching, belongs under `api/`.

2. **Frontend Assets:**  
   - Organize styles, scripts, and images inside the appropriate subfolders in `assets/`.

3. **PHP Classes:**  
   - Use `classes/` for reusable code or libraries.
   - Leverage `ConnectionPool.php` for handling database connections.

4. **Database Handling:**  
   - Ensure any exported database structures or migrations are added under `sql/`.

5. **Documentation:**  
   - Any new documentation, changelogs, or additional instructions must be placed inside `docs/`.

---

By following this structure, we’ll maintain clarity and streamline our development process. Thank you!
