import { FirebaseProjects } from "@/middleware/database";

const projectsDb = () => {
  const add = projectInfo => {
    return FirebaseProjects.add({
      name: projectInfo.name,
      billable: false,
      status: "active",
      dueOn: new Date(),
      createdBy: projectInfo.createdBy
    });
  };

  const update = (projectId, projectInfo) => {
    return FirebaseProjects.doc(projectId).update(projectItem(projectInfo));
  };

  const findOne = projectId => {
    return FirebaseProjects.doc(projectId).get();
  };

  const findAll = companyId => {
    return FirebaseProjects.where("companyId", "==", companyId).orderBy("name");
  };

  const projectItem = projectInfo => {
    return {
      name: projectInfo.name,
      status: projectInfo.status || "active",
      dueDate: projectInfo.dueDate || "",
      billable: projectInfo.billable || false
    };
  };

  return Object.freeze({
    add,
    update,
    findOne,
    findAll
  });
};

const Projects = projectsDb();

export { Projects };
