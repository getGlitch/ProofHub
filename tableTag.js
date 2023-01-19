var employees = [
  {
    first_name: "Amit",
    last_name: "Sharma",
    department: "SEO",
  },
  {
    first_name: "Vineet",
    last_name: "Kumar",
    department: "Accounts",
  },
  {
    first_name: "Ajay",
    last_name: "Thakur",
    department: "QA",
  },
  {
    first_name: "Chandra",
    last_name: "Sharma",
    department: "Designer",
  },
];

var html = "<table border='1|1'>";
for (var i = 0; i < employees.length; i++) {
  html += "<tr>";
  html += "<td>" + employees[i].first_name + "</td>";
  html += "<td>" + employees[i].last_name + "</td>";
  html += "<td>" + employees[i].department + "</td>";

  html += "</tr>";
}
html += "</table>";
document.write(html);
