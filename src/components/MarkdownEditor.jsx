import MarkdownIt from "markdown-it";
import hljs from "highlight.js";
import { useEffect, useState } from "react";

const MarkdownEditor = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const lineCount = input.split("\n").length;

  useEffect(() => {
    const md = new MarkdownIt({
      html: true,
      linkify: true,
      typographer: true,
      breaks: true,
      highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
          try {
            return `<pre class="hljs"><code>${
              hljs.highlight(str, { language: lang }).value
            }</code></pre>`;
          } catch (__) {}
        }
        return `<pre class="hljs"><code>${md.utils.escapeHtml(
          str
        )}</code></pre>`;
      },
    });

    const result = md.render(input);
    console.log(result);
    setOutput(result);
  }, [input]);

  return (
    <div className="flex h-screen">
      <div className="w-12 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-right pr-2 py-4 select-none font-mono text-sm">
        {Array.from({ length: lineCount }, (_, i) => (
          <div key={i}>{i + 1}</div>
        ))}
      </div>
      {/* Editor */}
      <textarea
        className="w-1/2 p-4 font-serif text-sm border-r border-gray-200 dark:border-gray-700 
               bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 
               focus:outline-none resize-none"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Write your markdown here..."
      />

      {/* Preview */}
      <div className="w-1/2 p-6 overflow-auto bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 font-sans">
        <div
          className="prose prose-gray dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: output }}
        />
      </div>
    </div>
  );
};

export default MarkdownEditor;
