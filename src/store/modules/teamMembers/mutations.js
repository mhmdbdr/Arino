export default {
  fetchTeammembersData(state, payload) {
    state.teamData = payload;
  },
  fetchTeammemberData(state, payload) {
    state.teamData.push(payload);
  },
  setImgsUrls(state, payload) {
    state.teamImgsUrls = payload;
  },
};
