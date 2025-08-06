import React from 'react';
import { AlertTriangle, CheckCircle, Clock, User } from 'lucide-react';

const RecentAlerts: React.FC = () => {
  const alerts = [
    {
      id: 1,
      type: 'danger',
      title: '안전모 미착용 감지',
      location: '정비동 3층',
      user: '박정비',
      time: '2분 전',
      status: 'active'
    },
    {
      id: 2,
      type: 'warning',
      title: '고온 구역 접근',
      location: '1호기 터빈실',
      user: '김기술',
      time: '15분 전',
      status: 'resolved'
    },
    {
      id: 3,
      type: 'info',
      title: '정기 안전점검 완료',
      location: '제어실',
      user: '이안전',
      time: '1시간 전',
      status: 'resolved'
    },
    {
      id: 4,
      type: 'warning',
      title: '비정상 진동 감지',
      location: '냉각탑 A동',
      user: '시스템',
      time: '2시간 전',
      status: 'monitoring'
    }
  ];

  const getAlertIcon = (type: string, status: string) => {
    if (status === 'resolved') {
      return <CheckCircle className="h-4 w-4 text-green-500" />;
    }
    
    switch (type) {
      case 'danger':
        return <AlertTriangle className="h-4 w-4 text-red-500" />;
      case 'warning':
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      default:
        return <CheckCircle className="h-4 w-4 text-blue-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <span className="px-2 py-1 text-xs font-semibold bg-red-100 text-red-800 rounded-full">진행중</span>;
      case 'resolved':
        return <span className="px-2 py-1 text-xs font-semibold bg-green-100 text-green-800 rounded-full">해결됨</span>;
      case 'monitoring':
        return <span className="px-2 py-1 text-xs font-semibold bg-yellow-100 text-yellow-800 rounded-full">모니터링</span>;
      default:
        return null;
    }
  };

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">최근 알림</h3>
        <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
          모두 보기
        </button>
      </div>
      
      <div className="space-y-4">
        {alerts.map((alert) => (
          <div key={alert.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="flex-shrink-0 mt-1">
              {getAlertIcon(alert.type, alert.status)}
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {alert.title}
                </p>
                {getStatusBadge(alert.status)}
              </div>
              
              <div className="flex items-center space-x-4 text-xs text-gray-500">
                <div className="flex items-center">
                  <User className="h-3 w-3 mr-1" />
                  {alert.user}
                </div>
                <div className="flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  {alert.time}
                </div>
              </div>
              
              <p className="text-xs text-gray-600 mt-1">
                📍 {alert.location}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Summary Stats */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-lg font-bold text-red-600">1</div>
            <div className="text-xs text-gray-500">진행중</div>
          </div>
          <div>
            <div className="text-lg font-bold text-yellow-600">1</div>
            <div className="text-xs text-gray-500">모니터링</div>
          </div>
          <div>
            <div className="text-lg font-bold text-green-600">2</div>
            <div className="text-xs text-gray-500">해결완료</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentAlerts;