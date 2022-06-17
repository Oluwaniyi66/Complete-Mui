const KEYS = {
  employees: "employees",
  employeeId: "employeeId",
};

export const getDepartmentCollection = () => [
  {
    id: "1",
    title: "Development",
  },
  {
    id: "2",
    title: "Marketing",
  },
  {
    id: "3",
    title: "Accounting",
  },
  {
    id: "4",
    title: "HR",
  },
];

 export const insertEmployee = (data) =>{
    let employees = getAllEmployees();
    data['MuiId'] = generateEmployeeId()
    employees.push(data)
    localStorage.setItem(KEYS.employees,JSON.stringify(employees))
}

export const generateEmployeeId = () => {
  if (localStorage.getItem(KEYS.employeeId) == null)
    localStorage.setItem(KEYS.employeeId, "0");
  var MuiId = parseInt(localStorage.getItem(KEYS.employeeId));
  localStorage.setItem(KEYS.employeeId, (++MuiId).toString());
  return MuiId;
};

export const getAllEmployees = () => {
  if (localStorage.getItem(KEYS.employees) == null)
    localStorage.setItem(KEYS.employees, JSON.stringify([]));

  let employees = JSON.parse(localStorage.getItem(KEYS.employees));

  console.log('my own employees', employees)
  let departments = getDepartmentCollection();
   return  employees.map((x) => ({

    ...x,
    department: departments[x.departmentId -1].title

  }))
};




