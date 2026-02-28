import { motion } from 'motion/react';
import { Instagram, MessageCircle, Send, ArrowUpLeft } from 'lucide-react';

export default function App() {
  const links = [
    {
      name: 'انستغرام',
      subtitle: 'تابع أحدث عروضنا',
      url: 'https://www.instagram.com/caesar_store_1?igsh=MWh4aTljaGt6Y25pYg==',
      icon: <Instagram className="w-5 h-5" />,
    },
    {
      name: 'واتساب',
      subtitle: 'تواصل معنا مباشرة',
      url: 'https://wa.me/9647732816016',
      icon: <MessageCircle className="w-5 h-5" />,
    },
    {
      name: 'تيليجرام',
      subtitle: 'انضم لقناتنا الرسمية',
      url: 'https://t.me/Caesar_Store_1',
      icon: <Send className="w-5 h-5" />,
    },
  ];

  return (
    <div className="min-h-screen bg-[#020604] text-zinc-100 flex flex-col items-center py-16 px-4 relative overflow-hidden font-sans selection:bg-emerald-500/30" dir="rtl">
      
      {/* --- Animated Ambient Background --- */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Animated Blob 1 */}
        <motion.div
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -100, 50, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] rounded-full bg-emerald-600/20 blur-[120px] mix-blend-screen"
        />
        
        {/* Animated Blob 2 */}
        <motion.div
          animate={{
            x: [0, -120, 80, 0],
            y: [0, 150, -60, 0],
            scale: [1, 1.5, 0.9, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[70vw] h-[70vw] max-w-[700px] max-h-[700px] rounded-full bg-green-700/20 blur-[120px] mix-blend-screen"
        />

        {/* Animated Blob 3 (Center) */}
        <motion.div
          animate={{
            x: [0, 80, -100, 0],
            y: [0, 80, -100, 0],
            scale: [0.8, 1.2, 1, 0.8],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute top-[30%] left-[30%] w-[50vw] h-[50vw] max-w-[500px] max-h-[500px] rounded-full bg-teal-800/20 blur-[100px] mix-blend-screen"
        />
        
        {/* Subtle Noise/Grid Texture (Premium feel) */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
      </div>

      <div className="z-10 w-full max-w-[420px] flex flex-col items-center">
        
        {/* --- Floating Avatar with Rotating Ring --- */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-8 group cursor-default"
        >
          {/* Rotating outer ring */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-2 rounded-full border border-emerald-500/20 border-t-emerald-400/60 border-r-emerald-400/10 opacity-50 group-hover:opacity-100 transition-opacity duration-700"
          />
          
          {/* Inner glow */}
          <div className="absolute inset-0 rounded-full bg-emerald-500/20 blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
          
          {/* Image container */}
          <div className="relative w-32 h-32 rounded-full p-[2px] bg-gradient-to-b from-emerald-400/40 to-white/5 shadow-2xl shadow-emerald-900/20">
            <div className="w-full h-full rounded-full overflow-hidden bg-[#020604]">
              <img
                src="https://ik.imagekit.io/bualmg8h2/IMG_0284.png"
                alt="Caesar Store"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </motion.div>

        {/* --- Header --- */}
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 mb-2 tracking-tight">
            سيزر ستور
          </h1>
          <div className="flex items-center justify-center gap-2">
            <div className="w-4 h-[1px] bg-emerald-500/50"></div>
            <p className="text-emerald-400 text-xs font-bold tracking-[0.3em] uppercase opacity-90">
              Caesar Store
            </p>
            <div className="w-4 h-[1px] bg-emerald-500/50"></div>
          </div>
        </motion.div>

        {/* --- Links Container --- */}
        <div className="w-full flex flex-col gap-4">
          {links.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block w-full p-[1px] rounded-2xl bg-gradient-to-b from-white/10 to-white/5 hover:from-emerald-500/50 hover:to-emerald-900/30 transition-all duration-500 shadow-lg shadow-black/50 hover:shadow-emerald-900/20"
              >
                {/* Inner Card */}
                <div className="relative flex items-center gap-4 p-4 rounded-2xl bg-[#050a08]/80 backdrop-blur-xl overflow-hidden">
                  
                  {/* Hover Spotlight Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/10 transition-all duration-500 ease-out" />
                  
                  {/* Icon Box */}
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-zinc-400 group-hover:text-emerald-400 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/30 transition-all duration-500 shadow-inner">
                    {link.icon}
                  </div>
                  
                  {/* Text Content */}
                  <div className="relative z-10 flex-1 flex flex-col justify-center">
                    <span className="text-lg font-bold text-zinc-100 group-hover:text-white transition-colors duration-300">
                      {link.name}
                    </span>
                    <span className="text-xs text-zinc-500 group-hover:text-emerald-400/80 transition-colors duration-300 mt-0.5">
                      {link.subtitle}
                    </span>
                  </div>

                  {/* Action Arrow */}
                  <div className="relative z-10 flex items-center justify-center w-8 h-8 text-zinc-600 group-hover:text-emerald-400 transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-500">
                    <ArrowUpLeft className="w-5 h-5" />
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* --- Footer --- */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 flex flex-col items-center gap-2"
        >
          <div className="w-10 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          <p className="text-zinc-600 text-[10px] font-medium tracking-widest uppercase">
            © {new Date().getFullYear()} Caesar Store
          </p>
        </motion.div>
      </div>
    </div>
  );
}
