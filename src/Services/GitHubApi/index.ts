import { IUser } from "./../../Interfaces/User.interface";
import axios from "axios";

const GitHubApi = (): Promise<IUser> =>
  axios.get("https://api.github.com/users/dubcom").then((res) => {
    console.log(res.data);
    return res.data;
  });

export default GitHubApi;
