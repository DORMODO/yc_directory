import markdownit from 'markdown-it';
import DOMPurify from 'isomorphic-dompurify';

// Configure markdown-it with security options
const md = markdownit({
  html: false, // Disable HTML tags in source
  xhtmlOut: false, // Use '/' to close single tags
  breaks: true, // Convert '\n' in paragraphs into <br>
  linkify: true, // Autoconvert URL-like text to links
  typographer: true, // Enable some language-neutral replacement + quotes beautification
});

// Add security plugin to sanitize output
md.use((md) => {
  const originalRender = md.render;
  md.render = function(src: string) {
    const html = originalRender.call(this, src);
    // Sanitize the HTML output
    return DOMPurify.sanitize(html, {
      ALLOWED_TAGS: [
        'p', 'br', 'strong', 'em', 'u', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
        'ul', 'ol', 'li', 'blockquote', 'code', 'pre', 'a'
      ],
      ALLOWED_ATTR: ['href', 'title', 'target'],
      ALLOW_DATA_ATTR: false,
    });
  };
});

export function renderMarkdown(content: string): string {
  if (!content) return '';
  return md.render(content);
}
