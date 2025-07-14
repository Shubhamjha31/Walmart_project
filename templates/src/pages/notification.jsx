import React from 'react';
import '../styles/notification.css';
import { Bell, TrendingUp, AlertCircle, Truck } from 'lucide-react';

export default function Notification() {
    const notifications = [
    {
      icon: <TrendingUp size={28} />,
      title: 'Trending Product',
      message: 'Product ID 4582 (Wireless Mouse) is seeing a 35% rise in orders!',
      color: '#e0f7fa',
      borderColor: '#00acc1'
    },
    {
      icon: <AlertCircle size={28} />,
      title: 'Low Stock Alert',
      message: 'Shelf A3 is running low on Sanitizers. Only 12 units left.',
      color: '#fff3e0',
      borderColor: '#ff9800'
    },
    {
      icon: <Truck size={28} />,
      title: 'Incoming Pallet',
      message: 'Pallet #A4 has been dispatched from Supplier X and will arrive in 2 hrs.',
      color: '#e8f5e9',
      borderColor: '#4caf50'
    },
    {
      icon: <Bell size={28} />,
      title: 'System Update',
      message: 'Dashboard analytics module updated with new AI predictions.',
      color: '#f3e5f5',
      borderColor: '#ab47bc'
    },
    {
      icon: <AlertCircle size={28} />,
      title: 'Temperature Fluctuation',
      message: 'Cold storage Room B2 has dropped below optimal temperature threshold.',
      color: '#fbe9e7',
      borderColor: '#ff7043'
    },
    {
      icon: <Truck size={28} />,
      title: 'Delayed Delivery',
      message: 'Pallet #Z7 from Supplier Y has been delayed due to traffic conditions.',
      color: '#fff8e1',
      borderColor: '#fbc02d'
    }

  ];

  return (
    <div className="notification-wrapper">
      <h2 className="notification-heading">Notifications</h2>
      <div className="notification-grid">
        {notifications.map((item, idx) => (
          <div
            key={idx}
            className="notification-card"
            style={{ backgroundColor: item.color, borderLeft: `5px solid ${item.borderColor}` }}
          >
            <div className="notification-icon">{item.icon}</div>
            <div className="notification-content">
              <h4>{item.title}</h4>
              <p>{item.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}