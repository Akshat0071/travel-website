import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Share2, ArrowLeft } from "lucide-react";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import { Button } from "@/components/ui/button";
import { sampleDiaries } from "@/data/diaries";
import { generateWhatsAppLink } from "@/lib/whatsapp";

export default function DiaryDetail() {
  const params = useParams<{ slug: string }>();
  const diary = sampleDiaries.find(d => d.slug === params.slug);

  if (!diary) return <div>Not Found</div>;

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareText = `Check out this amazing travel story: ${diary.title}`;

  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />

      {/* Hero */}
      <div className="relative h-[60vh] min-h-[400px]">
        <img 
          src={diary.image} 
          alt={diary.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />
        
        <div className="absolute top-24 left-4 md:left-12">
           <Link href="/diaries">
             <Button variant="ghost" className="text-white hover:bg-white/20 gap-2">
               <ArrowLeft size={18} /> Back to Diaries
             </Button>
           </Link>
        </div>

        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 text-white">
          <div className="container mx-auto max-w-4xl">
             <div className="flex gap-2 mb-4">
               {diary.tags.map(tag => (
                 <span key={tag} className="bg-accent text-white px-3 py-1 rounded-full text-xs font-bold">
                   {tag}
                 </span>
               ))}
             </div>
             <motion.h1 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight"
             >
               {diary.title}
             </motion.h1>
             
             <div className="flex flex-wrap items-center gap-6 text-sm md:text-base opacity-90">
               <div className="flex items-center gap-2">
                 <img src={diary.author.avatar} className="w-10 h-10 rounded-full border-2 border-white" />
                 <span className="font-bold">{diary.author.name}</span>
               </div>
               <span className="flex items-center gap-2"><Calendar size={18} /> {diary.date}</span>
               <span className="flex items-center gap-2"><Clock size={18} /> {diary.readTime}</span>
               <span className="flex items-center gap-2"><MapPin size={18} /> {diary.location}</span>
             </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
         {/* Share Sidebar (Desktop) */}
         <div className="hidden lg:block col-span-1 sticky top-32 h-fit">
            <div className="flex flex-col gap-4">
               <Button size="icon" variant="outline" className="rounded-full" onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`, "_blank")}>
                 <Share2 size={18} />
               </Button>
               {/* Add more social icons here */}
            </div>
         </div>

         {/* Content */}
         <article className="col-span-1 lg:col-span-8 lg:col-start-3 prose prose-lg prose-headings:font-serif prose-a:text-primary max-w-none">
            <div dangerouslySetInnerHTML={{ __html: diary.content }} />
         </article>

         {/* Author Card (Bottom or Sidebar) */}
         <div className="col-span-1 lg:col-span-8 lg:col-start-3 mt-12 border-t border-border pt-8">
            <div className="bg-muted/30 p-8 rounded-2xl flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
               <img src={diary.author.avatar} className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md" />
               <div>
                  <h3 className="text-xl font-bold mb-2">About the Author</h3>
                  <p className="text-muted-foreground mb-4">{diary.author.bio}</p>
                  <Button variant="outline" size="sm">View All Stories</Button>
               </div>
            </div>
         </div>
      </main>

      <Footer />
    </div>
  );
}
