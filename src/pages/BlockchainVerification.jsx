import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  // Basic Actions
  Search,
  CheckCircle,
  XCircle,
  Clock,
  Zap,
  Award,
  Trophy,
  Code,
  Calendar,
  User,
  Hash,
  ExternalLink,
  Copy,
  Download,
  Eye,
  AlertTriangle,
  FileText,
  Link,
  QrCode,
  Upload,
  Camera,
  Globe,
  Lock,
  Unlock,
  Key,
  Database,
  Server,
  Cpu,
  HardDrive,
  Wifi,
  Activity,
  TrendingUp,
  BarChart3,
  PieChart,
  LineChart,
  Target,
  Star,
  Heart,
  Bookmark,
  Share2,
  MessageCircle,
  ThumbsUp,
  Flag,
  MoreHorizontal,
  Filter,
  Grid,
  List,
  Layers,
  Package,
  Box,
  Archive,
  Folder,
  File,
  Plus,
  Minus,
  X,
  Check,
  ArrowRight,
  ArrowLeft,
  ArrowUp,
  ArrowDown,
  ChevronRight,
  ChevronLeft,
  ChevronUp,
  ChevronDown,
  ChevronsRight,
  ChevronsLeft,
  ChevronsUp,
  ChevronsDown,
  RotateCcw,
  RotateCw,
  RefreshCw,
  RefreshCcw,
  Maximize,
  Minimize,
  Maximize2,
  Minimize2,
  ZoomIn,
  ZoomOut,
  Move,
  MousePointer,
  Navigation,
  Navigation2,
  Compass,
  Map,
  MapPin,
  Send,
  Mail,
  Phone,
  MessageSquare,
  Inbox,
  Trash,
  Trash2,
  Edit,
  Edit2,
  Edit3,
  Save,
  Settings,
  Sliders,
  Power,
  Battery,
  BatteryLow,
  Bluetooth,
  Smartphone,
  Tablet,
  Laptop,
  Monitor,
  Tv,
  Speaker,
  Headphones,
  Mic,
  MicOff,
  Volume,
  Volume1,
  Volume2,
  VolumeX,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  FastForward,
  Rewind,
  Repeat,
  Repeat1,
  Shuffle,
  Music,
  Radio,
  Image,
  Video,
  Film,
  PaintBucket,
  Palette,
  Brush,
  Pen,
  Pencil,
  Triangle,
  Square,
  Circle,
  Hexagon,
  Type,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Bold,
  Italic,
  Underline,
  Quote,
  Indent,
  Outdent,
  Table,
  Columns,
  Rows,
  Layout,
  LayoutGrid,
  Menu,
  MoreVertical,
  Undo,
  Redo,
  History,
  Timer,
  CalendarDays,
  Sun,
  Moon,
  Cloud,
  CloudRain,
  Wind,
  Flame,
  Droplet,
  Droplets,
  Umbrella,
  Thermometer,
  Gauge,
  Smile,
  Frown,
  Meh,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const BlockchainVerification = () => {
  const [activeMethod, setActiveMethod] = useState('hash');
  const [searchQuery, setSearchQuery] = useState('');
  const [verificationResult, setVerificationResult] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  const [recentVerifications, setRecentVerifications] = useState([]);
  const [showQRScanner, setShowQRScanner] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const fileInputRef = useRef(null);

  // Sample verification data
  const sampleVerifications = [
    {
      id: '0x1a2b3c4d5e6f7890abcdef1234567890',
      type: 'certificate',
      title: 'Google UX Design Professional Certificate',
      issuer: 'Google',
      recipient: 'Sarah Rodriguez',
      issueDate: '2024-03-15',
      status: 'verified',
      blockchainNetwork: 'Ethereum',
      transactionHash: '0xabcdef1234567890abcdef1234567890abcdef12',
      blockNumber: 19234567,
      gasUsed: '21000',
      verificationCount: 1247,
      skills: ['User Research', 'Prototyping', 'Figma', 'Design Thinking'],
      metadata: {
        courseDuration: '6 months',
        projectsCompleted: 6,
        finalGrade: 'A+',
        credentialId: 'GUXD-2024-SR-001'
      }
    },
    {
      id: '0x2b3c4d5e6f7890abcdef1234567890ab',
      type: 'achievement',
      title: 'MIT Hackathon Winner',
      issuer: 'MIT Innovation Lab',
      recipient: 'Alex Chen',
      issueDate: '2024-03-10',
      status: 'verified',
      blockchainNetwork: 'Polygon',
      transactionHash: '0xbcdef1234567890abcdef1234567890abcdef123',
      blockNumber: 52345678,
      gasUsed: '15000',
      verificationCount: 892,
      skills: ['React', 'AI/ML', 'Python', 'Team Leadership'],
      metadata: {
        hackathonTheme: 'AI for Education',
        teamSize: 4,
        prize: '$10,000',
        projectName: 'StudyBuddy AI'
      }
    },
    {
      id: '0x3c4d5e6f7890abcdef1234567890abcd',
      type: 'course',
      title: 'Advanced Machine Learning Specialization',
      issuer: 'Stanford Online',
      recipient: 'Marcus Johnson',
      issueDate: '2024-02-28',
      status: 'verified',
      blockchainNetwork: 'Binance Smart Chain',
      transactionHash: '0xcdef1234567890abcdef1234567890abcdef1234',
      blockNumber: 36789012,
      gasUsed: '18000',
      verificationCount: 2156,
      skills: ['Deep Learning', 'TensorFlow', 'PyTorch', 'Neural Networks'],
      metadata: {
        specialization: 'Machine Learning',
        coursesCompleted: 4,
        finalProject: 'Autonomous Vehicle Navigation',
        gpa: '3.9/4.0'
      }
    }
  ];

  // Verification methods
  const verificationMethods = [
    {
      id: 'hash',
      title: 'Certificate Hash',
      description: 'Verify using the unique certificate hash',
      icon: Hash,
      placeholder: '0x1a2b3c4d5e6f7890abcdef1234567890...',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'qr',
      title: 'QR Code Scanner',
      description: 'Scan the QR code from your certificate',
      icon: QrCode,
      placeholder: 'Click to open QR scanner',
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 'url',
      title: 'Certificate URL',
      description: 'Verify using the certificate URL',
      icon: Link,
      placeholder: 'https://certificates.porttrack.com/verify/...',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'file',
      title: 'Upload Certificate',
      description: 'Upload certificate file for verification',
      icon: Upload,
      placeholder: 'Click to upload certificate file',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'batch',
      title: 'Batch Verification',
      description: 'Verify multiple certificates at once',
      icon: Database,
      placeholder: 'Upload CSV file with certificate hashes',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  // Blockchain networks
  const blockchainNetworks = [
    { id: 'ethereum', name: 'Ethereum', icon: '⟠', color: 'text-blue-500' },
    { id: 'polygon', name: 'Polygon', icon: '⬟', color: 'text-purple-500' },
    { id: 'bsc', name: 'BSC', icon: '🟡', color: 'text-yellow-500' },
    { id: 'avalanche', name: 'Avalanche', icon: '🔺', color: 'text-red-500' },
    { id: 'solana', name: 'Solana', icon: '◉', color: 'text-green-500' }
  ];

  // Simulate verification process
  const handleVerification = async () => {
    if (!searchQuery.trim()) return;
    
    setIsSearching(true);
    setVerificationResult(null);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Find matching verification
    const result = sampleVerifications.find(v => 
      v.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.recipient.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    if (result) {
      setVerificationResult(result);
      // Add to recent verifications
      setRecentVerifications(prev => {
        const filtered = prev.filter(v => v.id !== result.id);
        return [result, ...filtered].slice(0, 5);
      });
    } else {
      setVerificationResult({
        status: 'not_found',
        message: 'Certificate not found or invalid hash provided.'
      });
    }
    
    setIsSearching(false);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFile(file);
      // Simulate file processing
      setSearchQuery(`Uploaded: ${file.name}`);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'verified': return 'text-green-500';
      case 'pending': return 'text-yellow-500';
      case 'failed': return 'text-red-500';
      case 'not_found': return 'text-gray-500';
      default: return 'text-muted-foreground';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'verified': return CheckCircle;
      case 'pending': return Clock;
      case 'failed': return XCircle;
      case 'not_found': return AlertTriangle;
      default: return Shield;
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'certificate': return Award;
      case 'achievement': return Trophy;
      case 'course': return FileText;
      case 'skill': return Code;
      default: return Shield;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'certificate': return 'from-yellow-500 to-orange-500';
      case 'achievement': return 'from-purple-500 to-pink-500';
      case 'course': return 'from-blue-500 to-cyan-500';
      case 'skill': return 'from-green-500 to-teal-500';
      default: return 'from-gray-500 to-gray-600';
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
            <Shield className="h-4 w-4 text-primary mr-2" />
            <span className="text-sm font-medium">Blockchain Verification</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-space font-bold mb-4">
            <span className="neon-text">Verify</span> Achievements
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Instantly verify the authenticity of certificates, achievements, and credentials using blockchain technology. 
            Trust through transparency.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Verification Methods */}
          <div className="lg:col-span-2">
            {/* Method Selection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6"
            >
              <h2 className="text-xl font-semibold font-space mb-4">Choose Verification Method</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {verificationMethods.map((method) => {
                  const Icon = method.icon;
                  return (
                    <button
                      key={method.id}
                      onClick={() => setActiveMethod(method.id)}
                      className={`p-4 rounded-xl text-left transition-all duration-300 ${
                        activeMethod === method.id
                          ? 'bg-primary text-primary-foreground'
                          : 'glass hover-glow hover:scale-105'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${method.color} p-2 mb-3`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-sm mb-1">{method.title}</h3>
                      <p className="text-xs opacity-75">{method.description}</p>
                    </button>
                  );
                })}
              </div>
            </motion.div>

            {/* Verification Input */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card rounded-xl p-6 mb-6"
            >
              <div className="flex items-center space-x-3 mb-4">
                {(() => {
                  const method = verificationMethods.find(m => m.id === activeMethod);
                  const Icon = method?.icon || Hash;
                  return (
                    <>
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${method?.color || 'from-blue-500 to-cyan-500'} p-2`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{method?.title || 'Verification'}</h3>
                        <p className="text-sm text-muted-foreground">{method?.description}</p>
                      </div>
                    </>
                  );
                })()}
              </div>

              {/* Input based on method */}
              {activeMethod === 'hash' && (
                <div className="space-y-4">
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Enter certificate hash (0x...)"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="glass"
                      onKeyPress={(e) => e.key === 'Enter' && handleVerification()}
                    />
                    <Button 
                      onClick={handleVerification}
                      disabled={isSearching || !searchQuery.trim()}
                      className="gradient-purple-cyan"
                    >
                      {isSearching ? (
                        <Clock className="h-4 w-4 animate-spin" />
                      ) : (
                        <Search className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Example: 0x1a2b3c4d5e6f7890abcdef1234567890
                  </p>
                </div>
              )}

              {activeMethod === 'qr' && (
                <div className="space-y-4">
                  <Button 
                    onClick={() => setShowQRScanner(true)}
                    className="w-full gradient-purple-cyan"
                  >
                    <Camera className="h-4 w-4 mr-2" />
                    Open QR Scanner
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Point your camera at the QR code on your certificate
                  </p>
                </div>
              )}

              {activeMethod === 'url' && (
                <div className="space-y-4">
                  <div className="flex space-x-2">
                    <Input
                      placeholder="https://certificates.porttrack.com/verify/..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="glass"
                      onKeyPress={(e) => e.key === 'Enter' && handleVerification()}
                    />
                    <Button 
                      onClick={handleVerification}
                      disabled={isSearching || !searchQuery.trim()}
                      className="gradient-purple-cyan"
                    >
                      {isSearching ? (
                        <Clock className="h-4 w-4 animate-spin" />
                      ) : (
                        <Search className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Paste the verification URL from your certificate
                  </p>
                </div>
              )}

              {activeMethod === 'file' && (
                <div className="space-y-4">
                  <div 
                    className="border-2 border-dashed border-border rounded-lg p-8 text-center cursor-pointer hover:border-primary transition-colors"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground mb-2">
                      {uploadedFile ? uploadedFile.name : 'Click to upload certificate file'}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Supports PDF, PNG, JPG files up to 10MB
                    </p>
                  </div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.png,.jpg,.jpeg"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  {uploadedFile && (
                    <Button 
                      onClick={handleVerification}
                      disabled={isSearching}
                      className="w-full gradient-purple-cyan"
                    >
                      {isSearching ? (
                        <Clock className="h-4 w-4 animate-spin mr-2" />
                      ) : (
                        <Search className="h-4 w-4 mr-2" />
                      )}
                      Verify Certificate
                    </Button>
                  )}
                </div>
              )}

              {activeMethod === 'batch' && (
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                    <Database className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground mb-2">
                      Upload CSV file with certificate hashes
                    </p>
                    <p className="text-xs text-muted-foreground mb-4">
                      Format: hash,recipient_name,issue_date
                    </p>
                    <Button variant="outline" className="glass hover-glow">
                      <Upload className="h-4 w-4 mr-2" />
                      Choose CSV File
                    </Button>
                  </div>
                  <div className="text-center">
                    <Button variant="ghost" size="sm" className="text-primary">
                      <Download className="h-3 w-3 mr-1" />
                      Download Template
                    </Button>
                  </div>
                </div>
              )}
            </motion.div>

            {/* Verification Result */}
            <AnimatePresence>
              {verificationResult && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="glass-card rounded-xl overflow-hidden mb-6"
                >
                  {verificationResult.status === 'verified' ? (
                    <div>
                      {/* Success Header */}
                      <div className="p-6 pb-4 border-b border-border">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center space-x-3">
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${getTypeColor(verificationResult.type)} p-3`}>
                              {(() => {
                                const TypeIcon = getTypeIcon(verificationResult.type);
                                return <TypeIcon className="h-6 w-6 text-white" />;
                              })()}
                            </div>
                            <div>
                              <div className="flex items-center space-x-2 mb-1">
                                <CheckCircle className="h-5 w-5 text-green-500" />
                                <span className="font-semibold text-green-500">Verified</span>
                              </div>
                              <h3 className="text-xl font-semibold font-space">{verificationResult.title}</h3>
                              <p className="text-sm text-muted-foreground">
                                Issued by {verificationResult.issuer} to {verificationResult.recipient}
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <Button variant="ghost" size="sm" onClick={() => copyToClipboard(verificationResult.id)}>
                              <Copy className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Share2 className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>

                      {/* Certificate Details */}
                      <div className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <h4 className="font-semibold mb-3">Certificate Information</h4>
                            <div className="space-y-2">
                              <div className="flex justify-between">
                                <span className="text-sm text-muted-foreground">Issue Date:</span>
                                <span className="text-sm font-medium">{verificationResult.issueDate}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-sm text-muted-foreground">Type:</span>
                                <Badge variant="secondary" className="capitalize">
                                  {verificationResult.type}
                                </Badge>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-sm text-muted-foreground">Verifications:</span>
                                <span className="text-sm font-medium">{verificationResult.verificationCount.toLocaleString()}</span>
                              </div>
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-3">Blockchain Details</h4>
                            <div className="space-y-2">
                              <div className="flex justify-between">
                                <span className="text-sm text-muted-foreground">Network:</span>
                                <span className="text-sm font-medium">{verificationResult.blockchainNetwork}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-sm text-muted-foreground">Block:</span>
                                <span className="text-sm font-medium">#{verificationResult.blockNumber.toLocaleString()}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-sm text-muted-foreground">Gas Used:</span>
                                <span className="text-sm font-medium">{verificationResult.gasUsed}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Skills */}
                        {verificationResult.skills && (
                          <div className="mb-6">
                            <h4 className="font-semibold mb-3">Skills & Competencies</h4>
                            <div className="flex flex-wrap gap-2">
                              {verificationResult.skills.map((skill, index) => (
                                <Badge key={index} variant="secondary" className="bg-primary/20 text-primary">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Metadata */}
                        {verificationResult.metadata && (
                          <div className="mb-6">
                            <h4 className="font-semibold mb-3">Additional Details</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {Object.entries(verificationResult.metadata).map(([key, value]) => (
                                <div key={key} className="flex justify-between">
                                  <span className="text-sm text-muted-foreground capitalize">
                                    {key.replace(/([A-Z])/g, ' $1').trim()}:
                                  </span>
                                  <span className="text-sm font-medium">{value}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Transaction Hash */}
                        <div className="glass rounded-lg p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-medium text-sm mb-1">Transaction Hash</div>
                              <div className="text-xs text-muted-foreground font-mono">
                                {verificationResult.transactionHash}
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Button 
                                variant="ghost" 
                                size="sm"
                                onClick={() => copyToClipboard(verificationResult.transactionHash)}
                              >
                                <Copy className="h-3 w-3" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <ExternalLink className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="p-6 text-center">
                      <XCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-2">Verification Failed</h3>
                      <p className="text-muted-foreground">{verificationResult.message}</p>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card rounded-xl p-6 mb-6"
            >
              <h3 className="font-semibold font-space mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full glass hover-glow justify-start">
                  <QrCode className="h-4 w-4 mr-2" />
                  Generate QR Code
                </Button>
                <Button variant="outline" className="w-full glass hover-glow justify-start">
                  <Download className="h-4 w-4 mr-2" />
                  Download Report
                </Button>
                <Button variant="outline" className="w-full glass hover-glow justify-start">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share Verification
                </Button>
                <Button variant="outline" className="w-full glass hover-glow justify-start">
                  <Flag className="h-4 w-4 mr-2" />
                  Report Issue
                </Button>
              </div>
            </motion.div>

            {/* Blockchain Networks */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card rounded-xl p-6 mb-6"
            >
              <h3 className="font-semibold font-space mb-4">Supported Networks</h3>
              <div className="space-y-3">
                {blockchainNetworks.map((network) => (
                  <div key={network.id} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-lg">{network.icon}</span>
                      <span className="font-medium">{network.name}</span>
                    </div>
                    <div className={`w-2 h-2 rounded-full bg-green-500`} />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Recent Verifications */}
            {recentVerifications.length > 0 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="glass-card rounded-xl p-6 mb-6"
              >
                <h3 className="font-semibold font-space mb-4">Recent Verifications</h3>
                <div className="space-y-3">
                  {recentVerifications.map((verification) => {
                    const TypeIcon = getTypeIcon(verification.type);
                    return (
                      <div key={verification.id} className="flex items-center space-x-3 p-3 glass rounded-lg">
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${getTypeColor(verification.type)} p-2`}>
                          <TypeIcon className="h-4 w-4 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-sm truncate">{verification.title}</div>
                          <div className="text-xs text-muted-foreground">{verification.recipient}</div>
                        </div>
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* Verification Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-card rounded-xl p-6"
            >
              <h3 className="font-semibold font-space mb-4">Platform Stats</h3>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold neon-text">2.4M+</div>
                  <div className="text-sm text-muted-foreground">Certificates Verified</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-lg font-bold">156K</div>
                    <div className="text-xs text-muted-foreground">This Month</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold">99.9%</div>
                    <div className="text-xs text-muted-foreground">Accuracy</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">
                    Trusted by 500+ institutions worldwide
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* QR Scanner Modal */}
        <AnimatePresence>
          {showQRScanner && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
              onClick={() => setShowQRScanner(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="glass-card rounded-xl p-6 w-full max-w-md"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">QR Code Scanner</h3>
                  <Button variant="ghost" size="sm" onClick={() => setShowQRScanner(false)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <Camera className="h-12 w-12 text-primary mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Camera access required</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Button className="w-full gradient-purple-cyan">
                    <Camera className="h-4 w-4 mr-2" />
                    Enable Camera
                  </Button>
                  <Button variant="outline" className="w-full glass hover-glow">
                    <Upload className="h-4 w-4 mr-2" />
                    Upload QR Image
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default BlockchainVerification;

