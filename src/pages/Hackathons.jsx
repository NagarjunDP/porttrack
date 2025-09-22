import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Trophy,
  Calendar,
  MapPin,
  Users,
  Clock,
  Star,
  Award,
  Zap,
  Flame,          // instead of Fire (correct name)
  Target,
  Code,
  Palette,
  Brain,
  Rocket,
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  Eye,
  Play,
  Pause,
  Volume1,
  Volume2,
  VolumeX,
  ChevronLeft,
  ChevronRight,
  Plus,
  Filter,
  Search,
  TrendingUp,
  Activity,
  Wifi,
  WifiOff,
  Send,
  Smile,
  Image,
  Video,
  Link,
  Hash,
  AtSign,
  Bell,
  Settings,
  Globe,
  Lock,
  Users2,
  School,
  Building,
  Briefcase,
  GraduationCap,
  Cpu,
  Database,
  Smartphone,
  Shield,
  Gamepad2,
  Music,
  Camera,
  Mic,
  FileText,
  PieChart,
  BarChart3,
  LineChart,
  ExternalLink,
  Download,
  Upload,
  RefreshCw,
  CheckCircle,
  XCircle,
  AlertCircle,
  Info,
  X,
  Maximize2,
  Minimize2,
  MoreHorizontal,
  ThumbsUp,
  ThumbsDown,
  Flag,
  UserPlus,
  UserMinus,
  Coffee,
  Pizza,
  Lightbulb,
  Bug,
  GitBranch,
  GitCommit,
  GitMerge,
  Terminal,
  Monitor,
  Keyboard,
  Mouse,
  Headphones,
  Battery,
  HardDrive,
  Usb,
  Bluetooth,
  QrCode,
  SkipBack,
  SkipForward,
  Repeat,
  Shuffle,
  List,
  Grid,
  Layers,
  Package,
  Box,
  Archive,
  Folder,
  File,
  FileImage,
  FileVideo,
  FileAudio,
  FileCode,
  FilePlus,
  FileMinus,
  FileEdit,
  FileCheck,
  FileX,
  FileWarning,
  FileQuestion,
  FileSearch,
  FolderOpen,
  FolderPlus,
  FolderMinus,
  FolderEdit,
  FolderCheck,
  FolderX,
  FolderSearch,
  User
} from "lucide-react";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const Hackathons = () => {
  const [activeTab, setActiveTab] = useState('live');
  const [selectedHackathon, setSelectedHackathon] = useState(null);
  const [liveUpdates, setLiveUpdates] = useState([]);
  const [isLiveConnected, setIsLiveConnected] = useState(true);
  const [showLiveChat, setShowLiveChat] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const liveUpdatesRef = useRef(null);

  // Live hackathons with real-time data
  const liveHackathons = [
    {
      id: 1,
      name: "MIT Innovation Challenge 2024",
      status: "live",
      timeLeft: "18h 42m",
      participants: 247,
      teams: 62,
      location: "MIT Campus, Boston",
      prize: "$50,000",
      theme: "AI for Good",
      startTime: "2024-03-15T09:00:00Z",
      endTime: "2024-03-17T18:00:00Z",
      organizer: {
        name: "MIT Entrepreneurship Center",
        avatar: "🏫",
        verified: true
      },
      currentPhase: "Development",
      phaseProgress: 65,
      nextPhase: "Demo Preparation",
      nextPhaseTime: "6h 30m",
      categories: ["AI/ML", "Healthcare", "Education", "Sustainability"],
      sponsors: ["Google", "Microsoft", "Amazon", "Meta"],
      judges: [
        { name: "Dr. Sarah Chen", role: "MIT Professor", avatar: "👩‍🏫" },
        { name: "Alex Rodriguez", role: "Google VP", avatar: "👨‍💼" },
        { name: "Maria Santos", role: "Startup Founder", avatar: "👩‍💻" }
      ],
      liveStats: {
        submissionsToday: 23,
        activeTeams: 58,
        mentorSessions: 34,
        coffeeConsumed: "127 cups"
      },
      trending: {
        technologies: ["React", "Python", "TensorFlow", "Node.js", "Firebase"],
        topics: ["Climate Change", "Mental Health", "Education Access"]
      }
    },
    {
      id: 2,
      name: "Stanford TreeHacks 2024",
      status: "live",
      timeLeft: "32h 15m",
      participants: 189,
      teams: 47,
      location: "Stanford University",
      prize: "$25,000",
      theme: "Build the Future",
      startTime: "2024-03-14T18:00:00Z",
      endTime: "2024-03-16T18:00:00Z",
      organizer: {
        name: "Stanford ACM",
        avatar: "🌲",
        verified: true
      },
      currentPhase: "Ideation",
      phaseProgress: 85,
      nextPhase: "Development",
      nextPhaseTime: "2h 45m",
      categories: ["Web Dev", "Mobile", "Hardware", "Design"],
      sponsors: ["Apple", "Tesla", "Stripe", "Figma"],
      judges: [
        { name: "Tim Johnson", role: "Apple Engineer", avatar: "👨‍💻" },
        { name: "Lisa Wang", role: "Tesla Designer", avatar: "👩‍🎨" }
      ],
      liveStats: {
        submissionsToday: 15,
        activeTeams: 45,
        mentorSessions: 28,
        pizzaSlices: "89 slices"
      },
      trending: {
        technologies: ["Swift", "React Native", "Arduino", "Figma"],
        topics: ["Sustainability", "Accessibility", "Social Impact"]
      }
    }
  ];

  // Upcoming hackathons
  const upcomingHackathons = [
    {
      id: 3,
      name: "Harvard CS50 Hackathon",
      status: "upcoming",
      startDate: "2024-03-22",
      endDate: "2024-03-24",
      registrationDeadline: "2024-03-20",
      participants: 156,
      maxParticipants: 200,
      location: "Harvard University",
      prize: "$15,000",
      theme: "Computer Science Education",
      categories: ["Education", "Web Dev", "Mobile", "AI/ML"],
      difficulty: "Beginner Friendly",
      requirements: ["Student ID", "Team of 2-4"],
      perks: ["Free meals", "Swag bag", "Mentorship", "Workshops"]
    },
    {
      id: 4,
      name: "Berkeley AI Hackathon",
      status: "upcoming",
      startDate: "2024-03-28",
      endDate: "2024-03-30",
      registrationDeadline: "2024-03-25",
      participants: 89,
      maxParticipants: 150,
      location: "UC Berkeley",
      prize: "$30,000",
      theme: "Artificial Intelligence",
      categories: ["AI/ML", "NLP", "Computer Vision", "Robotics"],
      difficulty: "Intermediate",
      requirements: ["Portfolio", "AI/ML experience"],
      perks: ["GPU credits", "API access", "Industry mentors"]
    }
  ];

  // Live updates feed
  const [liveUpdatesFeed, setLiveUpdatesFeed] = useState([
    {
      id: 1,
      hackathonId: 1,
      type: "team_update",
      timestamp: "2 minutes ago",
      user: {
        name: "Team Innovators",
        avatar: "👥",
        teamId: "team_42"
      },
      content: {
        message: "Just integrated the ML model! Our AI tutor is now giving personalized feedback to students. Demo prep time! 🚀",
        media: [
          { type: "image", url: "/api/placeholder/300/200", caption: "AI tutor interface" }
        ],
        progress: 78,
        phase: "Development"
      },
      engagement: {
        likes: 23,
        comments: 8,
        cheers: 15
      }
    },
    {
      id: 2,
      hackathonId: 1,
      type: "milestone",
      timestamp: "5 minutes ago",
      user: {
        name: "MIT Innovation Challenge",
        avatar: "🏫",
        official: true
      },
      content: {
        message: "🎉 Milestone Alert: 50+ teams have submitted their initial prototypes! The innovation level is incredible this year.",
        stats: {
          submissions: 52,
          totalTeams: 62,
          avgProgress: 67
        }
      },
      engagement: {
        likes: 89,
        comments: 24,
        cheers: 45
      }
    },
    {
      id: 3,
      hackathonId: 1,
      type: "mentor_session",
      timestamp: "8 minutes ago",
      user: {
        name: "Dr. Sarah Chen",
        avatar: "👩‍🏫",
        role: "Mentor"
      },
      content: {
        message: "Amazing session with Team EcoSmart! Their carbon footprint tracking app has real potential. Keep pushing the boundaries! 💚",
        mentorTip: "Remember: User experience is just as important as the technology behind it."
      },
      engagement: {
        likes: 34,
        comments: 12,
        cheers: 28
      }
    },
    {
      id: 4,
      hackathonId: 1,
      type: "tech_breakthrough",
      timestamp: "12 minutes ago",
      user: {
        name: "Team CodeCrafters",
        avatar: "⚡",
        teamId: "team_17"
      },
      content: {
        message: "BREAKTHROUGH! Our real-time collaboration tool now supports 100+ concurrent users with zero lag. WebRTC + Redis magic! ✨",
        techStack: ["WebRTC", "Redis", "Node.js", "React"],
        metrics: {
          latency: "< 50ms",
          concurrentUsers: "100+",
          uptime: "99.9%"
        }
      },
      engagement: {
        likes: 67,
        comments: 19,
        cheers: 42
      }
    },
    {
      id: 5,
      hackathonId: 2,
      type: "team_formation",
      timestamp: "15 minutes ago",
      user: {
        name: "Alex Chen",
        avatar: "👨‍💻",
        lookingForTeam: true
      },
      content: {
        message: "Full-stack developer looking for a team! Experienced in React, Node.js, and Python. Let's build something amazing! 🔥",
        skills: ["React", "Node.js", "Python", "MongoDB", "AWS"],
        interests: ["Climate Tech", "EdTech", "HealthTech"]
      },
      engagement: {
        likes: 12,
        comments: 7,
        teamInvites: 5
      }
    }
  ]);

  // Simulate live updates
  useEffect(() => {
    if (activeTab === 'live' && isLiveConnected) {
      const interval = setInterval(() => {
        // Simulate new live update
        const newUpdate = {
          id: Date.now(),
          hackathonId: Math.random() > 0.5 ? 1 : 2,
          type: ['team_update', 'milestone', 'mentor_session', 'tech_breakthrough'][Math.floor(Math.random() * 4)],
          timestamp: 'Just now',
          user: {
            name: ['Team Alpha', 'Team Beta', 'Team Gamma', 'Dr. Smith', 'Sarah Johnson'][Math.floor(Math.random() * 5)],
            avatar: ['👥', '⚡', '🚀', '👩‍🏫', '👨‍💻'][Math.floor(Math.random() * 5)]
          },
          content: {
            message: [
              'Major breakthrough in our AI model!',
              'UI/UX design is looking amazing!',
              'Backend integration complete!',
              'Demo preparation in progress!',
              'Team collaboration at its finest!'
            ][Math.floor(Math.random() * 5)]
          },
          engagement: {
            likes: Math.floor(Math.random() * 50),
            comments: Math.floor(Math.random() * 20),
            cheers: Math.floor(Math.random() * 30)
          }
        };

        setLiveUpdatesFeed(prev => [newUpdate, ...prev.slice(0, 19)]); // Keep only latest 20
      }, 15000); // New update every 15 seconds

      return () => clearInterval(interval);
    }
  }, [activeTab, isLiveConnected]);

  // Auto-scroll live updates
  useEffect(() => {
    if (liveUpdatesRef.current && activeTab === 'live') {
      liveUpdatesRef.current.scrollTop = 0;
    }
  }, [liveUpdatesFeed, activeTab]);

  const tabs = [
    { id: 'live', label: 'Live Now', icon: Activity, count: liveHackathons.length },
    { id: 'upcoming', label: 'Upcoming', icon: Calendar, count: upcomingHackathons.length },
    { id: 'past', label: 'Past Events', icon: Trophy, count: 12 },
    { id: 'my-events', label: 'My Events', icon: User, count: 3 }
  ];

  const categories = [
    { id: 'all', label: 'All Categories', icon: Globe },
    { id: 'ai-ml', label: 'AI/ML', icon: Brain },
    { id: 'web-dev', label: 'Web Dev', icon: Code },
    { id: 'mobile', label: 'Mobile', icon: Smartphone },
    { id: 'design', label: 'Design', icon: Palette },
    { id: 'hardware', label: 'Hardware', icon: Cpu },
    { id: 'blockchain', label: 'Blockchain', icon: Shield }
  ];

  const getUpdateIcon = (type) => {
    switch (type) {
      case 'team_update': return Users;
      case 'milestone': return Trophy;
      case 'mentor_session': return GraduationCap;
      case 'tech_breakthrough': return Zap;
      case 'team_formation': return UserPlus;
      default: return Activity;
    }
  };

  const getUpdateColor = (type) => {
    switch (type) {
      case 'team_update': return 'from-blue-500 to-cyan-500';
      case 'milestone': return 'from-yellow-500 to-orange-500';
      case 'mentor_session': return 'from-green-500 to-teal-500';
      case 'tech_breakthrough': return 'from-purple-500 to-pink-500';
      case 'team_formation': return 'from-indigo-500 to-purple-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const handleJoinHackathon = (hackathonId) => {
    console.log('Joining hackathon:', hackathonId);
  };

  const handleLiveChat = () => {
    setShowLiveChat(!showLiveChat);
  };

  const sendChatMessage = () => {
    if (chatMessage.trim()) {
      console.log('Sending message:', chatMessage);
      setChatMessage('');
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-6 hover-glow">
            <div className={`w-2 h-2 rounded-full mr-2 ${isLiveConnected ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
            <span className="text-sm font-medium">
              {isLiveConnected ? 'Live Connected' : 'Connection Lost'}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-space font-bold mb-4">
            <span className="neon-text">Hackathon</span> Central
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join live hackathons, follow real-time updates, and connect with fellow innovators. 
            Your next breakthrough starts here.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-primary text-primary-foreground'
                    : 'glass hover-glow text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="font-medium">{tab.label}</span>
                <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                  {tab.count}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Live Hackathons Tab */}
        {activeTab === 'live' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Live Events */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {liveHackathons.map((hackathon, index) => (
                  <motion.div
                    key={hackathon.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="glass-card rounded-xl overflow-hidden hover-lift"
                  >
                    {/* Header */}
                    <div className="p-6 pb-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-red-500 to-pink-500 p-3">
                            <Trophy className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold font-space">{hackathon.name}</h3>
                            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                              <span className="text-2xl">{hackathon.organizer.avatar}</span>
                              <span>{hackathon.organizer.name}</span>
                              {hackathon.organizer.verified && (
                                <Zap className="h-3 w-3 text-primary" />
                              )}
                            </div>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <div className="flex items-center space-x-2 mb-1">
                            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                            <span className="text-sm font-medium text-red-500">LIVE</span>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {hackathon.timeLeft} remaining
                          </div>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-4 gap-4 mb-4">
                        <div className="text-center">
                          <div className="text-lg font-bold">{hackathon.participants}</div>
                          <div className="text-xs text-muted-foreground">Participants</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold">{hackathon.teams}</div>
                          <div className="text-xs text-muted-foreground">Teams</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold">{hackathon.prize}</div>
                          <div className="text-xs text-muted-foreground">Prize Pool</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold">{hackathon.phaseProgress}%</div>
                          <div className="text-xs text-muted-foreground">Progress</div>
                        </div>
                      </div>

                      {/* Current Phase */}
                      <div className="glass rounded-lg p-4 mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium">Current Phase: {hackathon.currentPhase}</span>
                          <span className="text-sm text-muted-foreground">
                            Next: {hackathon.nextPhase} in {hackathon.nextPhaseTime}
                          </span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-red-500 to-pink-500 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${hackathon.phaseProgress}%` }}
                          />
                        </div>
                      </div>

                      {/* Live Stats */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                        {Object.entries(hackathon.liveStats).map(([key, value]) => (
                          <div key={key} className="glass rounded-lg p-3 text-center">
                            <div className="text-sm font-medium">{value}</div>
                            <div className="text-xs text-muted-foreground capitalize">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Trending */}
                      <div className="space-y-3">
                        <div>
                          <div className="text-sm font-medium mb-2">🔥 Trending Tech</div>
                          <div className="flex flex-wrap gap-2">
                            {hackathon.trending.technologies.map((tech, i) => (
                              <span key={i} className="px-2 py-1 bg-primary/20 text-primary rounded text-xs">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <div className="text-sm font-medium mb-2">💡 Hot Topics</div>
                          <div className="flex flex-wrap gap-2">
                            {hackathon.trending.topics.map((topic, i) => (
                              <span key={i} className="px-2 py-1 bg-green-500/20 text-green-500 rounded text-xs">
                                {topic}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="px-6 py-4 border-t border-border">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Button 
                            className="gradient-purple-cyan"
                            onClick={() => handleJoinHackathon(hackathon.id)}
                          >
                            <Users className="h-4 w-4 mr-2" />
                            Join Event
                          </Button>
                          <Button variant="outline" className="glass hover-glow">
                            <Eye className="h-4 w-4 mr-2" />
                            Spectate
                          </Button>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="sm">
                            <Heart className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Share2 className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Bookmark className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Live Updates Feed */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="glass-card rounded-xl overflow-hidden sticky top-24"
              >
                <div className="p-4 border-b border-border">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold font-space">Live Updates</h3>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setIsLiveConnected(!isLiveConnected)}
                      >
                        {isLiveConnected ? (
                          <Wifi className="h-4 w-4 text-green-500" />
                        ) : (
                          <WifiOff className="h-4 w-4 text-red-500" />
                        )}
                      </Button>
                      <Button variant="ghost" size="sm" onClick={handleLiveChat}>
                        <MessageCircle className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  {isLiveConnected && (
                    <div className="flex items-center space-x-2 text-sm text-green-500">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span>Live updates streaming</span>
                    </div>
                  )}
                </div>

                <div 
                  ref={liveUpdatesRef}
                  className="h-96 overflow-y-auto p-4 space-y-4"
                >
                  <AnimatePresence>
                    {liveUpdatesFeed.map((update, index) => {
                      const UpdateIcon = getUpdateIcon(update.type);
                      const updateColor = getUpdateColor(update.type);
                      
                      return (
                        <motion.div
                          key={update.id}
                          initial={{ opacity: 0, y: 20, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -20, scale: 0.95 }}
                          transition={{ duration: 0.3 }}
                          className="glass rounded-lg p-3 hover-lift"
                        >
                          <div className="flex items-start space-x-3">
                            <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${updateColor} p-2 flex-shrink-0`}>
                              <UpdateIcon className="h-4 w-4 text-white" />
                            </div>
                            
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center space-x-2 mb-1">
                                <span className="text-sm font-medium">{update.user.name}</span>
                                {update.user.official && (
                                  <Zap className="h-3 w-3 text-primary" />
                                )}
                                <span className="text-xs text-muted-foreground">
                                  {update.timestamp}
                                </span>
                              </div>
                              
                              <p className="text-sm text-muted-foreground mb-2">
                                {update.content.message}
                              </p>
                              
                              {update.content.techStack && (
                                <div className="flex flex-wrap gap-1 mb-2">
                                  {update.content.techStack.map((tech, i) => (
                                    <span key={i} className="px-1 py-0.5 bg-primary/20 text-primary rounded text-xs">
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              )}
                              
                              {update.content.progress && (
                                <div className="w-full bg-muted rounded-full h-1 mb-2">
                                  <div 
                                    className={`bg-gradient-to-r ${updateColor} h-1 rounded-full`}
                                    style={{ width: `${update.content.progress}%` }}
                                  />
                                </div>
                              )}
                              
                              <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                                <button className="flex items-center space-x-1 hover:text-red-500">
                                  <Heart className="h-3 w-3" />
                                  <span>{update.engagement.likes}</span>
                                </button>
                                <button className="flex items-center space-x-1 hover:text-primary">
                                  <MessageCircle className="h-3 w-3" />
                                  <span>{update.engagement.comments}</span>
                                </button>
                                {update.engagement.cheers && (
                                  <button className="flex items-center space-x-1 hover:text-yellow-500">
                                    <Trophy className="h-3 w-3" />
                                    <span>{update.engagement.cheers}</span>
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </div>

                {/* Live Chat Input */}
                {showLiveChat && (
                  <div className="p-4 border-t border-border">
                    <div className="flex space-x-2">
                      <Input
                        placeholder="Join the conversation..."
                        value={chatMessage}
                        onChange={(e) => setChatMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && sendChatMessage()}
                        className="glass"
                      />
                      <Button size="sm" onClick={sendChatMessage}>
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        )}

        {/* Upcoming Hackathons Tab */}
        {activeTab === 'upcoming' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingHackathons.map((hackathon, index) => (
              <motion.div
                key={hackathon.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card rounded-xl overflow-hidden hover-lift"
              >
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 p-3">
                      <Calendar className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold font-space">{hackathon.name}</h3>
                      <div className="text-sm text-muted-foreground">{hackathon.theme}</div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center space-x-2 text-sm">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>{hackathon.startDate} - {hackathon.endDate}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{hackathon.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Trophy className="h-4 w-4 text-muted-foreground" />
                      <span>{hackathon.prize} prize pool</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>{hackathon.participants}/{hackathon.maxParticipants} registered</span>
                    </div>
                  </div>

                  <div className="w-full bg-muted rounded-full h-2 mb-4">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full"
                      style={{ width: `${(hackathon.participants / hackathon.maxParticipants) * 100}%` }}
                    />
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {hackathon.categories.map((category, i) => (
                      <span key={i} className="px-2 py-1 bg-primary/20 text-primary rounded text-xs">
                        {category}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="text-sm font-medium">Perks:</div>
                    <div className="flex flex-wrap gap-1">
                      {hackathon.perks.map((perk, i) => (
                        <span key={i} className="px-2 py-1 bg-green-500/20 text-green-500 rounded text-xs">
                          {perk}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full gradient-purple-cyan">
                    <Plus className="h-4 w-4 mr-2" />
                    Register Now
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Other tabs content would go here */}
        {activeTab === 'past' && (
          <div className="text-center py-20">
            <Trophy className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Past Events</h3>
            <p className="text-muted-foreground">View your hackathon history and achievements</p>
          </div>
        )}

        {activeTab === 'my-events' && (
          <div className="text-center py-20">
            <Users className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">My Events</h3>
            <p className="text-muted-foreground">Manage your registered and hosted events</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hackathons;

