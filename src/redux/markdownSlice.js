import { createSlice } from "@reduxjs/toolkit";

const help = `
Heading
=======

Sub-heading
-----------

### Another deeper heading

Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a
line break

Text attributes *italic*, **bold**,

\`monospace\`, ~~strikethrough~~ .

Shopping list:

  * apples
  * oranges
  * pears
  
Numbered list:

  1. apples
  2. oranges
  3. pears

The rain---not the reign---in
Spain.

*[Herman Fassett](https://freecodecamp.com/hermanfassett)*
`;

export const markdownSlice = createSlice({
  name: "markdown",
  initialState: {
    isClicked:false,
    input:"",
    initialInput:help,
  },
  reducers: {
    getText: (state, action) => {
      state.input = action.payload;
    },

    getClicked: (state, action) => {
      state.isClicked = action.payload;
    },
  },
});
export const { getText, getClicked } = markdownSlice.actions;
export const input = (state) =>state.markdown.input;
export const isClicked = (state) =>state.markdown.isClicked;
export const initialInput = (state) =>state.markdown.initialInput;
export default markdownSlice.reducer;
