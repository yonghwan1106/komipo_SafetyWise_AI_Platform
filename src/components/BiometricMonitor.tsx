import React from 'react';
import { Heart, Activity, Thermometer, Droplets, Zap, TrendingUp, TrendingDown } from 'lucide-react';

interface BiometricMonitorProps {
  workerId: number;
}

const BiometricMonitor: React.FC<BiometricMonitorProps> = ({ workerId }) => {
  // Mock data based on worker ID
  const generateBiometricData = (id: number) => {
    const base = {
      heartRate: 70 + (id * 3),
      bodyTemp: 36.5 + (Math.random() * 0.8),
      bloodOxygen: 98 - (id * 0.5),
      stressLevel: 20 + (id * 5),
      fatigue: 15 + (id * 8),
      hydration: 85 - (id * 2)
    };

    // Add some variance for realism
    return {
      heartRate: Math.round(base.heartRate + (Math.random() * 10 - 5)),
      bodyTemp: Number((base.bodyTemp + (Math.random() * 0.4 - 0.2)).toFixed(1)),
      bloodOxygen: Math.round(base.bloodOxygen + (Math.random() * 2 - 1)),
      stressLevel: Math.max(0, Math.min(100, Math.round(base.stressLevel + (Math.random() * 10 - 5)))),
      fatigue: Math.max(0, Math.min(100, Math.round(base.fatigue + (Math.random() * 10 - 5)))),
      hydration: Math.max(0, Math.min(100, Math.round(base.hydration + (Math.random() * 10 - 5))))
    };
  };

  const data = generateBiometricData(workerId);

  const getBiometricStatus = (type: string, value: number) => {
    switch (type) {
      case 'heartRate':
        if (value >= 60 && value <= 100) return { color: 'green', status: '정상' };
        if (value > 100) return { color: 'red', status: '높음' };
        return { color: 'yellow', status: '낮음' };
      
      case 'bodyTemp':
        if (value >= 36.1 && value <= 37.2) return { color: 'green', status: '정상' };
        if (value > 37.2) return { color: 'red', status: '높음' };
        return { color: 'yellow', status: '낮음' };
      
      case 'bloodOxygen':
        if (value >= 95) return { color: 'green', status: '정상' };
        if (value >= 90) return { color: 'yellow', status: '주의' };
        return { color: 'red', status: '위험' };
      
      case 'stressLevel':
        if (value <= 30) return { color: 'green', status: '낮음' };
        if (value <= 60) return { color: 'yellow', status: '보통' };
        return { color: 'red', status: '높음' };
      
      case 'fatigue':
        if (value <= 30) return { color: 'green', status: '낮음' };
        if (value <= 60) return { color: 'yellow', status: '보통' };
        return { color: 'red', status: '높음' };
      
      case 'hydration':
        if (value >= 70) return { color: 'green', status: '충분' };
        if (value >= 50) return { color: 'yellow', status: '주의' };
        return { color: 'red', status: '부족' };
      
      default:
        return { color: 'gray', status: '알수없음' };
    }
  };

  const biometrics = [
    {
      key: 'heartRate',
      name: '심박수',
      value: data.heartRate,
      unit: 'BPM',
      icon: Heart,
      trend: data.heartRate > 75 ? 'up' : 'stable'
    },
    {
      key: 'bodyTemp',
      name: '체온',
      value: data.bodyTemp,
      unit: '°C',
      icon: Thermometer,
      trend: data.bodyTemp > 37.0 ? 'up' : 'stable'
    },
    {
      key: 'bloodOxygen',
      name: '혈중 산소',
      value: data.bloodOxygen,
      unit: '%',
      icon: Activity,
      trend: data.bloodOxygen < 96 ? 'down' : 'stable'
    },
    {
      key: 'stressLevel',
      name: '스트레스',
      value: data.stressLevel,
      unit: '%',
      icon: Zap,
      trend: data.stressLevel > 40 ? 'up' : 'stable'
    },
    {
      key: 'fatigue',
      name: '피로도',
      value: data.fatigue,
      unit: '%',
      icon: Activity,
      trend: data.fatigue > 50 ? 'up' : 'stable'
    },
    {
      key: 'hydration',
      name: '수분',
      value: data.hydration,
      unit: '%',
      icon: Droplets,
      trend: data.hydration < 70 ? 'down' : 'stable'
    }
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="text-lg font-semibold text-gray-900">생체 신호 모니터링</h4>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-gray-500">실시간</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {biometrics.map((metric) => {
          const status = getBiometricStatus(metric.key, metric.value);
          const Icon = metric.icon;
          
          return (
            <div key={metric.key} className="p-4 border border-gray-200 rounded-lg hover:shadow-sm transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <Icon className={`h-4 w-4 ${
                    status.color === 'green' ? 'text-green-600' :
                    status.color === 'yellow' ? 'text-yellow-600' :
                    status.color === 'red' ? 'text-red-600' : 'text-gray-600'
                  }`} />
                  <span className="text-sm font-medium text-gray-700">{metric.name}</span>
                </div>
                <div className="flex items-center space-x-1">
                  {metric.trend === 'up' ? (
                    <TrendingUp className="h-3 w-3 text-red-500" />
                  ) : metric.trend === 'down' ? (
                    <TrendingDown className="h-3 w-3 text-red-500" />
                  ) : null}
                </div>
              </div>
              
              <div className="flex items-end justify-between">
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    {metric.value}
                    <span className="text-sm text-gray-500 ml-1">{metric.unit}</span>
                  </div>
                  <div className={`text-xs font-medium mt-1 ${
                    status.color === 'green' ? 'text-green-600' :
                    status.color === 'yellow' ? 'text-yellow-600' :
                    status.color === 'red' ? 'text-red-600' : 'text-gray-600'
                  }`}>
                    {status.status}
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-3 w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-300 ${
                    status.color === 'green' ? 'bg-green-500' :
                    status.color === 'yellow' ? 'bg-yellow-500' :
                    status.color === 'red' ? 'bg-red-500' : 'bg-gray-500'
                  }`}
                  style={{
                    width: `${Math.min(100, Math.max(0, 
                      metric.key === 'heartRate' ? (metric.value / 120) * 100 :
                      metric.key === 'bodyTemp' ? ((metric.value - 35) / 3) * 100 :
                      metric.value
                    ))}%`
                  }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Alerts */}
      <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <h5 className="text-sm font-semibold text-yellow-800 mb-2">건강 상태 알림</h5>
        <div className="space-y-1 text-sm text-yellow-700">
          {data.stressLevel > 50 && (
            <div>• 높은 스트레스 수준이 감지되었습니다. 휴식을 권장합니다.</div>
          )}
          {data.fatigue > 60 && (
            <div>• 피로도가 높습니다. 충분한 휴식이 필요합니다.</div>
          )}
          {data.hydration < 60 && (
            <div>• 수분 섭취가 부족합니다. 수분 보충을 권장합니다.</div>
          )}
          {data.stressLevel <= 50 && data.fatigue <= 60 && data.hydration >= 60 && (
            <div>• 모든 생체 신호가 정상 범위에 있습니다.</div>
          )}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex space-x-3">
        <button className="flex-1 btn-secondary text-sm">
          📊 상세 리포트
        </button>
        <button className="flex-1 btn-secondary text-sm">
          ⚕️ 건강 상담
        </button>
      </div>
    </div>
  );
};

export default BiometricMonitor;