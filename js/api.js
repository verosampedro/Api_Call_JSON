export class UserApp {
    constructor() {
      this.apiUrl = "https://jsonplaceholder.typicode.com/users";
      this.users = [];
      this.init();
    }
  
    async fetchData() {
      try {
        const response = await fetch(this.apiUrl);
        this.users = await response.json();
        this.displayUsersTable();
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  
    displayUsersTable() {
      const tableBody = document.querySelector("#userTable tbody");
      tableBody.innerHTML = "";
  
      this.users.forEach((user) => {
        const row = tableBody.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        cell1.textContent = user.id;
        cell2.textContent = user.name;
        cell3.textContent = user.address.city;
      });
    }
  
    async fetchUserById(userId) {
      try {
        const response = await fetch(`${this.apiUrl}/${userId}`);
        const user = await response.json();
        this.displayUserDetails(user);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
  
    displayUserDetails(user) {
      const userDetailsTable = document.getElementById("userDetailsTable");
      const userDetailsBody = document.getElementById("userDetailsBody");
  
      userDetailsBody.innerHTML = "";
  
      const row = userDetailsBody.insertRow();
      const cell1 = row.insertCell(0);
      const cell2 = row.insertCell(1);
      const cell3 = row.insertCell(2);
      const cell4 = row.insertCell(3);
      const cell5 = row.insertCell(4);
      const cell6 = row.insertCell(5);
  
      cell1.textContent = user.id;
      cell2.textContent = user.name;
      cell3.textContent = user.username;
      cell4.textContent = user.email;
      cell5.textContent = user.phone;
      cell6.textContent = `${user.address.street}, ${user.address.city}`;
  
      userDetailsTable.style.display = "table";
  
      console.log(`Usuario solicitado: ${user.name}, Teléfono: ${user.phone}`);
    }
  
    init() {
      this.fetchData();
    }
  }