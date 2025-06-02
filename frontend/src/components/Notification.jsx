import React from 'react';

const Notification = ({ status }) => {
  if (!status) return null;

  const isSuccess = status === 'hit';

  return (
    <div
      className={`alert ${isSuccess ? 'alert-success' : 'alert-danger'} mt-3 text-center fw-bold`}
      role="alert"
    >
      {isSuccess
        ? '✅ Direct Hit! The meteor was destroyed!'
        : '❌ Missed shot. Try again!'}
    </div>
  );
};

export default Notification;
