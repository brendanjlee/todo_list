import { Project } from "../models/Project";

const ProjectController = () => {
  // create project and store in local
  function createProject(projectName) {
    let project = Project(projectName);
    window.localStorage.setItem(project.projId, JSON.stringify(project));
  }

  function deleteProject(projId) {
    window.localStorage.removeItem(projId);
  }

  return {
    createProject,
    deleteProject
  }
}

export { ProjectController };