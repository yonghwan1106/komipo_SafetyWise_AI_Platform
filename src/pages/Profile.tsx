import React, { useState } from 'react';
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Award,
  BookOpen,
  Users,
  Star,
  Clock,
  Edit,
  Settings,
  Bell,
  Shield
} from 'lucide-react';

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', name: '개요', icon: User },
    { id: 'learning', name: '학습 현황', icon: BookOpen },
    { id: 'mentoring', name: '멘토링', icon: Users },
    { id: 'achievements', name: '성과', icon: Award },
    { id: 'settings', name: '설정', icon: Settings }
  ];

  const userProfile = {
    name: '김안전',
    position: '안전관리 팀장',
    department: '안전환경팀',
    employeeId: 'EMP-2024-001',
    email: 'safety.kim@komipo.co.kr',
    phone: '010-1234-5678',
    location: '본사 3층',
    joinDate: '2010-03-15',
    experience: '15년',
    avatar: 'https://ui-avatars.com/api/?name=김안전&background=2C5AA0&color=fff&size=128',
    safetyLevel: '최고급',
    certifications: [
      '산업안전기사',
      '건설안전기사', 
      '화공안전기사',
      'ISO 45001 심사원'
    ]
  };

  const learningStats = {
    totalCourses: 45,
    completedCourses: 38,
    inProgressCourses: 4,
    totalHours: 156,
    averageScore: 92.5,
    certifications: 18,
    currentStreak: 12
  };

  const mentoringStats = {
    menteesTotal: 8,
    menteesActive: 5,
    sessionsCompleted: 47,
    avgRating: 4.9,
    totalHours: 89,
    successRate: 94
  };

  const recentActivities = [
    {
      type: 'course_completed',
      title: 'VR 기반 발전기 정비 안전 교육 완료',
      date: '2024-10-28',
      score: 95
    },
    {
      type: 'mentoring',
      title: '신입사원 박정비와 멘토링 세션',
      date: '2024-10-27',
      duration: '2시간'
    },
    {
      type: 'achievement',
      title: '안전 교육 마스터 뱃지 획득',
      date: '2024-10-25',
      level: 'gold'
    },
    {
      type: 'safety_check',
      title: '정기 안전 점검 완료',
      date: '2024-10-24',
      location: '1호기 터빈실'
    }
  ];

  const achievements = [
    {
      id: 1,
      name: '안전 교육 마스터',
      description: '50개 이상의 안전 교육 과정 완료',
      icon: '🎓',
      level: 'gold',
      earnedDate: '2024-10-25',
      progress: 100
    },
    {
      id: 2,
      name: '멘토링 챔피언',
      description: '100시간 이상 멘토링 활동',
      icon: '🏆',
      level: 'silver',
      earnedDate: '2024-09-15',
      progress: 89
    },
    {
      id: 3,
      name: '제로 사고',
      description: '12개월 연속 무사고 달성',
      icon: '🛡️',
      level: 'platinum',
      earnedDate: '2024-10-01',
      progress: 100
    },
    {
      id: 4,
      name: 'AI 전문가',
      description: 'AI 기반 안전 시스템 활용 전문가',
      icon: '🤖',
      level: 'gold',
      earnedDate: '2024-08-20',
      progress: 100
    }
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'course_completed': return <BookOpen className="h-4 w-4 text-blue-500" />;
      case 'mentoring': return <Users className="h-4 w-4 text-green-500" />;
      case 'achievement': return <Award className="h-4 w-4 text-yellow-500" />;
      case 'safety_check': return <Shield className="h-4 w-4 text-purple-500" />;
      default: return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  const getLevelBadge = (level: string) => {
    const colors = {
      bronze: 'bg-orange-100 text-orange-800',
      silver: 'bg-gray-100 text-gray-800', 
      gold: 'bg-yellow-100 text-yellow-800',
      platinum: 'bg-purple-100 text-purple-800'
    };
    return colors[level as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="space-y-6">
      {/* Header with Profile Info */}
      <div className="card">
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
          <div className="flex-shrink-0">
            <img
              className="h-24 w-24 rounded-full border-4 border-primary-100"
              src={userProfile.avatar}
              alt={userProfile.name}
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              <h1 className="text-2xl font-bold text-gray-900">{userProfile.name}</h1>
              <span className="px-3 py-1 bg-primary-100 text-primary-800 text-sm font-medium rounded-full">
                {userProfile.safetyLevel}
              </span>
            </div>
            <div className="text-lg text-gray-600 mb-3">{userProfile.position}</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>{userProfile.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>{userProfile.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>{userProfile.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>입사: {userProfile.joinDate}</span>
              </div>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="btn-secondary flex items-center space-x-2">
              <Edit className="h-4 w-4" />
              <span>편집</span>
            </button>
            <button className="btn-primary flex items-center space-x-2">
              <Bell className="h-4 w-4" />
              <span>알림 설정</span>
            </button>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Tab Content */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Stats Cards */}
          <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="card text-center">
                <BookOpen className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">{learningStats.completedCourses}</div>
                <div className="text-sm text-gray-600">완료한 교육</div>
              </div>
              <div className="card text-center">
                <Users className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">{mentoringStats.menteesTotal}</div>
                <div className="text-sm text-gray-600">멘티 수</div>
              </div>
              <div className="card text-center">
                <Award className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">{achievements.length}</div>
                <div className="text-sm text-gray-600">획득 뱃지</div>
              </div>
            </div>

            {/* Recent Activities */}
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">최근 활동</h3>
              <div className="space-y-3">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50">
                    <div className="flex-shrink-0 mt-1">
                      {getActivityIcon(activity.type)}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">{activity.title}</div>
                      <div className="text-sm text-gray-500 mt-1">
                        {new Date(activity.date).toLocaleDateString('ko-KR')}
                        {activity.score && ` • 점수: ${activity.score}점`}
                        {activity.duration && ` • ${activity.duration}`}
                        {activity.location && ` • ${activity.location}`}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Certifications */}
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">보유 자격증</h3>
              <div className="space-y-2">
                {userProfile.certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-2 p-2 bg-gray-50 rounded">
                    <Award className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm text-gray-700">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">핵심 지표</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">평균 학습 점수</span>
                  <span className="font-semibold text-gray-900">{learningStats.averageScore}점</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">멘토링 평점</span>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="font-semibold text-gray-900">{mentoringStats.avgRating}</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">학습 연속일</span>
                  <span className="font-semibold text-gray-900">{learningStats.currentStreak}일</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'learning' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">학습 진도</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center p-6 bg-blue-50 rounded-xl">
                  <div className="text-3xl font-bold text-blue-700 mb-2">{learningStats.completedCourses}</div>
                  <div className="text-sm text-blue-600">완료한 과정</div>
                  <div className="mt-2 w-full bg-blue-200 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: `${(learningStats.completedCourses / learningStats.totalCourses) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div className="text-center p-6 bg-green-50 rounded-xl">
                  <div className="text-3xl font-bold text-green-700 mb-2">{learningStats.totalHours}</div>
                  <div className="text-sm text-green-600">총 학습 시간</div>
                  <div className="text-xs text-green-500 mt-1">이번 달: +24시간</div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900">이번 달 학습 목표</h4>
                  <Award className="h-5 w-5 text-purple-500" />
                </div>
                <div className="text-sm text-gray-600 mb-2">목표: 20시간 | 달성: 16시간</div>
                <div className="w-full bg-purple-200 rounded-full h-3">
                  <div className="bg-purple-500 h-3 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">최근 완료 과정</h3>
            <div className="space-y-3">
              {[
                { name: 'VR 기반 발전기 정비 안전 교육', score: 95, date: '2024-10-28' },
                { name: '중대재해처벌법 대응 안전관리', score: 92, date: '2024-10-20' },
                { name: 'AI 기반 위험 예측 시스템 운영', score: 88, date: '2024-10-15' }
              ].map((course, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-lg">
                  <div className="font-medium text-gray-900 mb-1">{course.name}</div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">{course.date}</span>
                    <span className="font-semibold text-green-600">{course.score}점</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'mentoring' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">멘토링 현황</h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-700">{mentoringStats.menteesActive}</div>
                <div className="text-sm text-green-600">활성 멘티</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-700">{mentoringStats.avgRating}</div>
                <div className="text-sm text-blue-600">평균 평점</div>
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-medium text-gray-900">현재 멘티</h4>
              {[
                { name: '박정비', department: '정비팀', progress: 75, sessions: 8 },
                { name: '이신입', department: '운영팀', progress: 45, sessions: 5 },
                { name: '김새내기', department: '안전팀', progress: 60, sessions: 6 }
              ].map((mentee, index) => (
                <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                  <div>
                    <div className="font-medium text-gray-900">{mentee.name}</div>
                    <div className="text-sm text-gray-500">{mentee.department} • {mentee.sessions}회 세션</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-900">{mentee.progress}%</div>
                    <div className="w-16 bg-gray-200 rounded-full h-2 mt-1">
                      <div 
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: `${mentee.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">최근 멘토링 세션</h3>
            <div className="space-y-3">
              {[
                { mentee: '박정비', topic: '터빈 정비 안전 절차', date: '2024-10-27', duration: '2시간' },
                { mentee: '이신입', topic: '발전소 안전 규정 교육', date: '2024-10-25', duration: '1.5시간' },
                { mentee: '김새내기', topic: 'VR 교육 프로그램 사용법', date: '2024-10-23', duration: '1시간' }
              ].map((session, index) => (
                <div key={index} className="p-3 border border-gray-200 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div className="font-medium text-gray-900">{session.mentee}</div>
                    <div className="text-xs text-gray-500">{session.date}</div>
                  </div>
                  <div className="text-sm text-gray-600 mb-1">{session.topic}</div>
                  <div className="text-xs text-gray-500">세션 시간: {session.duration}</div>
                </div>
              ))}
            </div>
            
            <button className="w-full mt-4 btn-primary">
              새 멘토링 세션 예약
            </button>
          </div>
        </div>
      )}

      {activeTab === 'achievements' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="card hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="text-4xl mb-3">{achievement.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{achievement.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{achievement.description}</p>
                
                <div className="flex justify-center mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelBadge(achievement.level)}`}>
                    {achievement.level.toUpperCase()}
                  </span>
                </div>
                
                <div className="text-sm text-gray-500 mb-3">
                  획득일: {new Date(achievement.earnedDate).toLocaleDateString('ko-KR')}
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${
                      achievement.progress === 100 ? 'bg-green-500' : 'bg-yellow-500'
                    }`}
                    style={{ width: `${achievement.progress}%` }}
                  ></div>
                </div>
                <div className="text-xs text-gray-500 mt-1">{achievement.progress}% 완료</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'settings' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">알림 설정</h3>
            <div className="space-y-4">
              {[
                { name: '안전 알림', description: '위험 상황 및 안전 관련 알림', enabled: true },
                { name: '교육 알림', description: '새로운 교육 과정 및 완료 알림', enabled: true },
                { name: '멘토링 알림', description: '멘토링 세션 및 관련 알림', enabled: false },
                { name: '성과 알림', description: '뱃지 획득 및 성과 관련 알림', enabled: true }
              ].map((setting, index) => (
                <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                  <div>
                    <div className="font-medium text-gray-900">{setting.name}</div>
                    <div className="text-sm text-gray-500">{setting.description}</div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked={setting.enabled} />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">개인정보 설정</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">이름</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  defaultValue={userProfile.name}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">이메일</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  defaultValue={userProfile.email}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">전화번호</label>
                <input
                  type="tel"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  defaultValue={userProfile.phone}
                />
              </div>
              <div className="pt-4 border-t border-gray-200">
                <button className="btn-primary mr-3">저장</button>
                <button className="btn-secondary">취소</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* KOMIPO Innovation Banner */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-8 text-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">👥 개인 맞춤형 안전 교육</h2>
          <p className="text-lg mb-4">KOMIPO 혁신 50대 과제 - AI 기반 개인별 학습 경로 및 멘토링 시스템</p>
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold">95%</div>
              <div className="text-indigo-100">교육 완료율</div>
              <div className="text-sm text-indigo-200">개인 맞춤형 학습</div>
            </div>
            <div>
              <div className="text-3xl font-bold">4.9★</div>
              <div className="text-indigo-100">멘토링 만족도</div>
              <div className="text-sm text-indigo-200">전문가 1:1 지도</div>
            </div>
            <div>
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-indigo-100">AI 지원</div>
              <div className="text-sm text-indigo-200">언제든 질의응답</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;