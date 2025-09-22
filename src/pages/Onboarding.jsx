import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ArrowLeft,
  Check,
  User,
  Code,
  Trophy,
  Target,
  Heart,
  Star,
  // Sparkles, // ❌ Not available - use Star instead
  // Brain, // ❌ Not available - use Code or User instead
  Rocket,
  Zap,
  Globe,
  MapPin,
  Calendar,
  Clock,
  Users,
  BookOpen,
  Briefcase,
  // GraduationCap, // ❌ Not available - use BookOpen instead
  Building,
  Palette,
  Database,
  Smartphone,
  // Shield, // ❌ Not available - use Lock instead
  Camera,
  Upload,
  Plus,
  X,
  ChevronDown,
  Search,
  Filter,
  Settings,
  Bell,
  Lock,
  Eye,
  EyeOff,
  Mail,
  Phone,
  Link,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
  // Twitch, // ❌ Not available
  Facebook,
  // Discord, // ❌ Not available
  // Slack, // ❌ Not available
  Figma
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    // Personal Info
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    profilePicture: null,
    
    // Academic Info
    university: '',
    major: '',
    year: '',
    graduationDate: '',
    gpa: '',
    
    // Location & Preferences
    location: '',
    timezone: '',
    preferredLanguage: 'English',
    
    // Skills & Interests
    skills: [],
    interests: [],
    experienceLevel: '',
    
    // Goals & Aspirations
    careerGoals: [],
    learningGoals: [],
    hackathonExperience: '',
    
    // Social & Portfolio
    socialLinks: {
      github: '',
      linkedin: '',
      portfolio: '',
      twitter: '',
      instagram: '',
      behance: '',
      dribbble: ''
    },
    
    // Privacy & Notifications
    profileVisibility: 'public',
    emailNotifications: true,
    pushNotifications: true,
    weeklyDigest: true,
    
    // Verification
    studentIdVerification: false,
    emailVerified: false
  });

  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [selectedGoals, setSelectedGoals] = useState([]);

  // Onboarding steps
  const steps = [
    {
      id: 'welcome',
      title: 'Welcome to PortTrack! 🎉',
      subtitle: 'Let\'s set up your profile to get you started',
      component: 'WelcomeStep'
    },
    {
      id: 'personal',
      title: 'Tell us about yourself',
      subtitle: 'Basic information to personalize your experience',
      component: 'PersonalInfoStep'
    },
    {
      id: 'academic',
      title: 'Academic Background',
      subtitle: 'Your educational journey and current status',
      component: 'AcademicInfoStep'
    },
    {
      id: 'skills',
      title: 'Skills & Expertise',
      subtitle: 'What technologies and skills do you work with?',
      component: 'SkillsStep'
    },
    {
      id: 'interests',
      title: 'Interests & Passions',
      subtitle: 'What areas of technology excite you most?',
      component: 'InterestsStep'
    },
    {
      id: 'goals',
      title: 'Goals & Aspirations',
      subtitle: 'What do you want to achieve with PortTrack?',
      component: 'GoalsStep'
    },
    {
      id: 'social',
      title: 'Connect Your Profiles',
      subtitle: 'Link your existing profiles to showcase your work',
      component: 'SocialLinksStep'
    },
    {
      id: 'privacy',
      title: 'Privacy & Notifications',
      subtitle: 'Control how you want to interact with the platform',
      component: 'PrivacyStep'
    },
    {
      id: 'verification',
      title: 'Verify Your Identity',
      subtitle: 'Complete verification to unlock all features',
      component: 'VerificationStep'
    },
    {
      id: 'complete',
      title: 'You\'re All Set! 🚀',
      subtitle: 'Welcome to the PortTrack community',
      component: 'CompleteStep'
    }
  ];

  // Predefined options
  const skillOptions = [
    // Programming Languages
    { id: 'javascript', label: 'JavaScript', category: 'Programming', icon: '🟨' },
    { id: 'python', label: 'Python', category: 'Programming', icon: '🐍' },
    { id: 'java', label: 'Java', category: 'Programming', icon: '☕' },
    { id: 'cpp', label: 'C++', category: 'Programming', icon: '⚡' },
    { id: 'csharp', label: 'C#', category: 'Programming', icon: '🔷' },
    { id: 'go', label: 'Go', category: 'Programming', icon: '🐹' },
    { id: 'rust', label: 'Rust', category: 'Programming', icon: '🦀' },
    { id: 'swift', label: 'Swift', category: 'Programming', icon: '🍎' },
    { id: 'kotlin', label: 'Kotlin', category: 'Programming', icon: '🤖' },
    { id: 'typescript', label: 'TypeScript', category: 'Programming', icon: '🔷' },
    
    // Frontend
    { id: 'react', label: 'React', category: 'Frontend', icon: '⚛️' },
    { id: 'vue', label: 'Vue.js', category: 'Frontend', icon: '💚' },
    { id: 'angular', label: 'Angular', category: 'Frontend', icon: '🅰️' },
    { id: 'svelte', label: 'Svelte', category: 'Frontend', icon: '🧡' },
    { id: 'nextjs', label: 'Next.js', category: 'Frontend', icon: '⚫' },
    { id: 'nuxt', label: 'Nuxt.js', category: 'Frontend', icon: '💚' },
    
    // Backend
    { id: 'nodejs', label: 'Node.js', category: 'Backend', icon: '💚' },
    { id: 'express', label: 'Express.js', category: 'Backend', icon: '🚂' },
    { id: 'django', label: 'Django', category: 'Backend', icon: '🐍' },
    { id: 'flask', label: 'Flask', category: 'Backend', icon: '🌶️' },
    { id: 'spring', label: 'Spring Boot', category: 'Backend', icon: '🍃' },
    { id: 'laravel', label: 'Laravel', category: 'Backend', icon: '🔴' },
    
    // Mobile
    { id: 'react-native', label: 'React Native', category: 'Mobile', icon: '📱' },
    { id: 'flutter', label: 'Flutter', category: 'Mobile', icon: '🐦' },
    { id: 'ios', label: 'iOS Development', category: 'Mobile', icon: '📱' },
    { id: 'android', label: 'Android Development', category: 'Mobile', icon: '🤖' },
    
    // Data & AI
    { id: 'machine-learning', label: 'Machine Learning', category: 'AI/Data', icon: '🤖' },
    { id: 'deep-learning', label: 'Deep Learning', category: 'AI/Data', icon: '🧠' },
    { id: 'data-science', label: 'Data Science', category: 'AI/Data', icon: '📊' },
    { id: 'tensorflow', label: 'TensorFlow', category: 'AI/Data', icon: '🧠' },
    { id: 'pytorch', label: 'PyTorch', category: 'AI/Data', icon: '🔥' },
    
    // Design
    { id: 'ui-design', label: 'UI Design', category: 'Design', icon: '🎨' },
    { id: 'ux-design', label: 'UX Design', category: 'Design', icon: '👤' },
    { id: 'figma', label: 'Figma', category: 'Design', icon: '🎨' },
    { id: 'photoshop', label: 'Photoshop', category: 'Design', icon: '🖼️' },
    { id: 'illustrator', label: 'Illustrator', category: 'Design', icon: '🎨' },
    
    // DevOps & Cloud
    { id: 'aws', label: 'AWS', category: 'Cloud', icon: '☁️' },
    { id: 'azure', label: 'Azure', category: 'Cloud', icon: '☁️' },
    { id: 'gcp', label: 'Google Cloud', category: 'Cloud', icon: '☁️' },
    { id: 'docker', label: 'Docker', category: 'DevOps', icon: '🐳' },
    { id: 'kubernetes', label: 'Kubernetes', category: 'DevOps', icon: '⚓' }
  ];

  const interestOptions = [
    { id: 'web-development', label: 'Web Development', icon: '🌐' },
    { id: 'mobile-development', label: 'Mobile Development', icon: '📱' },
    { id: 'artificial-intelligence', label: 'Artificial Intelligence', icon: '🤖' },
    { id: 'machine-learning', label: 'Machine Learning', icon: '🧠' },
    { id: 'data-science', label: 'Data Science', icon: '📊' },
    { id: 'cybersecurity', label: 'Cybersecurity', icon: '🔒' },
    { id: 'blockchain', label: 'Blockchain', icon: '⛓️' },
    { id: 'game-development', label: 'Game Development', icon: '🎮' },
    { id: 'ar-vr', label: 'AR/VR', icon: '🥽' },
    { id: 'iot', label: 'Internet of Things', icon: '🌐' },
    { id: 'robotics', label: 'Robotics', icon: '🤖' },
    { id: 'fintech', label: 'FinTech', icon: '💰' },
    { id: 'healthtech', label: 'HealthTech', icon: '🏥' },
    { id: 'edtech', label: 'EdTech', icon: '📚' },
    { id: 'climate-tech', label: 'Climate Tech', icon: '🌱' },
    { id: 'social-impact', label: 'Social Impact', icon: '❤️' },
    { id: 'startup', label: 'Startups', icon: '🚀' },
    { id: 'open-source', label: 'Open Source', icon: '🔓' },
    { id: 'devops', label: 'DevOps', icon: '⚙️' },
    { id: 'cloud-computing', label: 'Cloud Computing', icon: '☁️' }
  ];

  const goalOptions = [
    { id: 'land-internship', label: 'Land a Tech Internship', icon: '💼' },
    { id: 'full-time-job', label: 'Get a Full-time Job', icon: '🏢' },
    { id: 'start-startup', label: 'Start My Own Startup', icon: '🚀' },
    { id: 'win-hackathons', label: 'Win Hackathons', icon: '🏆' },
    { id: 'build-portfolio', label: 'Build Strong Portfolio', icon: '📁' },
    { id: 'learn-new-skills', label: 'Learn New Technologies', icon: '📚' },
    { id: 'network', label: 'Network with Peers', icon: '🤝' },
    { id: 'contribute-opensource', label: 'Contribute to Open Source', icon: '🔓' },
    { id: 'become-mentor', label: 'Become a Mentor', icon: '👨‍🏫' },
    { id: 'freelance', label: 'Start Freelancing', icon: '💻' },
    { id: 'research', label: 'Pursue Research', icon: '🔬' },
    { id: 'graduate-school', label: 'Apply to Graduate School', icon: '🎓' }
  ];

  const universities = [
    'MIT', 'Stanford University', 'Harvard University', 'UC Berkeley', 'Carnegie Mellon University',
    'Georgia Tech', 'University of Washington', 'Princeton University', 'Yale University',
    'Columbia University', 'Cornell University', 'University of Pennsylvania', 'Brown University',
    'Dartmouth College', 'Duke University', 'Northwestern University', 'University of Chicago',
    'Rice University', 'Vanderbilt University', 'Emory University', 'Other'
  ];

  const majors = [
    'Computer Science', 'Software Engineering', 'Computer Engineering', 'Electrical Engineering',
    'Data Science', 'Information Technology', 'Cybersecurity', 'Game Design', 'Digital Media',
    'Human-Computer Interaction', 'Information Systems', 'Mathematics', 'Physics', 'Statistics',
    'Business', 'Economics', 'Psychology', 'Design', 'Art', 'Other'
  ];

  const years = ['Freshman', 'Sophomore', 'Junior', 'Senior', 'Graduate Student', 'PhD Student', 'Recent Graduate'];

  const experienceLevels = [
    { id: 'beginner', label: 'Beginner', description: 'Just starting my coding journey' },
    { id: 'intermediate', label: 'Intermediate', description: 'Have some projects and experience' },
    { id: 'advanced', label: 'Advanced', description: 'Experienced with multiple technologies' },
    { id: 'expert', label: 'Expert', description: 'Deep expertise in my field' }
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSkillToggle = (skill) => {
    setSelectedSkills(prev => 
      prev.includes(skill.id) 
        ? prev.filter(id => id !== skill.id)
        : [...prev, skill.id]
    );
  };

  const handleInterestToggle = (interest) => {
    setSelectedInterests(prev => 
      prev.includes(interest.id) 
        ? prev.filter(id => id !== interest.id)
        : [...prev, interest.id]
    );
  };

  const handleGoalToggle = (goal) => {
    setSelectedGoals(prev => 
      prev.includes(goal.id) 
        ? prev.filter(id => id !== goal.id)
        : [...prev, goal.id]
    );
  };

  const updateFormData = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const updateSocialLink = (platform, value) => {
    setFormData(prev => ({
      ...prev,
      socialLinks: {
        ...prev.socialLinks,
        [platform]: value
      }
    }));
  };

  // Step Components
  const WelcomeStep = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center space-y-8"
    >
      <div className="space-y-4">
        <div className="text-6xl mb-4">🎉</div>
        <h2 className="text-3xl font-bold font-space">Welcome to PortTrack!</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We're excited to have you join our community of innovative students. 
          Let's set up your profile so you can start showcasing your amazing work and connecting with peers.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div className="glass-card rounded-xl p-6 text-center">
          <div className="text-3xl mb-3">🚀</div>
          <h3 className="font-semibold mb-2">Showcase Your Work</h3>
          <p className="text-sm text-muted-foreground">
            Build a stunning portfolio that highlights your projects and achievements
          </p>
        </div>
        
        <div className="glass-card rounded-xl p-6 text-center">
          <div className="text-3xl mb-3">🤝</div>
          <h3 className="font-semibold mb-2">Connect & Collaborate</h3>
          <p className="text-sm text-muted-foreground">
            Network with fellow students and find teammates for hackathons
          </p>
        </div>
        
        <div className="glass-card rounded-xl p-6 text-center">
          <div className="text-3xl mb-3">🏆</div>
          <h3 className="font-semibold mb-2">Get Discovered</h3>
          <p className="text-sm text-muted-foreground">
            Stand out to recruiters and land your dream internship or job
          </p>
        </div>
      </div>
      
      <div className="text-sm text-muted-foreground">
        This setup will take about 5 minutes. You can always update your information later.
      </div>
    </motion.div>
  );

  const PersonalInfoStep = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6 max-w-2xl mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">First Name *</label>
          <Input
            placeholder="Enter your first name"
            value={formData.firstName}
            onChange={(e) => updateFormData('firstName', e.target.value)}
            className="glass"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Last Name *</label>
          <Input
            placeholder="Enter your last name"
            value={formData.lastName}
            onChange={(e) => updateFormData('lastName', e.target.value)}
            className="glass"
          />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2">Email Address *</label>
        <Input
          type="email"
          placeholder="your.email@university.edu"
          value={formData.email}
          onChange={(e) => updateFormData('email', e.target.value)}
          className="glass"
        />
        <p className="text-xs text-muted-foreground mt-1">
          We recommend using your university email for verification
        </p>
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2">Phone Number (Optional)</label>
        <Input
          type="tel"
          placeholder="+1 (555) 123-4567"
          value={formData.phone}
          onChange={(e) => updateFormData('phone', e.target.value)}
          className="glass"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2">Location</label>
        <Input
          placeholder="City, State/Country"
          value={formData.location}
          onChange={(e) => updateFormData('location', e.target.value)}
          className="glass"
        />
      </div>
      
      <div className="glass-card rounded-xl p-6">
        <h3 className="font-semibold mb-4 flex items-center">
          <Camera className="h-5 w-5 mr-2" />
          Profile Picture
        </h3>
        <div className="flex items-center space-x-4">
          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white text-2xl font-bold">
            {formData.firstName ? formData.firstName[0].toUpperCase() : '?'}
          </div>
          <div>
            <Button variant="outline" className="glass hover-glow">
              <Upload className="h-4 w-4 mr-2" />
              Upload Photo
            </Button>
            <p className="text-xs text-muted-foreground mt-1">
              JPG, PNG or GIF. Max size 5MB.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const AcademicInfoStep = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6 max-w-2xl mx-auto"
    >
      <div>
        <label className="block text-sm font-medium mb-2">University/Institution *</label>
        <select
          value={formData.university}
          onChange={(e) => updateFormData('university', e.target.value)}
          className="w-full p-3 glass rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="">Select your university</option>
          {universities.map(uni => (
            <option key={uni} value={uni}>{uni}</option>
          ))}
        </select>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Major/Field of Study *</label>
          <select
            value={formData.major}
            onChange={(e) => updateFormData('major', e.target.value)}
            className="w-full p-3 glass rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Select your major</option>
            {majors.map(major => (
              <option key={major} value={major}>{major}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Academic Year *</label>
          <select
            value={formData.year}
            onChange={(e) => updateFormData('year', e.target.value)}
            className="w-full p-3 glass rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Select your year</option>
            {years.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Expected Graduation</label>
          <Input
            type="month"
            value={formData.graduationDate}
            onChange={(e) => updateFormData('graduationDate', e.target.value)}
            className="glass"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">GPA (Optional)</label>
          <Input
            type="number"
            step="0.01"
            min="0"
            max="4"
            placeholder="3.75"
            value={formData.gpa}
            onChange={(e) => updateFormData('gpa', e.target.value)}
            className="glass"
          />
        </div>
      </div>
      
      <div className="glass-card rounded-xl p-6">
        <h3 className="font-semibold mb-4 flex items-center">
          <GraduationCap className="h-5 w-5 mr-2" />
          Academic Achievements
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          Any notable academic achievements, honors, or awards? (You can add these later in your portfolio)
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {['Dean\'s List', 'Honor Society', 'Academic Scholarship', 'Research Assistant', 'Teaching Assistant', 'Student Government'].map(achievement => (
            <label key={achievement} className="flex items-center space-x-2 cursor-pointer">
              <input type="checkbox" className="rounded" />
              <span className="text-sm">{achievement}</span>
            </label>
          ))}
        </div>
      </div>
    </motion.div>
  );

  const SkillsStep = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    
    const categories = ['All', 'Programming', 'Frontend', 'Backend', 'Mobile', 'AI/Data', 'Design', 'Cloud', 'DevOps'];
    
    const filteredSkills = skillOptions.filter(skill => {
      const matchesSearch = skill.label.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || skill.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6 max-w-4xl mx-auto"
      >
        <div className="text-center mb-6">
          <p className="text-muted-foreground">
            Select the technologies and skills you're comfortable with. Don't worry if you're still learning!
          </p>
        </div>
        
        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 glass"
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'glass hover-glow text-muted-foreground hover:text-foreground'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Selected Skills */}
        {selectedSkills.length > 0 && (
          <div className="glass-card rounded-xl p-4">
            <h3 className="font-semibold mb-3">Selected Skills ({selectedSkills.length})</h3>
            <div className="flex flex-wrap gap-2">
              {selectedSkills.map(skillId => {
                const skill = skillOptions.find(s => s.id === skillId);
                return skill ? (
                  <Badge
                    key={skillId}
                    variant="secondary"
                    className="bg-primary/20 text-primary hover:bg-primary/30 cursor-pointer"
                    onClick={() => handleSkillToggle(skill)}
                  >
                    {skill.icon} {skill.label}
                    <X className="h-3 w-3 ml-1" />
                  </Badge>
                ) : null;
              })}
            </div>
          </div>
        )}
        
        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {filteredSkills.map(skill => (
            <button
              key={skill.id}
              onClick={() => handleSkillToggle(skill)}
              className={`p-4 rounded-xl text-left transition-all duration-300 ${
                selectedSkills.includes(skill.id)
                  ? 'bg-primary text-primary-foreground'
                  : 'glass hover-glow hover:scale-105'
              }`}
            >
              <div className="flex items-center space-x-2">
                <span className="text-lg">{skill.icon}</span>
                <div>
                  <div className="font-medium text-sm">{skill.label}</div>
                  <div className="text-xs opacity-75">{skill.category}</div>
                </div>
              </div>
            </button>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Don't see a skill you know? You can add custom skills later in your profile.
          </p>
        </div>
      </motion.div>
    );
  };

  const InterestsStep = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6 max-w-4xl mx-auto"
    >
      <div className="text-center mb-6">
        <p className="text-muted-foreground">
          What areas of technology and innovation excite you most? This helps us recommend relevant opportunities.
        </p>
      </div>
      
      {/* Selected Interests */}
      {selectedInterests.length > 0 && (
        <div className="glass-card rounded-xl p-4">
          <h3 className="font-semibold mb-3">Your Interests ({selectedInterests.length})</h3>
          <div className="flex flex-wrap gap-2">
            {selectedInterests.map(interestId => {
              const interest = interestOptions.find(i => i.id === interestId);
              return interest ? (
                <Badge
                  key={interestId}
                  variant="secondary"
                  className="bg-green-500/20 text-green-500 hover:bg-green-500/30 cursor-pointer"
                  onClick={() => handleInterestToggle(interest)}
                >
                  {interest.icon} {interest.label}
                  <X className="h-3 w-3 ml-1" />
                </Badge>
              ) : null;
            })}
          </div>
        </div>
      )}
      
      {/* Interests Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {interestOptions.map(interest => (
          <button
            key={interest.id}
            onClick={() => handleInterestToggle(interest)}
            className={`p-6 rounded-xl text-center transition-all duration-300 ${
              selectedInterests.includes(interest.id)
                ? 'bg-green-500 text-white'
                : 'glass hover-glow hover:scale-105'
            }`}
          >
            <div className="text-3xl mb-2">{interest.icon}</div>
            <div className="font-medium text-sm">{interest.label}</div>
          </button>
        ))}
      </div>
    </motion.div>
  );

  const GoalsStep = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6 max-w-4xl mx-auto"
    >
      <div className="text-center mb-6">
        <p className="text-muted-foreground">
          What do you want to achieve with PortTrack? Select your goals so we can personalize your experience.
        </p>
      </div>
      
      {/* Experience Level */}
      <div className="glass-card rounded-xl p-6">
        <h3 className="font-semibold mb-4">What's your current experience level?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {experienceLevels.map(level => (
            <button
              key={level.id}
              onClick={() => updateFormData('experienceLevel', level.id)}
              className={`p-4 rounded-xl text-left transition-all duration-300 ${
                formData.experienceLevel === level.id
                  ? 'bg-primary text-primary-foreground'
                  : 'glass hover-glow'
              }`}
            >
              <div className="font-medium mb-1">{level.label}</div>
              <div className="text-sm opacity-75">{level.description}</div>
            </button>
          ))}
        </div>
      </div>
      
      {/* Selected Goals */}
      {selectedGoals.length > 0 && (
        <div className="glass-card rounded-xl p-4">
          <h3 className="font-semibold mb-3">Your Goals ({selectedGoals.length})</h3>
          <div className="flex flex-wrap gap-2">
            {selectedGoals.map(goalId => {
              const goal = goalOptions.find(g => g.id === goalId);
              return goal ? (
                <Badge
                  key={goalId}
                  variant="secondary"
                  className="bg-purple-500/20 text-purple-500 hover:bg-purple-500/30 cursor-pointer"
                  onClick={() => handleGoalToggle(goal)}
                >
                  {goal.icon} {goal.label}
                  <X className="h-3 w-3 ml-1" />
                </Badge>
              ) : null;
            })}
          </div>
        </div>
      )}
      
      {/* Goals Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {goalOptions.map(goal => (
          <button
            key={goal.id}
            onClick={() => handleGoalToggle(goal)}
            className={`p-6 rounded-xl text-center transition-all duration-300 ${
              selectedGoals.includes(goal.id)
                ? 'bg-purple-500 text-white'
                : 'glass hover-glow hover:scale-105'
            }`}
          >
            <div className="text-3xl mb-2">{goal.icon}</div>
            <div className="font-medium text-sm">{goal.label}</div>
          </button>
        ))}
      </div>
    </motion.div>
  );

  const SocialLinksStep = () => {
    const socialPlatforms = [
      { id: 'github', label: 'GitHub', icon: Github, placeholder: 'github.com/username' },
      { id: 'linkedin', label: 'LinkedIn', icon: Linkedin, placeholder: 'linkedin.com/in/username' },
      { id: 'portfolio', label: 'Portfolio Website', icon: Globe, placeholder: 'yourportfolio.com' },
      { id: 'twitter', label: 'Twitter', icon: Twitter, placeholder: 'twitter.com/username' },
      { id: 'instagram', label: 'Instagram', icon: Instagram, placeholder: 'instagram.com/username' },
      { id: 'behance', label: 'Behance', icon: Palette, placeholder: 'behance.net/username' },
      { id: 'dribbble', label: 'Dribbble', icon: Palette, placeholder: 'dribbble.com/username' }
    ];

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6 max-w-2xl mx-auto"
      >
        <div className="text-center mb-6">
          <p className="text-muted-foreground">
            Connect your existing profiles to showcase your work and make it easier for others to find you.
          </p>
        </div>
        
        <div className="space-y-4">
          {socialPlatforms.map(platform => {
            const Icon = platform.icon;
            return (
              <div key={platform.id} className="glass-card rounded-xl p-4">
                <div className="flex items-center space-x-3 mb-3">
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{platform.label}</span>
                </div>
                <Input
                  placeholder={platform.placeholder}
                  value={formData.socialLinks[platform.id]}
                  onChange={(e) => updateSocialLink(platform.id, e.target.value)}
                  className="glass"
                />
              </div>
            );
          })}
        </div>
        
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            All social links are optional. You can add or update them anytime in your profile settings.
          </p>
        </div>
      </motion.div>
    );
  };

  const PrivacyStep = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6 max-w-2xl mx-auto"
    >
      <div className="text-center mb-6">
        <p className="text-muted-foreground">
          Control your privacy settings and how you want to receive notifications.
        </p>
      </div>
      
      <div className="space-y-6">
        {/* Profile Visibility */}
        <div className="glass-card rounded-xl p-6">
          <h3 className="font-semibold mb-4 flex items-center">
            <Eye className="h-5 w-5 mr-2" />
            Profile Visibility
          </h3>
          <div className="space-y-3">
            {[
              { id: 'public', label: 'Public', description: 'Anyone can view your profile and projects' },
              { id: 'students', label: 'Students Only', description: 'Only verified students can view your profile' },
              { id: 'private', label: 'Private', description: 'Only you can view your profile' }
            ].map(option => (
              <label key={option.id} className="flex items-start space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="profileVisibility"
                  value={option.id}
                  checked={formData.profileVisibility === option.id}
                  onChange={(e) => updateFormData('profileVisibility', e.target.value)}
                  className="mt-1"
                />
                <div>
                  <div className="font-medium">{option.label}</div>
                  <div className="text-sm text-muted-foreground">{option.description}</div>
                </div>
              </label>
            ))}
          </div>
        </div>
        
        {/* Notification Preferences */}
        <div className="glass-card rounded-xl p-6">
          <h3 className="font-semibold mb-4 flex items-center">
            <Bell className="h-5 w-5 mr-2" />
            Notification Preferences
          </h3>
          <div className="space-y-4">
            {[
              { id: 'emailNotifications', label: 'Email Notifications', description: 'Receive important updates via email' },
              { id: 'pushNotifications', label: 'Push Notifications', description: 'Get real-time notifications in your browser' },
              { id: 'weeklyDigest', label: 'Weekly Digest', description: 'Weekly summary of your activity and opportunities' }
            ].map(option => (
              <label key={option.id} className="flex items-center justify-between cursor-pointer">
                <div>
                  <div className="font-medium">{option.label}</div>
                  <div className="text-sm text-muted-foreground">{option.description}</div>
                </div>
                <input
                  type="checkbox"
                  checked={formData[option.id]}
                  onChange={(e) => updateFormData(option.id, e.target.checked)}
                  className="rounded"
                />
              </label>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );

  const VerificationStep = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6 max-w-2xl mx-auto"
    >
      <div className="text-center mb-6">
        <p className="text-muted-foreground">
          Verify your identity to unlock all features and build trust with the community.
        </p>
      </div>
      
      <div className="space-y-6">
        {/* Email Verification */}
        <div className="glass-card rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold flex items-center">
              <Mail className="h-5 w-5 mr-2" />
              Email Verification
            </h3>
            <Badge variant={formData.emailVerified ? "default" : "secondary"}>
              {formData.emailVerified ? "Verified" : "Pending"}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            We'll send a verification link to {formData.email}
          </p>
          <Button variant="outline" className="glass hover-glow">
            <Send className="h-4 w-4 mr-2" />
            Send Verification Email
          </Button>
        </div>
        
        {/* Student ID Verification */}
        <div className="glass-card rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold flex items-center">
              <GraduationCap className="h-5 w-5 mr-2" />
              Student ID Verification
            </h3>
            <Badge variant={formData.studentIdVerification ? "default" : "secondary"}>
              {formData.studentIdVerification ? "Verified" : "Optional"}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Upload your student ID to get verified student status and access exclusive features.
          </p>
          <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
            <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
            <p className="text-sm text-muted-foreground mb-2">
              Drag and drop your student ID or click to browse
            </p>
            <Button variant="outline" className="glass hover-glow">
              Choose File
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Supported formats: JPG, PNG, PDF. Max size: 10MB. Your ID will be securely processed and deleted after verification.
          </p>
        </div>
        
        {/* Blockchain Verification */}
        <div className="glass-card rounded-xl p-6">
          <h3 className="font-semibold mb-4 flex items-center">
            <Shield className="h-5 w-5 mr-2" />
            Blockchain Verification Setup
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Set up blockchain verification for your achievements and certificates. This creates an immutable record of your accomplishments.
          </p>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 glass rounded-lg">
              <div>
                <div className="font-medium">Digital Wallet</div>
                <div className="text-sm text-muted-foreground">Connect your wallet for certificate verification</div>
              </div>
              <Button variant="outline" size="sm" className="glass hover-glow">
                Connect Wallet
              </Button>
            </div>
            
            <div className="flex items-center justify-between p-3 glass rounded-lg">
              <div>
                <div className="font-medium">Verification Hash</div>
                <div className="text-sm text-muted-foreground">Generate your unique verification hash</div>
              </div>
              <Button variant="outline" size="sm" className="glass hover-glow">
                Generate Hash
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const CompleteStep = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center space-y-8"
    >
      <div className="space-y-4">
        <div className="text-6xl mb-4">🚀</div>
        <h2 className="text-3xl font-bold font-space">You're All Set!</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Welcome to the PortTrack community! Your profile is ready and you can start showcasing your work, 
          connecting with peers, and discovering amazing opportunities.
        </p>
      </div>
      
      <div className="glass-card rounded-xl p-6 max-w-md mx-auto">
        <h3 className="font-semibold mb-4">What's Next?</h3>
        <div className="space-y-3 text-left">
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">1</div>
            <span className="text-sm">Complete your portfolio with projects</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">2</div>
            <span className="text-sm">Join hackathons and events</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">3</div>
            <span className="text-sm">Connect with fellow students</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">4</div>
            <span className="text-sm">Get discovered by recruiters</span>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button className="gradient-purple-cyan">
          <Rocket className="h-4 w-4 mr-2" />
          Go to Dashboard
        </Button>
        <Button variant="outline" className="glass hover-glow">
          <User className="h-4 w-4 mr-2" />
          Complete Profile
        </Button>
      </div>
    </motion.div>
  );

  // Render current step component
  const renderStepComponent = () => {
    switch (steps[currentStep].component) {
      case 'WelcomeStep': return <WelcomeStep />;
      case 'PersonalInfoStep': return <PersonalInfoStep />;
      case 'AcademicInfoStep': return <AcademicInfoStep />;
      case 'SkillsStep': return <SkillsStep />;
      case 'InterestsStep': return <InterestsStep />;
      case 'GoalsStep': return <GoalsStep />;
      case 'SocialLinksStep': return <SocialLinksStep />;
      case 'PrivacyStep': return <PrivacyStep />;
      case 'VerificationStep': return <VerificationStep />;
      case 'CompleteStep': return <CompleteStep />;
      default: return <WelcomeStep />;
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm text-muted-foreground">
              Step {currentStep + 1} of {steps.length}
            </div>
            <div className="text-sm text-muted-foreground">
              {Math.round(((currentStep + 1) / steps.length) * 100)}% Complete
            </div>
          </div>
          
          <div className="w-full bg-muted rounded-full h-2">
            <motion.div 
              className="bg-gradient-to-r from-purple-500 to-cyan-500 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </motion.div>

        {/* Step Header */}
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-space font-bold mb-2">
            {steps[currentStep].title}
          </h1>
          <p className="text-lg text-muted-foreground">
            {steps[currentStep].subtitle}
          </p>
        </motion.div>

        {/* Step Content */}
        <div className="mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderStepComponent()}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between"
        >
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 0}
            className="glass hover-glow"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>
          
          <div className="flex space-x-2">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index <= currentStep ? 'bg-primary' : 'bg-muted'
                }`}
              />
            ))}
          </div>
          
          {currentStep < steps.length - 1 ? (
            <Button
              onClick={handleNext}
              className="gradient-purple-cyan"
            >
              Next
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          ) : (
            <Button
              className="gradient-purple-cyan"
            >
              <Check className="h-4 w-4 mr-2" />
              Complete Setup
            </Button>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Onboarding;

