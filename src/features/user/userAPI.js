import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "./userSliceStore";

export function useGetUser() {
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(
        setUser({
          id: 1,
          name: "Иван Иванов",
          email: "ivan@example.com",
        }),
      );
    }, 500);

    return () => clearTimeout(timer);
  }, [dispatch]);
}
