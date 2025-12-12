import { motion } from "framer-motion";
import { Link } from "wouter";
import { Clock, Tag, ArrowRight, MapPin } from "lucide-react";
import { Diary } from "@/data/diaries";
import { scaleUp } from "@/lib/animations";

interface DiaryCardProps {
  diary: Diary;
}

export default function DiaryCard({ diary }: DiaryCardProps) {
  return (
    <motion.div
      variants={scaleUp}
      className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border flex flex-col h-full cursor-pointer"
    >
      <Link href={`/diaries/${diary.slug}`}>
        <div className="relative h-64 overflow-hidden">
          <img
            src={diary.image}
            alt={diary.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
          
          <div className="absolute top-4 left-4">
             <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-white/20">
               {diary.tags[0]}
             </span>
          </div>

          <div className="absolute bottom-4 left-4 right-4 text-white">
            <div className="flex items-center gap-2 text-xs opacity-90 mb-2">
               <Clock size={12} /> {diary.readTime}
               <span className="mx-1">•</span>
               <MapPin size={12} /> {diary.location}
            </div>
            <h3 className="text-xl font-serif font-bold leading-tight group-hover:text-accent transition-colors">
              {diary.title}
            </h3>
          </div>
        </div>
        
        <div className="p-5 flex flex-col flex-grow bg-white">
          <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-grow">
            {diary.excerpt}
          </p>
          
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
             <div className="flex items-center gap-2">
               <img src={diary.author.avatar} alt={diary.author.name} className="w-6 h-6 rounded-full" />
               <span className="text-xs font-medium text-muted-foreground">{diary.author.name}</span>
             </div>
             <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
               Read Story <ArrowRight size={14} />
             </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
