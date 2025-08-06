import React, { useState } from 'react';
import {
  Users,
  Activity,
  Heart,
  Thermometer,
  AlertTriangle,
  Eye,
  Zap,
  Clock
} from 'lucide-react';
import WorkerList from '../components/WorkerList';
import LiveVideoFeed from '../components/LiveVideoFeed';
import BiometricMonitor from '../components/BiometricMonitor';

const Monitoring: React.FC = () => {
  const [selectedWorker, setSelectedWorker] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<'overview' | 'detailed'>('overview');

  const stats = [
    {
      name: '실시간 모니터링',
      value: '247명',
      icon: Users,
      color: 'blue'
    },
    {
      name: '활성 센서',
      value: '1,284개',
      icon: Activity,
      color: 'green'
    },
    {
      name: '위험 알림',
      value: '3건',
      icon: AlertTriangle,
      color: 'red'
    },
    {
      name: 'AI 감지 정확도',
      value: '98.7%',
      icon: Eye,
      color: 'purple'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">실시간 모니터링</h1>
          <p className="text-gray-600 mt-1">AI 기반 작업자 안전 상태 실시간 추적</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>실시간 업데이트</span>
          </div>
          <select 
            value={viewMode}
            onChange={(e) => setViewMode(e.target.value as 'overview' | 'detailed')}
            className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          >
            <option value="overview">전체 보기</option>
            <option value="detailed">상세 보기</option>
          </select>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-full ${
                stat.color === 'blue' ? 'bg-blue-50 text-blue-600' :
                stat.color === 'green' ? 'bg-green-50 text-green-600' :
                stat.color === 'red' ? 'bg-red-50 text-red-600' :
                'bg-purple-50 text-purple-600'
              }`}>
                <stat.icon className="h-6 w-6" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {viewMode === 'overview' ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Worker List */}
          <div className="lg:col-span-2">
            <WorkerList onWorkerSelect={setSelectedWorker} selectedWorker={selectedWorker} />
          </div>

          {/* Live Feeds and Controls */}
          <div className="space-y-6">
            <LiveVideoFeed />
            
            {/* Emergency Controls */}
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">긴급 대응</h3>
              <div className="space-y-3">
                <button className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-4 rounded-lg transition-colors">
                  🚨 긴급 대피 알림
                </button>
                <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-3 px-4 rounded-lg transition-colors">
                  ⚠️ 안전 점검 요청
                </button>
                <button className="w-full btn-secondary">
                  📞 응급실 연결
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {/* Detailed Worker Monitor */}
          <div className="space-y-6">
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">선택된 작업자</h3>
              {selectedWorker ? (
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <img
                      className="h-16 w-16 rounded-full"
                      src={`https://ui-avatars.com/api/?name=작업자${selectedWorker}&background=2C5AA0&color=fff`}
                      alt="Worker"
                    />
                    <div>
                      <h4 className="text-lg font-medium text-gray-900">작업자 #{selectedWorker}</h4>
                      <p className="text-sm text-gray-500">정비팀 • 15년 경력</p>
                      <div className="flex items-center mt-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        <span className="text-sm text-green-600">안전 상태</span>
                      </div>
                    </div>
                  </div>
                  
                  <BiometricMonitor workerId={selectedWorker} />
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  작업자를 선택해주세요
                </div>
              )}
            </div>
          </div>

          {/* Sensor Data and Analytics */}
          <div className="space-y-6">
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">센서 데이터</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Thermometer className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-600">24.2°C</div>
                  <div className="text-sm text-blue-700">환경 온도</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <Heart className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-600">72 BPM</div>
                  <div className="text-sm text-green-700">평균 심박수</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <Zap className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-purple-600">450 W</div>
                  <div className="text-sm text-purple-700">전력 소비</div>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-lg">
                  <Clock className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-yellow-600">6.5h</div>
                  <div className="text-sm text-yellow-700">작업 시간</div>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">AI 분석 결과</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span className="text-sm text-green-700">안전장비 착용</span>
                  <span className="text-sm font-semibold text-green-600">98.5%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                  <span className="text-sm text-yellow-700">위험행동 감지</span>
                  <span className="text-sm font-semibold text-yellow-600">2건</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                  <span className="text-sm text-blue-700">작업 효율성</span>
                  <span className="text-sm font-semibold text-blue-600">87.3%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* KOMIPO Innovation Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
        <div className="text-center">
          <h3 className="text-lg font-bold mb-2">🔬 AI 기반 실시간 안전 모니터링</h3>
          <p className="text-blue-100">
            KOMIPO 혁신 50대 과제 - 차세대 안전관리 시스템으로 중대재해 제로화 달성
          </p>
          <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
            <div className="text-center">
              <div className="font-bold text-xl">24/7</div>
              <div className="text-blue-100">실시간 모니터링</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-xl">&lt; 500ms</div>
              <div className="text-blue-100">위험 감지 시간</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-xl">95%+</div>
              <div className="text-blue-100">AI 정확도</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Monitoring;