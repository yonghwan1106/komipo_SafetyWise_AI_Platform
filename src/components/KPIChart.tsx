import React from 'react';
import { TrendingUp } from 'lucide-react';

interface KPIChartProps {
  title: string;
  subtitle: string;
}

const KPIChart: React.FC<KPIChartProps> = ({ title, subtitle }) => {
  // Mock data for demonstration
  const generateMockData = () => {
    if (title.includes('안전')) {
      const months = ['1월', '2월', '3월', '4월', '5월', '6월'];
      return months.map((month, index) => ({
        month,
        safety: Math.max(85, 100 - Math.random() * 5 - index * 1),
        education: Math.min(95, 70 + Math.random() * 10 + index * 4)
      }));
    } else {
      const months = ['1월', '2월', '3월', '4월', '5월', '6월'];
      return months.map((month, index) => ({
        month,
        safety: Math.max(70, 80 + Math.random() * 10 + index * 2),
        education: Math.max(75, 85 + Math.random() * 10 + index * 1.5)
      }));
    }
  };

  const data = generateMockData();
  const maxValue = 100;

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>
        <div className="flex items-center space-x-2 text-sm">
          <TrendingUp className="h-4 w-4 text-green-500" />
          <span className="text-green-600 font-medium">+12.5%</span>
        </div>
      </div>

      {/* Chart Area */}
      <div className="relative">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 h-56 flex flex-col justify-between text-xs text-gray-400 -ml-10 pb-8">
          <span className="font-medium">100%</span>
          <span className="font-medium">75%</span>
          <span className="font-medium">50%</span>
          <span className="font-medium">25%</span>
          <span className="font-medium">0%</span>
        </div>

        {/* Chart container */}
        <div className="ml-4 relative h-56">
          {/* Grid lines */}
          <div className="absolute inset-0 flex flex-col justify-between">
            {[100, 75, 50, 25, 0].map((value) => (
              <div key={value} className="flex items-center">
                <div className="border-t border-gray-200 w-full"></div>
                {value > 0 && <span className="text-xs text-gray-400 ml-2 w-8">{value}%</span>}
              </div>
            ))}
          </div>

          {/* Data visualization */}
          <div className="absolute inset-0 flex items-end justify-between px-4 pb-8">
            {data.map((item) => {
              // Calculate height in pixels based on chart container height (192px available for bars)
              const chartHeight = 192; // h-56 (224px) - padding (32px) = 192px
              const safetyHeight = Math.max(8, (item.safety / maxValue) * chartHeight);
              const educationHeight = Math.max(8, (item.education / maxValue) * chartHeight);

              return (
                <div key={item.month} className="flex flex-col items-center space-y-2 flex-1 group">
                  <div className="w-full max-w-24 flex space-x-1 items-end justify-center">
                    {/* Safety bar */}
                    <div className="flex-1 relative min-w-[16px]">
                      <div
                        className="bg-gradient-to-t from-primary-600 to-primary-400 rounded-t-lg shadow-lg transition-all duration-500 hover:from-primary-700 hover:to-primary-500 group-hover:scale-105 relative w-full"
                        style={{ height: `${safetyHeight}px` }}
                      >
                        {/* Value label on hover */}
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-primary-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                          {Math.round(item.safety)}%
                        </div>
                      </div>
                    </div>
                    
                    {/* Education bar */}
                    <div className="flex-1 relative min-w-[16px]">
                      <div
                        className="bg-gradient-to-t from-green-600 to-green-400 rounded-t-lg shadow-lg transition-all duration-500 hover:from-green-700 hover:to-green-500 group-hover:scale-105 relative w-full"
                        style={{ height: `${educationHeight}px` }}
                      >
                        {/* Value label on hover */}
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-green-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                          {Math.round(item.education)}%
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-sm font-medium text-gray-700 mt-2">{item.month}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Enhanced Legend */}
      <div className="flex justify-center space-x-8 mt-6 pt-4 border-t border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-4 h-4 bg-gradient-to-t from-primary-600 to-primary-400 rounded-sm shadow-sm"></div>
          <span className="text-sm font-medium text-gray-700">
            {title.includes('안전') ? '안전 성과' : '안전 점수'}
          </span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-4 h-4 bg-gradient-to-t from-green-600 to-green-400 rounded-sm shadow-sm"></div>
          <span className="text-sm font-medium text-gray-700">
            {title.includes('안전') ? '교육 완료율' : '만족도'}
          </span>
        </div>
      </div>

      {/* Enhanced Key Metrics */}
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="text-center p-4 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl border border-primary-200 hover:shadow-lg transition-all duration-200">
          <div className="text-2xl font-bold text-primary-700 mb-1">
            {Math.round(data.reduce((sum, item) => sum + item.safety, 0) / data.length)}%
          </div>
          <div className="text-xs text-primary-600 font-medium">
            {title.includes('안전') ? '평균 안전 점수' : '평균 안전 점수'}
          </div>
          <div className="flex items-center justify-center mt-2">
            <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
            <span className="text-xs text-green-600 font-medium">+5.2%</span>
          </div>
        </div>
        <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200 hover:shadow-lg transition-all duration-200">
          <div className="text-2xl font-bold text-green-700 mb-1">
            {Math.round(data.reduce((sum, item) => sum + item.education, 0) / data.length)}%
          </div>
          <div className="text-xs text-green-600 font-medium">
            {title.includes('안전') ? '평균 교육 완료율' : '평균 만족도'}
          </div>
          <div className="flex items-center justify-center mt-2">
            <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
            <span className="text-xs text-green-600 font-medium">+8.7%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KPIChart;