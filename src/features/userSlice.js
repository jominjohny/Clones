import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    verification:false
  },
  reducers: {
    login: (state , action) => {

      state.user = action.payload;
    },
    logout:(state) =>{
      state.user =null;
    },
    verification:(state , action) =>{
      state.verification=action.payload;
    }
    
  },
});

export const { login , logout, verification} = userSlice.actions;

export const selectUser= state => state.user.user;
export const selectVerification = state=> state.user.verification;

export default userSlice.reducer;
