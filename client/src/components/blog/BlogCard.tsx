import { motion } from "framer-motion";
import { Link } from "wouter";
import { Calendar, User, ArrowRight, Tag } from "lucide-react";
import { BlogPost } from "@/data/blogs";
import { scaleUp } from "@/lib/animations";
import { Badge } from "@/components/ui/badge";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <motion.div
      variants={scaleUp}
      className="group flex flex-col h-full bg-white rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300"
    >
      <Link href={`/blog/${post.slug}`}>
        <div className="relative h-52 overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute top-3 left-3">
             <Badge variant="secondary" className="bg-white/90 text-primary font-bold shadow-sm hover:bg-white">
               {post.category}
             </Badge>
          </div>
        </div>

        <div className="p-5 flex flex-col flex-grow">
          <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
            <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
            <span className="flex items-center gap-1"><User size={12} /> {post.author}</span>
          </div>

          <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h3>
          
          <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-grow">
            {post.excerpt}
          </p>

          <div className="mt-auto pt-4 border-t border-border flex items-center justify-between">
             <div className="flex gap-1 flex-wrap">
               {post.tags.slice(0, 2).map(tag => (
                 <span key={tag} className="text-[10px] bg-muted px-2 py-1 rounded text-muted-foreground">#{tag}</span>
               ))}
             </div>
             <span className="text-xs font-bold text-accent uppercase tracking-wide flex items-center gap-1">
               Read <ArrowRight size={12} />
             </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
