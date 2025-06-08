import { User } from "@/state/api";
import Image from "next/image";
import React from "react";

type Props = {
  user: User;
};

const UserCard = ({ user }: Props) => {
  return (
    <div className="flex items-center rounded  p-4 shadow">
      {user.profilePictureUrl && (
        <Image
          src={`https://pm-s3-public-images.s3.ap-south-1.amazonaws.com/p1.jpeg`}
          alt="profile picture"
          width={32}
          height={32}
          className="rounded-full"
        />
      )}
    </div>
  );
};

export default UserCard;
