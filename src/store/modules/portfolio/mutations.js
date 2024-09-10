export default {
  homePortfoliosData(state, payload) {
    state.projectsData = payload;
  },
  fetchProjectData(state, payload) {
    state.singleProjectsData.push(payload);
  },
};
