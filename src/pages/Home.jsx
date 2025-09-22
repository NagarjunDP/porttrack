import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Sparkles, 
  Zap, 
  Shield, 
  Trophy, 
  Users, 
  Brain,
  Rocket,
  Star,
  Play,
  ChevronRight,
  Award,
  Target,
  TrendingUp,
  Globe,
  Code,
  Palette,
  Database,
  Smartphone,
  BookOpen,
  Coffee,
  Heart,
  MessageCircle,
  Share2,
  Camera,
  MapPin,
  Calendar,
  Clock,
  Briefcase,
  GraduationCap,
  Building,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
  Twitch,
  CheckCircle,
  X,
  Volume2,
  VolumeX,
  RotateCcw,
  Download,
  ExternalLink,
  Pause
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Home = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [currentStory, setCurrentStory] = useState(0);
  const [isStoryPlaying, setIsStoryPlaying] = useState(false);
  const [storyProgress, setStoryProgress] = useState(0);
  const [showStoryModal, setShowStoryModal] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const heroRef = useRef(null);
  const storyIntervalRef = useRef(null);

  // Student success stories data (Spotify Wrapped style)
  const studentStories = [
    {
      id: 1,
      name: "Alex Chen",
      university: "MIT",
      avatar: "👨‍💻",
      year: "2024",
      stats: {
        hackathonsWon: 12,
        projectsBuilt: 28,
        skillsLearned: 15,
        connectionsGained: 247
      },
      achievements: ["Google Intern", "Hackathon Champion", "Open Source Contributor"],
      topSkill: "React & AI",
      journey: "From zero coding experience to Google internship in 18 months",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      name: "Sarah Rodriguez",
      university: "Stanford",
      avatar: "👩‍🎨",
      year: "2024",
      stats: {
        hackathonsWon: 8,
        projectsBuilt: 22,
        skillsLearned: 12,
        connectionsGained: 189
      },
      achievements: ["Design Lead", "Startup Founder", "Award Winner"],
      topSkill: "UI/UX Design",
      journey: "Built 3 successful startups while studying computer science",
      color: "from-cyan-500 to-blue-500"
    },
    {
      id: 3,
      name: "Marcus Johnson",
      university: "UC Berkeley",
      avatar: "👨‍🔬",
      year: "2024",
      stats: {
        hackathonsWon: 15,
        projectsBuilt: 31,
        skillsLearned: 18,
        connectionsGained: 312
      },
      achievements: ["ML Engineer", "Research Published", "Conference Speaker"],
      topSkill: "Machine Learning",
      journey: "Published 5 research papers and landed ML role at top tech company",
      color: "from-green-500 to-teal-500"
    }
  ];

  // Enhanced features with more student-focused benefits
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Portfolio Builder",
      description: "Create stunning portfolios in minutes with AI assistance. No design skills needed - just your achievements.",
      benefits: ["Auto-generates layouts", "Smart content suggestions", "Real-time preview"],
      color: "from-purple-500 to-pink-500",
      demo: "Watch AI build a portfolio in 30 seconds"
    },
    {
      icon: Users,
      title: "Student Community Hub",
      description: "Connect with fellow students, share your journey, and discover opportunities in your area.",
      benefits: ["Find study buddies", "Join local hackathons", "Share achievements"],
      color: "from-blue-500 to-cyan-500",
      demo: "See how students connect and grow together"
    },
    {
      icon: Trophy,
      title: "Achievement Verification",
      description: "Blockchain-verified certificates that employers trust. Your achievements, permanently recorded.",
      benefits: ["Tamper-proof certificates", "Instant verification", "Global recognition"],
      color: "from-yellow-500 to-orange-500",
      demo: "Verify a certificate in real-time"
    },
    {
      icon: Rocket,
      title: "Career Acceleration",
      description: "Get discovered by top recruiters and companies actively looking for talent like yours.",
      benefits: ["Direct recruiter access", "Job matching", "Interview prep"],
      color: "from-green-500 to-teal-500",
      demo: "See how students land dream jobs"
    },
    {
      icon: Zap,
      title: "Real-Time Opportunities",
      description: "Never miss a hackathon, internship, or networking event. Get notified about opportunities near you.",
      benefits: ["Local event alerts", "Application deadlines", "Networking events"],
      color: "from-red-500 to-pink-500",
      demo: "Discover opportunities in your city"
    },
    {
      icon: Shield,
      title: "Privacy & Control",
      description: "You own your data. Choose what to share, with whom, and when. Complete control over your digital presence.",
      benefits: ["Granular privacy controls", "Data ownership", "Secure sharing"],
      color: "from-indigo-500 to-purple-500",
      demo: "Customize your privacy settings"
    }
  ];

  // Real student testimonials
  const testimonials = [
    {
      name: "Emma Thompson",
      role: "CS Student at Harvard",
      avatar: "👩‍💻",
      quote: "PortTrack helped me land my dream internship at Google. The AI portfolio builder made me stand out!",
      achievement: "Google SWE Intern"
    },
    {
      name: "David Kim",
      role: "Design Student at RISD",
      avatar: "👨‍🎨",
      quote: "The community feature is amazing. I found my co-founder through PortTrack and we're building something incredible.",
      achievement: "Startup Co-founder"
    },
    {
      name: "Priya Patel",
      role: "Engineering Student at CMU",
      avatar: "👩‍🔬",
      quote: "Blockchain verification gave my achievements credibility. Recruiters actually trust my portfolio now.",
      achievement: "Microsoft Intern"
    }
  ];

  // Live stats that update
  const [liveStats, setLiveStats] = useState({
    students: 12847,
    portfolios: 8934,
    hackathons: 156,
    jobOffers: 2341
  });

  useEffect(() => {
    // Simulate live stats updates
    const interval = setInterval(() => {
      setLiveStats(prev => ({
        students: prev.students + Math.floor(Math.random() * 3),
        portfolios: prev.portfolios + Math.floor(Math.random() * 2),
        hackathons: prev.hackathons + (Math.random() > 0.9 ? 1 : 0),
        jobOffers: prev.jobOffers + Math.floor(Math.random() * 2)
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Story modal functionality
  useEffect(() => {
    if (isStoryPlaying && showStoryModal) {
      storyIntervalRef.current = setInterval(() => {
        setStoryProgress(prev => {
          if (prev >= 100) {
            // Move to next story
            setCurrentStory(prevStory => {
              const nextStory = (prevStory + 1) % studentStories.length;
              if (nextStory === 0) {
                // End of all stories
                setIsStoryPlaying(false);
                setShowStoryModal(false);
                return 0;
              }
              return nextStory;
            });
            return 0;
          }
          return prev + 2; // 5 seconds per story (100/20 = 5)
        });
      }, 100);
    } else {
      clearInterval(storyIntervalRef.current);
    }

    return () => clearInterval(storyIntervalRef.current);
  }, [isStoryPlaying, showStoryModal, currentStory]);

  // Particle animation
  useEffect(() => {
    const createParticle = () => {
      if (!heroRef.current) return;
      
      const particle = document.createElement('div');
      particle.className = 'absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full opacity-70';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      
      heroRef.current.appendChild(particle);
      
      particle.animate([
        { transform: 'translate(0, 0) scale(0)', opacity: 0 },
        { transform: `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(1)`, opacity: 0.7 },
        { transform: `translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) scale(0)`, opacity: 0 }
      ], {
        duration: 4000,
        easing: 'ease-out'
      }).onfinish = () => particle.remove();
    };

    const interval = setInterval(createParticle, 300);
    return () => clearInterval(interval);
  }, []);

  const startStoryMode = () => {
    setShowStoryModal(true);
    setCurrentStory(0);
    setStoryProgress(0);
    setIsStoryPlaying(true);
  };

  const closeStoryModal = () => {
    setShowStoryModal(false);
    setIsStoryPlaying(false);
    setStoryProgress(0);
    setCurrentStory(0);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
        <div ref={heroRef} className="absolute inset-0 overflow-hidden">
          {/* Animated background grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Live indicator */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full glass mb-8 hover-glow"
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2" />
            <span className="text-sm font-medium">
              {liveStats.students.toLocaleString()}+ students building their future
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-space font-bold mb-6"
          >
            <span className="neon-text">One Portfolio.</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Endless Possibilities.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed"
          >
            The AI-powered platform where students showcase achievements, connect with peers, 
            and get discovered by top companies. Your journey starts here.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button 
              size="lg" 
              className="gradient-purple-cyan hover-lift text-lg px-8 py-4 h-auto"
              asChild
            >
              <Link to="/auth">
                <Rocket className="h-5 w-5 mr-2" />
                Start Your Journey
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="glass hover-glow text-lg px-8 py-4 h-auto"
              onClick={startStoryMode}
            >
              <Play className="h-5 w-5 mr-2" />
              See Success Stories
            </Button>
          </motion.div>

          {/* Live stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {[
              { label: "Active Students", value: liveStats.students, icon: Users },
              { label: "Portfolios Created", value: liveStats.portfolios, icon: BookOpen },
              { label: "Hackathons Hosted", value: liveStats.hackathons, icon: Trophy },
              { label: "Job Offers", value: liveStats.jobOffers, icon: Briefcase }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="glass-card rounded-xl p-4 hover-lift">
                  <Icon className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold font-space neon-text">
                    {stat.value.toLocaleString()}+
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Floating portfolio preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute right-10 top-1/2 transform -translate-y-1/2 hidden xl:block"
        >
          <div className="glass-card rounded-2xl p-6 w-80 hover-lift">
            <div className="flex items-center space-x-3 mb-4">
              <div className="text-3xl">👨‍💻</div>
              <div>
                <div className="font-semibold">Alex Chen</div>
                <div className="text-sm text-muted-foreground">MIT • CS Student</div>
              </div>
              <div className="ml-auto">
                <Zap className="h-5 w-5 text-green-500" />
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span>Portfolio Score</span>
                <span className="font-bold text-primary">94%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-gradient-to-r from-purple-500 to-cyan-500 h-2 rounded-full w-[94%]" />
              </div>
              <div className="flex space-x-2">
                <span className="px-2 py-1 bg-primary/20 text-primary rounded text-xs">React</span>
                <span className="px-2 py-1 bg-primary/20 text-primary rounded text-xs">AI/ML</span>
                <span className="px-2 py-1 bg-primary/20 text-primary rounded text-xs">Python</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-background to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-space font-bold mb-6">
              Why Students <span className="neon-text">Choose PortTrack</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to showcase your skills, connect with peers, and land your dream opportunities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card rounded-xl p-8 hover-lift group cursor-pointer"
                  onMouseEnter={() => setActiveFeature(index)}
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold font-space mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground mb-4">{feature.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {feature.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  
                  <Button variant="ghost" className="text-primary hover:text-primary/80 p-0">
                    {feature.demo}
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-space font-bold mb-6">
              <span className="neon-text">Real Students.</span> Real Success.
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how PortTrack is helping students around the world achieve their dreams.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glass-card rounded-xl p-8 hover-lift"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="text-3xl">{testimonial.avatar}</div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
                
                <blockquote className="text-muted-foreground mb-4 italic">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center">
                  <Award className="h-4 w-4 text-yellow-500 mr-2" />
                  <span className="text-sm font-medium text-primary">{testimonial.achievement}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-space font-bold mb-6">
              Ready to Build Your Future?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of students who are already using PortTrack to showcase their skills and land amazing opportunities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-purple-600 hover:bg-white/90 text-lg px-8 py-4 h-auto font-semibold"
                asChild
              >
                <Link to="/auth">
                  <Rocket className="h-5 w-5 mr-2" />
                  Get Started Free
                </Link>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 text-lg px-8 py-4 h-auto"
                onClick={startStoryMode}
              >
                <Play className="h-5 w-5 mr-2" />
                Watch Success Stories
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story Modal (Spotify Wrapped Style) */}
      <AnimatePresence>
        {showStoryModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeStoryModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative w-full max-w-md h-[80vh] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Story Progress Bars */}
              <div className="absolute top-4 left-4 right-4 z-20 flex space-x-1">
                {studentStories.map((_, index) => (
                  <div key={index} className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-white transition-all duration-100"
                      style={{ 
                        width: index < currentStory ? '100%' : 
                               index === currentStory ? `${storyProgress}%` : '0%' 
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Story Controls */}
              <div className="absolute top-4 right-4 z-20 flex space-x-2">
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="w-8 h-8 rounded-full bg-black/50 flex items-center justify-center text-white"
                >
                  {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                </button>
                <button
                  onClick={() => setIsStoryPlaying(!isStoryPlaying)}
                  className="w-8 h-8 rounded-full bg-black/50 flex items-center justify-center text-white"
                >
                  {isStoryPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </button>
                <button
                  onClick={closeStoryModal}
                  className="w-8 h-8 rounded-full bg-black/50 flex items-center justify-center text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Story Content */}
              <div className={`w-full h-full bg-gradient-to-br ${studentStories[currentStory].color} relative overflow-hidden`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
                </div>

                <div className="relative z-10 h-full flex flex-col justify-center items-center text-white p-8 text-center">
                  {/* Student Avatar */}
                  <div className="text-6xl mb-4">{studentStories[currentStory].avatar}</div>
                  
                  {/* Student Info */}
                  <h2 className="text-2xl font-bold font-space mb-2">{studentStories[currentStory].name}</h2>
                  <p className="text-lg opacity-90 mb-2">{studentStories[currentStory].university}</p>
                  <p className="text-sm opacity-75 mb-8">Class of {studentStories[currentStory].year}</p>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 w-full mb-8">
                    {Object.entries(studentStories[currentStory].stats).map(([key, value]) => (
                      <div key={key} className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
                        <div className="text-2xl font-bold">{value}</div>
                        <div className="text-xs opacity-75 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Top Achievement */}
                  <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm w-full mb-6">
                    <div className="text-sm opacity-75 mb-1">Top Skill</div>
                    <div className="text-lg font-semibold">{studentStories[currentStory].topSkill}</div>
                  </div>

                  {/* Journey */}
                  <p className="text-sm opacity-90 italic">"{studentStories[currentStory].journey}"</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;

