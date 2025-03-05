
import React from 'react';
import { Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'html', title }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    toast.success('Code copied to clipboard');
  };

  return (
    <div className="relative my-6 group">
      {title && (
        <div className="absolute top-0 left-0 bg-gray-800 text-xs text-gray-300 px-3 py-1 rounded-t-md">
          {title}
        </div>
      )}
      <pre className={`language-${language} bg-gray-900 rounded-md overflow-x-auto p-4 ${title ? 'pt-8' : ''}`}>
        <code className={`language-${language}`}>{code}</code>
      </pre>
      <Button 
        variant="ghost" 
        size="sm" 
        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={copyToClipboard}
      >
        <Copy className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default CodeBlock;
