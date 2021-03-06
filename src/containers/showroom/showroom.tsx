import React from 'react';
import ShowroomCard from 'src/containers/showroom/showroom-card';
import GlobalHeader from 'src/components/global-header';

function Showroom() {
  return (
    <>
      <GlobalHeader title="Show Room" />
      <main className="full-layout flex-col ">
        <ShowroomCard title="123" />
      </main>
    </>
  );
}

export default Showroom;
