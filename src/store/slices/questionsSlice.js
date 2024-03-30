import { createSlice } from '@reduxjs/toolkit'

const initialStateValues = {
  questions: [],
}

export const questionSlice = createSlice({
  name: 'question',
  initialState: initialStateValues,
  reducers: {
    setQuestionsState: (state, action) => {
      state.questions = action.payload
    },
  },
})

export const { setQuestionsState } = questionSlice.actions

export default questionSlice.reducer