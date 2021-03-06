import React from 'react';
import ShowroomCard from 'src/containers/showroom/showroom-card';
import GlobalHeader from 'src/components/global-header';
import Calendar from 'src/containers/calendar/calendar-board';

function Showroom() {
  return (
    <>
      <GlobalHeader title="Show Room" />
      <main className="full-layout flex-col ">
        <Calendar />
        <ShowroomCard title="123" />
      </main>
    </>
  );
}

export default Showroom;
