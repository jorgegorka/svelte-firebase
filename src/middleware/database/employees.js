import { FirebaseEmployees } from "./index";

const employeesDb = () => {
  const add = employeeInfo => {
    return FirebaseEmployees.add({
      name: employeeInfo.name,
      email: employeeInfo.email,
      teamId: employeeInfo.teamId,
      teamName: employeeInfo.teamName,
      status: "active",
      createdBy: employeeInfo.createdBy
    });
  };

  const update = (employeeId, employeeInfo) => {
    return FirebaseEmployees.doc(employeeId).update(employeeItem(employeeInfo));
  };

  const findOne = employeeId => {
    return FirebaseEmployees.doc(employeeId).get();
  };

  const findByUserId = userId => {
    return FirebaseEmployees.where("userId", "==", userId).get();
  };

  const findAll = companyId => {
    return FirebaseEmployees.where("companyId", "==", companyId).orderBy(
      "name"
    );
  };

  const employeeItem = employeeInfo => {
    return {
      name: employeeInfo.name,
      email: employeeInfo.email,
      status: employeeInfo.status || "active",
      teamId: employeeInfo.teamId,
      teamName: employeeInfo.teamName
    };
  };

  return Object.freeze({
    add,
    update,
    findOne,
    findAll,
    findByUserId
  });
};

const Employees = employeesDb();

export { Employees };
