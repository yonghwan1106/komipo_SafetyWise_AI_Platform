import React, { useState } from 'react';
import {
  BookOpen,
  Video,
  Users,
  Award,
  Clock,
  Play,
  Download,
  Star,
  TrendingUp,
  VrIcon,
  Brain,
  Target
} from 'lucide-react';

const LearningCenter: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = [
    { id: 'all', name: '전체', count: 45 },
    { id: 'safety', name: '안전 교육', count: 18 },
    { id: 'technical', name: '기술 교육', count: 15 },
    { id: 'vr', name: 'VR 실습', count: 8 },
    { id: 'mentoring', name: '멘토링', count: 4 }
  ];

  const courses = [
    {
      id: 1,
      title: 'VR 기반 발전기 정비 안전 교육',
      description: '3D 가상현실 환경에서 안전한 발전기 정비 작업 실습',
      instructor: '박베테랑 (30년 경력)',
      duration: '2시간 30분',
      difficulty: 'intermediate',
      rating: 4.9,
      enrolled: 156,
      type: 'vr',
      progress: 0,
      thumbnail: '🔧',
      tags: ['VR', '발전기', '정비', '안전']
    },
    {
      id: 2,
      title: '중대재해처벌법 대응 안전관리',
      description: '최신 중대재해처벌법에 따른 현장 안전관리 가이드',
      instructor: '김안전 팀장',
      duration: '1시간 45분',
      difficulty: 'beginner',
      rating: 4.7,
      enrolled: 203,
      type: 'safety',
      progress: 85,
      thumbnail: '⚖️',
      tags: ['법률', '안전', '관리']
    },
    {
      id: 3,
      title: 'AI 기반 위험 예측 시스템 운영',
      description: 'SafetyWise AI 시스템 활용 및 데이터 분석 교육',
      instructor: '이데이터 박사',
      duration: '3시간 15분',
      difficulty: 'advanced',
      rating: 4.8,
      enrolled: 89,
      type: 'technical',
      progress: 45,
      thumbnail: '🤖',
      tags: ['AI', '데이터', '분석']
    },
    {
      id: 4,
      title: '멘토와 함께하는 터빈 점검 실습',
      description: '베테랑 기술자와 1:1 멘토링을 통한 실무 교육',
      instructor: '최터빈 수석',
      duration: '4시간',
      difficulty: 'intermediate',
      rating: 5.0,
      enrolled: 34,
      type: 'mentoring',
      progress: 0,
      thumbnail: '🎯',
      tags: ['멘토링', '터빈', '실습']
    },
    {
      id: 5,
      title: 'VR 응급상황 대응 훈련',
      description: '가상현실에서 체험하는 화재, 폭발 등 응급상황 대응',
      instructor: 'VR 교육팀',
      duration: '1시간 30분',
      difficulty: 'intermediate',
      rating: 4.6,
      enrolled: 127,
      type: 'vr',
      progress: 100,
      thumbnail: '🚨',
      tags: ['VR', '응급', '대응', '훈련']
    },
    {
      id: 6,
      title: '고령친화 디지털 도구 활용법',
      description: '시니어 직원을 위한 디지털 도구 사용법 교육',
      instructor: '정디지털 강사',
      duration: '2시간',
      difficulty: 'beginner',
      rating: 4.5,
      enrolled: 78,
      type: 'technical',
      progress: 65,
      thumbnail: '👴',
      tags: ['시니어', '디지털', '도구']
    }
  ];

  const stats = [
    { name: '총 교육 과정', value: '45개', icon: BookOpen, color: 'blue' },
    { name: '완료율', value: '89.2%', icon: Award, color: 'green' },
    { name: '수강 중인 과정', value: '12개', icon: Clock, color: 'yellow' },
    { name: '멘토링 매칭', value: '95%', icon: Users, color: 'purple' }
  ];

  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(course => course.type === selectedCategory);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'text-green-600 bg-green-50';
      case 'intermediate': return 'text-yellow-600 bg-yellow-50';
      case 'advanced': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getDifficultyText = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return '초급';
      case 'intermediate': return '중급';
      case 'advanced': return '고급';
      default: return '미정';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">교육 센터</h1>
          <p className="text-gray-600 mt-1">AI와 VR 기반 개인 맞춤형 안전 교육 플랫폼</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="btn-secondary">
            📈 학습 분석
          </button>
          <button className="btn-primary">
            ➕ 새 교육 만들기
          </button>
        </div>
      </div>

      {/* Stats */}
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
                stat.color === 'yellow' ? 'bg-yellow-50 text-yellow-600' :
                'bg-purple-50 text-purple-600'
              }`}>
                <stat.icon className="h-6 w-6" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* My Learning Progress */}
      <div className="card">
        <h2 className="text-xl font-bold text-gray-900 mb-6">나의 학습 진도</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-primary-50 rounded-xl">
            <div className="text-3xl mb-2">📚</div>
            <div className="text-2xl font-bold text-primary-700">6</div>
            <div className="text-sm text-primary-600">진행 중인 과정</div>
          </div>
          <div className="text-center p-6 bg-green-50 rounded-xl">
            <div className="text-3xl mb-2">✅</div>
            <div className="text-2xl font-bold text-green-700">24</div>
            <div className="text-sm text-green-600">완료한 과정</div>
          </div>
          <div className="text-center p-6 bg-yellow-50 rounded-xl">
            <div className="text-3xl mb-2">🏆</div>
            <div className="text-2xl font-bold text-yellow-700">18</div>
            <div className="text-sm text-yellow-600">획득한 인증</div>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-gray-900">이번 달 학습 목표</h3>
            <span className="text-sm text-gray-500">75% 달성</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" style={{ width: '75%' }}></div>
          </div>
          <div className="text-sm text-gray-600">목표: 4개 과정 완료 | 완료: 3개 과정</div>
        </div>
      </div>

      {/* Filters and View Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded ${viewMode === 'grid' ? 'bg-primary-100 text-primary-600' : 'text-gray-400'}`}
          >
            <div className="w-4 h-4 grid grid-cols-2 gap-0.5">
              <div className="bg-current"></div>
              <div className="bg-current"></div>
              <div className="bg-current"></div>
              <div className="bg-current"></div>
            </div>
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded ${viewMode === 'list' ? 'bg-primary-100 text-primary-600' : 'text-gray-400'}`}
          >
            <div className="w-4 h-4 flex flex-col gap-1">
              <div className="h-0.5 bg-current"></div>
              <div className="h-0.5 bg-current"></div>
              <div className="h-0.5 bg-current"></div>
            </div>
          </button>
        </div>
      </div>

      {/* Course Grid/List */}
      <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
        {filteredCourses.map((course) => (
          <div key={course.id} className={`card hover:shadow-lg transition-shadow ${viewMode === 'list' ? 'flex space-x-6' : ''}`}>
            {viewMode === 'grid' ? (
              <>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{course.thumbnail}</div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-700">{course.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{course.title}</h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{course.description}</p>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">강사: {course.instructor}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(course.difficulty)}`}>
                      {getDifficultyText(course.difficulty)}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{course.enrolled}명</span>
                    </div>
                  </div>
                  
                  {course.progress > 0 && (
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">진도율</span>
                        <span className="font-medium text-primary-600">{course.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-primary-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {course.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-2">
                    {course.progress === 100 ? (
                      <button className="flex-1 btn-secondary flex items-center justify-center space-x-2">
                        <Download className="h-4 w-4" />
                        <span>인증서</span>
                      </button>
                    ) : course.progress > 0 ? (
                      <button className="flex-1 btn-primary flex items-center justify-center space-x-2">
                        <Play className="h-4 w-4" />
                        <span>계속하기</span>
                      </button>
                    ) : (
                      <button className="flex-1 btn-primary flex items-center justify-center space-x-2">
                        <Play className="h-4 w-4" />
                        <span>시작하기</span>
                      </button>
                    )}
                    {course.type === 'vr' && (
                      <button className="btn-secondary p-2">
                        <VrIcon className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="flex-shrink-0">
                  <div className="text-6xl">{course.thumbnail}</div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
                      <p className="text-gray-600 mb-3">{course.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                        <span>강사: {course.instructor}</span>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span>{course.rating}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="h-4 w-4" />
                          <span>{course.enrolled}명</span>
                        </div>
                      </div>
                      {course.progress > 0 && (
                        <div className="mb-3">
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-600">진도율</span>
                            <span className="font-medium text-primary-600">{course.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-primary-500 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${course.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col items-end space-y-3 ml-6">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(course.difficulty)}`}>
                        {getDifficultyText(course.difficulty)}
                      </span>
                      <button className="btn-primary flex items-center space-x-2">
                        <Play className="h-4 w-4" />
                        <span>{course.progress > 0 ? '계속하기' : '시작하기'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* KOMIPO Innovation Banner */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">🎓 지식 전수 플랫폼</h2>
          <p className="text-lg mb-4">KOMIPO 혁신 50대 과제 - 베테랑 노하우의 체계적 디지털화 및 전수</p>
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold">90%</div>
              <div className="text-green-100">지식 전수율</div>
            </div>
            <div>
              <div className="text-3xl font-bold">60%</div>
              <div className="text-green-100">학습시간 단축</div>
            </div>
            <div>
              <div className="text-3xl font-bold">95%</div>
              <div className="text-green-100">멘토링 매칭</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningCenter;