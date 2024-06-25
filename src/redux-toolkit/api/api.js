import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL, GET_USER } from "../constant";

export let get_user = createAsyncThunk("getUser", async (action) => {
  let { data } = await axios.get(BASE_URL + GET_USER);
  return data;
});

export let post_user = createAsyncThunk("postUser", async (action) => {
  console.log(action);

  let { data } = await axios.post(BASE_URL + GET_USER, action);
  return data;
});
