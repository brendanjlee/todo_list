const ProjectView = () =>  {
  function createProjectElement(project) {
    const projectBtn = document.createElement('button');
    projectBtn.classList.add('projectBtn');
    projectBtn.setAttribute('id', project.projId);
    projectBtn.innerHTML = project.projName;

    return projectBtn;
  }

  return {
    createProjectElement
  }
}

export { ProjectView };