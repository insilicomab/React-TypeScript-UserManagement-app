import { useCallback, useState } from "react";

import { User } from "../types/api/user";

type Props = {
  id: number;
  users: Array<User>;
};

export const useSelectUser = () => {
  const [selectedUser, setSelectedUser] = useState<User | undefined>("");

  const onSelectUser = useCallback((props: Props) => {
    const { id, users } = props;
    const targetUser = users.find((user) => user.id === id); // findは条件に一致する最初の要素を返すメソッド
    setSelectedUser(targetUser!);
  }, []);

  return { onSelectUser, selectedUser };
};
