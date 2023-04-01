import Head from "next/head";
import React from "react";

import AppLayout from "../components/AppLayout";

const Profile = () => {
  return (
    <AppLayout>
      <Head>
        <title>Profile | NodeBird</title>
      </Head>
      <div>Profile</div>
    </AppLayout>
  );
};

export default Profile;
