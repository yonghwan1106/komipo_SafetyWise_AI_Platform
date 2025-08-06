import React from 'react';
import { Users, AlertTriangle } from 'lucide-react';

const SafetyHeatmap: React.FC = () => {
  const areas = [
    { id: 1, name: '1호기 터빈실', workers: 12, status: 'safe', x: 15, y: 25 },
    { id: 2, name: '2호기 발전기실', workers: 8, status: 'safe', x: 45, y: 20 },
    { id: 3, name: '제어실', workers: 15, status: 'safe', x: 75, y: 15 },
    { id: 4, name: '냉각탑 A동', workers: 6, status: 'warning', x: 80, y: 50 },
    { id: 5, name: '변압기실', workers: 4, status: 'safe', x: 20, y: 75 },
    { id: 6, name: '정비동 3층', workers: 22, status: 'danger', x: 60, y: 80 },
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
      <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl overflow-hidden border border-blue-200" style={{ height: '400px' }}>
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#2563eb" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        {/* Building Complex Layout */}
        <div className="absolute inset-6">
          {/* Main Building */}
          <div className="absolute left-4 top-4 w-32 h-24 bg-white/60 border-2 border-gray-400 rounded-lg shadow-lg">
            <div className="text-xs text-center mt-2 font-medium text-gray-700">1호기 발전소</div>
          </div>
          
          {/* Secondary Building */}
          <div className="absolute right-6 top-4 w-28 h-20 bg-white/60 border-2 border-gray-400 rounded-lg shadow-lg">
            <div className="text-xs text-center mt-2 font-medium text-gray-700">2호기 발전소</div>
          </div>
          
          {/* Control Room */}
          <div className="absolute right-4 top-32 w-20 h-16 bg-white/80 border-2 border-blue-400 rounded-lg shadow-lg">
            <div className="text-xs text-center mt-1 font-medium text-blue-700">제어실</div>
          </div>
          
          {/* Maintenance Building */}
          <div className="absolute left-6 bottom-6 w-36 h-20 bg-white/60 border-2 border-gray-400 rounded-lg shadow-lg">
            <div className="text-xs text-center mt-2 font-medium text-gray-700">정비동</div>
          </div>
          
          {/* Cooling Tower */}
          <div className="absolute right-8 bottom-8 w-16 h-16 bg-white/60 border-2 border-gray-400 rounded-full shadow-lg">
            <div className="text-xs text-center mt-4 font-medium text-gray-700">냉각탑</div>
          </div>
        </div>
        
        {/* Area Markers */}
        {areas.map((area) => (
          <div
            key={area.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
            style={{ left: `${area.x}%`, top: `${area.y}%` }}
          >
            {/* Pulsing Ring Effect */}
            <div className={`absolute w-12 h-12 rounded-full ${
              area.status === 'safe' ? 'bg-green-400/30' :
              area.status === 'warning' ? 'bg-yellow-400/30' : 'bg-red-400/30'
            } animate-ping`}></div>
            
            {/* Main Marker */}
            <div className={`relative w-10 h-10 rounded-full ${getStatusColor(area.status)} flex items-center justify-center shadow-xl border-2 border-white z-10`}>
              {getStatusIcon(area.status)}
              <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full ${
                area.status === 'safe' ? 'bg-green-600' :
                area.status === 'warning' ? 'bg-yellow-600' : 'bg-red-600'
              } text-white text-xs flex items-center justify-center font-bold border-2 border-white`}>
                {area.workers}
              </div>
            </div>
            
            {/* Enhanced Tooltip */}
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-gray-800 to-gray-900 text-white text-sm rounded-xl px-4 py-3 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-20 shadow-2xl border border-gray-600">
              <div className="font-bold text-blue-200">{area.name}</div>
              <div className="flex items-center mt-1">
                <Users className="h-3 w-3 mr-1" />
                <span>작업자: {area.workers}명</span>
              </div>
              <div className="flex items-center mt-1">
                <div className={`w-2 h-2 rounded-full mr-2 ${
                  area.status === 'safe' ? 'bg-green-400' :
                  area.status === 'warning' ? 'bg-yellow-400' : 'bg-red-400'
                }`}></div>
                <span className="capitalize">{
                  area.status === 'safe' ? '안전' :
                  area.status === 'warning' ? '주의' : '위험'
                }</span>
              </div>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
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

      {/* Enhanced Status Summary */}
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 border border-green-200 hover:shadow-lg transition-all duration-200">
          <div className="flex items-center justify-between mb-2">
            <div className="text-3xl font-bold text-green-600">
              {areas.filter(area => area.status === 'safe').length}
            </div>
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
              <Users className="h-6 w-6 text-white" />
            </div>
          </div>
          <div className="text-sm font-medium text-green-700 mb-1">안전 구역</div>
          <div className="text-xs text-green-600">
            작업자 {areas.filter(area => area.status === 'safe').reduce((sum, area) => sum + area.workers, 0)}명 근무 중
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-4 border border-yellow-200 hover:shadow-lg transition-all duration-200">
          <div className="flex items-center justify-between mb-2">
            <div className="text-3xl font-bold text-yellow-600">
              {areas.filter(area => area.status === 'warning').length}
            </div>
            <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
              <AlertTriangle className="h-6 w-6 text-white" />
            </div>
          </div>
          <div className="text-sm font-medium text-yellow-700 mb-1">주의 구역</div>
          <div className="text-xs text-yellow-600">
            작업자 {areas.filter(area => area.status === 'warning').reduce((sum, area) => sum + area.workers, 0)}명 주의 필요
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-4 border border-red-200 hover:shadow-lg transition-all duration-200">
          <div className="flex items-center justify-between mb-2">
            <div className="text-3xl font-bold text-red-600">
              {areas.filter(area => area.status === 'danger').length}
            </div>
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
              <AlertTriangle className="h-6 w-6 text-white" />
            </div>
          </div>
          <div className="text-sm font-medium text-red-700 mb-1">위험 구역</div>
          <div className="text-xs text-red-600">
            작업자 {areas.filter(area => area.status === 'danger').reduce((sum, area) => sum + area.workers, 0)}명 즉시 대응 필요
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafetyHeatmap;