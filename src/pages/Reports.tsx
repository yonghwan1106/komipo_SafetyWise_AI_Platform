import React, { useState } from 'react';
import {
  FileText,
  Download,
  Calendar,
  TrendingUp,
  TrendingDown,
  Leaf,
  Users,
  Shield,
  Target,
  BarChart3,
  PieChart,
  Filter,
  RefreshCw
} from 'lucide-react';

const Reports: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('quarterly');
  const [selectedReport, setSelectedReport] = useState('sustainability');

  const reportTypes = [
    { id: 'sustainability', name: '지속가능경영 보고서', icon: Leaf },
    { id: 'safety', name: '안전성과 보고서', icon: Shield },
    { id: 'governance', name: '거버넌스 보고서', icon: Users },
    { id: 'compliance', name: '규제 준수 보고서', icon: FileText }
  ];

  const periods = [
    { id: 'monthly', name: '월간' },
    { id: 'quarterly', name: '분기' },
    { id: 'yearly', name: '연간' }
  ];

  const esgMetrics = [
    {
      category: 'Environmental',
      name: '환경 (E)',
      metrics: [
        { name: 'CO2 배출량', value: '2,847', unit: 'tCO2eq', trend: 'down', change: '-12.3%', target: '3,200' },
        { name: '에너지 효율', value: '94.2', unit: '%', trend: 'up', change: '+2.1%', target: '95.0' },
        { name: '폐기물 재활용률', value: '87.5', unit: '%', trend: 'up', change: '+5.7%', target: '90.0' },
        { name: '용수 사용량', value: '45.2', unit: '만톤', trend: 'down', change: '-8.9%', target: '42.0' }
      ]
    },
    {
      category: 'Social',
      name: '사회 (S)',
      metrics: [
        { name: '중대재해 발생률', value: '0', unit: '건', trend: 'stable', change: '0%', target: '0' },
        { name: '안전사고 발생률', value: '0.4', unit: '%', trend: 'down', change: '-80%', target: '0.4' },
        { name: '교육 만족도', value: '4.7', unit: '/5.0', trend: 'up', change: '+8.9%', target: '4.5' },
        { name: '직원 만족도', value: '4.2', unit: '/5.0', trend: 'up', change: '+12.4%', target: '4.0' }
      ]
    },
    {
      category: 'Governance',
      name: '거버넌스 (G)',
      metrics: [
        { name: '이사회 다양성', value: '45', unit: '%', trend: 'up', change: '+15%', target: '50' },
        { name: '윤리경영 점수', value: '96.8', unit: '점', trend: 'up', change: '+3.2%', target: '95.0' },
        { name: '컴플라이언스 준수율', value: '99.1', unit: '%', trend: 'stable', change: '0%', target: '100' },
        { name: '정보공개 투명성', value: '92.3', unit: '점', trend: 'up', change: '+5.1%', target: '90.0' }
      ]
    }
  ];

  const recentReports = [
    {
      id: 1,
      title: '2024년 3분기 지속가능경영 보고서',
      type: 'sustainability',
      date: '2024-10-15',
      size: '2.4 MB',
      status: 'published',
      downloads: 145
    },
    {
      id: 2,
      title: '2024년 9월 안전성과 보고서',
      type: 'safety',
      date: '2024-10-01',
      size: '1.8 MB',
      status: 'published',
      downloads: 89
    },
    {
      id: 3,
      title: '2024년 3분기 ESG 통합보고서',
      type: 'governance',
      date: '2024-09-30',
      size: '3.1 MB',
      status: 'draft',
      downloads: 0
    },
    {
      id: 4,
      title: '2024년 상반기 IFRS S1/S2 기준 보고서',
      type: 'compliance',
      date: '2024-07-15',
      size: '2.7 MB',
      status: 'published',
      downloads: 234
    }
  ];

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="h-4 w-4 text-green-500" />;
      case 'down':
        return <TrendingDown className="h-4 w-4 text-red-500" />;
      default:
        return <div className="h-4 w-4 bg-gray-400 rounded-full"></div>;
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up':
        return 'text-green-600';
      case 'down':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'published':
        return <span className="px-2 py-1 text-xs font-semibold bg-green-100 text-green-800 rounded-full">발행됨</span>;
      case 'draft':
        return <span className="px-2 py-1 text-xs font-semibold bg-yellow-100 text-yellow-800 rounded-full">초안</span>;
      default:
        return <span className="px-2 py-1 text-xs font-semibold bg-gray-100 text-gray-800 rounded-full">대기중</span>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">ESG 보고서</h1>
          <p className="text-gray-600 mt-1">지속가능경영 성과 대시보드 및 자동 보고서 생성</p>
        </div>
        <div className="flex items-center space-x-3">
          <select 
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          >
            {periods.map((period) => (
              <option key={period.id} value={period.id}>{period.name}</option>
            ))}
          </select>
          <button className="btn-secondary flex items-center space-x-2">
            <RefreshCw className="h-4 w-4" />
            <span>새로고침</span>
          </button>
          <button className="btn-primary flex items-center space-x-2">
            <Download className="h-4 w-4" />
            <span>보고서 생성</span>
          </button>
        </div>
      </div>

      {/* ESG Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-green-800">환경 (E)</h3>
            <Leaf className="h-8 w-8 text-green-600" />
          </div>
          <div className="text-3xl font-bold text-green-700 mb-2">A+</div>
          <div className="text-sm text-green-600 mb-3">전년 대비 +15% 개선</div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-green-700">CO2 감축률</span>
              <span className="font-semibold text-green-800">-12.3%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-green-700">재생에너지 비율</span>
              <span className="font-semibold text-green-800">34.2%</span>
            </div>
          </div>
        </div>

        <div className="card bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-blue-800">사회 (S)</h3>
            <Users className="h-8 w-8 text-blue-600" />
          </div>
          <div className="text-3xl font-bold text-blue-700 mb-2">A</div>
          <div className="text-sm text-blue-600 mb-3">중대재해 0건 달성</div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-blue-700">안전사고 감소</span>
              <span className="font-semibold text-blue-800">-80%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-blue-700">교육만족도</span>
              <span className="font-semibold text-blue-800">4.7/5.0</span>
            </div>
          </div>
        </div>

        <div className="card bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-purple-800">거버넌스 (G)</h3>
            <Shield className="h-8 w-8 text-purple-600" />
          </div>
          <div className="text-3xl font-bold text-purple-700 mb-2">A-</div>
          <div className="text-sm text-purple-600 mb-3">투명성 지속 개선</div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-purple-700">윤리경영 점수</span>
              <span className="font-semibold text-purple-800">96.8점</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-purple-700">컴플라이언스</span>
              <span className="font-semibold text-purple-800">99.1%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Report Type Selector */}
      <div className="card">
        <h2 className="text-xl font-bold text-gray-900 mb-4">보고서 유형</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {reportTypes.map((type) => {
            const Icon = type.icon;
            return (
              <button
                key={type.id}
                onClick={() => setSelectedReport(type.id)}
                className={`p-4 rounded-lg border-2 transition-all ${
                  selectedReport === type.id
                    ? 'border-primary-500 bg-primary-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <Icon className={`h-8 w-8 mx-auto mb-2 ${
                  selectedReport === type.id ? 'text-primary-600' : 'text-gray-500'
                }`} />
                <div className={`text-sm font-medium ${
                  selectedReport === type.id ? 'text-primary-700' : 'text-gray-700'
                }`}>
                  {type.name}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* ESG Metrics Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {esgMetrics.map((category) => (
          <div key={category.category} className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">{category.name}</h3>
            <div className="space-y-4">
              {category.metrics.map((metric) => (
                <div key={metric.name} className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">{metric.name}</span>
                    {getTrendIcon(metric.trend)}
                  </div>
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-xl font-bold text-gray-900">
                        {metric.value}
                        <span className="text-sm text-gray-500 ml-1">{metric.unit}</span>
                      </div>
                      <div className={`text-xs font-medium ${getTrendColor(metric.trend)}`}>
                        {metric.change}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-500">목표</div>
                      <div className="text-sm font-medium text-gray-700">
                        {metric.target}{metric.unit}
                      </div>
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="mt-3 w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        parseFloat(metric.value) >= parseFloat(metric.target) 
                          ? 'bg-green-500' 
                          : parseFloat(metric.value) >= parseFloat(metric.target) * 0.8
                          ? 'bg-yellow-500' 
                          : 'bg-red-500'
                      }`}
                      style={{
                        width: `${Math.min(100, (parseFloat(metric.value) / parseFloat(metric.target)) * 100)}%`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Recent Reports */}
      <div className="card">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">최근 보고서</h2>
          <div className="flex items-center space-x-2">
            <button className="p-2 rounded-lg bg-gray-50 text-gray-600 hover:bg-gray-100">
              <Filter className="h-4 w-4" />
            </button>
            <button className="btn-secondary">전체 보기</button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">제목</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">유형</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">날짜</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">크기</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">상태</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">다운로드</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">작업</th>
              </tr>
            </thead>
            <tbody>
              {recentReports.map((report) => (
                <tr key={report.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <div className="font-medium text-gray-900">{report.title}</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-2">
                      {React.createElement(reportTypes.find(t => t.id === report.type)?.icon || FileText, {
                        className: "h-4 w-4 text-gray-500"
                      })}
                      <span className="text-sm text-gray-600">
                        {reportTypes.find(t => t.id === report.type)?.name}
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    {new Date(report.date).toLocaleDateString('ko-KR')}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">{report.size}</td>
                  <td className="py-3 px-4">{getStatusBadge(report.status)}</td>
                  <td className="py-3 px-4 text-sm text-gray-600">{report.downloads}회</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-2">
                      {report.status === 'published' && (
                        <button className="p-1 text-gray-500 hover:text-primary-600">
                          <Download className="h-4 w-4" />
                        </button>
                      )}
                      <button className="p-1 text-gray-500 hover:text-primary-600">
                        <FileText className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Auto-generation Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">자동 보고서 생성</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div>
                <div className="font-medium text-green-800">IFRS S1/S2 기준</div>
                <div className="text-sm text-green-600">다음 생성: 11월 1일</div>
              </div>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div>
                <div className="font-medium text-blue-800">GRI Standards</div>
                <div className="text-sm text-blue-600">다음 생성: 11월 15일</div>
              </div>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            </div>
            <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
              <div>
                <div className="font-medium text-purple-800">TCFD 권고안</div>
                <div className="text-sm text-purple-600">다음 생성: 12월 1일</div>
              </div>
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
            </div>
          </div>
          <button className="w-full mt-4 btn-primary">
            생성 일정 관리
          </button>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">데이터 연동 현황</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">안전관리 시스템</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-green-600">연결됨</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">환경관리 시스템</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-green-600">연결됨</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">인사관리 시스템</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-sm text-yellow-600">부분 연결</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">재무관리 시스템</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-green-600">연결됨</span>
              </div>
            </div>
          </div>
          <button className="w-full mt-4 btn-secondary">
            연동 설정 관리
          </button>
        </div>
      </div>

      {/* KOMIPO Innovation Banner */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">📊 ESG 통합 대시보드</h2>
          <p className="text-lg mb-4">KOMIPO 혁신 50대 과제 - IFRS S1/S2 기준 자동 보고서 생성 시스템</p>
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold">12시간</div>
              <div className="text-purple-100">보고서 작성시간</div>
              <div className="text-sm text-purple-200">(기존 120시간 → 12시간)</div>
            </div>
            <div>
              <div className="text-3xl font-bold">100%</div>
              <div className="text-purple-100">데이터 정확도</div>
              <div className="text-sm text-purple-200">실시간 자동 연동</div>
            </div>
            <div>
              <div className="text-3xl font-bold">A+</div>
              <div className="text-purple-100">ESG 등급</div>
              <div className="text-sm text-purple-200">지속가능경영 최고 수준</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;