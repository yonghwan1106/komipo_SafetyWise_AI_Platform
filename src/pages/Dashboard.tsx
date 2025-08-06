import React from 'react';
import {
  Users,
  Shield,
  AlertTriangle,
  TrendingUp,
  Activity,
  CheckCircle,
  Clock,
  MapPin
} from 'lucide-react';
import StatCard from '../components/StatCard';
import SafetyHeatmap from '../components/SafetyHeatmap';
import RecentAlerts from '../components/RecentAlerts';
import KPIChart from '../components/KPIChart';

const Dashboard: React.FC = () => {
  const stats = [
    {
      name: '총 작업자',
      value: '247',
      change: '+12',
      changeType: 'increase' as const,
      icon: Users,
      color: 'blue' as const
    },
    {
      name: '안전 상태',
      value: '98.7%',
      change: '+2.1%',
      changeType: 'increase' as const,
      icon: Shield,
      color: 'green' as const
    },
    {
      name: '위험 알림',
      value: '3',
      change: '-2',
      changeType: 'decrease' as const,
      icon: AlertTriangle,
      color: 'red' as const
    },
    {
      name: '교육 완료율',
      value: '89.2%',
      change: '+5.7%',
      changeType: 'increase' as const,
      icon: TrendingUp,
      color: 'purple' as const
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">SafetyWise AI Platform</h1>
            <p className="text-primary-100 text-lg">AI 기반 스마트 안전관리 및 고령친화 직무재설계 통합시스템</p>
            <div className="mt-4 flex items-center space-x-4 text-sm">
              <div className="flex items-center">
                <Activity className="h-4 w-4 mr-1" />
                실시간 모니터링 중
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-1" />
                시스템 정상 운영
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                마지막 업데이트: 방금 전
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-2xl font-bold">2025</div>
              <div className="text-sm">KOMIPO</div>
              <div className="text-xs">혁신 50대 과제</div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <StatCard key={stat.name} {...stat} />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Safety Heatmap */}
        <div className="lg:col-span-2">
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">발전소 안전 현황</h2>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-500">실시간 위치 추적</span>
              </div>
            </div>
            <SafetyHeatmap />
          </div>
        </div>

        {/* Recent Alerts */}
        <div className="space-y-6">
          <RecentAlerts />
          
          {/* Quick Actions */}
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">빠른 작업</h3>
            <div className="space-y-3">
              <button className="w-full btn-primary text-left">
                긴급 대응 훈련 시작
              </button>
              <button className="w-full btn-secondary text-left">
                안전 점검 보고서 생성
              </button>
              <button className="w-full btn-secondary text-left">
                교육 콘텐츠 관리
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* KPI Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <KPIChart
          title="월별 안전 성과"
          subtitle="중대재해 및 안전사고 발생률"
        />
        <KPIChart
          title="교육 프로그램 효과"
          subtitle="완료율 및 만족도 추이"
        />
      </div>

      {/* Innovation Banner */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">🚀 KOMIPO 혁신 50대 과제 2025</h2>
          <p className="text-lg mb-4">AI와 IoT 기술로 발전소 안전을 혁신하고, 세대간 지식 전수를 통해 지속가능한 안전 문화를 구축</p>
          <div className="flex justify-center space-x-8 text-sm">
            <div className="text-center">
              <div className="font-bold text-2xl">0</div>
              <div>중대재해</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-2xl">95%</div>
              <div>AI 정확도</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-2xl">60%</div>
              <div>학습시간 단축</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-2xl">28.5%</div>
              <div>투자수익률</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;