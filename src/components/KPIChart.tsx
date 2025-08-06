import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface KPIChartProps {
  title: string;
  subtitle: string;
}

const KPIChart: React.FC<KPIChartProps> = ({ title, subtitle }) => {
  // Mock data for demonstration
  const generateMockData = () => {
    const months = ['1월', '2월', '3월', '4월', '5월', '6월'];
    return months.map((month, index) => ({
      month,
      safety: Math.max(85, 100 - Math.random() * 10 - index * 2),
      education: Math.min(95, 70 + Math.random() * 15 + index * 3)
    }));
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
        <div className="absolute left-0 top-0 h-48 flex flex-col justify-between text-xs text-gray-400 -ml-8">
          <span>100%</span>
          <span>75%</span>
          <span>50%</span>
          <span>25%</span>
          <span>0%</span>
        </div>

        {/* Chart container */}
        <div className="ml-4 relative h-48">
          {/* Grid lines */}
          <div className="absolute inset-0 flex flex-col justify-between">
            {[0, 25, 50, 75, 100].map((value) => (
              <div key={value} className="border-t border-gray-100 w-full"></div>
            ))}
          </div>

          {/* Data visualization */}
          <div className="absolute inset-0 flex items-end justify-between px-4">
            {data.map((item, index) => {
              const safetyHeight = (item.safety / maxValue) * 100;
              const educationHeight = (item.education / maxValue) * 100;

              return (
                <div key={item.month} className="flex flex-col items-center space-y-1 flex-1">
                  <div className="w-full max-w-16 flex space-x-1">
                    {/* Safety bar */}
                    <div className="flex-1 relative">
                      <div
                        className="bg-primary-500 rounded-t transition-all duration-500 hover:bg-primary-600"
                        style={{ height: `${safetyHeight}%` }}
                      />
                      <div className="text-xs text-center mt-1 text-gray-600">
                        {Math.round(item.safety)}%
                      </div>
                    </div>
                    
                    {/* Education bar */}
                    <div className="flex-1 relative">
                      <div
                        className="bg-green-500 rounded-t transition-all duration-500 hover:bg-green-600"
                        style={{ height: `${educationHeight}%` }}
                      />
                      <div className="text-xs text-center mt-1 text-gray-600">
                        {Math.round(item.education)}%
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-xs text-gray-500 mt-2">{item.month}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex justify-center space-x-6 mt-4 pt-4 border-t border-gray-200">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-primary-500 rounded"></div>
          <span className="text-sm text-gray-600">안전 성과</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-500 rounded"></div>
          <span className="text-sm text-gray-600">교육 완료율</span>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="text-center p-3 bg-primary-50 rounded-lg">
          <div className="text-lg font-bold text-primary-700">98.7%</div>
          <div className="text-xs text-primary-600">평균 안전 점수</div>
        </div>
        <div className="text-center p-3 bg-green-50 rounded-lg">
          <div className="text-lg font-bold text-green-700">89.2%</div>
          <div className="text-xs text-green-600">평균 교육 완료율</div>
        </div>
      </div>
    </div>
  );
};

export default KPIChart;