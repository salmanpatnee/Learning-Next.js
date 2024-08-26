import React from "react";

interface Props {
  params: {
    id: number;
    photoid: number;
  };
}

const UserPhotoDetail = ({ params: { id, photoid } }: Props) => {
  return (
    <>
      <div>User ID: {id}</div>
      <div>Photo ID: {photoid}</div>
    </>
  );
};

export default UserPhotoDetail;
