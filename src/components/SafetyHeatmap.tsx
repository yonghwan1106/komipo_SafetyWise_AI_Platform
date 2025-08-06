import React from 'react';
import { MapPin, Users, AlertTriangle } from 'lucide-react';

const SafetyHeatmap: React.FC = () => {
  const areas = [
    { id: 1, name: '1호기 터빈실', workers: 12, status: 'safe', x: 20, y: 30 },
    { id: 2, name: '2호기 발전기실', workers: 8, status: 'safe', x: 60, y: 25 },
    { id: 3, name: '제어실', workers: 15, status: 'safe', x: 40, y: 15 },
    { id: 4, name: '냉각탑', workers: 6, status: 'warning', x: 80, y: 60 },
    { id: 5, name: '변압기실', workers: 4, status: 'safe', x: 15, y: 70 },
    { id: 6, name: '정비동', workers: 22, status: 'danger', x: 70, y: 75 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'safe':
        return 'bg-green-500';
      case 'warning':
        return 'bg-yellow-500';
      case 'danger':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'danger':
        return <AlertTriangle className="h-3 w-3 text-white" />;
      default:
        return <Users className="h-3 w-3 text-white" />;
    }
  };

  return (
    <div className="space-y-4">
      {/* Map Container */}
      <div className="relative bg-gray-100 rounded-xl overflow-hidden" style={{ height: '300px' }}>
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#ccc" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        {/* Building Outline */}
        <div className="absolute inset-4 border-2 border-gray-300 rounded-lg bg-white/50" />
        
        {/* Area Markers */}
        {areas.map((area) => (
          <div
            key={area.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
            style={{ left: `${area.x}%`, top: `${area.y}%` }}
          >
            <div className={`w-8 h-8 rounded-full ${getStatusColor(area.status)} flex items-center justify-center shadow-lg animate-pulse`}>
              {getStatusIcon(area.status)}
            </div>
            
            {/* Tooltip */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs rounded-lg px-3 py-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
              <div className="font-semibold">{area.name}</div>
              <div>작업자: {area.workers}명</div>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex justify-between items-center text-sm">
        <div className="flex space-x-6">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            <span className="text-gray-600">안전 (Safe)</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
            <span className="text-gray-600">주의 (Warning)</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
            <span className="text-gray-600">위험 (Danger)</span>
          </div>
        </div>
        <div className="text-gray-500">
          총 작업자: {areas.reduce((sum, area) => sum + area.workers, 0)}명
        </div>
      </div>

      {/* Status Summary */}
      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="bg-green-50 rounded-lg p-3">
          <div className="text-2xl font-bold text-green-600">
            {areas.filter(area => area.status === 'safe').length}
          </div>
          <div className="text-sm text-green-700">안전 구역</div>
        </div>
        <div className="bg-yellow-50 rounded-lg p-3">
          <div className="text-2xl font-bold text-yellow-600">
            {areas.filter(area => area.status === 'warning').length}
          </div>
          <div className="text-sm text-yellow-700">주의 구역</div>
        </div>
        <div className="bg-red-50 rounded-lg p-3">
          <div className="text-2xl font-bold text-red-600">
            {areas.filter(area => area.status === 'danger').length}
          </div>
          <div className="text-sm text-red-700">위험 구역</div>
        </div>
      </div>
    </div>
  );
};

export default SafetyHeatmap;