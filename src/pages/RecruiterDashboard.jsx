import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Star, 
  MapPin, 
  Calendar, 
  Eye,
  Heart,
  MessageCircle,
  Download,
  Users,
  TrendingUp,
  Award,
  Code,
  GraduationCap,
  Briefcase,
  Zap,
  X,
  ChevronDown,
  Sparkles,
  Target,
  Clock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const RecruiterDashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    skills: [],
    experience: [],
    location: [],
    education: []
  });
  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(false);

  const candidates = [
    {
      id: 1,
      name: 'Alex Johnson',
      title: 'Full Stack Developer',
      university: 'MIT',
      location: 'Boston, MA',
      experience: '2 years',
      skills: ['React', 'Node.js', 'Python', 'AWS'],
      achievements: 15,
      portfolioScore: 92,
      avatar: '👨‍💻',
      matchScore: 95,
      lastActive: '2 hours ago',
      verified: true,
      projects: 8,
      hackathons: 5
    },
    {
      id: 2,
      name: 'Sarah Chen',
      title: 'UI/UX Designer',
      university: 'Stanford',
      location: 'San Francisco, CA',
      experience: '3 years',
      skills: ['Figma', 'React', 'TypeScript', 'Design Systems'],
      achievements: 12,
      portfolioScore: 88,
      avatar: '👩‍🎨',
      matchScore: 89,
      lastActive: '1 day ago',
      verified: true,
      projects: 12,
      hackathons: 3
    },
    {
      id: 3,
      name: 'Marcus Rodriguez',
      title: 'Data Scientist',
      university: 'UC Berkeley',
      location: 'San Francisco, CA',
      experience: '1 year',
      skills: ['Python', 'TensorFlow', 'SQL', 'R'],
      achievements: 8,
      portfolioScore: 85,
      avatar: '👨‍🔬',
      matchScore: 82,
      lastActive: '3 hours ago',
      verified: true,
      projects: 6,
      hackathons: 4
    },
    {
      id: 4,
      name: 'Emily Watson',
      title: 'Mobile Developer',
      university: 'Carnegie Mellon',
      location: 'Pittsburgh, PA',
      experience: '2 years',
      skills: ['React Native', 'Swift', 'Kotlin', 'Firebase'],
      achievements: 10,
      portfolioScore: 90,
      avatar: '👩‍💻',
      matchScore: 87,
      lastActive: '5 hours ago',
      verified: true,
      projects: 9,
      hackathons: 6
    }
  ];

  const filterOptions = {
    skills: ['React', 'Python', 'JavaScript', 'Node.js', 'AWS', 'Figma', 'TypeScript', 'SQL'],
    experience: ['0-1 years', '1-2 years', '2-3 years', '3+ years'],
    location: ['San Francisco, CA', 'Boston, MA', 'New York, NY', 'Seattle, WA'],
    education: ['MIT', 'Stanford', 'UC Berkeley', 'Carnegie Mellon']
  };

  const aiSuggestions = [
    {
      name: 'Alex Johnson',
      reason: 'Perfect match for React + Node.js role',
      confidence: 95,
      avatar: '👨‍💻'
    },
    {
      name: 'Sarah Chen',
      reason: 'Strong design + frontend skills',
      confidence: 89,
      avatar: '👩‍🎨'
    },
    {
      name: 'Emily Watson',
      reason: 'Mobile expertise matches requirements',
      confidence: 87,
      avatar: '👩‍💻'
    }
  ];

  const stats = [
    { label: 'Total Candidates', value: '2,847', icon: Users, color: 'text-blue-500' },
    { label: 'Active This Week', value: '1,234', icon: TrendingUp, color: 'text-green-500' },
    { label: 'Saved Profiles', value: '156', icon: Heart, color: 'text-red-500' },
    { label: 'Messages Sent', value: '89', icon: MessageCircle, color: 'text-purple-500' }
  ];

  const toggleFilter = (category, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter(item => item !== value)
        : [...prev[category], value]
    }));
  };

  const clearFilters = () => {
    setSelectedFilters({
      skills: [],
      experience: [],
      location: [],
      education: []
    });
  };

  return (
    <div className="min-h-screen pt-20 pb-10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
            <div>
              <h1 className="text-3xl font-space font-bold mb-2 text-white">
                Talent <span className="neon-text">Discovery</span>
              </h1>
              <p className="text-slate-400">
                Find and connect with top student talent powered by AI
              </p>
            </div>
            
            <div className="flex space-x-3 mt-4 lg:mt-0">
              <Button variant="outline" className="glass hover-glow border-slate-600">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
              <Button className="gradient-purple-cyan hover-lift">
                <MessageCircle className="h-4 w-4 mr-2" />
                Bulk Message
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-strong rounded-lg p-4 hover-lift border border-slate-700"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-400">{stat.label}</p>
                      <p className="text-2xl font-bold font-space text-white">{stat.value}</p>
                    </div>
                    <Icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* AI Suggestions Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="glass-strong rounded-xl p-6 border border-slate-700 mb-6">
              <div className="flex items-center mb-4">
                <Sparkles className="h-5 w-5 text-primary mr-2" />
                <h3 className="text-lg font-semibold font-space text-white">AI Suggestions</h3>
              </div>
              
              <div className="space-y-4">
                {aiSuggestions.map((suggestion, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="p-3 rounded-lg bg-primary/10 border border-primary/20 hover-glow cursor-pointer"
                  >
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-3">{suggestion.avatar}</span>
                      <div className="flex-1">
                        <p className="font-medium text-white text-sm">{suggestion.name}</p>
                        <div className="flex items-center">
                          <Target className="h-3 w-3 text-primary mr-1" />
                          <span className="text-xs text-primary">{suggestion.confidence}% match</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-slate-400">{suggestion.reason}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Filters */}
            <div className="glass-strong rounded-xl p-6 border border-slate-700">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold font-space text-white">Filters</h3>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={clearFilters}
                  className="text-slate-400 hover:text-white"
                >
                  Clear All
                </Button>
              </div>

              {Object.entries(filterOptions).map(([category, options]) => (
                <div key={category} className="mb-4">
                  <h4 className="text-sm font-medium text-slate-300 mb-2 capitalize">
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {options.map((option) => (
                      <button
                        key={option}
                        onClick={() => toggleFilter(category, option)}
                        className={`px-2 py-1 rounded text-xs transition-all duration-200 chip-enter ${
                          selectedFilters[category].includes(option)
                            ? 'bg-primary text-white'
                            : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search and Controls */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-strong rounded-xl p-6 border border-slate-700 mb-6"
            >
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <Input
                    placeholder="Search candidates by name, skills, or university..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-slate-800 border-slate-600 text-white placeholder-slate-400"
                  />
                </div>
                
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    onClick={() => setShowFilters(!showFilters)}
                    className="border-slate-600 text-slate-300 hover:text-white"
                  >
                    <Filter className="h-4 w-4 mr-2" />
                    Filters
                  </Button>
                  
                  <div className="flex border border-slate-600 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`px-3 py-2 text-sm ${
                        viewMode === 'grid' 
                          ? 'bg-primary text-white' 
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Grid
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`px-3 py-2 text-sm ${
                        viewMode === 'list' 
                          ? 'bg-primary text-white' 
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      List
                    </button>
                  </div>
                </div>
              </div>

              {/* Active Filters */}
              <AnimatePresence>
                {Object.values(selectedFilters).some(arr => arr.length > 0) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-700"
                  >
                    {Object.entries(selectedFilters).map(([category, values]) =>
                      values.map((value) => (
                        <Badge
                          key={`${category}-${value}`}
                          variant="secondary"
                          className="bg-primary/20 text-primary border-primary/30 hover:bg-primary/30"
                        >
                          {value}
                          <button
                            onClick={() => toggleFilter(category, value)}
                            className="ml-2 hover:text-white"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </Badge>
                      ))
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Candidates Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2' 
                  : 'grid-cols-1'
              }`}
            >
              {candidates.map((candidate, index) => (
                <motion.div
                  key={candidate.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-strong rounded-xl p-6 border border-slate-700 hover-lift hover-glow group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl">{candidate.avatar}</div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold font-space text-white">
                            {candidate.name}
                          </h3>
                          {candidate.verified && (
                            <Zap className="h-4 w-4 text-primary" />
                          )}
                        </div>
                        <p className="text-sm text-slate-400">{candidate.title}</p>
                        <div className="flex items-center text-xs text-slate-500 mt-1">
                          <GraduationCap className="h-3 w-3 mr-1" />
                          {candidate.university}
                          <span className="mx-2">•</span>
                          <MapPin className="h-3 w-3 mr-1" />
                          {candidate.location}
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="flex items-center text-primary mb-1">
                        <Target className="h-4 w-4 mr-1" />
                        <span className="text-sm font-medium">{candidate.matchScore}%</span>
                      </div>
                      <div className="flex items-center text-xs text-slate-500">
                        <Clock className="h-3 w-3 mr-1" />
                        {candidate.lastActive}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {candidate.skills.slice(0, 4).map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-slate-700 text-slate-300 rounded text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                    {candidate.skills.length > 4 && (
                      <span className="px-2 py-1 bg-slate-700 text-slate-400 rounded text-xs">
                        +{candidate.skills.length - 4} more
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-white">{candidate.projects}</div>
                      <div className="text-xs text-slate-400">Projects</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white">{candidate.achievements}</div>
                      <div className="text-xs text-slate-400">Achievements</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white">{candidate.portfolioScore}%</div>
                      <div className="text-xs text-slate-400">Score</div>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 border-slate-600 text-slate-300 hover:text-white hover:border-primary"
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      View Profile
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex-1 gradient-purple-cyan hover-lift"
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Message
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="border-slate-600 text-slate-300 hover:text-red-400 hover:border-red-400"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruiterDashboard;

