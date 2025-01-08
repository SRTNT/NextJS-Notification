"use client";

import { useState, useEffect } from 'react';

export type NotificationTypeData = {
  type: 'info' | 'warning' | 'error';
  message: string;
  title: string;
}

let addNotification: (data: NotificationTypeData) => void;
const timeout = 4000;

export default function Notification() {
  const [notifications, setNotifications] = useState<{ id: number; data: NotificationTypeData; remainingTime: number }[]>([]);

  useEffect(() => {
    addNotification = (data: NotificationTypeData) => {
      const id = Date.now();
      setNotifications((prev) => [{ id, data, remainingTime: timeout }, ...prev]);
      setTimeout(() => {
        setNotifications((prev) => prev.filter((notification) => notification.id !== id));
      }, timeout);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setNotifications((prev) =>
        prev.map((notification) => ({
          ...notification,
          remainingTime: Math.max(notification.remainingTime - 75, 0),
        }))
      );
    }, 75);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 right-0 m-4 space-y-2">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`rounded transition-all duration-500 shadow-lg ${notification.data.type === 'info'
            ? 'bg-blue-500'
            : notification.data.type === 'warning'
              ? 'bg-yellow-500'
              : 'bg-red-500'
            } text-white relative overflow-hidden`}
        >
          <div className='bg-white/50 p-1 pr-3 text-black'>
            {/* Icon */}
            {notification.data.title}
            {/* Exit Icon */}
          </div>
          <div className='p-4 pr-2'>
            {notification.data.message}
          </div>
          <div
            className="absolute rounded-lg bottom-0 left-0 h-1 bg-white transition-all duration-200"
            style={{ width: `${(notification.remainingTime / timeout) * 100}%`, opacity: `${(notification.remainingTime / timeout) * 100 + 30}%` }}
          ></div>
        </div>
      ))}
    </div>
  );
}

export { addNotification };