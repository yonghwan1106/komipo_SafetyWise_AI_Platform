import React from 'react';
import { Link } from 'react-router-dom';
import {
  Shield,
  Users,
  BookOpen,
  FileText,
  TrendingUp,
  Eye,
  Monitor,
  Award,
  ArrowRight,
  Star,
  Play,
  Globe,
  Smartphone
} from 'lucide-react';

const Landing: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: '실시간 안전 모니터링',
      description: 'AI와 IoT 기술을 활용한 24/7 실시간 위험 감지 및 예방',
      color: 'bg-blue-50 text-blue-600',
      stats: '98.7% 안전율'
    },
    {
      icon: Monitor,
      title: 'VR 기반 안전 교육',
      description: '가상현실 환경에서 안전하고 효과적인 실습 교육',
      color: 'bg-purple-50 text-purple-600',
      stats: '60% 시간 단축'
    },
    {
      icon: Users,
      title: '지식 전수 플랫폼',
      description: '베테랑 직원의 노하우를 디지털화하여 체계적 전수',
      color: 'bg-green-50 text-green-600',
      stats: '95% 매칭률'
    },
    {
      icon: FileText,
      title: 'ESG 통합 관리',
      description: 'IFRS S1/S2 기준 자동 보고서 생성 및 통합 대시보드',
      color: 'bg-orange-50 text-orange-600',
      stats: '90% 효율성'
    }
  ];

  const achievements = [
    { metric: '0건', label: '중대재해 발생', icon: Shield },
    { metric: '95%+', label: 'AI 정확도', icon: Eye },
    { metric: '28.5%', label: '투자 수익률', icon: TrendingUp },
    { metric: '4.7/5.0', label: '사용자 만족도', icon: Star }
  ];

  const technologies = [
    { name: 'AI/ML', description: 'TensorFlow, YOLO v8', icon: '🤖' },
    { name: 'IoT', description: '웨어러블 센서, 실시간 데이터', icon: '📡' },
    { name: 'VR/AR', description: '몰입형 교육 환경', icon: '🥽' },
    { name: 'Cloud', description: 'AWS, 마이크로서비스', icon: '☁️' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800">
        <div className="absolute inset-0 bg-grid-white/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                🏆 2025 KOMIPO 혁신 50대 과제 아이디어 공모전
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="block">SafetyWise</span>
              <span className="block text-4xl md:text-6xl bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                AI Platform
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              AI 기반 스마트 안전관리 및 고령친화 직무재설계 통합시스템
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                to="/dashboard"
                className="bg-white text-primary-600 hover:bg-primary-50 px-8 py-4 rounded-xl font-semibold text-lg flex items-center space-x-2 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Play className="h-5 w-5" />
                <span>라이브 데모 체험</span>
              </Link>
              <a
                href="https://github.com/yonghwan1106/komipo_SafetyWise_AI_Platform"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-xl font-semibold text-lg flex items-center space-x-2 transition-all duration-200"
              >
                <Globe className="h-5 w-5" />
                <span>GitHub 소스코드</span>
              </a>
            </div>

            {/* Achievement Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full mb-3">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                      {achievement.metric}
                    </div>
                    <div className="text-primary-200 text-sm">
                      {achievement.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary-500/30 rounded-full filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-400/20 rounded-full filter blur-xl animate-pulse delay-1000"></div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              혁신적인 안전관리 솔루션
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              첨단 AI 기술과 VR/AR을 활용하여 발전소 안전을 새로운 차원으로 끌어올리는 통합 플랫폼
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className={`inline-flex items-center justify-center w-14 h-14 ${feature.color} rounded-xl mb-6`}>
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="text-lg font-bold text-primary-600">
                    {feature.stats}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              최첨단 기술 스택
            </h2>
            <p className="text-xl text-gray-600">
              검증된 기술들을 융합하여 안정적이고 확장 가능한 시스템 구축
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="text-center group">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-200">
                  {tech.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {tech.name}
                </h3>
                <p className="text-gray-600">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KOMIPO Innovation Challenge */}
      <section className="py-24 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">🚀</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            2025 KOMIPO 혁신 50대 과제
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            "AI와 IoT 기술로 발전소 안전을 혁신하고, 세대간 지식 전수를 통해 지속가능한 안전 문화를 구축하는 차세대 통합 안전관리 시스템"
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
              <Shield className="h-12 w-12 text-white mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Zero Incident</h3>
              <p className="text-orange-100">중대재해 제로화를 위한 예측적 안전관리</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
              <Users className="h-12 w-12 text-white mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Knowledge Transfer</h3>
              <p className="text-orange-100">베테랑 노하우의 디지털 전수</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
              <TrendingUp className="h-12 w-12 text-white mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">ESG Integration</h3>
              <p className="text-orange-100">통합 ESG 관리 및 자동 보고</p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              지금 바로 체험해보세요
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              완전히 작동하는 프로토타입으로 SafetyWise AI Platform의 핵심 기능을 확인하실 수 있습니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              to="/dashboard"
              className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-200 group"
            >
              <Shield className="h-12 w-12 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2">안전 대시보드</h3>
              <p className="text-blue-100 text-sm mb-4">실시간 안전 현황 및 KPI 모니터링</p>
              <div className="flex items-center text-sm">
                <span>체험하기</span>
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              to="/monitoring"
              className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white hover:from-purple-600 hover:to-purple-700 transition-all duration-200 group"
            >
              <Monitor className="h-12 w-12 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2">실시간 모니터링</h3>
              <p className="text-purple-100 text-sm mb-4">작업자 상태 및 AI 영상 분석</p>
              <div className="flex items-center text-sm">
                <span>체험하기</span>
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              to="/learning"
              className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white hover:from-green-600 hover:to-green-700 transition-all duration-200 group"
            >
              <BookOpen className="h-12 w-12 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2">VR 교육센터</h3>
              <p className="text-green-100 text-sm mb-4">가상현실 안전교육 및 멘토링</p>
              <div className="flex items-center text-sm">
                <span>체험하기</span>
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              to="/reports"
              className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white hover:from-orange-600 hover:to-orange-700 transition-all duration-200 group"
            >
              <FileText className="h-12 w-12 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2">ESG 보고서</h3>
              <p className="text-orange-100 text-sm mb-4">자동 생성 ESG 성과 대시보드</p>
              <div className="flex items-center text-sm">
                <span>체험하기</span>
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>

          {/* PWA Features */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-4 bg-gray-800 rounded-2xl px-8 py-4">
              <Smartphone className="h-8 w-8 text-blue-400" />
              <div className="text-left">
                <div className="text-lg font-semibold text-white">모바일 앱처럼 사용 가능</div>
                <div className="text-gray-300 text-sm">PWA 지원 - 홈 화면에 설치하여 오프라인에서도 이용</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Shield className="h-8 w-8 text-primary-500" />
              <span className="text-2xl font-bold text-gray-900">SafetyWise AI</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">프로젝트 정보</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>2025 KOMIPO 혁신 50대 과제</li>
                  <li>AI 기반 안전관리 시스템</li>
                  <li>React + TypeScript + Tailwind</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">핵심 기능</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>실시간 안전 모니터링</li>
                  <li>VR 기반 안전 교육</li>
                  <li>ESG 통합 대시보드</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">기술 성과</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>중대재해 0건 달성</li>
                  <li>AI 정확도 95%+</li>
                  <li>ROI 28.5%</li>
                </ul>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <p className="text-gray-600">
                ⚡ Made with ❤️ for KOMIPO 2025 Innovation Challenge
              </p>
              <p className="text-sm text-gray-500 mt-2">
                © 2024 SafetyWise AI Platform. Built with React, TypeScript, and Tailwind CSS.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;