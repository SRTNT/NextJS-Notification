"use client";

import { useState, useEffect } from 'react';

export type NotificationTypeData = {
  type: 'info' | 'warning' | 'error';
  message: string;
  title: string;
}

let addNotification: (data: NotificationTypeData) => void;

export default function Notification() {
  const [notifications, setNotifications] = useState<{ id: number; data: NotificationTypeData }[]>([]);

  useEffect(() => {
    addNotification = (data: NotificationTypeData) => {
      const id = Date.now();
      setNotifications((prev) => [{ id, data }, ...prev]);
      setTimeout(() => {
        setNotifications((prev) => prev.filter((notification) => notification.id !== id));
      }, 4000);
    };
  }, []);

  return (
    <div className="fixed top-0 right-0 m-4 space-y-2">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`p-4 rounded shadow-lg ${notification.data.type === 'info'
            ? 'bg-blue-500'
            : notification.data.type === 'warning'
              ? 'bg-yellow-500'
              : 'bg-red-500'
            } text-white`}
        >
          {notification.data.message}
        </div>
      ))}
    </div>
  );
}

export { addNotification };
