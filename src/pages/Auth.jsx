import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Lock, 
  User, 
  Eye, 
  EyeOff, 
  ArrowRight,
  Github,
  Chrome,
  Briefcase,
  GraduationCap,
  Sparkles,
  Shield
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [userType, setUserType] = useState('student');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    university: '',
    company: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const userTypes = [
    {
      id: 'student',
      title: 'Student',
      description: 'Build and showcase your portfolio',
      icon: GraduationCap,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'recruiter',
      title: 'Recruiter',
      description: 'Discover and connect with talent',
      icon: Briefcase,
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="max-w-md w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-6 hover-glow">
            <Sparkles className="h-4 w-4 text-primary mr-2" />
            <span className="text-sm font-medium">Welcome to PortTrack</span>
          </div>
          
          <h1 className="text-3xl font-space font-bold mb-2">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h1>
          <p className="text-muted-foreground">
            {isLogin 
              ? 'Sign in to your account to continue' 
              : 'Join thousands of students and recruiters'
            }
          </p>
        </motion.div>

        {/* Auth Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex glass rounded-lg p-1 mb-6"
        >
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-300 ${
              isLogin 
                ? 'bg-primary text-primary-foreground shadow-lg' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-300 ${
              !isLogin 
                ? 'bg-primary text-primary-foreground shadow-lg' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Sign Up
          </button>
        </motion.div>

        {/* User Type Selection (only for signup) */}
        <AnimatePresence>
          {!isLogin && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-6"
            >
              <Label className="text-sm font-medium mb-3 block">I am a...</Label>
              <div className="grid grid-cols-2 gap-3">
                {userTypes.map((type) => {
                  const Icon = type.icon;
                  return (
                    <button
                      key={type.id}
                      onClick={() => setUserType(type.id)}
                      className={`p-4 rounded-lg border transition-all duration-300 text-left ${
                        userType === type.id
                          ? 'border-primary bg-primary/10 shadow-lg'
                          : 'border-border hover:border-primary/50 glass'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${type.color} p-2 mb-2`}>
                        <Icon className="h-4 w-4 text-white" />
                      </div>
                      <div className="font-medium text-sm">{type.title}</div>
                      <div className="text-xs text-muted-foreground">{type.description}</div>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          {/* Name Fields (signup only) */}
          <AnimatePresence>
            {!isLogin && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-2 gap-3"
              >
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="glass"
                    placeholder="John"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="glass"
                    placeholder="Doe"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Email */}
          <div>
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                className="glass pl-10"
                placeholder="john@example.com"
              />
            </div>
          </div>

          {/* Additional Fields (signup only) */}
          <AnimatePresence>
            {!isLogin && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Label htmlFor={userType === 'student' ? 'university' : 'company'}>
                  {userType === 'student' ? 'University' : 'Company'}
                </Label>
                <Input
                  id={userType === 'student' ? 'university' : 'company'}
                  name={userType === 'student' ? 'university' : 'company'}
                  type="text"
                  value={formData[userType === 'student' ? 'university' : 'company']}
                  onChange={handleInputChange}
                  className="glass"
                  placeholder={userType === 'student' ? 'MIT' : 'Google'}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Password */}
          <div>
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={handleInputChange}
                className="glass pl-10 pr-10"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {/* Confirm Password (signup only) */}
          <AnimatePresence>
            {!isLogin && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="glass pl-10"
                    placeholder="••••••••"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Forgot Password (login only) */}
          {isLogin && (
            <div className="text-right">
              <button
                type="button"
                className="text-sm text-primary hover:text-accent transition-colors"
              >
                Forgot password?
              </button>
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full gradient-purple-cyan hover-lift text-lg py-3"
          >
            {isLogin ? 'Sign In' : 'Create Account'}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" className="glass hover-glow">
              <Github className="h-4 w-4 mr-2" />
              GitHub
            </Button>
            <Button variant="outline" className="glass hover-glow">
              <Chrome className="h-4 w-4 mr-2" />
              Google
            </Button>
          </div>

          {/* Terms (signup only) */}
          <AnimatePresence>
            {!isLogin && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-center text-xs text-muted-foreground"
              >
                By creating an account, you agree to our{' '}
                <button className="text-primary hover:text-accent transition-colors">
                  Terms of Service
                </button>{' '}
                and{' '}
                <button className="text-primary hover:text-accent transition-colors">
                  Privacy Policy
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Security Badge */}
          <div className="flex items-center justify-center mt-6 text-xs text-muted-foreground">
            <Shield className="h-4 w-4 mr-2 text-green-500" />
            <span>Secured with 256-bit SSL encryption</span>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default Auth;

