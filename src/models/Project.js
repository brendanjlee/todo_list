const Project = (name) => {
  let projName = name;
  let tasks = [];
  const projId = Math.floor(Date.now() * Math.random()) + 1;

  return {
    projName, tasks, projId
  };
};

export { Project };