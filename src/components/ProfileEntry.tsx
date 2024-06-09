import type { User } from "./user/User";
import { UserAvatar } from "./user/UserAvatar";

export const ProfileEntry = ({ user }: { user: User }) => {
  return (
    <div className="flex flex-row gap-2 items-center w-full">
      <UserAvatar user={user} />
      <p className="font-bold truncate min-w-fit">{user.name}</p>
      <p className="font-light truncate">(@{user.handle})</p>
    </div>
  );
};