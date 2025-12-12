import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeExternalLinks from "rehype-external-links";
import { cn } from "@/lib/utils";

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export default function MarkdownRenderer({ content, className }: MarkdownRendererProps) {
  return (
    <article className={cn("prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-primary prose-a:text-accent prose-img:rounded-xl prose-img:shadow-lg", className)}>
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[[rehypeExternalLinks, { target: "_blank", rel: "noopener noreferrer" }]]}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}
