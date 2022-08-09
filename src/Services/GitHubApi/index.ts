import axios from "axios";
import { IUser } from "./../../Interfaces/User.interface";

const GitHubApi = (): Promise<IUser> =>
  axios.get("https://api.github.com/users/dubcom").then((res) => {
    console.log(res.data);
    return res.data;
  });

export default GitHubApi;
