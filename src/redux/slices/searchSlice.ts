import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { JOB_STATUS } from "@/src/constants";

interface SearchState {
  searchTerm: string;
  selectedStatus: string;
}

const INITIAL_STATE: SearchState = {
  searchTerm: "",
  selectedStatus: JOB_STATUS.ALL,
};

const searchSlice = createSlice({
  name: "search",
  initialState: INITIAL_STATE,
  reducers: {
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
    setSelectedStatus(state, action: PayloadAction<string>) {
      state.selectedStatus = action.payload;
    },
    resetSearch(state) {
      state.searchTerm = "";
      state.selectedStatus = JOB_STATUS.ALL;
    },
  },
});

export const { setSearchTerm, setSelectedStatus, resetSearch } =
  searchSlice.actions;
export default searchSlice.reducer;
