import React, { useState, useEffect } from 'react';
import { 
  Users, Calendar, Heart, Globe, Award, ChevronRight, ChevronDown,
  Menu, X, Mail, Phone, MapPin, Instagram, Linkedin, 
  Facebook, ArrowRight, Zap, Target, Smile, Play, Crown, Swords, Quote, Clock, Image, Filter, Eye, EyeOff, BookOpen, Download, User, Lock, FileText
} from 'lucide-react';
import AimLogo from './assets/logo.png';
import GroupPhoto from './assets/group_photo.JPG';
import RaneshPhoto from './assets/ranesh.jpeg';
import BharathPhoto from './assets/Members/bharath.jpg';
import DurgadharshiniPhoto from './assets/Members/durgadharshini.jpg';
import FayazkhanPhoto from './assets/Members/fayazkhan.jpg';
import AjaiShankarPhoto from './assets/Members/ajaishankar.jpg';
import AmurudhPhoto from './assets/Members/amurudh.jpg';
import DivagarPhoto from './assets/Members/divagar.jpg';
import GokulakrishnanPhoto from './assets/Members/gokulakrishnan.jpg';
import GowthamRajPhoto from './assets/Members/gowthamraj.jpg';
import GukanPhoto from './assets/Members/gukan.jpg';
import HameshwarPhoto from './assets/Members/hameshwar.jpg';
import HaribabuPhoto from './assets/Members/haribabu.jpg';
import HarshavardhiniPhoto from './assets/Members/harshavardhini.jpg';
import JoesithaPhoto from './assets/Members/joesitha.jpeg';
import KavinayaPhoto from './assets/Members/kavinaya.jpg';
import KishoreBabuPhoto from './assets/Members/kishorebabu.jpg';
import KizarAnsariPhoto from './assets/Members/kizaransari.jpg';
import MeyyappanPhoto from './assets/Members/meyyappan.jpg';
import MunirajPhoto from './assets/Members/muniraj.jpeg';
import PraveenPhoto from './assets/Members/praveen.jpeg';
import RanjeethKumarPhoto from './assets/Members/ranjeethkumar.jpg';
import SahinPhoto from './assets/Members/sahin.jpg';
import SanjayKrishnanPhoto from './assets/Members/sanjaykrishnan.jpg';
import SathishBalakrishnanPhoto from './assets/Members/sathishbalakrishnan.jpg';
import VijayanPhoto from './assets/Members/vijayan.jpg';
import YeshwanthPhoto from './assets/Members/yeshwanth.jpg';
import JulyBulletinPdf from './assets/Bulletins/July Month Bulletin.pdf';
import AugustBulletinPdf from './assets/Bulletins/August Month Bulletin.pdf';
import DecemberBulletinPdf from './assets/Bulletins/December Month Bulletin.pdf';
import FebuaryBulletinPdf from './assets/Bulletins/Febuary Month Bulletin Rework.pdf';
import JanuaryBulletinPdf from './assets/Bulletins/January Month Bulletin.pdf';
import MarchBulletinPdf from './assets/Bulletins/March Month Bulletin.pdf';
import NovemberBulletinPdf from './assets/Bulletins/November Month Bulletin.pdf';
import OctoberBulletinPdf from './assets/Bulletins/October Month Bulletin.pdf';
import SeptemberBulletinPdf from './assets/Bulletins/September Month Bulletin.pdf';
import TheEaglesPageImg from "./assets/Projects/Ongoing_Projects/theeagle'spage.jpg";
import ThinnakaviBharathImg from './assets/Projects/Ongoing_Projects/thinnakavibarathiyinpathaiyil.jpg';
import TheEaglesPulseImg from './assets/Projects/Ongoing_Projects/theeaglespulse.jpg';

// Rotaract Prayer & 4-Way Test Component
const PrayerAndTestSection = () => (
  <section className="py-24 bg-[#FAFAFA] relative z-20 border-t border-gray-100">
    <div className="container mx-auto px-6 md:px-12 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-black text-[#333333] uppercase tracking-tight">
          ROTARACT PRAYER & <span className="text-[#D11221]">4-WAY TEST</span>
        </h2>
        <div className="flex justify-center mt-5">
          <div className="h-[3px] w-12 bg-[#333333]"></div>
          <div className="h-[3px] w-12 bg-[#D11221]"></div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 max-w-5xl mx-auto">
        {/* Rotaract Prayer Card */}
        <div className="flex-1 bg-white p-8 md:p-12 rounded-[2rem] border border-gray-200 shadow-[0_10px_30px_rgb(0,0,0,0.03)] hover:shadow-xl transition-all duration-300">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-black text-[#333333] uppercase tracking-widest">ROTARACT PRAYER</h3>
            <div className="flex justify-center mt-5">
              <div className="h-[3px] w-8 bg-[#D11221]"></div>
              <div className="h-[3px] w-8 bg-[#333333]"></div>
            </div>
          </div>
          <p className="text-[#2D2D2D] leading-[2] text-justify font-medium text-[15.5px]">
            Oh! God! Our Almighty Father & Ruler of the Universe, We thank thee for the inspiration you have given us for the Rotaract movement based upon Fellowship through Service. We humbly beg you to continue thy grace to enable us to do Our Service to ourselves and to our neighbors and to honor and glory of thy holy name.
          </p>
        </div>

        {/* 4-Way Test Card */}
        <div className="flex-1 bg-white p-8 md:p-12 rounded-[2rem] border border-red-50 shadow-[0_10px_30px_rgba(209,18,33,0.05)] hover:shadow-xl transition-all duration-300">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-black text-[#D11221] uppercase tracking-widest">4 WAY TEST</h3>
            <div className="flex justify-center mt-5">
              <div className="h-[3px] w-8 bg-[#333333]"></div>
              <div className="h-[3px] w-8 bg-[#D11221]"></div>
            </div>
          </div>
          <p className="text-center text-gray-500 italic mb-8 font-medium">"Of the things we think, say or do:"</p>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <span className="text-[#D11221] mt-0.5 text-lg">✦</span>
              <span className="text-[#2D2D2D] font-medium text-[15.5px] leading-relaxed">Is it the <strong className="text-[#333333] font-black">TRUTH</strong>?</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-[#D11221] mt-0.5 text-lg">✦</span>
              <span className="text-[#2D2D2D] font-medium text-[15.5px] leading-relaxed">Is it <strong className="text-[#333333] font-black">FAIR</strong> to all concerned?</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-[#D11221] mt-0.5 text-lg">✦</span>
              <span className="text-[#2D2D2D] font-medium text-[15.5px] leading-relaxed">Will it build <strong className="text-[#333333] font-black">GOODWILL</strong> and <strong className="text-[#333333] font-black">BETTER FRIENDSHIPS</strong>?</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-[#D11221] mt-0.5 text-lg">✦</span>
              <span className="text-[#2D2D2D] font-medium text-[15.5px] leading-relaxed">Will it be <strong className="text-[#333333] font-black">BENEFICIAL</strong> to all concerned?</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const RotaractWebsite = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreMenuOpen, setMoreMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedMember, setSelectedMember] = useState(null);
  const [selectedBulletin, setSelectedBulletin] = useState(null);
  
  // States for Club Documents Vault
  const [showPassword, setShowPassword] = useState(false); 
  const [docUsername, setDocUsername] = useState('');
  const [docPassword, setDocPassword] = useState('');
  const [vaultUnlocked, setVaultUnlocked] = useState(false);
  const [loginError, setLoginError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (pageId) => {
    setMobileMenuOpen(false);
    setMoreMenuOpen(false);
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleVaultUnlock = (e) => {
    e.preventDefault();
    // Verify credentials for rotaract / cug2025
    if (docUsername.toLowerCase() === 'rotaract' && docPassword === 'cug2025') {
      setVaultUnlocked(true);
      setLoginError(false);
      setDocPassword(''); // clear password for security
    } else {
      setLoginError(true);
    }
  };

  const navLinks = [
    { name: 'HOME', id: 'home' },
    { name: 'ABOUT US', id: 'about' },
    { name: 'PROJECTS', id: 'avenues' },
    { name: 'GALLERY', id: 'projects' },
    { name: 'CONTACT', id: 'contact' }
  ];

  const moreLinks = [
    { name: 'Board Members', id: 'board-members' },
    { name: 'Club Bulletins', id: 'club-bulletins' },
    { name: 'Club Documents', id: 'club-documents' },
    { name: 'Admin', id: 'admin' }
  ];

  const renderPageContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[#FAFAFA]">
              <div className="absolute inset-0 z-0">
                <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-gradient-to-br from-[#D11221]/10 to-transparent rounded-full blur-3xl opacity-80 mix-blend-multiply"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-[#333333]/10 to-transparent rounded-full blur-3xl opacity-60 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMCwwLDAsMC4wNSkiLz48L3N2Zz4=')] opacity-50"></div>
              </div>
              <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-12">
                <div className="w-full lg:w-[50%] flex flex-col items-center lg:items-start text-center lg:text-left pt-10">
                  <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-[0_4px_20px_rgb(0,0,0,0.03)] text-[#333333] text-xs font-bold uppercase tracking-[0.15em] mb-8 transition-transform hover:-translate-y-1 duration-300">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D11221] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D11221]"></span>
                    </span>
                    Rotaract Club of Covai User Group
                  </div>
                  <h1 className="text-6xl sm:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-black text-[#333333] leading-[1] tracking-tighter mb-8">
                    AIM <br className="hidden md:block"/>
                    FOR <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D11221] to-[#A60E1A]">IMPACT.</span>
                  </h1>
                  <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                    We are an elite global network of young leaders engineering positive change and forging exceptional professional futures.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start w-full">
                    <button onClick={() => navigateTo('join')} className="w-full sm:w-auto px-8 py-4 bg-[#D11221] text-white rounded-full font-bold text-[15px] tracking-wide hover:bg-[#A60E1A] transition-all duration-300 shadow-[0_10px_30px_rgba(209,18,33,0.3)] hover:shadow-[0_15px_40px_rgba(209,18,33,0.4)] hover:-translate-y-1 flex items-center justify-center gap-3 group relative overflow-hidden">
                      <span className="relative z-10 flex items-center gap-2">
                        Join The Movement <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                    </button>
                    <button onClick={() => navigateTo('about')} className="w-full sm:w-auto px-8 py-4 bg-white/80 backdrop-blur-sm border border-gray-200 text-[#333333] rounded-full font-bold text-[15px] tracking-wide hover:border-[#D11221] hover:text-[#D11221] transition-all duration-300 flex items-center justify-center gap-3 group shadow-[0_5px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_10px_30px_rgba(209,18,33,0.1)] hover:-translate-y-1">
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-[#D11221] group-hover:text-white transition-colors duration-300">
                        <Play size={14} className="ml-0.5" fill="currentColor" />
                      </div>
                      Discover Us
                    </button>
                  </div>
                </div>
                <div className="w-full lg:w-[45%] relative flex justify-center items-center mt-12 lg:mt-0">
                  <div className="absolute inset-0 flex items-center justify-center -z-10">
                     <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full border border-[#333333]/10 animate-[spin_60s_linear_infinite]"></div>
                     <div className="absolute w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-full border border-[#D11221]/10 animate-[spin_40s_linear_infinite_reverse]"></div>
                  </div>
                  <div className="relative w-full max-w-[400px] aspect-square flex items-center justify-center group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#D11221]/20 to-[#333333]/10 rounded-full blur-3xl opacity-60 transform scale-90 group-hover:scale-110 transition-transform duration-1000"></div>
                    <img src={AimLogo} alt="Aim For Impact Logo" className="w-full h-auto object-contain relative z-10 drop-shadow-[0_30px_50px_rgba(51,51,51,0.2)] transform group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-700 ease-out" />
                  </div>
                </div>
              </div>
            </section>
            <section className="pt-24 pb-16 bg-white relative">
              <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                  <div className="bg-white p-3 md:p-4 rounded-[2.5rem] shadow-[0_15px_50px_rgba(0,0,0,0.08)] border border-gray-100 relative w-full max-w-lg">
                    <div className="relative rounded-[1.8rem] overflow-hidden aspect-[4/3] group">
                      <img src={GroupPhoto} alt="The Club" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#333333]/90 via-[#333333]/20 to-transparent"></div>
                      <div className="absolute top-6 left-1/2 -translate-x-1/2">
                         <div className="w-10 h-10 rounded-full border-2 border-[#D11221] flex items-center justify-center bg-white/10 backdrop-blur-sm">
                           <Target className="text-[#D11221]" size={20} />
                         </div>
                      </div>
                      <div className="absolute bottom-6 left-6 text-white">
                        <h3 className="text-3xl md:text-4xl font-black tracking-wide mb-1">THE CLUB</h3>
                        <p className="text-xs md:text-sm font-bold tracking-[0.2em] text-red-400 uppercase">Rotaract | CUG</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="mb-2">
                    <span className="text-[#D11221] text-sm font-bold tracking-[0.2em] uppercase">Our Origin</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#333333] mb-10 tracking-tight uppercase">Who We Are</h2>
                  <div className="relative pl-8 md:pl-10 py-6 md:py-8 bg-white rounded-r-2xl border border-gray-100 border-l-0 shadow-[10px_10px_40px_rgba(0,0,0,0.04)]">
                    <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#D11221] rounded-l-lg"></div>
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium italic mb-8 pr-4">
                      "The Rotaract Club of Covai User Group is a formidable club of students and young professionals. We are part of a global network of Rotaract clubs, united under the banner of Rotary International."
                    </p>
                    <button onClick={() => navigateTo('about')} className="flex items-center gap-4 text-[#D11221] font-bold text-sm tracking-widest uppercase hover:text-[#A60E1A] transition-colors group">
                      <span className="w-8 h-0.5 bg-gray-300 group-hover:bg-[#D11221] transition-colors"></span>
                      Know About Us 
                      <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <section className="py-20 relative z-20 overflow-hidden bg-white">
              <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-wrap justify-center gap-8 text-center max-w-6xl mx-auto">
                  {[
                    { number: "100+", label: "PROJECTS COMPLETED" },
                    { number: "26", label: "RI REG. MEMBERS" },
                    { number: "18", label: "YEARS OF SERVICE" },
                  ].map((stat, i) => (
                    <div key={i} className="flex flex-col items-center justify-center bg-gray-50 border border-gray-200 p-10 rounded-[2rem] hover:border-[#D11221] transition-all duration-500 group shadow-[0_10px_30px_rgb(0,0,0,0.03)] hover:shadow-xl cursor-default w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]">
                      <p className="text-5xl md:text-6xl font-black text-[#333333] mb-3 group-hover:scale-110 group-hover:text-[#D11221] transition-all duration-500 ease-out">{stat.number}</p>
                      <p className="text-gray-500 font-bold uppercase tracking-[0.15em] text-xs transition-colors duration-500">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            <PrayerAndTestSection />
          </>
        );
      case 'about':
        return (
          <section className="pt-32 pb-32 bg-[#FAFAFA] min-h-screen relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[70vh] bg-gradient-to-b from-[#333333]/5 to-transparent pointer-events-none"></div>
            <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-gradient-to-br from-[#D11221]/10 to-transparent rounded-full blur-3xl opacity-50 mix-blend-multiply pointer-events-none"></div>
            <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center mt-12">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#D11221]/20 bg-[#D11221]/5 text-[#D11221] text-[11px] font-black uppercase tracking-[0.25em] mb-8 shadow-sm">Established 2008</div>
              <h1 className="text-6xl sm:text-8xl md:text-[8.5rem] lg:text-[10rem] font-black text-[#333333] tracking-tighter uppercase mb-4 leading-none drop-shadow-sm">WHO WE ARE</h1>
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#D11221] font-medium max-w-4xl mx-auto italic" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>"A formidable club of students and young professionals."</p>
              <div className="mt-20 max-w-6xl mx-auto bg-white p-10 md:p-16 rounded-[3rem] border border-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.04)] text-left relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-gradient-to-b from-[#D11221] to-[#333333]"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
                  <div>
                    <p className="text-gray-600 leading-relaxed font-medium text-lg">
                      <span className="float-left text-6xl md:text-7xl font-black text-[#333333] leading-[0.8] pr-3 pt-2">R</span>
                      otaract club of Covai User Group was chartered in the year 2008, Rtr. Anmol Vij being the President. Covai user group was indeed an organisation in the beginning which was later brought into Rotary banner.
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600 leading-relaxed font-medium text-lg">
                      Since then it has been filled with highs and lows for our club. Rotaract Club of CUG is a vision driven club having right mix of working professionals and College students of various backgrounds. Almost into a decade of Rotaraction, CUG is now under the leadership of Rtr. Khumaravelu, the president and Rtr. Sree Krishna, the secretary which has produced worthy and productive projects for the betterment of the community.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-32 w-full max-w-6xl mx-auto">
                <div className="text-center mb-16 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mb-6 border border-red-100"><Crown size={32} className="text-[#D11221]" strokeWidth={2} /></div>
                  <h2 className="text-3xl md:text-5xl font-black text-[#333333] uppercase tracking-tight mb-4">OUR CORE VALUES</h2>
                  <p className="text-gray-500 font-medium text-lg max-w-2xl">The foundational pillars that guide our quest to empower, conquer, and forge.</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
                  <div className="bg-white rounded-[2rem] p-10 md:p-12 shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col items-start text-left transition-all hover:-translate-y-2 hover:shadow-xl duration-500 group">
                    <div className="w-16 h-16 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-8 group-hover:bg-[#D11221] group-hover:border-[#D11221] transition-colors duration-500"><Swords className="text-[#333333] group-hover:text-white transition-colors duration-500" size={28} strokeWidth={1.5} /></div>
                    <h3 className="text-xl font-black text-[#333333] uppercase tracking-widest mb-4">PERSONAL GROWTH</h3>
                    <p className="text-gray-500 font-medium leading-relaxed text-[16px]">Honing the skills needed for personal growth and professional excellence.</p>
                  </div>
                  <div className="bg-[#333333] rounded-[2rem] p-10 md:p-12 shadow-[0_20px_50px_rgba(51,51,51,0.3)] border border-[#444] flex flex-col items-start text-left relative overflow-hidden transition-transform hover:-translate-y-2 duration-500 group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#D11221]/20 to-transparent rounded-full blur-3xl -mr-20 -mt-20 transition-opacity group-hover:opacity-100 opacity-60"></div>
                    <div className="w-16 h-16 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center mb-8 relative z-10 shadow-inner"><Target className="text-[#D11221]" size={28} strokeWidth={1.5} /></div>
                    <h3 className="text-xl font-black text-white uppercase tracking-widest mb-4 relative z-10">CONQUERING CHALLENGES</h3>
                    <p className="text-gray-300 font-medium leading-relaxed text-[16px] relative z-10">Conquering the challenges facing our communities through dynamic, impactful service.</p>
                  </div>
                  <div className="bg-white rounded-[2rem] p-10 md:p-12 shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col items-start text-left transition-all hover:-translate-y-2 hover:shadow-xl duration-500 group">
                    <div className="w-16 h-16 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-8 group-hover:bg-[#D11221] group-hover:border-[#D11221] transition-colors duration-500"><Globe className="text-[#333333] group-hover:text-white transition-colors duration-500" size={28} strokeWidth={1.5} /></div>
                    <h3 className="text-xl font-black text-[#333333] uppercase tracking-widest mb-4">UNBREAKABLE BONDS</h3>
                    <p className="text-gray-500 font-medium leading-relaxed text-[16px]">Forging unbreakable bonds of friendship and global service across the world.</p>
                  </div>
                </div>
              </div>
              <div className="mt-32 w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center text-left pb-16 relative">
                <div className="w-full lg:w-[45%] relative rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)] bg-gradient-to-b from-[#D11221] to-[#1a1a1a] flex flex-col items-center pt-12 min-h-[550px] lg:min-h-[650px] z-10">
                  <img src={RaneshPhoto} alt="President" className="w-full h-auto mt-auto relative z-10 object-cover object-bottom transition-transform hover:scale-105 duration-700" />
                  <div className="absolute bottom-0 left-0 w-full p-10 bg-gradient-to-t from-[#111] via-[#111]/80 to-transparent z-20">
                    <h3 className="text-3xl font-black text-white mb-2 tracking-tight">Rtr RANESH GURU S</h3>
                    <p className="text-[#D11221] font-bold text-xs tracking-[0.25em] uppercase">President | Eagle</p>
                  </div>
                </div>
                <div className="w-full lg:w-[65%] flex flex-col justify-center lg:-ml-16 mt-10 lg:mt-20 z-20">
                  <div className="bg-white/95 backdrop-blur-xl rounded-[2rem] p-10 md:p-14 shadow-[0_30px_60px_rgba(0,0,0,0.08)] border border-gray-100 relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-3 bg-[#D11221]"></div>
                    <div className="absolute top-10 right-10 text-[#FAFAFA]"><Quote size={120} fill="currentColor" stroke="none" /></div>
                    <div className="relative z-10">
                      <h4 className="text-[#D11221] text-xs font-bold tracking-[0.25em] uppercase mb-4 flex items-center gap-3"><span className="w-6 h-px bg-[#D11221]"></span>From the President's Desk</h4>
                      <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-[#333333] uppercase tracking-tight mb-10 leading-[1.05]">LEADING WITH <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#333333] to-[#888]">IMPACT</span></h2>
                      <p className="text-gray-600 text-lg md:text-xl leading-[1.8] font-medium italic mb-12">"As we navigate the 2025-26 term under the banner of 'Aim For Impact', our focus remains unwavering: to transform our collective potential into tangible community action. We are a forging ground for the leaders of tomorrow, Eyes on the Vision, Wings on the Mission."</p>
                      <div className="flex items-center gap-5 pt-8 border-t border-gray-100">
                        <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center border border-gray-200 shadow-sm"><Award size={20} className="text-[#333333]" /></div>
                        <div>
                          <h4 className="text-[#333333] font-black text-lg md:text-xl tracking-tight">Rtr RANESH GURU S</h4>
                          <p className="text-gray-400 text-[10px] md:text-xs font-bold tracking-widest uppercase mt-1.5">President, Rotaract Club of CUG</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-20 w-full max-w-7xl mx-auto px-6 pb-20">
                <div className="text-center mb-20 flex flex-col items-center">
                  <div className="inline-flex items-center justify-center gap-3 text-[#D11221] font-bold tracking-[0.2em] uppercase text-xs mb-6"><span className="w-8 h-px bg-[#D11221]"></span>Our History<span className="w-8 h-px bg-[#D11221]"></span></div>
                  <h2 className="text-4xl md:text-5xl font-black text-[#333333] uppercase tracking-tight mb-6">LEGACY OF EMBLEMS</h2>
                  <p className="text-gray-500 font-medium text-lg max-w-2xl">A visual journey through the themes and insignias that have defined our impactful years of service since 2008.</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 relative">
                  {Array.from({ length: 18 }).map((_, i) => {
                    const startYear = 2008 + i;
                    const nextYearStr = String(startYear + 1).slice(-2);
                    return (
                      <div key={i} className="bg-white rounded-[1.5rem] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col items-center text-center transition-all hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] duration-500 group cursor-pointer relative z-10 border-b-4 border-b-transparent hover:border-b-[#D11221]">
                        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white border border-gray-100 flex items-center justify-center mb-5 overflow-hidden group-hover:border-[#D11221]/50 transition-all duration-500 shadow-[0_5px_15px_rgba(0,0,0,0.05)] group-hover:shadow-[0_10px_25px_rgba(209,18,33,0.15)]">
                          <img src={`https://placehold.co/200x200/ffffff/333333?text=R+${startYear}`} alt={`Theme Emblem ${startYear}`} className="w-full h-full object-contain p-3 transform group-hover:scale-110 transition-transform duration-700" />
                        </div>
                        <h4 className="text-[#333333] font-black text-sm md:text-base tracking-widest group-hover:text-[#D11221] transition-colors">{startYear}-{nextYearStr}</h4>
                        <p className="text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-widest mt-2 bg-gray-50 px-3 py-1 rounded-full group-hover:bg-red-50 group-hover:text-[#D11221] transition-colors">Theme Logo</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        );
      case 'avenues':
        return (
          <div className="bg-white min-h-screen">
            <section className="pt-48 pb-24 relative flex flex-col items-center justify-center overflow-hidden border-b border-gray-100">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-br from-[#D11221]/5 to-transparent rounded-full blur-3xl opacity-70"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-tl from-[#333333]/5 to-transparent rounded-full blur-3xl opacity-70"></div>
              </div>
              <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
                <div className="inline-flex items-center justify-center gap-3 text-[#D11221] font-bold tracking-[0.25em] uppercase text-xs mb-8"><span className="w-12 h-[2px] bg-[#D11221]"></span>Our Work<span className="w-12 h-[2px] bg-[#D11221]"></span></div>
                <h1 className="text-5xl sm:text-6xl md:text-[6rem] lg:text-[7.5rem] font-bold text-[#333333] tracking-tighter uppercase mb-6 leading-[0.9]" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>INITIATIVES <span className="text-[#D11221]">&</span><br/>QUESTS</h1>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-500 font-medium tracking-wide max-w-2xl mt-4">Explore the legacy, the present, and the future of our impactful journey.</p>
              </div>
            </section>
            <section className="py-32 relative z-10 bg-[#FAFAFA]">
              <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-20 flex flex-col items-center">
                  <h2 className="text-4xl md:text-5xl font-black text-[#333333] uppercase tracking-tight mb-4 relative inline-block">ONGOING PROJECTS<div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-[#D11221]"></div></h2>
                  <p className="text-gray-500 font-medium text-lg max-w-2xl mt-8">Discover the active initiatives where our members are dedicating their time and effort right now.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                  {[
                    { name: "The Eagle's Page", duration: "365 Days", image: TheEaglesPageImg },
                    { name: "Thinnakavi Bharathiyin Paathaiyil", duration: "365 Days", image: ThinnakaviBharathImg },
                    { name: "The Eagle's Pulse", duration: "365 Days", image: TheEaglesPulseImg }
                  ].map((project, idx) => (
                    <div key={idx} className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_20px_60px_rgba(209,18,33,0.08)] hover:border-[#D11221]/20 transition-all duration-500 flex flex-col hover:-translate-y-2 cursor-pointer">
                      <div className="relative h-72 overflow-hidden p-3 pb-0">
                        <div className="relative w-full h-full rounded-t-[1.5rem] rounded-b-md overflow-hidden">
                          <div className="absolute inset-0 bg-[#333333]/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                          <img src={project.image} alt={project.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out" />
                          <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-black text-[#D11221] uppercase tracking-[0.2em] shadow-sm z-20 flex items-center gap-2 transform group-hover:translate-y-1 transition-transform duration-500"><Calendar size={12} /> {project.duration}</div>
                        </div>
                      </div>
                      <div className="p-8 pt-6 flex flex-col flex-grow bg-white">
                        <h3 className="text-2xl font-black text-[#333333] mb-4 group-hover:text-[#D11221] transition-colors line-clamp-2">{project.name}</h3>
                        <div className="mt-auto flex items-center gap-3 text-[#333333] text-xs font-bold tracking-widest uppercase group-hover:text-[#D11221] transition-colors">Explore Details <span className="w-8 h-[2px] bg-[#333333] group-hover:bg-[#D11221] transition-colors group-hover:w-12"></span></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            <section className="py-32 relative z-10 bg-white">
              <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-20 flex flex-col items-center">
                  <h2 className="text-4xl md:text-5xl font-black text-[#333333] uppercase tracking-tight mb-4 relative inline-block">UPCOMING PROJECTS<div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-[#D11221]"></div></h2>
                  <p className="text-gray-500 font-medium text-lg max-w-2xl mt-8">Get a sneak peek at what we are planning for the near future and how you can get involved.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                  {[
                    { name: "Tech Literacy Camp", duration: "Starts in 2 Months", image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
                    { name: "Global Exchange Meet", duration: "Starts in 3 Months", image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
                    { name: "Lake Restoration", duration: "Planning Phase", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
                  ].map((project, idx) => (
                    <div key={idx} className="group relative bg-[#FAFAFA] rounded-[2.5rem] overflow-hidden shadow-[0_5px_20px_rgba(0,0,0,0.02)] border border-gray-100 hover:shadow-[0_20px_60px_rgba(209,18,33,0.08)] hover:border-[#D11221]/20 transition-all duration-500 flex flex-col hover:-translate-y-2 cursor-pointer">
                      <div className="relative h-72 overflow-hidden p-3 pb-0">
                        <div className="relative w-full h-full rounded-t-[1.5rem] rounded-b-md overflow-hidden">
                          <div className="absolute inset-0 bg-white/20 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay"></div>
                          <img src={project.image} alt={project.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out filter grayscale-[30%] group-hover:grayscale-0" />
                          <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-black text-[#D11221] uppercase tracking-[0.2em] shadow-sm z-20 flex items-center gap-2 transform group-hover:translate-y-1 transition-transform duration-500"><Clock size={12} /> {project.duration}</div>
                        </div>
                      </div>
                      <div className="p-8 pt-6 flex flex-col flex-grow">
                        <h3 className="text-2xl font-black text-[#333333] mb-4 group-hover:text-[#D11221] transition-colors line-clamp-2">{project.name}</h3>
                        <div className="mt-auto flex items-center gap-3 text-[#333333] text-xs font-bold tracking-widest uppercase group-hover:text-[#D11221] transition-colors">View Details <span className="w-8 h-[2px] bg-[#333333] group-hover:bg-[#D11221] transition-colors group-hover:w-12"></span></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            <section className="py-32 relative z-10 bg-[#FAFAFA]">
              <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-20 flex flex-col items-center">
                  <h2 className="text-4xl md:text-5xl font-black text-[#333333] uppercase tracking-tight mb-4 relative inline-block">COMPLETED PROJECTS<div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-[#D11221]"></div></h2>
                  <p className="text-gray-500 font-medium text-lg max-w-2xl mt-8">Browse through our successful past initiatives and the lasting impact we've created.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                  {[
                    { name: "Skylords - Partners in Trade", duration: "Completed", image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
                    { name: "Covai Vizha - The Eagle Takes Charge", duration: "Completed", image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
                    { name: "Equestrian Champions League", duration: "Completed", image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
                  ].map((project, idx) => (
                    <div key={idx} className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_20px_60px_rgba(209,18,33,0.08)] hover:border-[#D11221]/20 transition-all duration-500 flex flex-col hover:-translate-y-2 cursor-pointer">
                      <div className="relative h-72 overflow-hidden p-3 pb-0">
                        <div className="relative w-full h-full rounded-t-[1.5rem] rounded-b-md overflow-hidden">
                          <div className="absolute inset-0 bg-[#333333]/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                          <img src={project.image} alt={project.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out" />
                          <div className="absolute top-4 right-4 bg-[#333333] px-4 py-2 rounded-full text-[10px] font-black text-white uppercase tracking-[0.2em] shadow-sm z-20 flex items-center gap-2 transform group-hover:translate-y-1 transition-transform duration-500"><Award size={12} /> {project.duration}</div>
                        </div>
                      </div>
                      <div className="p-8 pt-6 flex flex-col flex-grow bg-white">
                        <h3 className="text-2xl font-black text-[#333333] mb-4 group-hover:text-[#D11221] transition-colors line-clamp-2">{project.name}</h3>
                        <div className="mt-auto flex items-center gap-3 text-[#333333] text-xs font-bold tracking-widest uppercase group-hover:text-[#D11221] transition-colors">Read Case Study <span className="w-8 h-[2px] bg-[#333333] group-hover:bg-[#D11221] transition-colors group-hover:w-12"></span></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            <section className="py-32 relative z-10 bg-[#333333]">
              <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-br from-[#D11221]/10 to-transparent rounded-full blur-3xl opacity-50 mix-blend-screen"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-gradient-to-tr from-[#D11221]/5 to-transparent rounded-full blur-3xl opacity-40 mix-blend-screen"></div>
              </div>
              <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="text-center mb-20 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/10 backdrop-blur-sm"><Crown size={32} className="text-[#D11221]" strokeWidth={2} /></div>
                  <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4 relative inline-block">FLAGSHIP PROJECTS<div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-[#D11221]"></div></h2>
                  <p className="text-gray-400 font-medium text-lg max-w-2xl mt-8">Our grand, large-scale annual events that define our club's identity and global footprint.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                  {[
                    { name: "Say Boo", duration: "December", image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
                    { name: "Zero", duration: "12 Months", image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
                    { name: "EggSperts", duration: "12 Months", image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
                  ].map((project, idx) => (
                    <div key={idx} className="group relative bg-[#222222] rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 hover:border-[#D11221]/50 transition-all duration-500 flex flex-col hover:-translate-y-2 cursor-pointer">
                      <div className="relative h-80 overflow-hidden p-3 pb-0">
                        <div className="relative w-full h-full rounded-t-[1.5rem] rounded-b-md overflow-hidden">
                          <div className="absolute inset-0 bg-[#D11221]/20 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-multiply"></div>
                          <img src={project.image} alt={project.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out" />
                          <div className="absolute top-4 right-4 bg-[#D11221] px-4 py-2 rounded-full text-[10px] font-black text-white uppercase tracking-[0.2em] shadow-lg z-20 flex items-center gap-2 transform group-hover:translate-y-1 transition-transform duration-500"><Crown size={12} /> {project.duration}</div>
                        </div>
                      </div>
                      <div className="p-8 pt-6 flex flex-col flex-grow">
                        <h3 className="text-2xl font-black text-white mb-4 group-hover:text-[#D11221] transition-colors">{project.name}</h3>
                        <div className="mt-auto flex items-center gap-3 text-white text-xs font-bold tracking-widest uppercase group-hover:text-[#D11221] transition-colors">View Flagship <span className="w-8 h-[2px] bg-white group-hover:bg-[#D11221] transition-colors group-hover:w-12"></span></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        );
      case 'projects':
        return (
          <div className="bg-white min-h-screen">
            {/* Premium Gallery Header */}
            <section className="pt-48 pb-24 relative flex flex-col items-center justify-center overflow-hidden border-b border-gray-100">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#D11221]/5 to-transparent rounded-full blur-3xl opacity-60"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#333333]/5 to-transparent rounded-full blur-3xl opacity-60"></div>
              </div>
              
              <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
                <div className="inline-flex items-center justify-center gap-3 text-[#D11221] font-bold tracking-[0.25em] uppercase text-xs mb-8">
                  <span className="w-12 h-[2px] bg-[#D11221]"></span>
                  Visual Impact
                  <span className="w-12 h-[2px] bg-[#D11221]"></span>
                </div>
                <h1 
                  className="text-5xl sm:text-6xl md:text-[6.5rem] lg:text-[8rem] font-black text-[#333333] tracking-tighter uppercase mb-6 leading-[0.9]"
                  style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                >
                  THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D11221] to-[#b0003d]">GALLERY</span>
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-400 font-medium tracking-wide max-w-2xl mt-4">
                  Capturing moments of leadership, service, and lifelong fellowship.
                </p>

                {/* Refined Category Pills */}
                <div className="mt-16 flex flex-wrap justify-center gap-3 md:gap-5">
                  {['All Moments', 'Community', 'Professional', 'Club Service', 'Global'].map((filter, idx) => (
                    <button 
                      key={idx} 
                      className={`px-8 py-3 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 border ${idx === 0 ? 'bg-[#333333] text-white border-[#333333] shadow-lg hover:-translate-y-1' : 'bg-white text-[#333333] border-gray-100 hover:border-[#D11221] hover:text-[#D11221]'}`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>
            </section>

            {/* Gallery Grid Section */}
            <section className="py-24 relative z-10 bg-[#FAFAFA]">
              <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                  {[
                    { title: "Village Outreach", category: "Community", image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Bringing smiles to rural communities through essential supplies." },
                    { title: "Leadership Forum", category: "Professional", image: "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Empowering the next generation of decision-makers." },
                    { title: "Tree Plantation", category: "Global", image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Our commitment to a sustainable and greener future." },
                    { title: "Medical Mission", category: "Community", image: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Providing vital healthcare services to those in need." },
                    { title: "Member Social", category: "Club Service", image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Strengthening the bonds of fellowship within our club." },
                    { title: "Career Symposium", category: "Professional", image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "Bridging the gap between skills and industry requirements." }
                  ].map((item, idx) => (
                    <div key={idx} className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.02)] border border-gray-100 hover:shadow-[0_30px_60px_rgba(0,0,0,0.06)] hover:border-[#D11221]/20 transition-all duration-700 hover:-translate-y-3 cursor-pointer">
                      <div className="relative h-[450px] overflow-hidden p-3">
                        <div className="relative w-full h-full rounded-[1.8rem] overflow-hidden">
                          <div className="absolute inset-0 bg-[#333333]/30 group-hover:bg-[#333333]/10 transition-colors duration-500 z-10"></div>
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1.5s] ease-out" 
                          />
                          
                          {/* Inner Hover Frame Overlay */}
                          <div className="absolute inset-4 border border-white/20 rounded-[1.2rem] z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          
                          {/* Floating Details Overlay */}
                          <div className="absolute inset-x-8 bottom-8 z-30 transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                             <div className="bg-white/90 backdrop-blur-xl p-6 rounded-[1.5rem] shadow-2xl border border-white/50">
                               <div className="flex justify-between items-center mb-2">
                                 <span className="px-3 py-1 bg-red-50 text-[9px] font-black text-[#D11221] uppercase tracking-[0.2em] rounded-full border border-red-100">
                                   {item.category}
                                 </span>
                                 <div className="w-8 h-8 rounded-full bg-[#333333] text-white flex items-center justify-center">
                                   <Eye size={14} />
                                 </div>
                               </div>
                               <h3 className="text-xl font-black text-[#333333] tracking-tight mb-2">{item.title}</h3>
                               <p className="text-gray-400 text-xs font-medium leading-relaxed">{item.desc}</p>
                             </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Pagination / Load More CTA */}
                <div className="mt-20 flex flex-col items-center">
                  <div className="h-20 w-px bg-gradient-to-b from-gray-200 to-transparent mb-10"></div>
                  <button className="px-12 py-5 bg-white border border-[#333333] text-[#333333] rounded-full font-black text-xs uppercase tracking-[0.3em] hover:bg-[#333333] hover:text-white transition-all duration-500 shadow-sm hover:shadow-xl group">
                    Load More Moments
                  </button>
                </div>
              </div>
            </section>
          </div>
        );
      case 'board-members':
        return (
          <div className="bg-[#FAFAFA] min-h-screen flex flex-col relative">
            {/* Embedded styles for advanced animations */}
            <style>{`
              @keyframes modalReveal {
                0% { opacity: 0; transform: scale(0.95) translateY(20px); filter: blur(10px); }
                100% { opacity: 1; transform: scale(1) translateY(0); filter: blur(0); }
              }
              .animate-modal {
                animation: modalReveal 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
              }
              .glass-panel {
                background: rgba(255, 255, 255, 0.95);
                backdrop-filter: blur(20px);
                -webkit-backdrop-filter: blur(20px);
              }
              @keyframes shine {
                100% { left: 125%; }
              }
              .shine-effect::after {
                content: '';
                position: absolute;
                top: 0; left: -100%;
                width: 50%; height: 100%;
                background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%);
                transform: skewX(-20deg);
                z-index: 50;
                transition: all 0.5s ease;
                pointer-events: none;
              }
              .group:hover .shine-effect::after {
                animation: shine 1s;
              }
            `}</style>

            {/* Premium Header Section */}
            <section className="pt-48 pb-20 bg-[#333333] relative flex flex-col items-center justify-center border-b border-[#D11221]/20 overflow-hidden">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-bl from-[#D11221]/20 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-[#D11221]/10 to-transparent rounded-full blur-3xl"></div>
              </div>
              <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
                <div className="inline-flex items-center justify-center gap-3 text-[#D11221] font-bold tracking-[0.3em] uppercase text-xs mb-6">
                  <span className="w-12 h-[2px] bg-[#D11221]"></span>
                  Leadership
                  <span className="w-12 h-[2px] bg-[#D11221]"></span>
                </div>
                <h1 
                  className="text-5xl sm:text-6xl md:text-[6rem] lg:text-[7.5rem] font-black text-white tracking-wide uppercase mb-0 leading-[1.1] drop-shadow-lg"
                  style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                >
                  BOARD MEMBERS
                </h1>
                <h2 
                  className="text-4xl sm:text-5xl md:text-[4rem] font-black text-white/50 tracking-widest uppercase mb-6 leading-[1.1]"
                >
                  2025-26
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-[#D11221] font-medium tracking-wide max-w-2xl">
                  The visionary leaders guiding our club towards a legacy of impact and excellence.
                </p>
              </div>
            </section>

            {/* Core Board Section */}
            <section className="py-32 relative z-10 bg-white">
              <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                <div className="text-center mb-20 flex flex-col items-center">
                   <h3 className="text-3xl md:text-4xl font-black text-[#333333] uppercase tracking-widest mb-6">The Core Team</h3>
                   <div className="w-24 h-1.5 bg-[#D11221] mx-auto rounded-full"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  {[
                    { name: 'Rtr RANESH GURU S', role: 'President', nickname: 'Eagle', image: RaneshPhoto },
                    { name: 'Rtr Bharath Kumar', role: 'Secretary', nickname: 'Black Panther', image: BharathPhoto },
                    { name: 'Rtr Durgadharshini', role: 'Treasurer', nickname: 'Vault', image: DurgadharshiniPhoto }
                  ].map((member, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => setSelectedMember(member)}
                      className="group relative bg-[#1a1a1a] rounded-[2.5rem] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_30px_60px_rgba(209,18,33,0.2)] transition-all duration-500 hover:-translate-y-4 cursor-pointer shine-effect"
                    >
                      <div className="relative h-[480px] w-full overflow-hidden">
                         <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-[1.5s] ease-out opacity-80 group-hover:opacity-100 filter grayscale-[20%] group-hover:grayscale-0" />
                         <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/40 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500 z-10"></div>
                         
                         {/* Floating Position */}
                         <div className="absolute top-6 right-6 z-20 bg-[#D11221] text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transform translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                             {member.role}
                         </div>

                         {/* Text Content */}
                         <div className="absolute bottom-0 left-0 w-full p-8 z-20 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                             <h3 className="text-3xl font-black text-white mb-1 tracking-tight group-hover:text-[#D11221] transition-colors">{member.name}</h3>
                             <p className="text-gray-300 text-lg font-medium italic mt-2 font-serif opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">"{member.nickname}"</p>
                         </div>

                         {/* Expand Icon */}
                         <div className="absolute bottom-8 right-8 z-20 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform rotate-[-45deg] group-hover:rotate-0 transition-all duration-500 shadow-xl border border-white/20">
                            <ArrowRight size={20} />
                         </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Directors Section */}
            <section className="py-32 bg-[#FAFAFA] relative z-10 border-t border-gray-100">
               <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                 <div className="text-center mb-20 flex flex-col items-center">
                   <h3 className="text-3xl md:text-4xl font-black text-[#333333] uppercase tracking-widest mb-6">Board of Directors</h3>
                   <div className="w-24 h-1.5 bg-[#D11221] mx-auto rounded-full"></div>
                 </div>
                 
                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                   {[
                     { name: 'Rtr Fayaz Khan', role: 'Vice President', nickname: 'Anchor', image: FayazkhanPhoto },
                     { name: 'Rtr Meyyappan Kannan', role: 'Immediate Past President', nickname: 'Scribe', image: MeyyappanPhoto },
                     { name: 'Rtr Gowtham Raj', role: 'President Special - Aide', nickname: 'Shield', image: GowthamRajPhoto },
                     { name: 'Rtr Ranjeeth Kumar', role: 'Club Service', nickname: 'Nexus', image: RanjeethKumarPhoto },
                     { name: 'Rtr Sahin', role: 'Community Service', nickname: 'Heart', image: SahinPhoto },
                     { name: 'Rtr Gokulakrishnan', role: 'Professional Service', nickname: 'Pro', image: GokulakrishnanPhoto },
                     { name: 'Rtr Kavinaya', role: 'International Service', nickname: 'Globe', image: KavinayaPhoto },
                     { name: 'Rtr Hameshwar', role: 'DPP', nickname: 'Voice', image: HameshwarPhoto },
                     { name: 'Rtr Yeshwanth', role: 'All Avenue - Director', nickname: 'Guide', image: YeshwanthPhoto },
                     { name: 'Rtr Gukan', role: 'Chief Editor', nickname: 'Pen', image: GukanPhoto },
                     { name: 'Rtr Amurudh', role: 'Associate Editor', nickname: 'Tech', image: AmurudhPhoto },
                     { name: 'Rtr Sanjay Krishnan', role: 'TRF', nickname: 'Bond', image: SanjayKrishnanPhoto },
                     { name: 'Rtr Harsha Vardhini', role: 'Mental Health Chair', nickname: 'Vault', image: HarshavardhiniPhoto },
                     { name: 'Rtr Divagar', role: 'Membership Chair', nickname: 'Spark', image: DivagarPhoto },
                     { name: 'Rtr PP Vijayan', role: 'Rotaract Learning Faciliator', nickname: 'Mint', image: VijayanPhoto },
                     { name: 'Rtr Kizar Ansari', role: 'Youth Foundation Chair', nickname: 'Bridge', image: KizarAnsariPhoto },
                     { name: 'Rtr Haribabu', role: 'Health Wellness & Outreach', nickname: 'Dawn', image: HaribabuPhoto },
                     { name: 'Rtr Praveen', role: 'Public Image Chair', nickname: 'Cure', image: PraveenPhoto },
                     { name: 'Rtr Joesitha', role: 'Proud Member', nickname: 'Link', image: JoesithaPhoto },
                     { name: 'Rtr PP Muniraj', role: 'Proud Member', nickname: 'Rep', image: MunirajPhoto }
                   ].map((member, idx) => (
                     <div 
                       key={idx} 
                       onClick={() => setSelectedMember(member)}
                       className="group relative bg-white rounded-3xl overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_20px_50px_rgba(209,18,33,0.1)] transition-all duration-500 hover:-translate-y-3 cursor-pointer shine-effect"
                     >
                       <div className="relative h-[320px] w-full overflow-hidden bg-gray-50">
                          <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top filter grayscale-[30%] group-hover:grayscale-0 transform group-hover:scale-105 transition-all duration-700 ease-out" />
                          <div className="absolute inset-0 bg-[#D11221]/80 opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-10 mix-blend-multiply"></div>
                          
                          {/* Glassy Overlay for text on hover */}
                          <div className="absolute inset-x-4 bottom-4 bg-white/90 backdrop-blur-xl p-5 rounded-2xl z-20 transform translate-y-[120%] group-hover:translate-y-0 transition-transform duration-500 ease-out shadow-lg">
                              <span className="text-[#D11221] text-[9px] font-black uppercase tracking-[0.25em] mb-1 block">
                                  {member.role}
                              </span>
                              <h3 className="text-lg font-black text-[#333333] tracking-tight leading-tight mb-1">{member.name}</h3>
                              <p className="text-gray-500 text-xs font-medium italic font-serif">"{member.nickname}"</p>
                          </div>
                       </div>
                     </div>
                   ))}
                 </div>
               </div>
            </section>

            {/* Past District Rotaract Representatives Section - Hall of Fame Style */}
            <section className="py-32 bg-[#111111] relative z-10 border-t border-[#D11221]/30 overflow-hidden">
               <div className="absolute inset-0 pointer-events-none">
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[#D11221]/15 to-transparent rounded-full blur-[100px] mix-blend-screen"></div>
               </div>
               
               <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
                 <div className="text-center mb-20 flex flex-col items-center">
                   <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/10 backdrop-blur-sm">
                     <Award size={32} className="text-[#D11221]" strokeWidth={1.5} />
                   </div>
                   <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-widest mb-6">Past District Rotaract Representatives</h3>
                   <div className="w-24 h-1.5 bg-[#D11221] mx-auto rounded-full mb-6"></div>
                   <p className="text-gray-400 font-medium text-lg max-w-2xl">Honoring the legacy of those who guided our district to greatness.</p>
                 </div>
                 
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                   {[
                     { name: 'Rtr Ajai Shankar', role: 'PDRR 2019-20', nickname: 'Rise Above the Rest', image: AjaiShankarPhoto },
                     { name: 'Rtr Kishore Babu', role: 'PDRR 2022-23', nickname: 'Celebrate', image: KishoreBabuPhoto },
                     { name: 'Rtr Sathish Balakrishnan', role: 'PDRR 2021-22', nickname: 'Titan', image: SathishBalakrishnanPhoto }
                   ].map((member, idx) => (
                     <div 
                       key={idx} 
                       onClick={() => setSelectedMember(member)}
                       className="group relative rounded-[2rem] p-2 shadow-[0_20px_50px_rgba(0,0,0,0.8)] bg-gradient-to-b from-[#333] to-[#111] hover:from-[#D11221] hover:to-[#111] transition-all duration-700 hover:-translate-y-4 cursor-pointer flex flex-col shine-effect before:absolute before:inset-0 before:bg-[#D11221]/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 before:z-0"
                     >
                       <div className="relative h-[450px] w-full overflow-hidden rounded-[1.5rem] bg-[#111] z-10">
                          <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/40 to-transparent z-10 opacity-90 group-hover:opacity-40 transition-opacity duration-500"></div>
                          
                          <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-1000 ease-out filter grayscale group-hover:grayscale-0 mix-blend-luminosity group-hover:mix-blend-normal" />
                          
                          {/* Animated Text Block */}
                          <div className="absolute bottom-0 left-0 w-full p-8 z-20 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 flex flex-col items-center text-center">
                             <div className="w-12 h-1 bg-[#D11221] mb-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100"></div>
                             <span className="inline-block text-[#D11221] text-[10px] font-black uppercase tracking-[0.3em] mb-2 drop-shadow-md">
                               {member.role}
                             </span>
                             <h3 className="text-3xl font-black text-white mb-2 tracking-tight group-hover:text-[#D11221] transition-colors drop-shadow-lg">{member.name}</h3>
                             <p className="text-gray-300 text-lg font-medium italic mt-1 font-serif opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">"{member.nickname}"</p>
                          </div>
                       </div>
                     </div>
                   ))}
                 </div>
               </div>
            </section>

            {/* Premium Creative Popup Modal for Board Member Details */}
            {selectedMember && (
              <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-12 overflow-y-auto" style={{ perspective: '2000px' }}>
                {/* Animated Dark Blur Backdrop */}
                <div 
                  className="fixed inset-0 bg-[#111111]/80 backdrop-blur-xl transition-opacity duration-700 ease-in-out"
                  onClick={() => setSelectedMember(null)}
                ></div>
                
                {/* Premium Modal Container */}
                <div 
                  className="relative w-full max-w-5xl shadow-[0_40px_100px_rgba(0,0,0,0.5)] flex flex-col md:flex-row animate-modal border border-white/10 m-auto rounded-[2.5rem] bg-white overflow-hidden"
                >
                   {/* Close Button - Floating & Premium */}
                   <button 
                     className="absolute top-5 right-5 md:top-8 md:right-8 w-12 h-12 bg-gray-100/50 hover:bg-[#D11221] backdrop-blur-md text-[#333333] hover:text-white rounded-full flex items-center justify-center transition-all duration-300 z-50 shadow-lg hover:shadow-[0_10px_20px_rgba(209,18,33,0.4)] hover:-translate-y-1 hover:rotate-90 group"
                     onClick={() => setSelectedMember(null)}
                   >
                     <X size={20} strokeWidth={2.5} />
                   </button>

                   {/* Modal Left: High-End Image Frame */}
                   <div className="w-full md:w-[45%] h-[400px] md:h-auto relative flex-shrink-0 bg-[#1a1a1a]">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#D11221]/20 to-transparent mix-blend-multiply z-10"></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/20 to-transparent z-20 opacity-80"></div>
                      <img 
                        src={selectedMember.image} 
                        alt={selectedMember.name} 
                        className="w-full h-full object-cover object-top transform scale-105 transition-transform duration-[2s] ease-out" 
                      />
                      
                      {/* Premium Nickname Typography Overlay */}
                      <div className="absolute bottom-10 left-10 right-10 z-30">
                         <div className="w-10 h-1 bg-[#D11221] mb-4"></div>
                         <p className="text-white text-4xl lg:text-5xl font-black drop-shadow-2xl font-serif italic tracking-wide leading-none">
                           "{selectedMember.nickname}"
                         </p>
                      </div>
                   </div>

                   {/* Modal Right: Editorial Details Area */}
                   <div className="w-full md:w-[55%] glass-panel p-10 md:p-16 lg:p-20 flex flex-col justify-center relative overflow-hidden bg-gradient-to-br from-white to-gray-50">
                     {/* Decorative Background Elements */}
                     <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#D11221]/5 to-transparent rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
                     
                     {/* Huge Watermark */}
                     <div className="absolute top-4 right-8 text-[150px] font-black text-gray-900/[0.03] select-none pointer-events-none font-serif leading-none">
                       {selectedMember.nickname.substring(0,2).toUpperCase()}
                     </div>
                     
                     <div className="relative z-10">
                       <div className="mb-8 inline-flex items-center gap-3">
                         <span className="w-8 h-[2px] bg-[#D11221]"></span>
                         <span className="text-[#D11221] text-xs font-black uppercase tracking-[0.3em]">
                           {selectedMember.role}
                         </span>
                       </div>
                       
                       <h2 className="text-4xl lg:text-5xl font-black text-[#333333] tracking-tight mb-8 leading-[1.1]">
                         {selectedMember.name}
                       </h2>
                       
                       <p className="text-gray-600 leading-[1.8] font-medium mb-12 text-base lg:text-lg">
                         A dedicated and visionary leader, driving our club's mission forward with relentless commitment and excellence. As the <strong className="text-[#333333]">{selectedMember.role.replace('PDRR ', '')}</strong>, {selectedMember.name.split(' ')[1] || 'they'} continuously inspire the community to <span className="italic text-[#D11221]">Aim For Impact</span> and forge lasting positive change.
                       </p>
                       
                       {/* Premium Social Links */}
                       <div className="flex gap-5 mt-auto">
                          <a href="#" className="w-14 h-14 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#333333] hover:border-[#D11221] hover:bg-[#D11221] hover:text-white transition-all duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_30px_rgba(209,18,33,0.3)] hover:-translate-y-1 group">
                            <Instagram size={20} className="group-hover:scale-110 transition-transform duration-300" />
                          </a>
                          <a href="#" className="w-14 h-14 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#333333] hover:border-[#D11221] hover:bg-[#D11221] hover:text-white transition-all duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_30px_rgba(209,18,33,0.3)] hover:-translate-y-1 group">
                            <Linkedin size={20} className="group-hover:scale-110 transition-transform duration-300" />
                          </a>
                          <a href="#" className="w-14 h-14 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#333333] hover:border-[#D11221] hover:bg-[#D11221] hover:text-white transition-all duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_30px_rgba(209,18,33,0.3)] hover:-translate-y-1 group">
                            <Mail size={20} className="group-hover:scale-110 transition-transform duration-300" />
                          </a>
                       </div>
                     </div>
                   </div>
                </div>
              </div>
            )}
          </div>
        );
      case 'club-bulletins':
        const bulletins = [
          { month: 'JUNE', year: '2025', image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80', edition: 'Volume I' },
          { month: 'JULY', year: '2025', image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=80', edition: 'Volume II', file: JulyBulletinPdf },
          { month: 'AUGUST', year: '2025', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80', edition: 'Volume III', file: AugustBulletinPdf },
          { month: 'SEPTEMBER', year: '2025', image: 'https://images.unsplash.com/photo-1588534135544-db463e264ce5?auto=format&fit=crop&w=800&q=80', edition: 'Volume IV', file: SeptemberBulletinPdf },
          { month: 'OCTOBER', year: '2025', image: 'https://images.unsplash.com/photo-1506456182901-e9455325c93a?auto=format&fit=crop&w=800&q=80', edition: 'Volume V', file: OctoberBulletinPdf },
          { month: 'NOVEMBER', year: '2025', image: 'https://images.unsplash.com/photo-1456324504439-ed6717c71bfc?auto=format&fit=crop&w=800&q=80', edition: 'Volume VI', file: NovemberBulletinPdf },
          { month: 'DECEMBER', year: '2025', image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80', edition: 'Volume VII', file: DecemberBulletinPdf },
          { month: 'JANUARY', year: '2026', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80', edition: 'Volume VIII', file: JanuaryBulletinPdf },
          { month: 'FEBRUARY', year: '2026', image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=800&q=80', edition: 'Volume IX', file: FebuaryBulletinPdf },
          { month: 'MARCH', year: '2026', image: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?auto=format&fit=crop&w=800&q=80', edition: 'Volume X', file: MarchBulletinPdf },
          { month: 'APRIL', year: '2026', image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=80', edition: 'Volume XI' },
          { month: 'MAY', year: '2026', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80', edition: 'Volume XII' },
        ];

        return (
          <div className="bg-[#FAFAFA] min-h-screen flex flex-col relative overflow-hidden">
            {/* Decorative Background for the whole page */}
            <div className="absolute top-0 right-0 w-full h-[800px] bg-gradient-to-b from-gray-100 to-transparent pointer-events-none z-0"></div>

            {/* Editorial Header */}
            <section className="pt-48 pb-24 relative flex flex-col items-center justify-center overflow-hidden z-10">
              <div className="container mx-auto px-6 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mb-6 border border-red-100">
                  <BookOpen size={30} className="text-[#D11221]" />
                </div>
                <div className="inline-flex items-center justify-center gap-3 text-[#D11221] font-bold tracking-[0.3em] uppercase text-xs mb-6">
                  <span className="w-10 h-[2px] bg-[#D11221]"></span>
                  The Archive
                  <span className="w-10 h-[2px] bg-[#D11221]"></span>
                </div>
                <h1 className="text-6xl sm:text-7xl md:text-[7rem] lg:text-[9rem] font-black text-[#333333] tracking-tighter uppercase mb-4 leading-[0.85]" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                  CLUB <br className="hidden md:block"/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D11221] to-[#800015]">BULLETINS</span>
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-500 font-medium tracking-wide max-w-2xl mt-8">
                  Explore our monthly editorial archives chronicling our legacy of impact.
                </p>
              </div>
            </section>

            {/* The Premium Timeline Section */}
            <section className="py-24 relative z-10">
              <div className="container mx-auto px-6 md:px-12 max-w-6xl relative">
                
                {/* The Spine (Vertical Line) */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#D11221]/20 to-transparent -translate-x-1/2 z-0"></div>

                <div className="space-y-24 relative z-10">
                  {bulletins.map((b, idx) => {
                    const isEven = idx % 2 === 0;
                    return (
                      <div key={idx} className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 w-full ${isEven ? 'md:flex-row-reverse' : ''} group relative`}>
                        
                        {/* Mobile Timeline Line (Hidden on MD) */}
                        <div className="md:hidden absolute left-6 top-10 bottom-[-4rem] w-px bg-gradient-to-b from-[#D11221]/30 to-transparent z-0"></div>

                        {/* Content Box (The Magazine) */}
                        <div className={`w-full pl-12 md:pl-0 md:w-1/2 flex justify-center ${isEven ? 'md:justify-start' : 'md:justify-end'} z-10`}>
                          <div 
                             className="relative w-full max-w-[400px] bg-white rounded-[2.5rem] p-3 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-[0_40px_80px_rgba(209,18,33,0.15)] hover:border-[#D11221]/30 transition-all duration-700 hover:-translate-y-3 cursor-pointer flex flex-col group/card"
                             onClick={() => setSelectedBulletin(b)}
                          >
                            <div className="relative h-[480px] w-full rounded-[2rem] overflow-hidden bg-gray-100">
                              <div className="absolute inset-0 bg-[#333333]/20 group-hover/card:bg-transparent transition-colors duration-500 z-10"></div>
                              <img src={b.image} alt={b.month} className="w-full h-full object-cover transform group-hover/card:scale-110 transition-transform duration-[1.5s] ease-out filter grayscale-[10%] group-hover/card:grayscale-0" />
                              
                              {/* Floating Glass Tag */}
                              <div className="absolute top-6 right-6 z-20 bg-white/90 backdrop-blur-md px-5 py-2.5 rounded-full shadow-lg transform group-hover/card:-translate-y-1 transition-transform duration-500">
                                <span className="text-[#D11221] text-[10px] font-black uppercase tracking-[0.25em]">English</span>
                              </div>

                              {/* Hover Action Overlay */}
                              <div className="absolute inset-0 flex items-center justify-center z-30 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 bg-black/20 backdrop-blur-sm">
                                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-[#D11221] transform translate-y-8 group-hover/card:translate-y-0 transition-all duration-500 shadow-2xl">
                                  <BookOpen size={28} />
                                </div>
                              </div>
                            </div>
                            <div className="p-6 text-center bg-white relative z-20">
                              <h3 className="text-2xl font-black text-[#333333] tracking-tight group-hover/card:text-[#D11221] transition-colors">{b.month} EDITION</h3>
                              <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mt-2 flex items-center justify-center gap-2">
                                {b.edition} <span className="w-4 h-[1px] bg-gray-300"></span> {b.year}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Timeline Center Node (Desktop) / Left Node (Mobile) */}
                        <div className="absolute left-0 md:left-1/2 transform translate-x-1 md:-translate-x-1/2 flex w-10 h-10 md:w-12 md:h-12 bg-white border-4 border-[#FAFAFA] rounded-full shadow-[0_5px_15px_rgba(0,0,0,0.1)] items-center justify-center z-20 group-hover:border-[#D11221]/20 transition-colors duration-500 mt-10 md:mt-0">
                          <div className="w-3 h-3 md:w-4 md:h-4 bg-[#333333] rounded-full group-hover:bg-[#D11221] group-hover:scale-150 transition-all duration-500"></div>
                        </div>

                        {/* Date/Info Box (The Opposite Side - Hidden on Mobile) */}
                        <div className={`hidden md:flex w-full md:w-1/2 justify-center ${isEven ? 'md:justify-end text-right' : 'md:justify-start text-left'}`}>
                          <div className={`max-w-sm ${isEven ? 'pr-12' : 'pl-12'}`}>
                            <h2 className="text-[5rem] lg:text-[7rem] font-black text-gray-100 leading-none tracking-tighter group-hover:text-[#D11221]/10 transition-colors duration-500 font-serif select-none pointer-events-none">
                              {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                            </h2>
                            <div className="-mt-10">
                              <span className="text-[#D11221] font-bold tracking-[0.3em] uppercase text-xs">Rotary Year '25-'26</span>
                              <h3 className="text-4xl font-black text-[#333333] mt-2 tracking-tight group-hover:text-[#D11221] transition-colors">{b.month}</h3>
                              <p className="text-gray-500 font-medium mt-4 text-lg leading-relaxed">Delve into the highlights, achievements, and stories of {b.month.toLowerCase()} {b.year}.</p>
                            </div>
                          </div>
                        </div>

                      </div>
                    );
                  })}
                </div>
                
                {/* End Timeline marker */}
                <div className="hidden md:flex absolute left-[4.3rem] lg:left-[4.8rem] bottom-0 w-4 h-4 bg-gray-300 rounded-full z-10"></div>
              </div>
            </section>

            {/* Premium Bulletin Document Popup */}
            {selectedBulletin && (
              <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-12 overflow-y-auto" style={{ perspective: '2000px' }}>
                {/* Animated Dark Blur Backdrop */}
                <div 
                  className="fixed inset-0 bg-[#111111]/80 backdrop-blur-xl transition-opacity duration-700 ease-in-out"
                  onClick={() => setSelectedBulletin(null)}
                ></div>
                
                {/* Premium Modal Container */}
                <div 
                  className="relative w-full max-w-5xl shadow-[0_40px_100px_rgba(0,0,0,0.5)] flex flex-col md:flex-row animate-modal border border-white/10 m-auto rounded-[2.5rem] bg-white overflow-hidden"
                >
                   {/* Close Button */}
                   <button 
                     className="absolute top-5 right-5 md:top-8 md:right-8 w-12 h-12 bg-gray-100/50 hover:bg-[#D11221] backdrop-blur-md text-[#333333] hover:text-white rounded-full flex items-center justify-center transition-all duration-300 z-50 shadow-lg hover:shadow-[0_10px_20px_rgba(209,18,33,0.4)] hover:-translate-y-1 hover:rotate-90 group"
                     onClick={() => setSelectedBulletin(null)}
                   >
                     <X size={20} strokeWidth={2.5} />
                   </button>

                   {/* Modal Left: Cover Page Presentation */}
                   <div className="w-full md:w-[45%] h-[400px] md:h-auto relative flex-shrink-0 bg-gray-100 p-6 md:p-10 flex items-center justify-center">
                      <div className="absolute inset-0 bg-[#333333]/5 z-0"></div>
                      <img 
                        src={selectedBulletin.image} 
                        alt={`${selectedBulletin.month} Cover`} 
                        className="w-full h-full object-cover rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative z-10 transform scale-100 hover:scale-105 transition-transform duration-[2s] ease-out" 
                      />
                   </div>

                   {/* Modal Right: Document Details & Actions */}
                   <div className="w-full md:w-[55%] glass-panel p-10 md:p-16 lg:p-20 flex flex-col justify-center relative overflow-hidden bg-gradient-to-br from-white to-gray-50">
                     {/* Decorative Background Elements */}
                     <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#D11221]/5 to-transparent rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
                     
                     {/* Huge Watermark */}
                     <div className="absolute top-4 right-8 text-[120px] font-black text-gray-900/[0.03] select-none pointer-events-none font-serif leading-none">
                       {selectedBulletin.month.substring(0,3)}
                     </div>
                     
                     <div className="relative z-10">
                       <div className="mb-6 inline-flex items-center gap-3">
                         <span className="w-8 h-[2px] bg-[#D11221]"></span>
                         <span className="text-[#D11221] text-xs font-black uppercase tracking-[0.3em]">
                           {selectedBulletin.edition}
                         </span>
                       </div>
                       
                       <h2 className="text-4xl lg:text-5xl font-black text-[#333333] tracking-tight mb-4 leading-[1.1]">
                         {selectedBulletin.month} <span className="text-[#D11221]">{selectedBulletin.year}</span>
                       </h2>
                       
                       <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-8">Official Club Publication</p>

                       <div className="w-12 h-1 bg-[#D11221] mb-8 rounded-full"></div>
                       
                       <p className="text-gray-600 leading-[1.8] font-medium mb-12 text-base lg:text-lg">
                         Dive into the {selectedBulletin.month.toLowerCase()} edition of our club bulletin. Explore the latest community projects, leadership insights, member spotlights, and upcoming initiatives that drive our vision forward.
                       </p>
                       
                       {/* Premium Download & Read Buttons */}
                       <div className="flex flex-wrap gap-4 mt-auto">
                          {selectedBulletin.file ? (
                            <>
                              <a
                                href={selectedBulletin.file}
                                target="_blank"
                                rel="noopener noreferrer"
                                download
                                className="flex-1 min-w-[200px] flex items-center justify-center gap-3 px-8 py-4 bg-[#D11221] text-white rounded-xl font-bold uppercase tracking-widest hover:bg-[#A60E1A] transition-all duration-300 shadow-[0_10px_20px_rgba(209,18,33,0.2)] hover:shadow-[0_15px_30px_rgba(209,18,33,0.3)] hover:-translate-y-1 group"
                              >
                                <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
                                Download PDF
                              </a>
                              <a
                                href={selectedBulletin.file}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 min-w-[200px] flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#333333] border border-gray-200 rounded-xl font-bold uppercase tracking-widest hover:border-[#D11221] hover:text-[#D11221] transition-all duration-300 shadow-sm hover:shadow-[0_15px_30px_rgba(0,0,0,0.05)] hover:-translate-y-1 group"
                              >
                                <Eye size={18} />
                                Read Online
                              </a>
                            </>
                          ) : (
                            <>
                              <button disabled className="flex-1 min-w-[200px] flex items-center justify-center gap-3 px-8 py-4 bg-[#D11221] text-white rounded-xl font-bold uppercase tracking-widest opacity-40 cursor-not-allowed">
                                <Download size={18} />
                                Download PDF
                              </button>
                              <button disabled className="flex-1 min-w-[200px] flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#333333] border border-gray-200 rounded-xl font-bold uppercase tracking-widest opacity-40 cursor-not-allowed">
                                <Eye size={18} />
                                Read Online
                              </button>
                            </>
                          )}
                       </div>
                     </div>
                   </div>
                </div>
              </div>
            )}
          </div>
        );
      case 'club-documents':
        if (vaultUnlocked) {
          return (
            <div className="bg-[#FAFAFA] min-h-screen pt-48 pb-24 relative overflow-hidden flex flex-col">
              {/* Abstract Background */}
              <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-gradient-to-bl from-gray-200/50 to-transparent rounded-full blur-3xl opacity-60"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-gradient-to-tr from-[#D11221]/5 to-transparent rounded-full blur-3xl opacity-60"></div>
              </div>

              <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10 flex-grow">
                {/* Premium Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6 border-b border-gray-200 pb-10">
                  <div>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 border border-green-200 text-green-600 text-[10px] font-black uppercase tracking-[0.25em] mb-6 shadow-sm">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                      </span>
                      Secure Connection Active
                    </div>
                    <h1 className="text-5xl sm:text-6xl md:text-[5rem] font-black text-[#333333] tracking-tighter uppercase leading-[0.9]" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                      THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D11221] to-[#800015]">ARCHIVE</span>
                    </h1>
                  </div>
                  <button 
                    onClick={() => {
                      setVaultUnlocked(false);
                      setDocUsername('');
                      setDocPassword('');
                    }} 
                    className="px-8 py-4 bg-white text-[#333333] border border-gray-200 hover:border-[#D11221] hover:text-[#D11221] rounded-full font-bold text-xs uppercase tracking-widest shadow-[0_5px_15px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_30px_rgba(209,18,33,0.1)] transition-all duration-300 flex items-center gap-2 group"
                  >
                    <Lock size={14} className="group-hover:scale-110 transition-transform" /> Lock Vault
                  </button>
                </div>
                
                {/* Document Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                   {[
                     { title: 'Club Constitution', date: 'Updated: Jan 2025', size: '2.4 MB', type: 'PDF', color: 'from-blue-500 to-cyan-400' },
                     { title: 'Club Bylaws', date: 'Updated: Jan 2025', size: '1.1 MB', type: 'PDF', color: 'from-[#D11221] to-red-400' },
                     { title: 'Financial Audit 2024', date: 'Published: Dec 2024', size: '4.5 MB', type: 'XLSX', color: 'from-green-500 to-emerald-400' },
                     { title: 'Sponsorship Pitch Deck', date: 'Published: Feb 2025', size: '8.2 MB', type: 'PPTX', color: 'from-orange-500 to-yellow-400' },
                     { title: 'MoU - District 3201', date: 'Signed: Jul 2024', size: '1.5 MB', type: 'PDF', color: 'from-purple-500 to-indigo-400' },
                     { title: 'Meeting Minutes Archive', date: 'Last: Mar 2025', size: '5.0 MB', type: 'ZIP', color: 'from-gray-600 to-gray-400' },
                   ].map((doc, idx) => (
                     <div key={idx} className="group relative bg-white p-8 rounded-[2rem] shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:border-gray-200 hover:-translate-y-2 transition-all duration-500 flex flex-col overflow-hidden cursor-pointer">
                       {/* Top Accent Line */}
                       <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${doc.color} opacity-80 group-hover:opacity-100 transition-opacity`}></div>
                       
                       <div className="flex justify-between items-start mb-8 relative z-10">
                         <div className={`w-14 h-14 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                           <FileText size={24} className="text-[#333333]" strokeWidth={1.5} />
                         </div>
                         <span className="px-3 py-1 bg-gray-50 text-gray-500 text-[9px] font-black uppercase tracking-[0.2em] rounded-md border border-gray-100">
                           {doc.type}
                         </span>
                       </div>
                       
                       <h3 className="text-xl font-black text-[#333333] mb-3 leading-tight group-hover:text-[#D11221] transition-colors">{doc.title}</h3>
                       
                       <div className="flex items-center gap-3 text-[11px] font-bold text-gray-400 mb-8 tracking-wider uppercase">
                         <span>{doc.date}</span>
                         <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                         <span>{doc.size}</span>
                       </div>
                       
                       <button className="mt-auto w-full py-4 bg-gray-50 text-[#333333] group-hover:bg-[#333333] group-hover:text-white rounded-xl font-black text-[11px] uppercase tracking-[0.25em] transition-all duration-300 flex items-center justify-center gap-2">
                         <Download size={14} strokeWidth={2.5} className="group-hover:translate-y-0.5 transition-transform" /> Download File
                       </button>
                     </div>
                   ))}
                </div>
              </div>
            </div>
          );
        }

        return (
          <div className="bg-[#f4f7fb] w-full flex-grow flex items-center justify-center relative overflow-hidden font-sans py-32 md:py-40">
            {/* Sophisticated Light Background Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
              <div className="absolute top-1/4 left-1/4 w-[700px] h-[700px] bg-gradient-to-br from-red-100/40 to-transparent rounded-full blur-[100px] animate-[pulse_10s_ease-in-out_infinite]"></div>
              <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-tl from-blue-100/40 to-transparent rounded-full blur-[100px] animate-[pulse_12s_ease-in-out_infinite_reverse]"></div>
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMCwwLDAsMC4wMikiLz48L3N2Zz4=')] opacity-50 mix-blend-overlay"></div>
            </div>

            <div className="relative z-10 w-full max-w-[440px] px-6 mx-auto">
              <div className="bg-white/90 backdrop-blur-2xl rounded-[2.5rem] p-10 sm:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,1)] border border-white relative overflow-hidden group">
                
                {/* Premium Edge Highlight */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#D11221] to-transparent opacity-80"></div>
                
                {/* Ambient Corner Glow */}
                <div className="absolute -top-32 -right-32 w-64 h-64 bg-red-50 rounded-full blur-[60px] pointer-events-none transition-opacity duration-700 group-hover:opacity-100 opacity-60"></div>

                <div className="flex flex-col items-center mb-10 relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-[#D11221] mb-6 shadow-[0_10px_30px_rgba(209,18,33,0.15)] transition-transform duration-500 group-hover:scale-105">
                    <Lock size={26} strokeWidth={1.5} />
                  </div>
                  <h2 className="text-3xl font-black text-[#333333] tracking-[0.15em] mb-2 uppercase text-center leading-tight drop-shadow-sm">CLUB DOCUMENTS</h2>
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-[1px] bg-[#D11221]/30"></span>
                    <p className="text-gray-400 text-[10px] font-bold tracking-[0.3em] uppercase">Authorized Access</p>
                    <span className="w-6 h-[1px] bg-[#D11221]/30"></span>
                  </div>
                </div>

                <form className="space-y-6 relative z-10" onSubmit={handleVaultUnlock}>
                  <div className="space-y-2">
                    <label className="block text-[11px] font-black text-gray-500 uppercase tracking-[0.25em] ml-1">Identifier</label>
                    <div className="relative group/input">
                      <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-gray-400 group-focus-within/input:text-[#D11221] transition-colors">
                        <User size={18} strokeWidth={2} />
                      </div>
                      <input 
                        type="text" 
                        value={docUsername}
                        onChange={(e) => setDocUsername(e.target.value)}
                        className="w-full pl-14 pr-5 py-4 rounded-2xl bg-gray-50/50 border border-gray-200 focus:border-[#D11221] focus:bg-white focus:ring-4 focus:ring-[#D11221]/10 transition-all duration-300 text-[#333333] text-sm font-semibold outline-none placeholder-gray-400 shadow-inner" 
                        placeholder="Enter club ID" 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-[11px] font-black text-gray-500 uppercase tracking-[0.25em] ml-1">Passcode</label>
                    <div className="relative group/input">
                      <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-gray-400 group-focus-within/input:text-[#D11221] transition-colors">
                        <Lock size={18} strokeWidth={2} />
                      </div>
                      <input 
                        type={showPassword ? "text" : "password"} 
                        value={docPassword}
                        onChange={(e) => setDocPassword(e.target.value)}
                        className="w-full pl-14 pr-14 py-4 rounded-2xl bg-gray-50/50 border border-gray-200 focus:border-[#D11221] focus:bg-white focus:ring-4 focus:ring-[#D11221]/10 transition-all duration-300 text-[#333333] text-sm font-semibold outline-none placeholder-gray-400 shadow-inner tracking-widest" 
                        placeholder="••••••••" 
                      />
                      <button 
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-5 flex items-center text-gray-400 hover:text-[#D11221] transition-colors"
                      >
                        {showPassword ? <EyeOff size={18} strokeWidth={2} /> : <Eye size={18} strokeWidth={2} />}
                      </button>
                    </div>
                  </div>

                  {loginError && (
                    <div className="bg-red-50 border border-red-100 rounded-xl p-3 transform transition-all backdrop-blur-sm">
                       <p className="text-[#D11221] text-xs font-bold text-center flex items-center justify-center gap-2">
                         <span className="w-1.5 h-1.5 rounded-full bg-[#D11221] animate-ping"></span> Access Denied. Verify Credentials.
                       </p>
                    </div>
                  )}

                  <button type="submit" className="w-full mt-8 py-4 bg-gradient-to-r from-[#D11221] to-[#A60E1A] text-white rounded-2xl font-black text-xs uppercase tracking-[0.25em] hover:from-[#A60E1A] hover:to-[#800015] transition-all duration-500 shadow-[0_10px_30px_rgba(209,18,33,0.2)] hover:shadow-[0_15px_40px_rgba(209,18,33,0.3)] hover:-translate-y-1">
                    Initialize Access
                  </button>
                </form>
              </div>
            </div>
          </div>
        );
      case 'contact':
      case 'join':
        return (
          <div className="bg-[#FAFAFA] min-h-screen flex flex-col">
            {/* Premium Header */}
            <section className="pt-48 pb-24 relative flex flex-col items-center justify-center overflow-hidden bg-white border-b border-gray-100">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-gradient-to-bl from-[#D11221]/5 to-transparent rounded-full blur-3xl opacity-60"></div>
                <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-gradient-to-tr from-[#333333]/5 to-transparent rounded-full blur-3xl opacity-60"></div>
              </div>
              <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
                <div className="inline-flex items-center justify-center gap-3 text-[#D11221] font-bold tracking-[0.25em] uppercase text-xs mb-8">
                  <span className="w-12 h-[2px] bg-[#D11221]"></span>
                  {currentPage === 'contact' ? 'Get In Touch' : 'Become A Member'}
                  <span className="w-12 h-[2px] bg-[#D11221]"></span>
                </div>
                <h1 className="text-5xl sm:text-6xl md:text-[6rem] lg:text-[7rem] font-black text-[#333333] tracking-tighter uppercase mb-6 leading-[0.9]" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                  {currentPage === 'contact' ? 'CONTACT US' : 'JOIN US'}
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-500 font-medium tracking-wide max-w-2xl mt-4">
                  {currentPage === 'contact' 
                    ? "Have a question or want to collaborate? We'd love to hear from you." 
                    : "Step into a world of leadership, fellowship, and impactful service."}
                </p>
              </div>
            </section>

            {/* Split Contact Section */}
            <section className="py-24 relative z-10">
              <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                <div className="flex flex-col lg:flex-row bg-white rounded-[3rem] shadow-[0_20px_60px_rgba(0,0,0,0.05)] overflow-hidden border border-gray-100">
                  
                  {/* Left Side: Contact Info (Dark) */}
                  <div className="w-full lg:w-5/12 bg-[#333333] p-10 md:p-16 relative overflow-hidden flex flex-col justify-between">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#D11221]/30 to-transparent rounded-full blur-3xl -mr-20 -mt-20"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#D11221]/20 to-transparent rounded-full blur-3xl -ml-20 -mb-20"></div>
                    
                    <div className="relative z-10 mb-12">
                      <h3 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">Contact Information</h3>
                      <p className="text-gray-400 font-medium leading-relaxed">
                        Whether you are looking to join our ranks or partner for a community project, our doors are always open.
                      </p>
                    </div>

                    <div className="space-y-8 relative z-10 flex-grow">
                      <div className="flex items-start gap-5 group">
                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#D11221] shrink-0 border border-white/10 group-hover:bg-[#D11221] group-hover:text-white transition-colors duration-300">
                          <MapPin size={20} />
                        </div>
                        <div>
                          <h4 className="text-white font-bold tracking-wide mb-1">Our Location</h4>
                          <p className="text-gray-400 text-sm leading-relaxed">1179, Rangai Gowder St, near Devanga Kalyana Mandapam,<br/>Near Flower Market,Sukrawar Pettai,<br/> R.S. Puram, Coimbatore, Tamil Nadu 641001</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-5 group">
                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#D11221] shrink-0 border border-white/10 group-hover:bg-[#D11221] group-hover:text-white transition-colors duration-300">
                          <Phone size={20} />
                        </div>
                        <div>
                          <h4 className="text-white font-bold tracking-wide mb-1">Call Us</h4>
                          <p className="text-gray-400 text-sm">+91 73975 31613<br/>Mon-Sunday, 24/7</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-5 group">
                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#D11221] shrink-0 border border-white/10 group-hover:bg-[#D11221] group-hover:text-white transition-colors duration-300">
                          <Mail size={20} />
                        </div>
                        <div>
                          <h4 className="text-white font-bold tracking-wide mb-1">Email Us</h4>
                          <p className="text-gray-400 text-sm">rotaractclubofcovaiusergroup@gmail.com<br/>rtr.raneshguru@gmail.com</p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-12 border-t border-white/10 relative z-10">
                      <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-6">Follow Our Journey</h4>
                      <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#D11221] transition-all duration-300"><Instagram size={16} /></a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#D11221] transition-all duration-300"><Facebook size={16} /></a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#D11221] transition-all duration-300"><Linkedin size={16} /></a>
                      </div>
                    </div>
                  </div>

                  {/* Right Side: Form (Light) */}
                  <div className="w-full lg:w-7/12 p-10 md:p-16 lg:p-20 flex flex-col justify-center bg-white">
                    <h3 className="text-3xl font-black text-[#333333] mb-2 tracking-tight">Send a Message</h3>
                    <p className="text-gray-500 font-medium mb-10">Fill out the form below and we'll get back to you shortly.</p>
                    
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">First Name</label>
                          <input type="text" className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:border-[#D11221] focus:bg-white focus:outline-none focus:ring-4 focus:ring-red-50 transition-all text-[#333333] font-medium" placeholder="Rtr.Ranesh" />
                        </div>
                        <div className="space-y-2">
                          <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Last Name</label>
                          <input type="text" className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:border-[#D11221] focus:bg-white focus:outline-none focus:ring-4 focus:ring-red-50 transition-all text-[#333333] font-medium" placeholder="Guru S" />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                          <input type="email" className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:border-[#D11221] focus:bg-white focus:outline-none focus:ring-4 focus:ring-red-50 transition-all text-[#333333] font-medium" placeholder="rtr.raneshguru@gmail.com" />
                        </div>
                        <div className="space-y-2">
                          <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Phone Number</label>
                          <input type="tel" className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:border-[#D11221] focus:bg-white focus:outline-none focus:ring-4 focus:ring-red-50 transition-all text-[#333333] font-medium" placeholder="+91 73975 31613" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Your Message</label>
                        <textarea rows="4" className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:border-[#D11221] focus:bg-white focus:outline-none focus:ring-4 focus:ring-red-50 transition-all text-[#333333] font-medium resize-none" placeholder="Tell us how we can help you..."></textarea>
                      </div>

                      <button className="w-full py-5 bg-[#333333] text-white rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-[#D11221] transition-all duration-500 shadow-[0_10px_20px_rgba(51,51,51,0.2)] hover:shadow-[0_15px_30px_rgba(209,18,33,0.3)] hover:-translate-y-1 mt-4">
                        {currentPage === 'contact' ? 'Send Message' : 'Submit Application'}
                      </button>
                      <p className="text-xs text-gray-400 text-center mt-6 font-medium">Your information is secure and encrypted.</p>
                    </form>
                  </div>

                </div>
              </div>
            </section>
          </div>
        );
      default:
        return (
          <section className="pt-48 pb-32 bg-white min-h-screen flex items-center justify-center text-center">
            <div className="max-w-md">
              <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6"><Calendar size={32} className="text-[#D11221]" /></div>
              <h2 className="text-4xl font-black text-[#333333] mb-4 uppercase">{currentPage}</h2>
              <p className="text-gray-500 font-medium mb-8">This page is currently under construction. Check back soon for updates!</p>
              <button onClick={() => navigateTo('home')} className="px-8 py-3 bg-[#D11221] text-white rounded-xl font-bold text-sm hover:bg-[#A60E1A] transition-colors">Back to Home</button>
            </div>
          </section>
        );
    }
  };

  return (
    <div className="min-h-screen font-sans text-[#2D2D2D] bg-white selection:bg-[#D11221] selection:text-white overflow-x-hidden flex flex-col">
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-md ${isScrolled ? 'shadow-md border-b border-gray-100 py-0' : 'border-b border-transparent py-2'}`}>
        <div className="container mx-auto px-4 lg:px-8 h-20 md:h-24 flex justify-between items-center">
          <div className="flex items-center gap-3 md:gap-5 cursor-pointer h-full py-2" onClick={() => navigateTo('home')}>
            <div className="h-full flex items-center">
               <img src={AimLogo} alt="Club Logo" className="h-12 md:h-40 object-contain" />
            </div>
            <div className="h-10 md:h-12 w-[1px] bg-gray-300 hidden sm:block"></div>
            <div className="flex flex-col justify-center hidden sm:flex">
              <span className="text-[11px] md:text-[14px] font-medium tracking-[0.15em] text-[#333333] uppercase leading-tight mb-0.5">Rotaract Club Of</span>
              <span className="text-[12px] md:text-[16px] font-bold tracking-[0.1em] text-[#D11221] uppercase leading-tight">Covai User Group</span>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-1 xl:gap-4 h-full">
            <div className="flex items-center gap-1 xl:gap-2 mr-2">
              {navLinks.map((link) => (
                <button key={link.name} onClick={() => navigateTo(link.id)} className={`text-[13px] font-semibold tracking-wider uppercase px-4 py-2.5 rounded-md transition-all duration-300 ${currentPage === link.id ? 'bg-[#fce8e8] text-[#D11221]' : 'text-gray-500 hover:text-[#D11221]'}`}>
                  {link.name}
                </button>
              ))}
              <div className="relative group/more h-full flex items-center">
                <button className={`text-[13px] font-semibold tracking-wider uppercase px-4 py-2.5 rounded-md transition-all duration-300 flex items-center gap-1.5 ${['board-members', 'club-bulletins', 'club-documents', 'admin'].includes(currentPage) ? 'bg-[#fce8e8] text-[#D11221]' : 'text-gray-500 group-hover/more:text-[#D11221]'}`}>
                  MORE <ChevronDown size={14} className="transition-transform duration-300 group-hover/more:rotate-180" />
                </button>
                <div className="absolute top-[80%] right-0 pt-2 w-48 opacity-0 invisible group-hover/more:opacity-100 group-hover/more:visible transition-all duration-300 z-50">
                  <div className="bg-white shadow-[0_10px_30px_rgba(0,0,0,0.1)] rounded-lg border border-gray-100 overflow-hidden flex flex-col py-2 transform origin-top -translate-y-2 group-hover/more:translate-y-0 transition-all duration-300">
                    {moreLinks.map((link) => (
                      <button key={link.name} onClick={() => navigateTo(link.id)} className={`text-left px-5 py-2.5 text-sm font-semibold transition-colors flex items-center justify-between group/link ${currentPage === link.id ? 'text-[#D11221] bg-gray-50' : 'text-gray-500 hover:text-[#D11221] hover:bg-gray-50'}`}>
                        {link.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <button onClick={() => navigateTo('join')} className="bg-[#D11221] text-white px-7 py-3 rounded-md font-bold text-[14px] tracking-widest uppercase hover:bg-[#A60E1A] transition-all duration-300 shadow-md hover:shadow-lg">JOIN US</button>
          </div>
          <button className="lg:hidden p-2 rounded-md text-gray-500 hover:bg-gray-100 transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>{mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}</button>
        </div>
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 flex flex-col py-4 max-h-[80vh] overflow-y-auto">
            {navLinks.map((link) => (
              <button key={link.name} onClick={() => navigateTo(link.id)} className={`text-sm font-bold tracking-wider uppercase py-3 px-6 text-left border-b border-gray-50 ${currentPage === link.id ? 'text-[#D11221] bg-red-50/50' : 'text-[#333333] hover:text-[#D11221] hover:bg-gray-50'}`}>{link.name}</button>
            ))}
            <div className="w-full flex flex-col border-b border-gray-50">
              <button onClick={() => setMoreMenuOpen(!moreMenuOpen)} className="text-sm font-bold tracking-wider uppercase py-3 px-6 text-left text-[#333333] hover:text-[#D11221] hover:bg-gray-50 flex items-center justify-between">MORE <ChevronDown size={18} className={`transition-transform duration-300 ${moreMenuOpen ? 'rotate-180' : ''}`} /></button>
              {moreMenuOpen && (
                <div className="w-full flex flex-col bg-gray-50/80 py-2">
                  {moreLinks.map((link) => (
                    <button key={link.name} onClick={() => navigateTo(link.id)} className={`text-sm font-semibold py-2.5 px-10 text-left ${currentPage === link.id ? 'text-[#D11221]' : 'text-gray-500 hover:text-[#D11221]'}`}>{link.name}</button>
                  ))}
                </div>
              )}
            </div>
            <div className="px-6 pt-6 pb-2 w-full">
              <button onClick={() => navigateTo('join')} className="w-full bg-[#D11221] text-white px-6 py-3.5 rounded-md font-bold tracking-widest uppercase hover:bg-[#A60E1A] transition-all shadow-md">JOIN US</button>
            </div>
          </div>
        )}
      </nav>
      <main className="flex-grow flex flex-col">{renderPageContent()}</main>
      <footer className="bg-gray-50 text-[#2D2D2D] py-20 border-t border-gray-200">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            <div className="col-span-1 md:col-span-4">
              <div className="flex items-center gap-3 mb-8 cursor-pointer" onClick={() => navigateTo('home')}>
                <img src="src/assets/logo.png" alt="Club Logo" className="w-10 h-10 rounded-full object-cover shadow-md" />
                <span className="font-extrabold text-lg lg:text-xl tracking-tight text-[#333333]">Rotaract Club of <br className="hidden sm:block lg:hidden"/> <span className="text-[#D11221]">Covai User Group</span></span>
              </div>
              <p className="text-gray-500 mb-8 leading-relaxed font-medium pr-8">Empowering exceptional youth to engineer positive change in communities worldwide through refined service and fellowship.</p>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/rotaractclubofcovaiusergroup?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#333333] hover:border-[#D11221] hover:text-[#D11221] transition-all shadow-sm hover:shadow-md"><Instagram size={18} /></a>
                <a href="https://www.facebook.com/rcofcug/" className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#333333] hover:border-[#D11221] hover:text-[#D11221] transition-all shadow-sm hover:shadow-md"><Facebook size={18} /></a>
                <a href="https://www.linkedin.com/company/rotaract-club-of-covai-user-group/" className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#333333] hover:border-[#D11221] hover:text-[#D11221] transition-all shadow-sm hover:shadow-md"><Linkedin size={18} /></a>
              </div>
            </div>
            <div className="col-span-1 md:col-span-2 md:col-start-6">
              <h4 className="text-[#333333] font-black mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
              <ul className="space-y-4 font-medium text-gray-500">{navLinks.map((link) => (<li key={link.name}><button onClick={() => navigateTo(link.id)} className="hover:text-[#D11221] transition-colors">{link.name}</button></li>))}</ul>
            </div>
            <div className="col-span-1 md:col-span-2">
              <h4 className="text-[#333333] font-black mb-6 uppercase tracking-widest text-xs">Resources</h4>
              <ul className="space-y-4 font-medium text-gray-500">
                <li><a href="#" className="hover:text-[#D11221] transition-colors">Rotary International</a></li>
                <li><a href="#" className="hover:text-[#D11221] transition-colors">My Rotary</a></li>
                <li><a href="#" className="hover:text-[#D11221] transition-colors">Brand Center</a></li>
                <li><a href="#" className="hover:text-[#D11221] transition-colors">Club Constitution</a></li>
              </ul>
            </div>
            <div className="col-span-1 md:col-span-3">
              <h4 className="text-[#333333] font-black mb-6 uppercase tracking-widest text-xs">Contact</h4>
              <ul className="space-y-5 font-medium text-gray-500">
                <li className="flex items-start gap-4"><MapPin size={20} className="text-[#D11221] mt-0.5 shrink-0" strokeWidth={1.5} /><span className="leading-relaxed">1179, Rangai Gowder St, near Devanga Kalyana Mandapam,<br/> Near Flower Market, Sukrawar Pettai, R.S. Puram<br/> Coimbatore, Tamil Nadu 641001</span></li>
                <li className="flex items-center gap-4"><Phone size={20} className="text-[#D11221] shrink-0" strokeWidth={1.5} /><span>+91 73975 31613</span></li>
                <li className="flex items-center gap-4"><Mail size={20} className="text-[#D11221] shrink-0" strokeWidth={1.5} /><span>rotaractclubofcovaiusergroup@gmail.com</span></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
            <p>&copy; {new Date().getFullYear()} Rotaract Club of Covai User Group. All rights reserved.</p>
            <div className="flex gap-8"><a href="#" className="hover:text-[#D11221] transition-colors">Privacy</a><a href="#" className="hover:text-[#D11221] transition-colors">Terms</a></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RotaractWebsite;