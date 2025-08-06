import React, { useState } from 'react';
import { Camera, Play, Pause, Maximize, Settings, AlertTriangle } from 'lucide-react';

const LiveVideoFeed: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedCamera, setSelectedCamera] = useState(1);

  const cameras = [
    { id: 1, name: '1호기 터빈실', status: 'active', alerts: 0 },
    { id: 2, name: '정비동 3층', status: 'active', alerts: 1 },
    { id: 3, name: '제어실', status: 'active', alerts: 0 },
    { id: 4, name: '냉각탑 A동', status: 'maintenance', alerts: 0 },
  ];

  const detections = [
    { type: 'safety_helmet', confidence: 98, x: 45, y: 30 },
    { type: 'person', confidence: 96, x: 40, y: 25 },
    { type: 'danger_zone', confidence: 89, x: 70, y: 60 },
  ];

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">실시간 영상</h3>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`p-2 rounded-lg ${isPlaying ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}
          >
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </button>
          <button className="p-2 rounded-lg bg-gray-50 text-gray-600">
            <Maximize className="h-4 w-4" />
          </button>
          <button className="p-2 rounded-lg bg-gray-50 text-gray-600">
            <Settings className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Camera Selection */}
      <div className="mb-4">
        <select
          value={selectedCamera}
          onChange={(e) => setSelectedCamera(Number(e.target.value))}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        >
          {cameras.map((camera) => (
            <option key={camera.id} value={camera.id}>
              {camera.name} {camera.alerts > 0 && `(⚠️ ${camera.alerts}건)`}
            </option>
          ))}
        </select>
      </div>

      {/* Video Container */}
      <div className="relative bg-gray-900 rounded-lg overflow-hidden aspect-video">
        {/* Mock Video Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
          <Camera className="h-16 w-16 text-gray-500" />
        </div>

        {/* Live Indicator */}
        <div className="absolute top-4 left-4 flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
          <span className="text-white text-sm font-medium">LIVE</span>
        </div>

        {/* Camera Info */}
        <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2 text-white text-sm">
          {cameras.find(c => c.id === selectedCamera)?.name}
        </div>

        {/* AI Detection Overlays */}
        {isPlaying && detections.map((detection, index) => (
          <div
            key={index}
            className="absolute border-2 border-yellow-400 bg-yellow-400/20 rounded"
            style={{
              left: `${detection.x}%`,
              top: `${detection.y}%`,
              width: '60px',
              height: '80px',
            }}
          >
            <div className="absolute -top-8 left-0 bg-yellow-400 text-black text-xs px-2 py-1 rounded">
              {detection.type} {detection.confidence}%
            </div>
          </div>
        ))}

        {/* Alert Overlay */}
        {cameras.find(c => c.id === selectedCamera)?.alerts && cameras.find(c => c.id === selectedCamera)?.alerts! > 0 && (
          <div className="absolute bottom-4 left-4 right-4 bg-red-500/90 backdrop-blur-sm rounded-lg p-3 text-white">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5" />
              <span className="font-medium">안전모 미착용 감지됨</span>
            </div>
            <div className="text-sm mt-1">작업자에게 알림 전송됨</div>
          </div>
        )}

        {/* Playback Controls */}
        <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-2">
          <div className="text-white text-xs">
            {new Date().toLocaleTimeString('ko-KR')}
          </div>
        </div>
      </div>

      {/* Camera Status */}
      <div className="mt-4 grid grid-cols-2 gap-4">
        {cameras.map((camera) => (
          <div
            key={camera.id}
            className={`p-3 rounded-lg border-2 cursor-pointer transition-colors ${
              selectedCamera === camera.id
                ? 'border-primary-500 bg-primary-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => setSelectedCamera(camera.id)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className={`w-2 h-2 rounded-full ${
                  camera.status === 'active' ? 'bg-green-500' : 'bg-yellow-500'
                }`}></div>
                <span className="text-sm font-medium">{camera.name}</span>
              </div>
              {camera.alerts > 0 && (
                <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">
                  {camera.alerts}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* AI Detection Summary */}
      <div className="mt-4 pt-4 border-t border-gray-200">
        <h4 className="text-sm font-semibold text-gray-900 mb-2">AI 감지 현황</h4>
        <div className="grid grid-cols-3 gap-3 text-center text-sm">
          <div className="p-2 bg-green-50 rounded">
            <div className="font-semibold text-green-600">15</div>
            <div className="text-green-700">안전장비</div>
          </div>
          <div className="p-2 bg-yellow-50 rounded">
            <div className="font-semibold text-yellow-600">2</div>
            <div className="text-yellow-700">주의행동</div>
          </div>
          <div className="p-2 bg-red-50 rounded">
            <div className="font-semibold text-red-600">1</div>
            <div className="text-red-700">위험상황</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveVideoFeed;