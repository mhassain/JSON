$(document).ready(function() {
  $("#data-table").DataTable({
    ajax: "employee.json",
    columns: [{ data: "name" }, { data: "gender" }, { data: "designation" }]
  });
});
