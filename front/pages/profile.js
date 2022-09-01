import React from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";

const Profile = () => {
  const followerList = [
    { nickname: "베토벤" },
    { nickname: "퀴리" },
    { nickname: "쇼팽" },
  ];
  const followingList = [
    { nickname: "베토벤" },
    { nickname: "퀴리" },
    { nickname: "쇼팽" },
  ];

  return (
    <>
      <Head>
        <title>내 프로필\nextjs sns</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followerList} />
        <FollowList header="팔로워 목록" data={followingList} />
      </AppLayout>
    </>
  );
};

export default Profile;
