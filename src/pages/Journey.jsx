import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Trophy, 
  Code, 
  Award, 
  Briefcase, 
  GraduationCap,
  Calendar,
  MapPin,
  Clock,
  ExternalLink,
  Shield,
  Star,
  Zap,
  Target,
  Users,
  BookOpen,
  X,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Maximize2
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Journey = ({ journeyData = [] }) => {
  const [selectedNode, setSelectedNode] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  // Sample journey data if none provided
  const defaultJourneyData = [
    {
      id: 1,
      title: "Started Computer Science",
      type: "education",
      date: "2023-09-01",
      description: "Began my journey in Computer Science at University",
      verified: true,
      media: null,
      position: { x: 100, y: 300 }
    },
    {
      id: 2,
      title: "First Hackathon",
      type: "event",
      date: "2023-10-15",
      description: "Participated in TechCrunch Disrupt Hackathon",
      verified: true,
      media: null,
      position: { x: 300, y: 200 }
    },
    {
      id: 3,
      title: "Built Portfolio Website",
      type: "project",
      date: "2023-11-20",
      description: "Created a responsive portfolio website using React and Tailwind CSS",
      verified: true,
      media: null,
      position: { x: 500, y: 250 }
    },
    {
      id: 4,
      title: "Won Best UI/UX Award",
      type: "certificate",
      date: "2023-12-10",
      description: "Received Best UI/UX Design Award at Winter Hackathon",
      verified: true,
      media: null,
      position: { x: 700, y: 150 }
    },
    {
      id: 5,
      title: "Internship at TechCorp",
      type: "opportunity",
      date: "2024-01-15",
      description: "Secured summer internship as Frontend Developer",
      verified: true,
      media: null,
      position: { x: 900, y: 200 }
    },
    {
      id: 6,
      title: "Open Source Contribution",
      type: "project",
      date: "2024-02-20",
      description: "Contributed to React ecosystem with 500+ stars",
      verified: true,
      media: null,
      position: { x: 650, y: 400 }
    },
    {
      id: 7,
      title: "Blockchain Certification",
      type: "certificate",
      date: "2024-03-15",
      description: "Completed Ethereum Developer Certification",
      verified: true,
      media: null,
      position: { x: 850, y: 350 }
    }
  ];

  const data = journeyData.length > 0 ? journeyData : defaultJourneyData;

  // Icon mapping for different milestone types
  const getIcon = (type) => {
    switch (type) {
      case 'event': return Trophy;
      case 'project': return Code;
      case 'certificate': return Award;
      case 'opportunity': return Briefcase;
      case 'education': return GraduationCap;
      default: return Star;
    }
  };

  // Color mapping for different milestone types
  const getColors = (type, verified) => {
    const baseColors = {
      event: verified ? 'from-yellow-400 to-orange-500' : 'from-yellow-400/50 to-orange-500/50',
      project: verified ? 'from-blue-400 to-cyan-500' : 'from-blue-400/50 to-cyan-500/50',
      certificate: verified ? 'from-purple-400 to-pink-500' : 'from-purple-400/50 to-pink-500/50',
      opportunity: verified ? 'from-green-400 to-emerald-500' : 'from-green-400/50 to-emerald-500/50',
      education: verified ? 'from-indigo-400 to-blue-500' : 'from-indigo-400/50 to-blue-500/50'
    };
    return baseColors[type] || (verified ? 'from-gray-400 to-gray-500' : 'from-gray-400/50 to-gray-500/50');
  };

  // Generate connections between nodes
  const generateConnections = () => {
    const connections = [];
    const sortedData = [...data].sort((a, b) => new Date(a.date) - new Date(b.date));
    
    for (let i = 0; i < sortedData.length - 1; i++) {
      connections.push({
        from: sortedData[i],
        to: sortedData[i + 1]
      });
    }
    
    return connections;
  };

  const connections = generateConnections();

  // Handle zoom
  const handleZoom = (delta) => {
    setZoom(prev => Math.max(0.5, Math.min(3, prev + delta)));
  };

  // Handle pan
  const handleMouseDown = (e) => {
    if (e.target.closest('.milestone-node')) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setPan({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Reset view
  const resetView = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('mouseleave', handleMouseUp);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('mouseleave', handleMouseUp);
    };
  }, [isDragging, dragStart]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.1),transparent_50%)]" />
        
        {/* Constellation dots */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <div className="relative z-10 pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              Your Journey Map
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore your achievements as an interactive constellation of milestones. 
              Each node represents a step in your professional journey.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Controls */}
      <div className="fixed top-24 right-4 z-20 flex flex-col space-y-2">
        <Button
          onClick={() => handleZoom(0.2)}
          size="sm"
          variant="outline"
          className="glass-strong hover:bg-white/10"
        >
          <ZoomIn className="h-4 w-4" />
        </Button>
        <Button
          onClick={() => handleZoom(-0.2)}
          size="sm"
          variant="outline"
          className="glass-strong hover:bg-white/10"
        >
          <ZoomOut className="h-4 w-4" />
        </Button>
        <Button
          onClick={resetView}
          size="sm"
          variant="outline"
          className="glass-strong hover:bg-white/10"
        >
          <RotateCcw className="h-4 w-4" />
        </Button>
      </div>

      {/* Journey Map Container */}
      <div 
        ref={containerRef}
        className="relative h-[calc(100vh-200px)] overflow-hidden cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
      >
        <motion.div
          className="absolute inset-0"
          style={{
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
            transformOrigin: 'center center'
          }}
          transition={{ type: "tween", duration: 0.1 }}
        >
          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {connections.map((connection, index) => {
              const { from, to } = connection;
              return (
                <motion.g key={`connection-${index}`}>
                  <defs>
                    <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgba(139, 92, 246, 0.6)" />
                      <stop offset="50%" stopColor="rgba(59, 130, 246, 0.6)" />
                      <stop offset="100%" stopColor="rgba(16, 185, 129, 0.6)" />
                    </linearGradient>
                    <filter id={`glow-${index}`}>
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                      <feMerge> 
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  <motion.line
                    x1={from.position.x + 40}
                    y1={from.position.y + 40}
                    x2={to.position.x + 40}
                    y2={to.position.y + 40}
                    stroke={`url(#gradient-${index})`}
                    strokeWidth="3"
                    filter={`url(#glow-${index})`}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                  />
                  {/* Arrow */}
                  <motion.polygon
                    points={`${to.position.x + 30},${to.position.y + 35} ${to.position.x + 30},${to.position.y + 45} ${to.position.x + 40},${to.position.y + 40}`}
                    fill="rgba(59, 130, 246, 0.8)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                  />
                </motion.g>
              );
            })}
          </svg>

          {/* Milestone Nodes */}
          {data.map((milestone, index) => {
            const Icon = getIcon(milestone.type);
            const colors = getColors(milestone.type, milestone.verified);
            
            return (
              <motion.div
                key={milestone.id}
                className="milestone-node absolute cursor-pointer"
                style={{
                  left: milestone.position.x,
                  top: milestone.position.y,
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedNode(milestone)}
              >
                <div className={`relative w-20 h-20 rounded-full bg-gradient-to-br ${colors} p-1`}>
                  {milestone.verified && (
                    <motion.div
                      className="absolute -inset-2 rounded-full border-2 border-yellow-400/50"
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />
                  )}
                  <div className="w-full h-full rounded-full bg-slate-900/20 backdrop-blur-sm flex items-center justify-center">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  {milestone.verified && (
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                      <Shield className="h-3 w-3 text-slate-900" />
                    </div>
                  )}
                </div>
                <div className="absolute top-24 left-1/2 transform -translate-x-1/2 text-center">
                  <div className="bg-slate-900/80 backdrop-blur-sm px-3 py-1 rounded-lg border border-white/10">
                    <p className="text-sm font-medium text-white whitespace-nowrap">
                      {milestone.title}
                    </p>
                    <p className="text-xs text-gray-400">
                      {new Date(milestone.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Milestone Detail Modal */}
      <AnimatePresence>
        {selectedNode && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedNode(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${getColors(selectedNode.type, selectedNode.verified)} p-1`}>
                    <div className="w-full h-full rounded-full bg-slate-900/20 backdrop-blur-sm flex items-center justify-center">
                      {React.createElement(getIcon(selectedNode.type), { className: "h-6 w-6 text-white" })}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{selectedNode.title}</h3>
                    <p className="text-sm text-gray-400 capitalize">{selectedNode.type}</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedNode(null)}
                  className="hover:bg-white/10"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(selectedNode.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>

                {selectedNode.verified && (
                  <div className="flex items-center space-x-2 text-sm text-yellow-400">
                    <Shield className="h-4 w-4" />
                    <span>Blockchain Verified</span>
                  </div>
                )}

                <p className="text-gray-300 leading-relaxed">
                  {selectedNode.description}
                </p>

                {selectedNode.media && (
                  <div className="mt-4">
                    <img 
                      src={selectedNode.media} 
                      alt={selectedNode.title}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                )}

                <div className="flex space-x-3 pt-4">
                  <Button className="flex-1 gradient-purple-cyan">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                  {selectedNode.verified && (
                    <Button variant="outline" className="border-yellow-400/50 text-yellow-400 hover:bg-yellow-400/10">
                      <Shield className="h-4 w-4 mr-2" />
                      Verify
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Instructions */}
      <div className="fixed bottom-4 left-4 z-20">
        <div className="bg-slate-900/80 backdrop-blur-sm border border-white/10 rounded-lg p-4 max-w-sm">
          <h4 className="text-sm font-medium text-white mb-2">How to Navigate</h4>
          <ul className="text-xs text-gray-400 space-y-1">
            <li>• Click and drag to pan around the map</li>
            <li>• Use zoom controls to get closer or further</li>
            <li>• Click on any milestone to view details</li>
            <li>• Gold borders indicate verified achievements</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Journey;

