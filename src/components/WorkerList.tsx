import React from 'react';
import { Heart, MapPin, Clock, AlertTriangle, CheckCircle, Shield } from 'lucide-react';

interface Worker {
  id: number;
  name: string;
  department: string;
  location: string;
  status: 'safe' | 'warning' | 'danger';
  heartRate: number;
  lastUpdate: string;
  workHours: string;
  safetyScore: number;
}

interface WorkerListProps {
  onWorkerSelect: (workerId: number) => void;
  selectedWorker: number | null;
}

const WorkerList: React.FC<WorkerListProps> = ({ onWorkerSelect, selectedWorker }) => {
  const workers: Worker[] = [
    {
      id: 1,
      name: '김기술',
      department: '정비팀',
      location: '1호기 터빈실',
      status: 'safe',
      heartRate: 72,
      lastUpdate: '방금 전',
      workHours: '6.5시간',
      safetyScore: 98
    },
    {
      id: 2,
      name: '박정비',
      department: '운영팀',
      location: '정비동 3층',
      status: 'danger',
      heartRate: 95,
      lastUpdate: '2분 전',
      workHours: '4.2시간',
      safetyScore: 65
    },
    {
      id: 3,
      name: '이안전',
      department: '안전팀',
      location: '제어실',
      status: 'safe',
      heartRate: 68,
      lastUpdate: '방금 전',
      workHours: '7.1시간',
      safetyScore: 96
    },
    {
      id: 4,
      name: '최운영',
      department: '정비팀',
      location: '냉각탑 A동',
      status: 'warning',
      heartRate: 84,
      lastUpdate: '5분 전',
      workHours: '5.8시간',
      safetyScore: 78
    },
    {
      id: 5,
      name: '정전기',
      department: '전기팀',
      location: '변압기실',
      status: 'safe',
      heartRate: 70,
      lastUpdate: '1분 전',
      workHours: '6.0시간',
      safetyScore: 94
    },
    {
      id: 6,
      name: '한보수',
      department: '정비팀',
      location: '2호기 발전기실',
      status: 'safe',
      heartRate: 75,
      lastUpdate: '방금 전',
      workHours: '3.7시간',
      safetyScore: 92
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'safe':
        return 'text-green-600 bg-green-50';
      case 'warning':
        return 'text-yellow-600 bg-yellow-50';
      case 'danger':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'safe':
        return <CheckCircle className="h-4 w-4" />;
      case 'warning':
        return <AlertTriangle className="h-4 w-4" />;
      case 'danger':
        return <AlertTriangle className="h-4 w-4" />;
      default:
        return <Shield className="h-4 w-4" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'safe':
        return '안전';
      case 'warning':
        return '주의';
      case 'danger':
        return '위험';
      default:
        return '알수없음';
    }
  };

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">작업자 현황</h2>
        <div className="flex items-center space-x-4 text-sm">
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-gray-600">안전: {workers.filter(w => w.status === 'safe').length}</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <span className="text-gray-600">주의: {workers.filter(w => w.status === 'warning').length}</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <span className="text-gray-600">위험: {workers.filter(w => w.status === 'danger').length}</span>
          </div>
        </div>
      </div>

      <div className="space-y-3 max-h-96 overflow-y-auto">
        {workers.map((worker) => (
          <div
            key={worker.id}
            onClick={() => onWorkerSelect(worker.id)}
            className={`p-4 rounded-lg border-2 cursor-pointer transition-all hover:shadow-md ${
              selectedWorker === worker.id
                ? 'border-primary-500 bg-primary-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <img
                  className="h-10 w-10 rounded-full"
                  src={`https://ui-avatars.com/api/?name=${encodeURIComponent(worker.name)}&background=2C5AA0&color=fff`}
                  alt={worker.name}
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{worker.name}</h3>
                  <p className="text-sm text-gray-500">{worker.department}</p>
                </div>
              </div>
              
              <div className={`px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1 ${getStatusColor(worker.status)}`}>
                {getStatusIcon(worker.status)}
                <span>{getStatusText(worker.status)}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center space-x-2 text-gray-600">
                <MapPin className="h-4 w-4" />
                <span>{worker.location}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Clock className="h-4 w-4" />
                <span>{worker.workHours}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Heart className="h-4 w-4" />
                <span>{worker.heartRate} BPM</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Shield className="h-4 w-4" />
                <span>안전점수: {worker.safetyScore}</span>
              </div>
            </div>

            <div className="mt-3 pt-3 border-t border-gray-200">
              <div className="flex justify-between items-center text-xs text-gray-500">
                <span>마지막 업데이트: {worker.lastUpdate}</span>
                <div className={`w-2 h-2 rounded-full ${
                  worker.status === 'safe' ? 'bg-green-500' :
                  worker.status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
                } animate-pulse`}></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Stats */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="p-3 bg-green-50 rounded-lg">
            <div className="text-lg font-bold text-green-600">
              {((workers.filter(w => w.status === 'safe').length / workers.length) * 100).toFixed(1)}%
            </div>
            <div className="text-xs text-green-700">안전 비율</div>
          </div>
          <div className="p-3 bg-blue-50 rounded-lg">
            <div className="text-lg font-bold text-blue-600">
              {Math.round(workers.reduce((sum, w) => sum + w.heartRate, 0) / workers.length)}
            </div>
            <div className="text-xs text-blue-700">평균 심박수</div>
          </div>
          <div className="p-3 bg-purple-50 rounded-lg">
            <div className="text-lg font-bold text-purple-600">
              {Math.round(workers.reduce((sum, w) => sum + w.safetyScore, 0) / workers.length)}
            </div>
            <div className="text-xs text-purple-700">평균 안전점수</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkerList;