import React from 'react';
import GlobalHeader from 'src/components/global-header';
import Calendar from 'src/containers/calendar/calendar-board';

function Showroom() {
  return (
    <>
      <GlobalHeader title="Show Room" />
      <main className="full-layout flex-col ">
        <Calendar />
      </main>
    </>
  );
}

export default Showroom;
