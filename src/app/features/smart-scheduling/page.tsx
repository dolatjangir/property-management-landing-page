"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Calendar,
  Clock,
  Zap,
  Bot,
  Users,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  MessageSquare,
  Video,
  Phone,
  Mail,
  ChevronRight,
  Star,
  Shield,
  Globe,
  TrendingUp,
  Timer,
  CalendarDays,
  CalendarClock,
  CalendarCheck,
  CalendarX,
  Settings,
  Bell,
  Smartphone,
  Laptop,
  Tablet,
  RefreshCw,
  Plus,
  Minus,
  Info,
  HelpCircle,
  Check,
  X,
  Menu,
  ArrowUpRight,
  Play,
  Award,
  Heart,
  ThumbsUp,
  MessageCircle,
  Send,
  FileText,
  CreditCard,
  Lock,
  Eye,
  EyeOff,
  Search,
  Filter,
  MoreHorizontal,
  Download,
  Share2,
  Copy,
  CheckCheck,
  AlertCircle,
  Wifi,
  Battery,
  Signal,
  MapPin,
  Building2,
  Home,
  BedDouble,
  Bath,
  Car,
  Utensils,
  WifiIcon,
  Tv,
  Wind,
  Droplets,
  Thermometer,
  Sun,
  Moon,
  CloudRain,
  Snowflake,
  PartyPopper,
  Gift,
  Percent,
  Tag,
  Ticket,
  QrCode,
  Scan,
  Fingerprint,
  KeyRound,
  DoorOpen,
  Lightbulb,
  Fan,
  Heater,
  AirVent,
  Blinds,
  Plug,
  BatteryCharging,
  BatteryFull,
  BatteryMedium,
  BatteryLow,
  BatteryWarning,
  Power,
  PowerOff,
  ToggleLeft,
  ToggleRight,
  SwitchCamera,
  Camera,
  CameraOff,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  Volume1,
  Volume,
  Maximize,
  Minimize,
  Maximize2,
  Minimize2,
  Expand,
  Shrink,
  Move,
  RotateCcw,
  RotateCw,
  Undo,
  Redo,
  Save,
  Trash2,
  Edit3,
  Edit,
  PenTool,
  Brush,
  Eraser,
  Scissors,
  Crop,
  Layers,
  Layout,
  Grid,
  List,
  Columns,
  Rows,
  Table,
  Database,
  Server,
  HardDrive,
  Cloud,
  CloudUpload,
  CloudDownload,
  CloudOff,
  Folder,
  FolderOpen,
  File,
  FilePlus,
  FileMinus,
  FileJson,
  FileCode,
  FileType,
  FileImage,
  FileVideo,
  FileAudio,
  FileSpreadsheet,
  FileArchive,
  FileUp,
  FileDown,
  FileQuestion,
  FileWarning,
  FileCheck,
  FileX,
  Files,
  FolderPlus,
  FolderMinus,
  FolderTree,
  Folders,
  BookOpen,
  Book,
  Bookmark,
  BookmarkPlus,
  BookmarkMinus,

  Library,
  GraduationCap,
  School,
  AwardIcon,
  Medal,
  Trophy,
  Crown,
  Gem,
  Diamond,
  CircleDollarSign,
  DollarSign,
  Euro,
  PoundSterling,
  JapaneseYen,
  Bitcoin,
  CreditCardIcon,
  Wallet,
  PiggyBank,
  Receipt,
  ReceiptText,
  
  FileTextIcon,
  Newspaper,
  Scroll,
  ScrollText,
  BookText,
  BookType,
  BookMarked,
  BookUser,
  BookKey,
  BookLock,
  BookOpenCheck,
  BookOpenText,
  BookX,
  BookPlus,
  BookMinus,
  BookCopy,
  BookImage,
  BookAudio,
  
  BookHeadphones,
  BookAIcon,
  BookOpenIcon,
  ChevronUp,
  Wrench,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";

// ==========================================
// Animation & Effects Components
// ==========================================

const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full mix-blend-multiply filter blur-[100px] animate-blob" />
    <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-2000" />
    <div className="absolute -bottom-32 left-1/3 w-[500px] h-[500px] bg-gradient-to-r from-indigo-400/20 to-violet-400/20 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-4000" />
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
  </div>
);

const FloatingElement = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <div
    className={`animate-float ${className}`}
    style={{ animationDelay: `${delay}ms` }}
  >
    {children}
  </div>
);

const GlowCard = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`relative group ${className}`}
  >
    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500" />
    <div className="relative bg-white rounded-2xl shadow-xl">
      {children}
    </div>
  </div>
);

