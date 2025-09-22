import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  Medal, 
  Crown, 
  Star, 
  TrendingUp, 
  Calendar,
  Award,
  Code,
  Users,
  Eye,
  MapPin,
  Zap,
  Filter,
  ChevronDown,
  Sparkles,
  Target,
  BookOpen
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const WallOfFame = () => {
  const [activeCategory, setActiveCategory] = useState('overall');
  const [timeframe, setTimeframe] = useState('all-time');

  const categories = [
    { id: 'overall', label: 'Overall', icon: Trophy },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'hackathons', label: 'Hackathons', icon: Calendar },
    { id: 'achievements', label: 'Achievements', icon: Award },
    { id: 'community', label: 'Community', icon: Users }
  ];

  const timeframes = [
    { id: 'all-time', label: 'All Time' },
    { id: 'this-year', label: 'This Year' },
    { id: 'this-month', label: 'This Month' },
    { id: 'this-week', label: 'This Week' }
  ];

  const leaderboard = [
    {
      rank: 1,
      name: 'Alex Johnson',
      username: '@alexj',
      avatar: '👨‍💻',
      university: 'MIT',
      location: 'Boston, MA',
      score: 2847,
      achievements: 28,
      projects: 15,
      hackathons: 12,
      followers: 1234,
      verified: true,
      badges: ['Top Contributor', 'Hackathon Master', 'Open Source Hero'],
      streak: 45,
      level: 'Expert'
    },
    {
      rank: 2,
      name: 'Sarah Chen',
      username: '@sarahc',
      avatar: '👩‍🎨',
      university: 'Stanford',
      location: 'San Francisco, CA',
      score: 2634,
      achievements: 25,
      projects: 18,
      hackathons: 8,
      followers: 987,
      verified: true,
      badges: ['Design Master', 'Innovation Award', 'Community Leader'],
      streak: 38,
      level: 'Expert'
    },
    {
      rank: 3,
      name: 'Marcus Rodriguez',
      username: '@marcusr',
      avatar: '👨‍🔬',
      university: 'UC Berkeley',
      location: 'San Francisco, CA',
      score: 2456,
      achievements: 22,
      projects: 12,
      hackathons: 15,
      followers: 756,
      verified: true,
      badges: ['Data Scientist', 'ML Expert', 'Research Star'],
      streak: 32,
      level: 'Advanced'
    },
    {
      rank: 4,
      name: 'Emily Watson',
      username: '@emilyw',
      avatar: '👩‍💻',
      university: 'Carnegie Mellon',
      location: 'Pittsburgh, PA',
      score: 2298,
      achievements: 20,
      projects: 16,
      hackathons: 10,
      followers: 643,
      verified: true,
      badges: ['Mobile Expert', 'React Native Pro', 'Open Source'],
      streak: 28,
      level: 'Advanced'
    },
    {
      rank: 5,
      name: 'David Kim',
      username: '@davidk',
      avatar: '👨‍💼',
      university: 'Harvard',
      location: 'Cambridge, MA',
      score: 2156,
      achievements: 18,
      projects: 14,
      hackathons: 9,
      followers: 521,
      verified: true,
      badges: ['Full Stack', 'Startup Founder', 'Tech Lead'],
      streak: 25,
      level: 'Advanced'
    }
  ];

  const getRankIcon = (rank) => {
    switch (rank) {
      case 1:
        return <Crown className="h-6 w-6 text-yellow-500" />;
      case 2:
        return <Medal className="h-6 w-6 text-gray-400" />;
      case 3:
        return <Award className="h-6 w-6 text-amber-600" />;
      default:
        return <span className="text-2xl font-bold text-muted-foreground">#{rank}</span>;
    }
  };

  const getRankColor = (rank) => {
    switch (rank) {
      case 1:
        return 'from-yellow-500/20 to-orange-500/20 border-yellow-500/30';
      case 2:
        return 'from-gray-400/20 to-gray-600/20 border-gray-400/30';
      case 3:
        return 'from-amber-600/20 to-amber-800/20 border-amber-600/30';
      default:
        return 'from-primary/10 to-accent/10 border-primary/20';
    }
  };

  const getLevelColor = (level) => {
    switch (level) {
      case 'Expert':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'Advanced':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Intermediate':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-6 hover-glow">
            <Sparkles className="h-4 w-4 text-primary mr-2" />
            <span className="text-sm font-medium">Community Champions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-space font-bold mb-6">
            <span className="neon-text">Wall of Fame</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Celebrating the most outstanding students in our community. 
            Climb the ranks through achievements, projects, and contributions.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0"
        >
          {/* Category Filters */}
          <div className="flex space-x-1 glass rounded-lg p-1 overflow-x-auto">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                    activeCategory === category.id
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{category.label}</span>
                </button>
              );
            })}
          </div>

          {/* Timeframe Filter */}
          <div className="relative">
            <select
              value={timeframe}
              onChange={(e) => setTimeframe(e.target.value)}
              className="appearance-none glass rounded-lg px-4 py-2 pr-8 text-sm font-medium bg-transparent border border-border focus:border-primary focus:outline-none"
            >
              {timeframes.map((tf) => (
                <option key={tf.id} value={tf.id} className="bg-background">
                  {tf.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
          </div>
        </motion.div>

        {/* Top 3 Podium */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {leaderboard.slice(0, 3).map((user, index) => {
            const positions = [1, 0, 2]; // Center the #1, left #2, right #3
            const actualIndex = positions[index];
            const actualUser = leaderboard[actualIndex];
            
            return (
              <motion.div
                key={actualUser.rank}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className={`glass-card rounded-xl p-6 text-center hover-lift ${
                  actualUser.rank === 1 ? 'md:order-2 transform md:scale-110' : 
                  actualUser.rank === 2 ? 'md:order-1' : 'md:order-3'
                } ${getRankColor(actualUser.rank)}`}
              >
                <div className="mb-4">
                  {getRankIcon(actualUser.rank)}
                </div>
                
                <div className="text-4xl mb-3">{actualUser.avatar}</div>
                
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <h3 className="text-xl font-semibold font-space">{actualUser.name}</h3>
                  {actualUser.verified && (
                    <Zap className="h-5 w-5 text-primary" />
                  )}
                </div>
                
                <p className="text-sm text-muted-foreground mb-1">{actualUser.username}</p>
                <p className="text-xs text-muted-foreground mb-4">{actualUser.university}</p>
                
                <div className="text-3xl font-bold font-space neon-text mb-4">
                  {actualUser.score.toLocaleString()}
                </div>
                
                <div className={`inline-flex px-3 py-1 rounded-full text-xs font-medium border ${getLevelColor(actualUser.level)} mb-4`}>
                  {actualUser.level}
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold">{actualUser.achievements}</div>
                    <div className="text-xs text-muted-foreground">Achievements</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold">{actualUser.projects}</div>
                    <div className="text-xs text-muted-foreground">Projects</div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Full Leaderboard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-space font-bold mb-6">Full Leaderboard</h2>
          
          {leaderboard.map((user, index) => (
            <motion.div
              key={user.rank}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className={`glass-card rounded-xl p-6 hover-lift ${getRankColor(user.rank)}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12">
                    {getRankIcon(user.rank)}
                  </div>
                  
                  <div className="text-3xl">{user.avatar}</div>
                  
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="text-lg font-semibold font-space">{user.name}</h3>
                      {user.verified && (
                        <Zap className="h-4 w-4 text-primary" />
                      )}
                      <div className={`px-2 py-1 rounded-full text-xs font-medium border ${getLevelColor(user.level)}`}>
                        {user.level}
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span>{user.username}</span>
                      <span>•</span>
                      <div className="flex items-center">
                        <BookOpen className="h-3 w-3 mr-1" />
                        {user.university}
                      </div>
                      <span>•</span>
                      <div className="flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {user.location}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold font-space neon-text">
                      {user.score.toLocaleString()}
                    </div>
                    <div className="text-xs text-muted-foreground">Score</div>
                  </div>
                  
                  <div className="hidden md:grid grid-cols-4 gap-6 text-center">
                    <div>
                      <div className="text-lg font-bold">{user.achievements}</div>
                      <div className="text-xs text-muted-foreground">Achievements</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold">{user.projects}</div>
                      <div className="text-xs text-muted-foreground">Projects</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold">{user.hackathons}</div>
                      <div className="text-xs text-muted-foreground">Hackathons</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold">{user.followers}</div>
                      <div className="text-xs text-muted-foreground">Followers</div>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="glass hover-glow">
                    <Eye className="h-4 w-4 mr-2" />
                    View Profile
                  </Button>
                </div>
              </div>
              
              {/* Badges */}
              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border">
                {user.badges.map((badge) => (
                  <Badge
                    key={badge}
                    variant="secondary"
                    className="bg-primary/20 text-primary border-primary/30"
                  >
                    {badge}
                  </Badge>
                ))}
                <div className="flex items-center ml-auto space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <TrendingUp className="h-4 w-4 mr-1 text-green-500" />
                    <span>{user.streak} day streak</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-8"
        >
          <Button variant="outline" className="glass hover-glow">
            Load More Rankings
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default WallOfFame;

