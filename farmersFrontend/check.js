import React from "react";

import TablePagination from "@material-ui/core/TablePagination";

export default function SimpleTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [employees, setEmployees] = React.useState("");
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    const res = fetch(
      `http://localhost:3030/admin/employee/?limit=${rowsPerPage}&page=${page}`
    );
    res
      .json()
      .then((data) => {
        setEmployees(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, employees.length - page * rowsPerPage);

  {
  }
  return (
    <div className="firstDiv">
      <table>
        <tr id="header">
          <th>ID</th>
          <th>Employee name</th>
          <th>Department</th>
          <th>Designation</th>
          <th>Contact number</th>
          <th>Email ID</th>
          <th>Action</th>
        </tr>

        <tr>
          <td>001 </td>
          <td>John Doe </td>
          <td>Design </td>
          <td>Intern </td>
          <td>7548959635 </td>
          <td>johndoe@yahoo.com </td>
          <td>
            <button className="actionButton"> </button>
            <button className="actionButton"> </button>
          </td>
        </tr>
        {employees.map((employee, index) => (
          <tr>
            <td>{employee.employeeSerialId} </td>
            <td>{`${firstName} + ${lastName}`} </td>
            <td>{employee.department} </td>
            <td>{employee.designation} </td>
            <td>{employee.contactNumbers.personal} </td>
            <td>{employee.userAuth.email}</td>
          </tr>
        ))}
        {emptyRows > 0 && (
          <tr style={{ height: 53 * emptyRows }}>
            <td colSpan={6} />
          </tr>
        )}
        {/* <tr>
          <td>002 </td>
          <td>John Doe </td>
          <td>Design </td>
          <td>Intern </td>
          <td>7548959635 </td>
          <td>johndoe@yahoo.com </td>
          <td>
            <button className="actionButton"> </button>
            <button className="actionButton"> </button>
          </td>
        </tr>
        <tr>
          <td>003 </td>
          <td>John Doe </td>
          <td>Design </td>
          <td>Intern </td>
          <td>7548959635 </td>
          <td>johndoe@yahoo.com </td>
          <td>
            <button className="actionButton"> </button>
            <button className="actionButton"> </button>
          </td>
        </tr>
        <tr>
          <td>004 </td>
          <td>John Doe </td>
          <td>Design </td>
          <td>Intern </td>
          <td>7548959635 </td>
          <td>johndoe@yahoo.com </td>
          <td>
            <button className="actionButton"> </button>
            <button className="actionButton"> </button>
          </td>
        </tr>
        <tr>
          <td>005 </td>
          <td>John Doe </td>
          <td>Design </td>
          <td>Intern </td>
          <td>7548959635 </td>
          <td>johndoe@yahoo.com </td>
          <td>
            <button className="actionButton"> </button>
            <button className="actionButton"> </button>
          </td>
        </tr>
        <tr>
          <td>006 </td>
          <td>John Doe </td>
          <td>Design </td>
          <td>Intern </td>
          <td>7548959635 </td>
          <td>johndoe@yahoo.com </td>
          <td>
            <button className="actionButton"> </button>
            <button className="actionButton"> </button>
          </td>
        </tr> */}
      </table>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={employees.totalCount}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </div>
  );
}
