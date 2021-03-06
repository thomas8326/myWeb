import React from 'react';
import Avatar from 'src/components/avatar';

function ShowroomCard(props: { title: string }) {
  const { title } = props;

  return (
    <div className="flex-row padding-m shadow-card">
      <Avatar />
      <div>
        <image />
        {title}
      </div>
    </div>
  );
}

export default ShowroomCard;
