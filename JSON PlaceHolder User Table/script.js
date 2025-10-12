const tableBody = document.getElementById("tableBody");
const selectAll = document.getElementById("selectAll");

fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(users => {
    tableBody.innerHTML = users.map(user => `
      <tr>
        <td><input type="checkbox" class="row-check"></td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.company.name}</td>
        <td>
          <select>
            <option>Admin</option>
            <option>Editor</option>
            <option>Viewer</option>
          </select>
        </td>
        <td><span class="delete-icon">🗑️</span></td>
      </tr>
    `).join("");

    document.querySelectorAll(".delete-icon").forEach(icon => {
      icon.addEventListener("click", (e) => {
        e.target.closest("tr").remove();
      });
    });
  })
  
  .catch(() => {
    tableBody.innerHTML = `<tr><td colspan="6" style="text-align:center;">Failed to load users 😞</td></tr>`;
  });

selectAll.addEventListener("change", (e) => {
  document.querySelectorAll(".row-check").forEach(cb => {
    cb.checked = e.target.checked;
  });
});