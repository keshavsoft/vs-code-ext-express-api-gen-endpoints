# README.md — vs-code-ext-express-api-gen-endpoints 🚀

# vs-code-ext-express-api-gen-endpoints 🚀

VS Code extension for automatically generating Express.js endpoint folders and table-based API structures.

Create endpoint folders, configure table names, and generate `end-points.js` files directly from the VS Code Title Bar.

---

# ✨ Overview

**vs-code-ext-express-api-gen-endpoints** is a Visual Studio Code extension developed by **KeshavSoft** to simplify Express.js endpoint generation.

The extension helps developers rapidly create:

* Table-based endpoint folders
* `end-points.js` files
* Config table entries
* Express.js modular API structure

with minimal manual setup.

---

# 🎯 Main Purpose

When clicking:

```bash
AddTableName
```

the extension:

* Opens popup input
* Asks for table name
* Creates folder using table name
* Creates `end-points.js`
* Configures table inside endpoint file

---

# ⚡ Features

✅ Create endpoint folders automatically
✅ Generate `end-points.js`
✅ Configure table name automatically
✅ Faster backend initialization
✅ Modular Express.js architecture
✅ VS Code Title Bar integration
✅ Beginner-friendly workflow

---

# 🛠️ Workflow

## Step 1

Click:

```bash
AddTableName
```

from VS Code Title Bar.

---

## Step 2

Enter table name.

Example:

```bash
Customers
```

---

## Step 3

Extension automatically creates:

```bash
Customers/
└── end-points.js
```

---

# 🚀 Generated Example

```js
const TableName = "Customers";
```

---

# 📁 Folder Structure

```bash
vs-code-ext-express-api-gen-endpoints
│
├── .vscode
├── archive
├── Docs
├── src
├── test
│
├── extension.js
├── package.json
├── README.md
└── CHANGELOG.md
```

---

# 💡 Why Use This Extension?

* Save backend setup time
* Quickly create endpoint structure
* Standardize API architecture
* Reduce repetitive coding
* Improve developer productivity

---

# 🧠 Built With

* Node.js
* Express.js
* JavaScript
* VS Code Extension API

---

# 👨‍💻 Author

Developed by **KeshavSoft**
