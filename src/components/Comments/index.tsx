"use client"

import React, { useEffect, useRef } from "react";
import { containerRoot } from "./index.css";

const Comments = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if(!ref.current) return;

    const script = document.createElement("script");
    script.src = "https://utteranc.es/client.js";
    script.setAttribute("repo", "joohaem/blog");
    script.setAttribute("issue-term", "title");
    script.setAttribute("theme", "github-light");
    script.setAttribute("crossorigin", "anonymous");
    script.setAttribute("async", "true");

    ref.current.appendChild(script);
  }, []);

  return <div ref={ref} className={containerRoot} />;
};

export default Comments;
