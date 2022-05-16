import React from "react";
import { useSelector } from "react-redux";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { isClicked, input, initialInput } from "../../redux/markdownSlice";


const Output = () => {

  const inputArea = useSelector(input);
  const clicked = useSelector(isClicked);
  const initText = useSelector(initialInput);

  return (
    <div className="relative overflow-auto w-full h-136 bg-[#FFDD67] p-5 shadow-[10px_10px_#646464]">
      <ReactMarkdown
        children={clicked ? inputArea : initText}
        components={{
          code({node, inline, className, children, ...props}) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, '')}
                style={dark}
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            )
          }
        }}
      />
    </div>
  );
};

export default Output;
