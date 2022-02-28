import { createSlice } from '@reduxjs/toolkit'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../../../firebase';


const initialState = {
  user:null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoggin: (state,actions) => {
      state.user = actions.payload
    },
    setLoggout: (state) => {
        state.user = null
    },
  },
})

// Action creators are generated for each case reducer function
export const { setLoggin,setLoggout } = authSlice.actions

export default authSlice.reducer