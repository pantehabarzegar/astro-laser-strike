 import React, { useEffect, useState } from 'react';

const Notification = ({ status }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (status) {
      setVisible(true);

      const timer = setTimeout(() => {
        setVisible(false);
      }, 3000); // ⏱️ بعد از 3 ثانیه پیام ناپدید میشه

      return () => clearTimeout(timer); // جلوگیری از حافظه‌ی اضافه
    }
  }, [status]);

  if (!visible) return null;

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
