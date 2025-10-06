import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { Crown, Users, Map, TrendingDown, Shield, Globe, Calendar, Award, ChevronDown, User } from 'lucide-react';

const KokandDashboard = () => {
  const [activePage, setActivePage] = useState('xonlar');

  const khans = [
    { name: 'Shohruxbiy', start: 1709, end: 1721, years: 12, status: 'Barqaror' },
    { name: 'Abdurahimbiy', start: 1721, end: 1733, years: 12, status: 'Barqaror' },
    { name: 'Abdulkarimbiy', start: 1733, end: 1750, years: 17, status: 'Barqaror' },
    { name: 'Erdonabiy', start: 1753, end: 1762, years: 9, status: "O'rtacha" },
    { name: 'Norbotabiy', start: 1763, end: 1798, years: 35, status: 'Barqaror' },
    { name: 'Olimxon', start: 1800, end: 1809, years: 9, status: 'Barqaror' },
    { name: 'Umarxon', start: 1809, end: 1822, years: 13, status: 'Beqaror' },
    { name: 'Muhammad Alixon', start: 1822, end: 1841, years: 19, status: 'Barqaror' },
    { name: 'Sheralixon', start: 1842, end: 1844, years: 2, status: 'Juda beqaror' },
    { name: 'Murodxon', start: 1845, end: 1845, years: 1, status: 'Juda beqaror' },
    { name: 'Xudoyorxon', start: 1845, end: 1858, years: 13, status: 'Beqaror' },
    { name: 'Mallaxon', start: 1858, end: 1862, years: 4, status: 'Juda beqaror' },
  ];

  const stabilityData = [
    { period: 'Qurilish\n1709-1750', stability: 75, khans: 3 },
    { period: 'Rivojlanish\n1750-1800', stability: 85, khans: 2 },
    { period: 'Oltin davr\n1800-1842', stability: 90, khans: 3 },
    { period: 'Inqiroz\n1842-1858', stability: 30, khans: 4 },
    { period: 'Beqarorlik\n1858-1865', stability: 20, khans: 4 },
    { period: 'Rossiya\n1865-1875', stability: 35, khans: 1 },
    { period: 'Inqilob\n1875-1876', stability: 10, khans: 2 },
  ];

  const powerBalance = [
    { year: 1842, xon: 40, qushbegi: 30, beklar: 30, rossiya: 0 },
    { year: 1850, xon: 35, qushbegi: 25, beklar: 40, rossiya: 0 },
    { year: 1858, xon: 30, qushbegi: 20, beklar: 50, rossiya: 0 },
    { year: 1865, xon: 25, qushbegi: 15, beklar: 30, rossiya: 30 },
    { year: 1870, xon: 20, qushbegi: 10, beklar: 20, rossiya: 50 },
    { year: 1875, xon: 15, qushbegi: 5, beklar: 10, rossiya: 70 },
    { year: 1876, xon: 0, qushbegi: 0, beklar: 0, rossiya: 100 },
  ];

  const bekliks = [
    { name: 'Toshkent', importance: 95, independence: 75, rebellions: 8, loyalty: 25 },
    { name: 'Chimkent', importance: 80, independence: 65, rebellions: 5, loyalty: 35 },
    { name: 'Osh', importance: 75, independence: 45, rebellions: 3, loyalty: 55 },
    { name: 'Andijon', importance: 85, independence: 35, rebellions: 6, loyalty: 65 },
    { name: 'Margilon', importance: 80, independence: 35, rebellions: 4, loyalty: 65 },
    { name: 'Namangan', importance: 70, independence: 45, rebellions: 5, loyalty: 55 },
    { name: 'Qashqar', importance: 90, independence: 85, rebellions: 7, loyalty: 15 },
  ];

  const foreignRelations = [
    { name: 'Buxoro', impact: 95, type: 'Dushman' },
    { name: 'Xiva', impact: 60, type: 'Neytral' },
    { name: 'Rossiya', impact: 100, type: 'Bosqinchi' },
    { name: 'Qozoqlar', impact: 70, type: 'Nazorat' },
    { name: 'Qashqar', impact: 75, type: 'Nazorat' },
    { name: 'Britaniya', impact: 30, type: 'Minimal' },
  ];

  const hierarchyData = {
    name: 'Xon',
    power: 100,
    description: 'Oliy hukmdor, absolut hokimiyat',
    children: [
      {
        name: 'Qushbegi',
        power: 75,
        description: 'Bosh vazir, harbiy qoshin boshligi',
        children: [
          { name: 'Mingboshi', power: 35, description: '1000 askar boshligi', children: [
            { name: 'Yuzbochilar', power: 25, description: '100 askar boshligi', children: [
              { name: 'Askarlar', power: 10, description: 'Oddiy qoshin' }
            ]}
          ]},
          { name: 'Yasavulboshi', power: 30, description: 'Saroy nazoratchisi', children: [
            { name: 'Yasavullar', power: 15, description: 'Saroy xizmatkorlari' }
          ]}
        ]
      },
      {
        name: 'Devonbegi',
        power: 55,
        description: 'Moliya va mamuriviy ishlar',
        children: [
          { name: 'Zakotchilar', power: 30, description: 'Soliq yiguvchilar' },
          { name: 'Mirza', power: 25, description: 'Kotiblar va hujjatlar' }
        ]
      },
      {
        name: 'Qozikalon',
        power: 45,
        description: 'Shariatni qollash, sud',
        children: [
          { name: 'Qozilar', power: 30, description: 'Sud sudyalari' },
          { name: 'Muftiylar', power: 25, description: 'Diniy maslahatchilar' },
          { name: 'Dodkhoh', power: 15, description: 'Ariza qabul qiluvchi' }
        ]
      },
      {
        name: 'Beklar',
        power: 50,
        description: 'Viloyat hokimlari',
        children: [
          { name: 'Mahalliy rahbarlar', power: 25, description: 'Shahar va qishloq boshliqlari' }
        ]
      }
    ]
  };

  const events = [
    { year: 1709, event: 'Xonlik tashkil', impact: 100 },
    { year: 1745, event: 'Buxoro urushi', impact: -20 },
    { year: 1805, event: 'Toshkent olindi', impact: 50 },
    { year: 1810, event: 'Olimxon oldirildi', impact: -40 },
    { year: 1835, event: 'Oltin davr', impact: 80 },
    { year: 1842, event: 'M.Alixon oldirildi', impact: -60 },
    { year: 1865, event: 'Toshkent yoqoldi', impact: -50 },
    { year: 1868, event: 'Protektorat', impact: -60 },
    { year: 1875, event: 'Isyon', impact: -80 },
    { year: 1876, event: 'Tugash', impact: -100 },
  ];

  const COLORS = ['#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899', '#14b8a6'];

  const pages = [
    { id: 'xonlar', name: 'Xonlar', icon: Crown },
    { id: 'barqarorlik', name: 'Barqarorlik', icon: TrendingDown },
    { id: 'kuchlar', name: 'Siyosiy Kuchlar', icon: Shield },
    { id: 'bekliklar', name: 'Bekliklar', icon: Map },
    { id: 'tashqi', name: 'Tashqi Aloqalar', icon: Globe },
    { id: 'lavozimlar', name: 'Lavozimlar', icon: Users },
    { id: 'voqealar', name: 'Voqealar', icon: Calendar },
    { id: 'statistika', name: 'Statistika', icon: Award },
  ];

  const HierarchyNode = ({ node, level = 0 }) => {
    const [isOpen, setIsOpen] = useState(level < 2);
    const hasChildren = node.children && node.children.length > 0;
    
    const colors = ['bg-yellow-500', 'bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-pink-500'];
    const bgColors = ['bg-yellow-900/30', 'bg-blue-900/30', 'bg-green-900/30', 'bg-purple-900/30', 'bg-pink-900/30'];
    
    return (
      <div className={`ml-${level * 8}`}>
        <div 
          className={`${bgColors[level % bgColors.length]} rounded-lg p-4 mb-3 border-l-4 border-yellow-500 cursor-pointer hover:scale-105 transition-all`}
          onClick={() => hasChildren && setIsOpen(!isOpen)}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 ${colors[level % colors.length]} rounded-full flex items-center justify-center`}>
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">{node.name}</h4>
                <p className="text-slate-300 text-sm">{node.description}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-white">{node.power}%</div>
              {hasChildren && (
                <ChevronDown className={`w-6 h-6 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
              )}
            </div>
          </div>
        </div>
        
        {hasChildren && isOpen && (
          <div className="ml-8 border-l-2 border-slate-600 pl-4">
            {node.children.map((child, idx) => (
              <HierarchyNode key={idx} node={child} level={level + 1} />
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="bg-gradient-to-r from-purple-800 to-blue-800 text-white p-6 shadow-2xl">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
            <Crown className="w-10 h-10 text-yellow-300" />
            QOQON XONLIGI DASHBOARD
          </h1>
          <p className="text-purple-200 text-lg">1709-1876 | Tarixiy Malumotlar va Tahlil</p>
        </div>
      </div>

      <div className="bg-slate-800 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto gap-2 py-3">
            {pages.map(page => {
              const Icon = page.icon;
              return (
                <button
                  key={page.id}
                  onClick={() => setActivePage(page.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                    activePage === page.id
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg scale-105'
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {page.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        
        {activePage === 'xonlar' && (
          <div className="space-y-6">
            <div className="bg-slate-800 rounded-xl p-6 shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Crown className="text-yellow-400" />
                Xonlar Hukmronlik Muddati
              </h2>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={khans}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="name" angle={-45} textAnchor="end" height={120} stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px' }}
                    labelStyle={{ color: '#fff' }}
                  />
                  <Bar dataKey="years" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-800 rounded-xl p-6 shadow-2xl">
                <h3 className="text-xl font-bold text-white mb-4">Xonlar Holati</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={[
                        { name: 'Barqaror', value: 6 },
                        { name: 'Beqaror', value: 3 },
                        { name: 'Juda beqaror', value: 3 },
                      ]}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      label
                    >
                      {[0, 1, 2].map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-slate-800 rounded-xl p-6 shadow-2xl">
                <h3 className="text-xl font-bold text-white mb-4">Xronologiya</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={khans}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="start" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" />
                    <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none' }} />
                    <Line type="monotone" dataKey="years" stroke="#3b82f6" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-4">Xonlar Royxati</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-slate-700">
                    <tr>
                      <th className="p-3 text-slate-300">#</th>
                      <th className="p-3 text-slate-300">Xon nomi</th>
                      <th className="p-3 text-slate-300">Davr</th>
                      <th className="p-3 text-slate-300">Muddati</th>
                      <th className="p-3 text-slate-300">Holati</th>
                    </tr>
                  </thead>
                  <tbody>
                    {khans.map((khan, idx) => (
                      <tr key={idx} className="border-b border-slate-700 hover:bg-slate-700/50">
                        <td className="p-3 text-slate-400">{idx + 1}</td>
                        <td className="p-3 text-white font-semibold">{khan.name}</td>
                        <td className="p-3 text-slate-300">{khan.start}-{khan.end}</td>
                        <td className="p-3 text-purple-400">{khan.years} yil</td>
                        <td className="p-3">
                          <span className={`px-3 py-1 rounded-full text-sm ${
                            khan.status === 'Barqaror' ? 'bg-green-900/50 text-green-300' :
                            khan.status === 'Beqaror' ? 'bg-yellow-900/50 text-yellow-300' :
                            'bg-red-900/50 text-red-300'
                          }`}>
                            {khan.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activePage === 'barqarorlik' && (
          <div className="space-y-6">
            <div className="bg-slate-800 rounded-xl p-6 shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <TrendingDown className="text-red-400" />
                Barqarorlik Dinamikasi (1709-1876)
              </h2>
              <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={stabilityData}>
                  <defs>
                    <linearGradient id="colorStability" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="period" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none' }} />
                  <Area type="monotone" dataKey="stability" stroke="#10b981" fillOpacity={1} fill="url(#colorStability)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-xl p-6 shadow-2xl text-white">
                <h3 className="text-lg font-semibold mb-2">Eng Barqaror Davr</h3>
                <p className="text-3xl font-bold">1800-1842</p>
                <p className="text-green-200">Oltin Davr - 90%</p>
              </div>
              <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-xl p-6 shadow-2xl text-white">
                <h3 className="text-lg font-semibold mb-2">Eng Beqaror Davr</h3>
                <p className="text-3xl font-bold">1858-1865</p>
                <p className="text-red-200">Doimiy Beqarorlik - 20%</p>
              </div>
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-6 shadow-2xl text-white">
                <h3 className="text-lg font-semibold mb-2">Ortacha Barqarorlik</h3>
                <p className="text-3xl font-bold">50.7%</p>
                <p className="text-blue-200">1709-1876</p>
              </div>
            </div>
          </div>
        )}

        {activePage === 'kuchlar' && (
          <div className="space-y-6">
            <div className="bg-slate-800 rounded-xl p-6 shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Shield className="text-blue-400" />
                Siyosiy Kuchlar Balansi (1842-1876)
              </h2>
              <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={powerBalance}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="year" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none' }} />
                  <Legend />
                  <Area type="monotone" dataKey="xon" stackId="1" stroke="#3b82f6" fill="#3b82f6" name="Xon" />
                  <Area type="monotone" dataKey="qushbegi" stackId="1" stroke="#10b981" fill="#10b981" name="Qushbegi" />
                  <Area type="monotone" dataKey="beklar" stackId="1" stroke="#f59e0b" fill="#f59e0b" name="Beklar" />
                  <Area type="monotone" dataKey="rossiya" stackId="1" stroke="#ef4444" fill="#ef4444" name="Rossiya" />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Lavozimlar Iyerarxiyasi va Kuchlar Taqsimoti</h3>
              <p className="text-slate-400 mb-6">Har bir lavozim ozidan pastdagi lavozimlarni boshqaradi</p>
              <div className="space-y-4">
                {['Xon → Hammaga', 'Qushbegi → Harbiy qismga', 'Devonbegi → Moliya bolimiga', 'Qozikalon → Sud tizimiga', 'Beklar → Viloyatlarga'].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 bg-slate-700 rounded-lg">
                    <div className="w-3 h-3 rounded-full" style={{backgroundColor: COLORS[idx]}} />
                    <span className="text-white text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-4">1876-yildagi Oxirgi Kuch Taqsimoti</h3>
              <div className="space-y-4">
                {['xon', 'qushbegi', 'beklar', 'rossiya'].map((key, idx) => (
                  <div key={key}>
                    <div className="flex justify-between mb-1">
                      <span className="text-white capitalize text-lg font-semibold">{key}</span>
                      <span className="text-slate-400 text-lg">{powerBalance[powerBalance.length-1][key]}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-6">
                      <div 
                        className="h-6 rounded-full transition-all duration-1000 flex items-center justify-end pr-2"
                        style={{ 
                          width: `${powerBalance[powerBalance.length-1][key]}%`,
                          background: COLORS[idx]
                        }}
                      >
                        {powerBalance[powerBalance.length-1][key] > 10 && (
                          <span className="text-white text-sm font-bold">{powerBalance[powerBalance.length-1][key]}%</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activePage === 'bekliklar' && (
          <div className="space-y-6">
            <div className="bg-slate-800 rounded-xl p-6 shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Map className="text-green-400" />
                Bekliklar Tahlili
              </h2>
              <ResponsiveContainer width="100%" height={400}>
                <RadarChart data={bekliks}>
                  <PolarGrid stroke="#374151" />
                  <PolarAngleAxis dataKey="name" stroke="#9ca3af" />
                  <PolarRadiusAxis stroke="#9ca3af" />
                  <Radar name="Ahamiyat" dataKey="importance" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
                  <Radar name="Mustaqillik" dataKey="independence" stroke="#ef4444" fill="#ef4444" fillOpacity={0.6} />
                  <Legend />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-800 rounded-xl p-6 shadow-2xl">
                <h3 className="text-xl font-bold text-white mb-4">Isyonlar Soni</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={bekliks}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" />
                    <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none' }} />
                    <Bar dataKey="rebellions" fill="#ef4444" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-slate-800 rounded-xl p-6 shadow-2xl">
                <h3 className="text-xl font-bold text-white mb-4">Sodiqlik Darajasi</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={bekliks} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis type="number" stroke="#9ca3af" />
                    <YAxis dataKey="name" type="category" stroke="#9ca3af" />
                    <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none' }} />
                    <Bar dataKey="loyalty" fill="#10b981" radius={[0, 8, 8, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {activePage === 'tashqi' && (
          <div className="space-y-6">
            <div className="bg-slate-800 rounded-xl p-6 shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Globe className="text-purple-400" />
                Tashqi Munosabatlar
              </h2>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={foreignRelations}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="name" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none' }} />
                  <Bar dataKey="impact" fill="#8b5cf6" radius={[8, 8, 0, 0]}>
                    {foreignRelations.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {foreignRelations.slice(0, 3).map((relation, idx) => (
                <div key={idx} className="bg-slate-800 rounded-xl p-6 shadow-2xl">
                  <h3 className="text-lg font-bold text-white mb-2">{relation.name}</h3>
                  <p className="text-3xl font-bold text-purple-400 mb-2">{relation.impact}%</p>
                  <p className="text-slate-400">{relation.type}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activePage === 'lavozimlar' && (
          <div className="space-y-6">
            <div className="bg-slate-800 rounded-xl p-6 shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Users className="text-yellow-400" />
                Davlat Tuzilmasi - Iyerarxik Korinish
              </h2>
              <p className="text-slate-400 mb-6 text-lg">
                Qoqon xonligidagi hokimiyat tuzilmasi va boysinish tartibi. 
                Har bir lavozim pastroq lavozimlarni boshqaradi va nazorat qiladi.
              </p>
              
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6">
                <HierarchyNode node={hierarchyData} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-800 rounded-xl p-6 shadow-2xl">
                <h3 className="text-xl font-bold text-white mb-4">Asosiy Lavozimlar</h3>
                <div className="space-y-3">
                  <div className="p-4 bg-yellow-900/30 rounded-lg border-l-4 border-yellow-500">
                    <h4 className="text-yellow-400 font-bold mb-1">Xon (100%)</h4>
                    <p className="text-slate-300 text-sm">Barcha hokimiyat egasi, oxirgi qarorlarni qabul qiluvchi</p>
                  </div>
                  <div className="p-4 bg-blue-900/30 rounded-lg border-l-4 border-blue-500">
                    <h4 className="text-blue-400 font-bold mb-1">Qushbegi (75%)</h4>
                    <p className="text-slate-300 text-sm">Harbiy qoshin, mudofaa va bosh vazir</p>
                  </div>
                  <div className="p-4 bg-green-900/30 rounded-lg border-l-4 border-green-500">
                    <h4 className="text-green-400 font-bold mb-1">Devonbegi (55%)</h4>
                    <p className="text-slate-300 text-sm">Moliya, soliqlar va iqtisodiy ishlar</p>
                  </div>
                  <div className="p-4 bg-purple-900/30 rounded-lg border-l-4 border-purple-500">
                    <h4 className="text-purple-400 font-bold mb-1">Qozikalon (45%)</h4>
                    <p className="text-slate-300 text-sm">Sud tizimi va shariatni qollash</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800 rounded-xl p-6 shadow-2xl">
                <h3 className="text-xl font-bold text-white mb-4">Boysinish Zanjiri</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                    <div className="flex-1">
                      <p className="text-white font-semibold">Xon → Barcha rahbarlar</p>
                      <p className="text-slate-400 text-sm">Qushbegi, Devonbegi, Qozikalon, Beklar</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
                    <div className="flex-1">
                      <p className="text-white font-semibold">Qushbegi → Harbiy qism</p>
                      <p className="text-slate-400 text-sm">Mingboshi, Yasavulboshi</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
                    <div className="flex-1">
                      <p className="text-white font-semibold">Mingboshi → Qoshin</p>
                      <p className="text-slate-400 text-sm">Yuzbochilar → Askarlar</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">4</div>
                    <div className="flex-1">
                      <p className="text-white font-semibold">Devonbegi → Moliya</p>
                      <p className="text-slate-400 text-sm">Zakotchilar, Mirzalar</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold">5</div>
                    <div className="flex-1">
                      <p className="text-white font-semibold">Qozikalon → Sud</p>
                      <p className="text-slate-400 text-sm">Qozilar, Muftiylar, Dodkhoh</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activePage === 'voqealar' && (
          <div className="space-y-6">
            <div className="bg-slate-800 rounded-xl p-6 shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Calendar className="text-red-400" />
                Muhim Tarixiy Voqealar
              </h2>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={events}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="year" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none' }} />
                  <Line type="monotone" dataKey="impact" stroke="#ef4444" strokeWidth={3} dot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-4">Voqealar Jadvali</h3>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {events.map((event, idx) => (
                  <div key={idx} className={`p-4 rounded-lg ${event.impact > 0 ? 'bg-green-900/30' : 'bg-red-900/30'}`}>
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-slate-400 text-sm">{event.year}</span>
                        <h4 className="text-white font-semibold">{event.event}</h4>
                      </div>
                      <span className={`text-2xl font-bold ${event.impact > 0 ? 'text-green-400' : 'text-red-400'}`}>
                        {event.impact > 0 ? '+' : ''}{event.impact}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activePage === 'statistika' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-6 shadow-2xl text-white">
                <Award className="w-12 h-12 mb-3 opacity-75" />
                <h3 className="text-lg font-semibold mb-2">Jami Xonlar</h3>
                <p className="text-4xl font-bold">12</p>
                <p className="text-blue-200 text-sm">1709-1862</p>
              </div>
              <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl p-6 shadow-2xl text-white">
                <Crown className="w-12 h-12 mb-3 opacity-75" />
                <h3 className="text-lg font-semibold mb-2">Ortacha Hukmronlik</h3>
                <p className="text-4xl font-bold">11.8</p>
                <p className="text-purple-200 text-sm">yil</p>
              </div>
              <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-xl p-6 shadow-2xl text-white">
                <TrendingDown className="w-12 h-12 mb-3 opacity-75" />
                <h3 className="text-lg font-semibold mb-2">Eng Uzun Hukmronlik</h3>
                <p className="text-4xl font-bold">35</p>
                <p className="text-green-200 text-sm">yil - Norbotabiy</p>
              </div>
              <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-xl p-6 shadow-2xl text-white">
                <Shield className="w-12 h-12 mb-3 opacity-75" />
                <h3 className="text-lg font-semibold mb-2">Oldirilgan Xonlar</h3>
                <p className="text-4xl font-bold">35%</p>
                <p className="text-red-200 text-sm">6 ta xon</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-800 rounded-xl p-6 shadow-2xl">
                <h3 className="text-xl font-bold text-white mb-4">Davr Boyicha Xonlar</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={stabilityData}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="khans"
                      label={({period, khans}) => `${khans} xon`}
                    >
                      {stabilityData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none' }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-slate-800 rounded-xl p-6 shadow-2xl">
                <h3 className="text-xl font-bold text-white mb-4">Umumiy Korsatkichlar</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-slate-700 rounded-lg">
                    <span className="text-slate-300">Jami Isyonlar (1842-1876)</span>
                    <span className="text-2xl font-bold text-red-400">73</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-700 rounded-lg">
                    <span className="text-slate-300">Yiliga Ortacha Isyonlar</span>
                    <span className="text-2xl font-bold text-orange-400">2.1</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-700 rounded-lg">
                    <span className="text-slate-300">Eng Katta Hudud</span>
                    <span className="text-2xl font-bold text-green-400">500K km²</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-700 rounded-lg">
                    <span className="text-slate-300">Yoqotilgan Hududlar</span>
                    <span className="text-2xl font-bold text-red-400">70%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-4">Tarixiy Timeline</h3>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-green-500 via-yellow-500 to-red-500"></div>
                <div className="space-y-6 ml-12">
                  <div className="relative">
                    <div className="absolute -left-[2.4rem] w-6 h-6 rounded-full bg-green-500 border-4 border-slate-800"></div>
                    <div className="bg-slate-700 rounded-lg p-4">
                      <h4 className="text-green-400 font-bold">1709-1800: Qurilish va Rivojlanish</h4>
                      <p className="text-slate-300 text-sm">Xonlik tashkil topdi va mustahkamlandi</p>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[2.4rem] w-6 h-6 rounded-full bg-yellow-500 border-4 border-slate-800"></div>
                    <div className="bg-slate-700 rounded-lg p-4">
                      <h4 className="text-yellow-400 font-bold">1800-1842: Oltin Davr</h4>
                      <p className="text-slate-300 text-sm">Eng kuchli va eng katta hudud davri</p>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[2.4rem] w-6 h-6 rounded-full bg-orange-500 border-4 border-slate-800"></div>
                    <div className="bg-slate-700 rounded-lg p-4">
                      <h4 className="text-orange-400 font-bold">1842-1865: Inqiroz</h4>
                      <p className="text-slate-300 text-sm">Ichki urushlar va beqarorlik davri</p>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[2.4rem] w-6 h-6 rounded-full bg-red-500 border-4 border-slate-800"></div>
                    <div className="bg-slate-700 rounded-lg p-4">
                      <h4 className="text-red-400 font-bold">1865-1876: Tugash</h4>
                      <p className="text-slate-300 text-sm">Rossiya protektorati va xonlikning yoq qilinishi</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>

      <div className="bg-slate-800 text-slate-400 py-6 mt-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="mb-2">Qoqon Xonligi (1709-1876) - Markaziy Osiyo Tarixi</p>
          <p className="text-sm">Malumotlar: Wikipedia, Cambridge History, ResearchGate, Britannica</p>
        </div>
      </div>
    </div>
  );
};

export default KokandDashboard;