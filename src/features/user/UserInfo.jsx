import { useSelector } from "react-redux";
import { selectUser } from "./userSliceSelectors";
import { useGetUser } from "./userAPI";
import "@/app/App.css";
import UserString from "@/shared/UI/UserString";

export default function UserInfo() {
  useGetUser();
  const user = useSelector(selectUser);

  return (
    <UserString>
      {user ? <span>Привет, {user.name}!</span> : <span>Загрузка...</span>}
    </UserString>
  );
}
