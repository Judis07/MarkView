import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css"; // choose your theme

const MarkdownPreview = ({ input }) => {
  return (
    <div className="w-1/2 p-6 overflow-auto bg-white dark:bg-gray-950">
      <div className="prose prose-gray dark:prose-invert max-w-none font-sans">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight]}
        >
          {input}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownPreview;
