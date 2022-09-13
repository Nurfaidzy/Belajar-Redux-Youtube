const hitung = {
  nilai: 0,
};

const IniSireducer = (state = hitung, action) => {
  switch (action.type) {
    case "TAMBAH_BOSS":
      return {
        ...state,
        nilai: state.nilai + 1,
      };
    case "KURANG_BOSS":
      return {
        ...state,
        nilai: state.nilai === 0 ? state.nilai - 0 : state.nilai - 1,
      };
    default:
      return state;
  }
};

export default IniSireducer;
