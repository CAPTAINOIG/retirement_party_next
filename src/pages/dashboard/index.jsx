import React from 'react';
import requireAuth from "@/guards/require-auth.js";

const Dashboard = () => {
  return (
    <div className="bg-slate-50 h-screen w-full p-10">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, aperiam cupiditate delectus, dignissimos ea,
      eum excepturi expedita harum illum ipsam maiores mollitia nihil quis quisquam sapiente sit tempore ut voluptates.
    </div>
  );
};

export default requireAuth(Dashboard);
