import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Trophy, 
  Star, 
  TrendingUp, 
  Calendar, 
  Eye,
  Edit,
  Share2,
  Download,
  Plus,
  Award,
  BookOpen,
  Code,
  Briefcase,
  Target,
  Zap,
  BarChart3,
  Users,
  Clock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const profileData = {
    name: 'Alex Johnson',
    university: 'MIT',
    major: 'Computer Science',
    year: 'Senior',
    profileViews: 1247,
    portfolioScore: 92,
    achievements: 15,
    projects: 8
  };

  const skillsData = [
    { name: 'JavaScript', level: 90, color: '#f7df1e' },
    { name: 'React', level: 85, color: '#61dafb' },
    { name: 'Python', level: 88, color: '#3776ab' },
    { name: 'Node.js', level: 75, color: '#339933' },
    { name: 'UI/UX Design', level: 70, color: '#ff6b6b' }
  ];

  const achievementsData = [
    { month: 'Jan', count: 2 },
    { month: 'Feb', count: 3 },
    { month: 'Mar', count: 1 },
    { month: 'Apr', count: 4 },
    { month: 'May', count: 2 },
    { month: 'Jun', count: 3 }
  ];

  const recentAchievements = [
    {
      title: 'Hackathon Winner',
      description: 'First place at MIT Hackathon 2024',
      date: '2 days ago',
      verified: true,
      icon: Trophy,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'React Certification',
      description: 'Advanced React Developer Certificate',
      date: '1 week ago',
      verified: true,
      icon: Award,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Open Source Contributor',
      description: 'Contributed to 5+ repositories',
      date: '2 weeks ago',
      verified: true,
      icon: Code,
      color: 'from-green-500 to-teal-500'
    }
  ];

  const projects = [
    {
      title: 'AI Portfolio Builder',
      description: 'React app with AI-powered design suggestions',
      tech: ['React', 'Node.js', 'OpenAI'],
      status: 'Completed',
      views: 234
    },
    {
      title: 'Blockchain Voting System',
      description: 'Decentralized voting platform using Ethereum',
      tech: ['Solidity', 'Web3.js', 'React'],
      status: 'In Progress',
      views: 156
    },
    {
      title: 'ML Stock Predictor',
      description: 'Machine learning model for stock price prediction',
      tech: ['Python', 'TensorFlow', 'Flask'],
      status: 'Completed',
      views: 189
    }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'portfolio', label: 'Portfolio', icon: User },
    { id: 'achievements', label: 'Achievements', icon: Trophy },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h1 className="text-3xl font-space font-bold mb-2">
                Welcome back, <span className="neon-text">{profileData.name}</span>
              </h1>
              <p className="text-muted-foreground">
                {profileData.year} • {profileData.major} • {profileData.university}
              </p>
            </div>
            
            <div className="flex space-x-3 mt-4 md:mt-0">
              <Button variant="outline" className="glass hover-glow">
                <Eye className="h-4 w-4 mr-2" />
                Preview
              </Button>
              <Button variant="outline" className="glass hover-glow">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button className="gradient-purple-cyan hover-lift">
                <Edit className="h-4 w-4 mr-2" />
                Edit Portfolio
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Profile Views', value: profileData.profileViews, icon: Eye, color: 'text-blue-500' },
              { label: 'Portfolio Score', value: `${profileData.portfolioScore}%`, icon: Target, color: 'text-green-500' },
              { label: 'Achievements', value: profileData.achievements, icon: Trophy, color: 'text-yellow-500' },
              { label: 'Projects', value: profileData.projects, icon: Code, color: 'text-purple-500' }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card rounded-lg p-4 hover-lift"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                      <p className="text-2xl font-bold font-space">{stat.value}</p>
                    </div>
                    <Icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex space-x-1 glass rounded-lg p-1 mb-8 overflow-x-auto"
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Portfolio Score */}
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-lg font-semibold font-space mb-4">Portfolio Score</h3>
                <div className="text-center">
                  <div className="text-4xl font-bold font-space neon-text mb-2">
                    {profileData.portfolioScore}%
                  </div>
                  <Progress value={profileData.portfolioScore} className="mb-4" />
                  <p className="text-sm text-muted-foreground">
                    Excellent! Your portfolio is in the top 10%
                  </p>
                </div>
              </div>

              {/* Skills Overview */}
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-lg font-semibold font-space mb-4">Top Skills</h3>
                <div className="space-y-3">
                  {skillsData.slice(0, 3).map((skill) => (
                    <div key={skill.name} className="flex items-center justify-between">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-primary rounded-full transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                        <span className="text-xs text-muted-foreground w-8">{skill.level}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Activity */}
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-lg font-semibold font-space mb-4">Recent Activity</h3>
                <div className="space-y-3">
                  {recentAchievements.slice(0, 3).map((achievement, index) => {
                    const Icon = achievement.icon;
                    return (
                      <div key={index} className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${achievement.color} p-2`}>
                          <Icon className="h-4 w-4 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate">{achievement.title}</p>
                          <p className="text-xs text-muted-foreground">{achievement.date}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Achievements Chart */}
              <div className="lg:col-span-2 glass-card rounded-xl p-6">
                <h3 className="text-lg font-semibold font-space mb-4">Achievement Progress</h3>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={achievementsData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="month" stroke="#a1a1aa" />
                    <YAxis stroke="#a1a1aa" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(15, 15, 25, 0.9)', 
                        border: '1px solid rgba(139, 92, 246, 0.2)',
                        borderRadius: '8px'
                      }} 
                    />
                    <Bar dataKey="count" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Quick Actions */}
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-lg font-semibold font-space mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start glass hover-glow">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Project
                  </Button>
                  <Button variant="outline" className="w-full justify-start glass hover-glow">
                    <Award className="h-4 w-4 mr-2" />
                    Add Achievement
                  </Button>
                  <Button variant="outline" className="w-full justify-start glass hover-glow">
                    <Download className="h-4 w-4 mr-2" />
                    Export Portfolio
                  </Button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'achievements' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-space font-bold">Achievements</h2>
                <Button className="gradient-purple-cyan hover-lift">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Achievement
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recentAchievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="glass-card rounded-xl p-6 hover-lift"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${achievement.color} p-3`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        {achievement.verified && (
                          <div className="flex items-center text-green-500">
                            <Zap className="h-4 w-4 mr-1" />
                            <span className="text-xs">Verified</span>
                          </div>
                        )}
                      </div>
                      
                      <h3 className="font-semibold font-space mb-2">{achievement.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{achievement.description}</p>
                      <p className="text-xs text-muted-foreground">{achievement.date}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}

          {activeTab === 'projects' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-space font-bold">Projects</h2>
                <Button className="gradient-purple-cyan hover-lift">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Project
                </Button>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="glass-card rounded-xl p-6 hover-lift"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-semibold font-space">{project.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        project.status === 'Completed' 
                          ? 'bg-green-500/20 text-green-500' 
                          : 'bg-yellow-500/20 text-yellow-500'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-primary/20 text-primary rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-muted-foreground">
                        <Eye className="h-4 w-4 mr-1" />
                        <span className="text-sm">{project.views} views</span>
                      </div>
                      <Button variant="outline" size="sm" className="glass hover-glow">
                        View Details
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default StudentDashboard;