// ==========================================
// Header Component
// ==========================================

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300">
              <Calendar className="w-6 h-6 text-white relative z-10" />
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
              StayPilot
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {["Features", "Scheduling", "Integrations", "Enterprise"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-slate-600 hover:text-blue-600 font-medium transition-colors group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <button className="px-6 py-2.5 text-slate-700 font-medium hover:text-blue-600 transition-colors">
              Sign In
            </button>
            <button className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all duration-300">
              Get Started Free
            </button>
          </div>

          <button
            className="lg:hidden p-2 text-slate-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-slate-200 transition-all duration-300 ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <nav className="flex flex-col p-6 gap-4">
          {["Features", "Scheduling", "Integrations", "Enterprise"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-lg font-medium text-slate-800 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full mt-4">
            Get Started Free
          </button>
        </nav>
      </div>
    </header>
  );
};

// ==========================================
// Hero Section with Live Scheduler Demo
// ==========================================

const HeroSection = () => {
  const [selectedDate, setSelectedDate] = useState(15);
  const [selectedTime, setSelectedTime] = useState("10:00 AM");
  const [bookingStep, setBookingStep] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  const dates = Array.from({ length: 14 }, (_, i) => ({
    day: i + 10,
    weekday: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i % 7],
    available: [12, 13, 15, 16, 17, 19, 20, 22, 23, 24].includes(i + 10),
  }));

  const times = [
    "9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM", "4:00 PM"
  ];

  const handleBooking = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setBookingStep(3);
      setIsAnimating(false);
    }, 1500);
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20">
      <AnimatedBackground />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-sm font-semibold">
              <Sparkles className="w-4 h-4" />
              AI-Powered Scheduling
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="text-slate-900">Smart Scheduling</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                That Thinks Ahead
              </span>
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
              AI meeting scheduler for property managers. Automatically coordinate 
              cleanings, maintenance, check-ins, and guest communications across 
              your entire portfolio.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-blue-500/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                Try AI Scheduler Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group px-8 py-4 bg-white text-slate-700 font-bold rounded-full border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2">
                <Play className="w-5 h-5 text-blue-600" />
                Watch Demo
              </button>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-blue-300 to-indigo-300"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-500">
                  <span className="font-semibold text-slate-900">4.9/5</span> from 2,400+ reviews
                </p>
              </div>
            </div>
          </div>

          {/* Right - Interactive Scheduler Demo */}
          <div className="relative">
            <FloatingElement delay={0}>
              <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
                {/* Demo Header */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Bot className="w-8 h-8" />
                      <div>
                        <h3 className="font-bold">AI Scheduler</h3>
                        <p className="text-sm text-blue-100">Coordinating 12 properties</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-sm">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      Live
                    </div>
                  </div>
                  
                  {/* AI Suggestion Banner */}
                  <div className="bg-white/10 backdrop-blur rounded-xl p-3 flex items-center gap-3">
                    <Sparkles className="w-5 h-5 text-amber-300" />
                    <p className="text-sm">
                      Suggested: Schedule cleaning between 10 AM - 2 PM for optimal turnover
                    </p>
                  </div>
                </div>

                {/* Calendar Interface */}
                <div className="p-6">
                  {bookingStep === 1 && (
                    <div className="space-y-4 animate-in fade-in duration-300">
                      <h4 className="font-semibold text-slate-800 mb-4">Select Date</h4>
                      <div className="grid grid-cols-7 gap-2 mb-2">
                        {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                          <div key={i} className="text-center text-xs text-slate-400 font-medium">
                            {d}
                          </div>
                        ))}
                      </div>
                      <div className="grid grid-cols-7 gap-2">
                        {dates.map((date) => (
                          <button
                            key={date.day}
                            onClick={() => date.available && setSelectedDate(date.day)}
                            disabled={!date.available}
                            className={`aspect-square rounded-xl flex flex-col items-center justify-center text-sm transition-all ${
                              selectedDate === date.day
                                ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                                : date.available
                                ? "hover:bg-blue-50 text-slate-700"
                                : "text-slate-300 cursor-not-allowed bg-slate-50"
                            }`}
                          >
                            <span className="text-xs opacity-70">{date.weekday}</span>
                            <span className="font-bold">{date.day}</span>
                          </button>
                        ))}
                      </div>
                      
                      <div className="flex items-center gap-2 p-3 bg-amber-50 rounded-xl border border-amber-200">
                        <CalendarClock className="w-5 h-5 text-amber-600" />
                        <p className="text-sm text-amber-800">
                          3 cleaners available on {selectedDate}th
                        </p>
                      </div>

                      <button
                        onClick={() => setBookingStep(2)}
                        className="w-full py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
                      >
                        Continue to Time Selection
                      </button>
                    </div>
                  )}

                  {bookingStep === 2 && (
                    <div className="space-y-4 animate-in slide-in-from-right duration-300">
                      <div className="flex items-center gap-2 mb-4">
                        <button
                          onClick={() => setBookingStep(1)}
                          className="text-slate-400 hover:text-slate-600"
                        >
                          ← Back
                        </button>
                        <h4 className="font-semibold text-slate-800">Select Time</h4>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        {times.map((time) => (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`p-3 rounded-xl border-2 transition-all ${
                              selectedTime === time
                                ? "border-blue-600 bg-blue-50 text-blue-700"
                                : "border-slate-200 hover:border-blue-300 text-slate-700"
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4" />
                              {time}
                            </div>
                          </button>
                        ))}
                      </div>

                      <div className="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <div className="flex items-start gap-3">
                          <Bot className="w-5 h-5 text-indigo-600 mt-0.5" />
                          <div>
                            <p className="font-medium text-indigo-900 text-sm">AI Optimization</p>
                            <p className="text-xs text-indigo-700 mt-1">
                              10:00 AM selected based on guest checkout at 11 AM, 
                              allowing 1-hour buffer for inspection.
                            </p>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={handleBooking}
                        disabled={isAnimating}
                        className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2"
                      >
                        {isAnimating ? (
                          <>
                            <RefreshCw className="w-5 h-5 animate-spin" />
                            AI Coordinating...
                          </>
                        ) : (
                          <>
                            Confirm Smart Schedule
                            <CheckCircle2 className="w-5 h-5" />
                          </>
                        )}
                      </button>
                    </div>
                  )}

                  {bookingStep === 3 && (
                    <div className="text-center py-8 animate-in zoom-in duration-300">
                      <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                        <CheckCircle2 className="w-10 h-10 text-green-600" />
                      </div>
                      <h4 className="text-xl font-bold text-slate-800 mb-2">
                        Successfully Scheduled!
                      </h4>
                      <p className="text-slate-600 mb-6">
                        Cleaning team notified • Calendar updated • Guest informed
                      </p>
                      
                      <div className="bg-slate-50 rounded-xl p-4 text-left space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-500">Date:</span>
                          <span className="font-medium text-slate-800">March {selectedDate}, 2024</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-500">Time:</span>
                          <span className="font-medium text-slate-800">{selectedTime}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-500">Team:</span>
                          <span className="font-medium text-slate-800">Elite Cleaners Pro</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-500">AI Confidence:</span>
                          <span className="font-medium text-green-600">98%</span>
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          setBookingStep(1);
                          setSelectedDate(15);
                          setSelectedTime("10:00 AM");
                        }}
                        className="mt-6 text-blue-600 font-medium hover:underline"
                      >
                        Schedule Another
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </FloatingElement>

            {/* Floating Notification Cards */}
            <FloatingElement delay={500} className="absolute -top-4 -right-4 lg:right-0">
              <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-slate-800 text-sm">Auto-synced</p>
                  <p className="text-xs text-slate-500">Airbnb calendar updated</p>
                </div>
              </div>
            </FloatingElement>

            <FloatingElement delay={1000} className="absolute -bottom-4 -left-4 lg:left-0">
              <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Bot className="w-5 h-5 text-blue-600" />
                  <span className="font-medium text-slate-800 text-sm">AI Insight</span>
                </div>
                <p className="text-xs text-slate-600">
                  "Weekend demand up 40%. Suggest raising rates."
                </p>
              </div>
            </FloatingElement>
          </div>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// AI Features Grid
// ==========================================

const AIFeaturesSection = () => {
  const features = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Intelligent Conflict Resolution",
      description: "AI automatically detects scheduling conflicts and suggests optimal alternatives based on priority, availability, and historical performance.",
      gradient: "from-blue-500 to-cyan-500",
      stat: "Zero",
      statLabel: "Double Bookings",
    },
    {
      icon: <CalendarDays className="w-8 h-8" />,
      title: "Predictive Availability",
      description: "Machine learning predicts future availability patterns, automatically blocking maintenance windows and optimizing turnover times.",
      gradient: "from-purple-500 to-pink-500",
      stat: "94%",
      statLabel: "Prediction Accuracy",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Smart Team Assignment",
      description: "Automatically assigns the best team member based on location, skills, ratings, and current workload distribution.",
      gradient: "from-orange-500 to-red-500",
      stat: "3x",
      statLabel: "Faster Dispatch",
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Automated Guest Communication",
      description: "Sends personalized check-in instructions, local recommendations, and real-time updates without manual intervention.",
      gradient: "from-green-500 to-emerald-500",
      stat: "100%",
      statLabel: "Response Rate",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Revenue Optimization",
      description: "Analyzes booking patterns to suggest optimal pricing adjustments and minimum stay requirements for maximum revenue.",
      gradient: "from-yellow-500 to-amber-500",
      stat: "+28%",
      statLabel: "Revenue Boost",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Proactive Problem Prevention",
      description: "Identifies potential issues before they occur—late checkouts, maintenance needs, or supply shortages—and auto-resolves them.",
      gradient: "from-indigo-500 to-violet-500",
      stat: "85%",
      statLabel: "Issues Prevented",
    },
  ];

  return (
    <section id="features" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            AI-Powered Capabilities
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Scheduling That Gets Smarter
          </h2>
          <p className="text-lg text-slate-600">
            Our AI doesn't just schedule—it learns, predicts, and optimizes your 
            entire property operation automatically.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <GlowCard key={idx} className="h-full">
              <div className="p-8 h-full flex flex-col">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-500/20`}>
                  {feature.icon}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                  {feature.description}
                </p>

                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <p className="text-3xl font-bold text-slate-900">{feature.stat}</p>
                    <p className="text-sm text-slate-500">{feature.statLabel}</p>
                  </div>
                  <button className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-all">
                    <ArrowUpRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// Scheduling Types Section
// ==========================================

const SchedulingTypesSection = () => {
  const [activeTab, setActiveTab] = useState("cleaning");

  const types = {
    cleaning: {
      title: "Automated Cleaning Coordination",
      description: "AI schedules cleanings based on checkout times, property size, and team availability. Automatically buffers time for inspections and restocking.",
      features: [
        "Auto-detects checkout times from all platforms",
        "Assigns teams based on property size & location",
        "Buffers 30-60 min for quality inspections",
        "Restock alerts triggered automatically",
      ],
      icon: <Sparkles className="w-6 h-6" />,
      color: "blue",
    },
    maintenance: {
      title: "Preventive Maintenance Scheduling",
      description: "Predictive scheduling for HVAC, plumbing, and seasonal maintenance. Prevents emergencies by addressing issues before guest impact.",
      features: [
        "Seasonal HVAC filter replacements",
        "Preventive plumbing inspections",
        "Appliance lifecycle tracking",
        "Emergency repair rapid dispatch",
      ],
      icon: <Wrench className="w-6 h-6" />,
      color: "amber",
    },
    guest: {
      title: "Guest Experience Automation",
      description: "End-to-end guest journey automation from booking confirmation to post-stay review requests, personalized for each guest profile.",
      features: [
        "Personalized check-in instructions",
        "Local recommendations by guest type",
        "Real-time arrival coordination",
        "Automated review requests post-stay",
      ],
      icon: <Heart className="w-6 h-6" />,
      color: "rose",
    },
    owner: {
      title: "Owner Reporting & Meetings",
      description: "Automated monthly performance reports and owner meeting scheduling. Keeps stakeholders informed without manual report generation.",
      features: [
        "Monthly P&L auto-generated & sent",
        "Owner meeting auto-scheduling",
        "Maintenance approval workflows",
        "Portfolio performance dashboards",
      ],
      icon: <FileText className="w-6 h-6" />,
      color: "emerald",
    },
  };

  const currentType = types[activeTab as keyof typeof types];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Every Schedule, Automated
          </h2>
          <p className="text-lg text-slate-600">
            From cleaning crews to owner meetings, every aspect of your operation 
            runs on intelligent autopilot.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {Object.entries(types).map(([key, type]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeTab === key
                  ? "bg-slate-900 text-white shadow-lg"
                  : "bg-white text-slate-600 hover:bg-slate-100"
              }`}
            >
              <span className="flex items-center gap-2">
                {type.icon}
                {type.title.split(" ")[0]}
              </span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-${currentType.color}-100 text-${currentType.color}-700 text-sm font-medium mb-6`}>
                {currentType.icon}
                <span className="capitalize">{activeTab}</span>
              </div>

              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                {currentType.title}
              </h3>
              <p className="text-lg text-slate-600 mb-8">
                {currentType.description}
              </p>

              <ul className="space-y-4">
                {currentType.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className={`w-6 h-6 rounded-full bg-${currentType.color}-100 flex items-center justify-center flex-shrink-0 mt-0.5`}>
                      <Check className={`w-4 h-4 text-${currentType.color}-600`} />
                    </div>
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="mt-8 px-6 py-3 bg-slate-900 text-white font-semibold rounded-xl hover:bg-slate-800 transition-colors flex items-center gap-2">
                Configure {activeTab} automation
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-slate-100 p-8 lg:p-12 flex items-center justify-center">
              {/* Visual Representation */}
              <div className="w-full max-w-md space-y-4">
                {activeTab === "cleaning" && (
                  <>
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-medium text-slate-700">Today - March 15</span>
                        <span className="text-sm text-blue-600 font-medium">6 jobs</span>
                      </div>
                      <div className="space-y-2">
                        {[
                          { time: "10:00 AM", property: "Oceanview Villa", team: "Team A", status: "completed" },
                          { time: "12:30 PM", property: "Downtown Loft", team: "Team B", status: "in-progress" },
                          { time: "3:00 PM", property: "Suburban Home", team: "Team C", status: "scheduled" },
                        ].map((job, idx) => (
                          <div key={idx} className="flex items-center gap-3 p-2 rounded-lg bg-slate-50">
                            <div className={`w-2 h-2 rounded-full ${
                              job.status === "completed" ? "bg-green-500" :
                              job.status === "in-progress" ? "bg-amber-500" : "bg-blue-500"
                            }`} />
                            <div className="flex-1">
                              <p className="text-sm font-medium text-slate-800">{job.property}</p>
                              <p className="text-xs text-slate-500">{job.time} • {job.team}</p>
                            </div>
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              job.status === "completed" ? "bg-green-100 text-green-700" :
                              job.status === "in-progress" ? "bg-amber-100 text-amber-700" :
                              "bg-blue-100 text-blue-700"
                            }`}>
                              {job.status}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                      <div className="flex items-start gap-3">
                        <Bot className="w-5 h-5 text-blue-600 mt-0.5" />
                        <div>
                          <p className="font-medium text-blue-900 text-sm">AI Optimization</p>
                          <p className="text-xs text-blue-700 mt-1">
                            Rescheduled 2:00 PM job to 1:30 PM to reduce Team B's travel time by 15 minutes.
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {activeTab === "maintenance" && (
                  <>
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200">
                      <h4 className="font-medium text-slate-700 mb-4">Upcoming Maintenance</h4>
                      <div className="space-y-3">
                        {[
                          { task: "HVAC Filter Replace", date: "Mar 18", property: "All units", priority: "scheduled" },
                          { task: "Water Heater Inspection", date: "Mar 20", property: "Villa #3", priority: "due-soon" },
                          { task: "Roof Inspection", date: "Apr 2", property: "Downtown", priority: "planned" },
                        ].map((task, idx) => (
                          <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-slate-50">
                            <div>
                              <p className="font-medium text-slate-800 text-sm">{task.task}</p>
                              <p className="text-xs text-slate-500">{task.property} • {task.date}</p>
                            </div>
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              task.priority === "due-soon" ? "bg-amber-100 text-amber-700" :
                              task.priority === "scheduled" ? "bg-blue-100 text-blue-700" :
                              "bg-slate-100 text-slate-600"
                            }`}>
                              {task.priority}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5" />
                        <div>
                          <p className="font-medium text-amber-900 text-sm">Predictive Alert</p>
                          <p className="text-xs text-amber-700 mt-1">
                            Based on usage patterns, Villa #3's water heater likely needs service within 2 weeks.
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {activeTab === "guest" && (
                  <>
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200">
                      <h4 className="font-medium text-slate-700 mb-4">Guest Journey</h4>
                      <div className="space-y-3">
                        {[
                          { stage: "Booking Confirmed", time: "2 min ago", status: "sent", guest: "Sarah M." },
                          { stage: "Pre-arrival Info", time: "In 2 days", status: "scheduled", guest: "Sarah M." },
                          { stage: "Check-in Day", time: "Mar 18", status: "pending", guest: "Sarah M." },
                          { stage: "Post-stay Review", time: "Mar 23", status: "pending", guest: "Sarah M." },
                        ].map((stage, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                              stage.status === "sent" ? "bg-green-100 text-green-600" :
                              stage.status === "scheduled" ? "bg-blue-100 text-blue-600" :
                              "bg-slate-100 text-slate-400"
                            }`}>
                              {stage.status === "sent" ? <Check className="w-4 h-4" /> : <Clock className="w-4 h-4" />}
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-medium text-slate-800">{stage.stage}</p>
                              <p className="text-xs text-slate-500">{stage.time}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-rose-50 rounded-xl p-4 border border-rose-200">
                      <div className="flex items-start gap-3">
                        <Heart className="w-5 h-5 text-rose-600 mt-0.5" />
                        <div>
                          <p className="font-medium text-rose-900 text-sm">Personalization Active</p>
                          <p className="text-xs text-rose-700 mt-1">
                            Sarah is a returning business traveler. Auto-upgraded WiFi and early check-in offered.
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {activeTab === "owner" && (
                  <>
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200">
                      <h4 className="font-medium text-slate-700 mb-4">March Performance</h4>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="p-3 bg-slate-50 rounded-lg">
                          <p className="text-2xl font-bold text-slate-900">$12,450</p>
                          <p className="text-xs text-slate-500">Revenue</p>
                        </div>
                        <div className="p-3 bg-slate-50 rounded-lg">
                          <p className="text-2xl font-bold text-green-600">94%</p>
                          <p className="text-xs text-slate-500">Occupancy</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-600">Cleaning costs</span>
                          <span className="font-medium text-slate-900">$1,240</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-600">Maintenance</span>
                          <span className="font-medium text-slate-900">$380</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-600">Your earnings</span>
                          <span className="font-bold text-green-600">$8,420</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-200">
                      <div className="flex items-start gap-3">
                        <Calendar className="w-5 h-5 text-emerald-600 mt-0.5" />
                        <div>
                          <p className="font-medium text-emerald-900 text-sm">Meeting Scheduled</p>
                          <p className="text-xs text-emerald-700 mt-1">
                            Q1 review auto-scheduled for April 5th at 2 PM. Agenda: portfolio expansion.
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// Integration Timeline
// ==========================================

const IntegrationTimeline = () => {
  const integrations = [
    {
      platform: "Airbnb",
      icon: <Home className="w-6 h-6" />,
      color: "bg-rose-500",
      features: ["Instant calendar sync", "Auto-message guests", "Pricing updates"],
    },
    {
      platform: "Booking.com",
      icon: <Calendar className="w-6 h-6" />,
      color: "bg-blue-600",
      features: ["Real-time availability", "Content sync", "Review management"],
    },
    {
      platform: "Vrbo",
      icon: <Building2 className="w-6 h-6" />,
      color: "bg-indigo-600",
      features: ["Unified inbox", "Fee optimization", "Listing sync"],
    },
    {
      platform: "Google Calendar",
      icon: <CalendarDays className="w-6 h-6" />,
      color: "bg-blue-500",
      features: ["Team scheduling", "Block personal time", "Event reminders"],
    },
    {
      platform: "Slack",
      icon: <MessageSquare className="w-6 h-6" />,
      color: "bg-purple-600",
      features: ["Team alerts", "Daily summaries", "Emergency pings"],
    },
    {
      platform: "QuickBooks",
      icon: <FileText className="w-6 h-6" />,
      color: "bg-green-600",
      features: ["Auto-invoicing", "Expense tracking", "Tax prep"],
    },
  ];

  return (
    <section id="integrations" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Connected to Your Ecosystem
          </h2>
          <p className="text-lg text-slate-600">
            Native integrations with every major platform. One dashboard, 
            complete control.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrations.map((integration, idx) => (
            <div
              key={idx}
              className="group bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 rounded-xl ${integration.color} flex items-center justify-center text-white shadow-lg`}>
                  {integration.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  {integration.platform}
                </h3>
              </div>

              <ul className="space-y-2">
                {integration.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-center gap-2 text-sm text-slate-600">
                    <Check className="w-4 h-4 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-4 pt-4 border-t border-slate-200">
                <div className="flex items-center gap-2 text-sm text-blue-600 font-medium">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Connected & Syncing
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-slate-100 rounded-full text-slate-600">
            <Plus className="w-5 h-5" />
            <span>Plus 50+ more integrations via Zapier</span>
          </div>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// Live Demo Scheduler
// ==========================================

const LiveDemoScheduler = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    properties: "1-3",
    goal: "",
  });

  const timeSlots = [
    "9:00 AM", "10:30 AM", "1:00 PM", "2:30 PM", "4:00 PM"
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              See AI Scheduling in Action
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Book a personalized demo with our scheduling specialists. 
              We'll show you exactly how much time and money you'll save.
            </p>

            <div className="space-y-4">
              {[
                { icon: <Clock className="w-5 h-5" />, text: "15-minute personalized walkthrough" },
                { icon: <Calendar className="w-5 h-5" />, text: "See your properties' potential" },
                { icon: <Zap className="w-5 h-5" />, text: "Get custom automation recommendations" },
                { icon: <Gift className="w-5 h-5" />, text: "Free setup included ($500 value)" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-blue-100">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                    {item.icon}
                  </div>
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            {step === 1 && (
              <div className="space-y-6 animate-in fade-in">
                <h3 className="text-2xl font-bold text-slate-900">Book Your Demo</h3>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Smith"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Work Email
                  </label>
                  <input
                    type="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Portfolio Size
                  </label>
                  <select
                    value={formData.properties}
                    onChange={(e) => setFormData({ ...formData, properties: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  >
                    <option value="1-3">1-3 properties</option>
                    <option value="4-10">4-10 properties</option>
                    <option value="11-25">11-25 properties</option>
                    <option value="25+">25+ properties</option>
                  </select>
                </div>

                <button
                  onClick={() => setStep(2)}
                  disabled={!formData.name || !formData.email}
                  className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue to Schedule
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6 animate-in slide-in-from-right">
                <div className="flex items-center gap-2 mb-4">
                  <button
                    onClick={() => setStep(1)}
                    className="text-slate-400 hover:text-slate-600"
                  >
                    ← Back
                  </button>
                  <h3 className="text-2xl font-bold text-slate-900">Select Time</h3>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setStep(3)}
                      className="p-4 rounded-xl border-2 border-slate-200 hover:border-blue-500 hover:bg-blue-50 transition-all text-center"
                    >
                      <Clock className="w-5 h-5 mx-auto mb-2 text-slate-400" />
                      <span className="font-medium text-slate-700">{time}</span>
                      <p className="text-xs text-slate-500 mt-1">Tomorrow</p>
                    </button>
                  ))}
                </div>

                <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
                  <div className="flex items-start gap-3">
                    <Bot className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-blue-900 text-sm">AI Assistant Note</p>
                      <p className="text-xs text-blue-700 mt-1">
                        Based on your timezone (EST), morning slots have best availability.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="text-center py-8 animate-in zoom-in">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Demo Confirmed!
                </h3>
                <p className="text-slate-600 mb-6">
                  Check your email for calendar invite and Zoom link.
                </p>
                
                <div className="bg-slate-50 rounded-xl p-4 text-left space-y-2 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Date:</span>
                    <span className="font-medium text-slate-800">Tomorrow</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Duration:</span>
                    <span className="font-medium text-slate-800">15 minutes</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">With:</span>
                    <span className="font-medium text-slate-800">Alex, Scheduling Specialist</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setStep(1);
                    setFormData({ name: "", email: "", properties: "1-3", goal: "" });
                  }}
                  className="text-blue-600 font-medium hover:underline"
                >
                  Book another demo
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// Stats & Trust Section
// ==========================================

const StatsSection = () => {
  const stats = [
    { value: "2.4M+", label: "Meetings Scheduled", icon: <Calendar className="w-6 h-6" /> },
    { value: "98.7%", label: "On-Time Rate", icon: <Clock className="w-6 h-6" /> },
    { value: "45K+", label: "Properties Managed", icon: <Building2 className="w-6 h-6" /> },
    { value: "12.5 hrs", label: "Avg Time Saved/Week", icon: <Timer className="w-6 h-6" /> },
  ];

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
                {stat.icon}
              </div>
              <p className="text-3xl lg:text-4xl font-bold text-slate-900 mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// Testimonials Section
// ==========================================

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "The AI scheduling is scary good. It knew I needed buffer time between cleanings before I did. Saved me 15 hours a week.",
      author: "Jennifer Walsh",
      role: "Portfolio Manager",
      location: "Miami, FL",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
      metric: "15 hrs",
      metricLabel: "Weekly Saved",
    },
    {
      quote: "We went from 3 scheduling conflicts per week to zero. The AI handles complex multi-property coordination effortlessly.",
      author: "Robert Chen",
      role: "Property Management Co.",
      location: "Austin, TX",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      metric: "Zero",
      metricLabel: "Conflicts",
    },
    {
      quote: "Guest communication is now 100% automated. From booking to checkout, every message is personalized and perfectly timed.",
      author: "Maria Santos",
      role: "Luxury Host",
      location: "Barcelona, Spain",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      metric: "100%",
      metricLabel: "Automated",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Trusted by Thousands of Hosts
          </h2>
          <p className="text-lg text-slate-600">
            See how property managers worldwide are transforming their operations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-slate-700 text-lg leading-relaxed mb-8">
                "{t.quote}"
              </p>

              <div className="flex items-center justify-between pt-6 border-t border-slate-200">
                <div className="flex items-center gap-3">
                  <img
                    src={t.image}
                    alt={t.author}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white shadow"
                  />
                  <div>
                    <p className="font-bold text-slate-900">{t.author}</p>
                    <p className="text-sm text-slate-500">{t.role}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-blue-600">{t.metric}</p>
                  <p className="text-xs text-slate-500">{t.metricLabel}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// FAQ Section
// ==========================================

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does the AI know when to schedule cleanings?",
      answer: "Our AI analyzes your booking calendars across all platforms (Airbnb, Booking.com, Vrbo), checks historical cleaning durations for your specific property size, factors in team travel times, and automatically buffers 30-60 minutes for inspections. It learns from past schedules to optimize future ones.",
    },
    {
      question: "Can I override AI scheduling decisions?",
      answer: "Absolutely. While the AI handles 95% of scheduling automatically, you retain full control. You can override any decision via the dashboard, mobile app, or even SMS commands. The AI learns from your overrides to improve future recommendations.",
    },
    {
      question: "What happens if a guest extends their stay last minute?",
      answer: "The AI monitors calendars in real-time. If a guest modifies their reservation, it immediately recalculates the cleaning schedule, notifies the assigned team, and suggests alternative slots. Emergency re-scheduling is handled within 2 minutes.",
    },
    {
      question: "Does it work with my existing cleaning teams?",
      answer: "Yes. You can onboard your current vendors or use our vetted network. The AI tracks each team's performance, ratings, and availability to make optimal assignments. Teams receive notifications via our mobile app or SMS.",
    },
    {
      question: "How does pricing optimization work?",
      answer: "The AI analyzes 50+ data points including local events, seasonality, competitor rates, demand patterns, and your historical performance. It updates prices 4x daily across all platforms, with customizable minimums and maximums set by you.",
    },
    {
      question: "Is there a setup fee or long-term contract?",
      answer: "No setup fee and no long-term contracts. We offer month-to-month plans with 30-day cancellation. Enterprise clients receive complimentary white-glove onboarding including team training and custom workflow configuration.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600">
            Everything you need to know about AI-powered scheduling.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="font-semibold text-slate-900 pr-8">
                  {faq.question}
                </span>
                {openIndex === idx ? (
                  <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                )}
              </button>
              <div
                className="overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: openIndex === idx ? "300px" : "0",
                  opacity: openIndex === idx ? 1 : 0,
                }}
              >
                <p className="px-6 pb-6 text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center p-8 bg-blue-50 rounded-2xl border border-blue-200">
          <h3 className="font-bold text-slate-900 mb-2">Still have questions?</h3>
          <p className="text-slate-600 mb-4">
            Our team is here to help you get started.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors">
            Chat with Support
          </button>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// Final CTA Section
// ==========================================

const FinalCTASection = () => (
  <section className="py-24 bg-white">
    <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
      <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-[2.5rem] p-12 lg:p-16 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
        
        <div className="relative">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Stop Scheduling. Start Scaling.
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join 45,000+ property managers who've eliminated scheduling headaches 
            and reclaimed 10+ hours every week.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="px-10 py-5 bg-white text-blue-600 font-bold text-lg rounded-full hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-10 py-5 bg-blue-700 text-white font-bold text-lg rounded-full hover:bg-blue-600 transition-all flex items-center justify-center gap-2">
              <Play className="w-5 h-5" />
              Watch Demo
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-blue-100">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              14-day free trial
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              No credit card required
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              Setup in 5 minutes
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ==========================================
// Footer
// ==========================================

const Footer = () => (
  <footer className="bg-slate-900 text-slate-300 py-16">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">StayPilot</span>
          </div>
          <p className="text-slate-400 max-w-sm">
            AI-powered scheduling and automation for modern property managers. 
            Save time, eliminate conflicts, and scale your portfolio effortlessly.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold text-white mb-4">Product</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">AI Scheduler</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Automation</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">About</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-slate-500">
          © 2024 StayPilot. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Security</a>
        </div>
      </div>
    </div>
  </footer>
);

// ==========================================
// Main Page Component
// ==========================================

const SmartSchedulingPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

      {/* <Header /> */}
      <HeroSection />
      <StatsSection />
      <AIFeaturesSection />
      <SchedulingTypesSection />
      <IntegrationTimeline />
      <LiveDemoScheduler />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
      {/* <Footer /> */}
      
    </div>
  );
};

export default SmartSchedulingPage;