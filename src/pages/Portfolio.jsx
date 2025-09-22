import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Calendar, 
  Mail, 
  Phone, 
  Globe, 
  Github, 
  Linkedin,
  Twitter,
  Download,
  Share2,
  Heart,
  Eye,
  Star,
  Award,
  Code,
  Trophy,
  Zap,
  ExternalLink,
  BookOpen,
  Users,
  TrendingUp,
  Target,
  CheckCircle,
  Play,
  Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer,
  RadialBarChart,
  RadialBar
} from 'recharts';

const Portfolio = () => {
  const { id } = useParams();
  const [activeSection, setActiveSection] = useState('overview');

  // Mock portfolio data
  const portfolio = {
    id: 1,
    name: 'Alex Johnson',
    title: 'Full Stack Developer & AI Enthusiast',
    university: 'MIT',
    major: 'Computer Science',
    year: 'Senior',
    location: 'Boston, MA',
    email: 'alex.johnson@mit.edu',
    phone: '+1 (555) 123-4567',
    website: 'https://alexjohnson.dev',
    bio: 'Passionate full-stack developer with expertise in AI/ML and modern web technologies. Love building innovative solutions that make a real impact. Currently working on AI-powered applications and contributing to open-source projects.',
    avatar: '👨‍💻',
    bannerGradient: 'from-purple-600 via-blue-600 to-cyan-600',
    verified: true,
    stats: {
      portfolioScore: 92,
      profileViews: 1247,
      achievements: 15,
      projects: 8,
      followers: 234,
      following: 156
    },
    social: {
      github: 'https://github.com/alexjohnson',
      linkedin: 'https://linkedin.com/in/alexjohnson',
      twitter: 'https://twitter.com/alexjohnson'
    }
  };

  const skills = [
    { name: 'JavaScript', level: 95, category: 'Frontend', color: '#f7df1e' },
    { name: 'React', level: 90, category: 'Frontend', color: '#61dafb' },
    { name: 'Python', level: 88, category: 'Backend', color: '#3776ab' },
    { name: 'Node.js', level: 85, category: 'Backend', color: '#339933' },
    { name: 'TypeScript', level: 82, category: 'Frontend', color: '#3178c6' },
    { name: 'AWS', level: 78, category: 'Cloud', color: '#ff9900' },
    { name: 'Docker', level: 75, category: 'DevOps', color: '#2496ed' },
    { name: 'Machine Learning', level: 70, category: 'AI/ML', color: '#ff6b6b' }
  ];

  const achievements = [
    {
      id: 1,
      title: 'MIT Hackathon Winner',
      description: 'First place at MIT AI Innovation Challenge 2024',
      date: '2024-01-15',
      issuer: 'MIT',
      type: 'hackathon',
      verified: true,
      icon: Trophy,
      color: 'from-yellow-500 to-orange-500',
      nftHash: '0x1a2b3c4d...'
    },
    {
      id: 2,
      title: 'Google Cloud Professional Certificate',
      description: 'Professional Data Engineer Certification',
      date: '2024-01-10',
      issuer: 'Google Cloud',
      type: 'certification',
      verified: true,
      icon: Award,
      color: 'from-blue-500 to-cyan-500',
      nftHash: '0x2b3c4d5e...'
    },
    {
      id: 3,
      title: 'Open Source Contributor',
      description: 'Contributed to 10+ major repositories',
      date: '2024-01-05',
      issuer: 'GitHub',
      type: 'achievement',
      verified: true,
      icon: Code,
      color: 'from-green-500 to-teal-500',
      nftHash: '0x3c4d5e6f...'
    }
  ];

  const projects = [
    {
      id: 1,
      title: 'AI Portfolio Builder',
      description: 'React application with AI-powered design suggestions and real-time portfolio generation.',
      image: '/api/placeholder/400/200',
      tech: ['React', 'Node.js', 'OpenAI', 'MongoDB'],
      github: 'https://github.com/alexjohnson/ai-portfolio',
      live: 'https://ai-portfolio.alexjohnson.dev',
      status: 'Completed',
      featured: true,
      stats: {
        stars: 234,
        forks: 45,
        views: 1200
      }
    },
    {
      id: 2,
      title: 'Blockchain Voting System',
      description: 'Decentralized voting platform using Ethereum smart contracts and Web3 integration.',
      image: '/api/placeholder/400/200',
      tech: ['Solidity', 'Web3.js', 'React', 'IPFS'],
      github: 'https://github.com/alexjohnson/blockchain-voting',
      live: 'https://vote.alexjohnson.dev',
      status: 'In Progress',
      featured: true,
      stats: {
        stars: 156,
        forks: 23,
        views: 890
      }
    },
    {
      id: 3,
      title: 'ML Stock Predictor',
      description: 'Machine learning model for stock price prediction using LSTM neural networks.',
      image: '/api/placeholder/400/200',
      tech: ['Python', 'TensorFlow', 'Flask', 'Pandas'],
      github: 'https://github.com/alexjohnson/ml-stock-predictor',
      status: 'Completed',
      featured: false,
      stats: {
        stars: 89,
        forks: 12,
        views: 567
      }
    }
  ];

  const skillCategories = [...new Set(skills.map(skill => skill.category))];
  const skillData = skillCategories.map(category => ({
    name: category,
    value: Math.round(skills.filter(s => s.category === category).reduce((acc, s) => acc + s.level, 0) / skills.filter(s => s.category === category).length),
    fill: skills.find(s => s.category === category)?.color || '#8b5cf6'
  }));

  const sections = [
    { id: 'overview', label: 'Overview', icon: Eye },
    { id: 'skills', label: 'Skills', icon: Target },
    { id: 'achievements', label: 'Achievements', icon: Trophy },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'certificates', label: 'Certificates', icon: Award }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Banner */}
      <div className={`relative h-80 bg-gradient-to-r ${portfolio.bannerGradient} overflow-hidden`}>
        {/* AI-generated background pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>
        
        {/* Floating particles */}
        <div className="particles absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="particle absolute w-2 h-2 bg-white/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${4 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        <div className="absolute inset-0 bg-black/20" />
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end pb-8">
          <div className="flex items-end space-x-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-8xl glass-card rounded-2xl p-4"
            >
              {portfolio.avatar}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white"
            >
              <div className="flex items-center space-x-3 mb-2">
                <h1 className="text-4xl font-space font-bold">{portfolio.name}</h1>
                {portfolio.verified && (
                  <Zap className="h-8 w-8 text-yellow-400" />
                )}
              </div>
              <p className="text-xl text-white/90 mb-2">{portfolio.title}</p>
              <div className="flex items-center space-x-4 text-white/80">
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-1" />
                  <span>{portfolio.university} • {portfolio.major}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{portfolio.location}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-xl p-6 mb-6"
            >
              <div className="text-center mb-6">
                <div className="text-2xl font-bold font-space neon-text mb-1">
                  {portfolio.stats.portfolioScore}%
                </div>
                <p className="text-sm text-muted-foreground">Portfolio Score</p>
                <Progress value={portfolio.stats.portfolioScore} className="mt-2" />
              </div>

              <div className="grid grid-cols-2 gap-4 text-center mb-6">
                {[
                  { label: 'Views', value: portfolio.stats.profileViews, icon: Eye },
                  { label: 'Projects', value: portfolio.stats.projects, icon: Code },
                  { label: 'Achievements', value: portfolio.stats.achievements, icon: Trophy },
                  { label: 'Followers', value: portfolio.stats.followers, icon: Users }
                ].map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div key={stat.label}>
                      <div className="flex items-center justify-center mb-1">
                        <Icon className="h-4 w-4 text-primary mr-1" />
                        <span className="font-bold">{stat.value}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </div>
                  );
                })}
              </div>

              <div className="space-y-3">
                <Button className="w-full gradient-purple-cyan hover-lift">
                  <Heart className="h-4 w-4 mr-2" />
                  Follow
                </Button>
                <div className="flex space-x-2">
                  <Button variant="outline" className="flex-1 glass hover-glow">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                  <Button variant="outline" className="flex-1 glass hover-glow">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card rounded-xl p-6 mb-6"
            >
              <h3 className="font-semibold font-space mb-4">Contact</h3>
              <div className="space-y-3">
                {[
                  { icon: Mail, label: portfolio.email, href: `mailto:${portfolio.email}` },
                  { icon: Globe, label: 'Portfolio Website', href: portfolio.website },
                  { icon: Github, label: 'GitHub', href: portfolio.social.github },
                  { icon: Linkedin, label: 'LinkedIn', href: portfolio.social.linkedin }
                ].map((contact) => {
                  const Icon = contact.icon;
                  return (
                    <a
                      key={contact.label}
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Icon className="h-4 w-4" />
                      <span className="text-sm">{contact.label}</span>
                    </a>
                  );
                })}
              </div>
            </motion.div>

            {/* Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card rounded-xl p-6"
            >
              <nav className="space-y-2">
                {sections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-all duration-300 ${
                        activeSection === section.id
                          ? 'bg-primary text-primary-foreground'
                          : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span className="text-sm font-medium">{section.label}</span>
                    </button>
                  );
                })}
              </nav>
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              {activeSection === 'overview' && (
                <div className="space-y-6">
                  {/* Bio */}
                  <div className="glass-card rounded-xl p-6">
                    <h2 className="text-2xl font-space font-bold mb-4">About</h2>
                    <p className="text-muted-foreground leading-relaxed">{portfolio.bio}</p>
                  </div>

                  {/* Skills Overview */}
                  <div className="glass-card rounded-xl p-6">
                    <h2 className="text-2xl font-space font-bold mb-4">Skills Overview</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <ResponsiveContainer width="100%" height={200}>
                          <PieChart>
                            <Pie
                              data={skillData}
                              cx="50%"
                              cy="50%"
                              innerRadius={40}
                              outerRadius={80}
                              paddingAngle={5}
                              dataKey="value"
                            >
                              {skillData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.fill} />
                              ))}
                            </Pie>
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                      <div className="space-y-3">
                        {skillData.map((category) => (
                          <div key={category.name} className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <div 
                                className="w-3 h-3 rounded-full" 
                                style={{ backgroundColor: category.fill }}
                              />
                              <span className="text-sm font-medium">{category.name}</span>
                            </div>
                            <span className="text-sm text-muted-foreground">{category.value}%</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Recent Activity */}
                  <div className="glass-card rounded-xl p-6">
                    <h2 className="text-2xl font-space font-bold mb-4">Recent Activity</h2>
                    <div className="space-y-4">
                      {achievements.slice(0, 3).map((achievement) => {
                        const Icon = achievement.icon;
                        return (
                          <div key={achievement.id} className="flex items-center space-x-4">
                            <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${achievement.color} p-2`}>
                              <Icon className="h-6 w-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-medium">{achievement.title}</h4>
                              <p className="text-sm text-muted-foreground">{achievement.date}</p>
                            </div>
                            {achievement.verified && (
                              <Zap className="h-4 w-4 text-green-500" />
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'skills' && (
                <div className="glass-card rounded-xl p-6">
                  <h2 className="text-2xl font-space font-bold mb-6">Technical Skills</h2>
                  <div className="space-y-6">
                    {skillCategories.map((category) => (
                      <div key={category}>
                        <h3 className="text-lg font-semibold mb-4">{category}</h3>
                        <div className="space-y-4">
                          {skills.filter(skill => skill.category === category).map((skill) => (
                            <div key={skill.name} className="space-y-2">
                              <div className="flex items-center justify-between">
                                <span className="font-medium">{skill.name}</span>
                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                              </div>
                              <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: `${skill.level}%` }}
                                  transition={{ duration: 1, delay: 0.2 }}
                                  className="h-full rounded-full"
                                  style={{ backgroundColor: skill.color }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeSection === 'achievements' && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-space font-bold">Achievements</h2>
                    <Badge className="bg-primary/20 text-primary border-primary/30">
                      {achievements.length} Total
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {achievements.map((achievement) => {
                      const Icon = achievement.icon;
                      return (
                        <motion.div
                          key={achievement.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6 }}
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
                          
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">{achievement.issuer}</span>
                            <span className="text-muted-foreground">{achievement.date}</span>
                          </div>
                          
                          {achievement.nftHash && (
                            <div className="mt-4 pt-4 border-t border-border">
                              <div className="flex items-center justify-between">
                                <span className="text-xs text-muted-foreground">NFT Certificate</span>
                                <Button variant="ghost" size="sm">
                                  <ExternalLink className="h-3 w-3" />
                                </Button>
                              </div>
                            </div>
                          )}
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              )}

              {activeSection === 'projects' && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-space font-bold">Projects</h2>
                    <Badge className="bg-primary/20 text-primary border-primary/30">
                      {projects.length} Total
                    </Badge>
                  </div>
                  
                  <div className="space-y-6">
                    {projects.map((project) => (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="glass-card rounded-xl overflow-hidden hover-lift"
                      >
                        <div className="md:flex">
                          <div className="md:w-1/3">
                            <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                              <Code className="h-12 w-12 text-primary" />
                            </div>
                          </div>
                          <div className="md:w-2/3 p-6">
                            <div className="flex items-start justify-between mb-3">
                              <h3 className="text-xl font-semibold font-space">{project.title}</h3>
                              <Badge className={`${
                                project.status === 'Completed' 
                                  ? 'bg-green-500/20 text-green-500 border-green-500/30' 
                                  : 'bg-yellow-500/20 text-yellow-500 border-yellow-500/30'
                              } border`}>
                                {project.status}
                              </Badge>
                            </div>
                            
                            <p className="text-muted-foreground mb-4">{project.description}</p>
                            
                            <div className="flex flex-wrap gap-2 mb-4">
                              {project.tech.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-2 py-1 bg-primary/20 text-primary rounded text-xs"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex space-x-4 text-sm text-muted-foreground">
                                <div className="flex items-center">
                                  <Star className="h-4 w-4 mr-1" />
                                  <span>{project.stats.stars}</span>
                                </div>
                                <div className="flex items-center">
                                  <Eye className="h-4 w-4 mr-1" />
                                  <span>{project.stats.views}</span>
                                </div>
                              </div>
                              
                              <div className="flex space-x-2">
                                <Button variant="outline" size="sm" className="glass hover-glow">
                                  <Github className="h-4 w-4 mr-2" />
                                  Code
                                </Button>
                                {project.live && (
                                  <Button variant="outline" size="sm" className="glass hover-glow">
                                    <ExternalLink className="h-4 w-4 mr-2" />
                                    Live
                                  </Button>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

