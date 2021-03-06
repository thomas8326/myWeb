import React from 'react';

// TODO: Timezone and area
export default function Hint() {
  return (
    <div className="hint fontSize-s">
      <div className="hintText">{/* *<FormattedMessage id='timeZoneHint' />: */}</div>
      <div className="timezone">{/* <FormattedMessage id='taipei' /> (GMT+08:00) */}</div>
    </div>
  );
}
