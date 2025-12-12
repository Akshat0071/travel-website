import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { Calendar, User, Clock, Share2, ArrowLeft } from "lucide-react";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import MarkdownRenderer from "@/components/blog/MarkdownRenderer";
import { Button } from "@/components/ui/button";
import { sampleBlogs } from "@/data/blogs";

export default function BlogDetail() {
  const params = useParams<{ slug: string }>();
  const post = sampleBlogs.find(p => p.slug === params.slug);

  if (!post) return <div>Not Found</div>;

  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />

      {/* Hero */}
      <div className="pt-32 pb-12 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl text-center">
           <Link href="/blog">
             <Button variant="link" className="text-muted-foreground mb-6 pl-0 hover:no-underline hover:text-primary">
               <ArrowLeft size={16} className="mr-2" /> Back to Blog
             </Button>
           </Link>
           
           <span className="text-accent font-bold uppercase tracking-wider text-sm mb-4 block">
             {post.category}
           </span>
           
           <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8 leading-tight"
           >
             {post.title}
           </motion.h1>

           <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                 <img src={post.authorAvatar} className="w-8 h-8 rounded-full" />
                 <span className="font-medium text-foreground">{post.author}</span>
              </div>
              <span className="flex items-center gap-1"><Calendar size={16} /> {post.date}</span>
              <span className="flex items-center gap-1"><Clock size={16} /> {post.readTime}</span>
           </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="container mx-auto px-4 max-w-5xl -mt-8 mb-12">
         <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           className="rounded-2xl overflow-hidden shadow-2xl aspect-[21/9]"
         >
           <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
         </motion.div>
      </div>

      <main className="container mx-auto px-4 max-w-3xl pb-20">
         <MarkdownRenderer content={post.content} />
         
         {/* Share & Tags */}
         <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex gap-2">
               {post.tags.map(tag => (
                 <span key={tag} className="bg-muted px-3 py-1 rounded text-sm text-muted-foreground">
                   #{tag}
                 </span>
               ))}
            </div>
            <Button variant="outline" className="gap-2" onClick={() => window.open(`https://wa.me/?text=Check out this article: ${window.location.href}`, "_blank")}>
               <Share2 size={16} /> Share on WhatsApp
            </Button>
         </div>
      </main>

      <Footer />
    </div>
  );
}
