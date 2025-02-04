import { ProjectModel } from '/src/models/projectModel';
import { todoRepo } from './todoRepo';

class ProjectRepo {
  constructor() {
    this.projects = [];
    this.id = 0;
    this.currentProject = 0;
  }
  createProject(title) {
    if (this.isValid(title)) {
      const project = new ProjectModel(this.id, title);
      this.projects.push(project);
      this.id++;
      return project;
    }
  }
  getProjectID(title) {
    for (const project of this.projects) {
      if (title === project.title) {
        return project.id;
      }
    }
  }
  getProjectItems(id) {
    const projectItems = todoRepo.todos.filter(
      (item) => item.projectID === id && item.complete === false
    );
    return projectItems;
  }
  isValid(title) {
    return title !== '' && this.getProjectID(title) === undefined;
  }
}

const projectRepo = new ProjectRepo();

export { projectRepo };
