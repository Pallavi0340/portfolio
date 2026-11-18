import {
  Braces,
  Code2,
  Cpu,
  Database,
  GitBranch,
  Layers,
  Server,
  Terminal
} from 'lucide-react';

export function TechIcon({ iconKey, size = 20 }) {
  switch (iconKey) {
    case 'react':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="2.1" fill="#61DAFB" />
          <ellipse
            cx="12"
            cy="12"
            rx="9.5"
            ry="3.8"
            stroke="#61DAFB"
            strokeWidth="1.4"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="9.5"
            ry="3.8"
            stroke="#61DAFB"
            strokeWidth="1.4"
            transform="rotate(60 12 12)"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="9.5"
            ry="3.8"
            stroke="#61DAFB"
            strokeWidth="1.4"
            transform="rotate(120 12 12)"
          />
        </svg>
      );

    case 'javascript':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <rect x="2.5" y="2.5" width="19" height="19" rx="4" fill="#F7DF1E" />
          <path
            d="M10.4 16.9c0 1.2-.7 1.8-1.8 1.8-.8 0-1.4-.4-1.7-1l1.1-.7c.2.3.4.5.7.5.4 0 .6-.2.6-.7v-4.2h1.1v4.3zm2.3.9c.4.6 1 .9 1.9.9 1.1 0 1.9-.6 1.9-1.6 0-.9-.5-1.3-1.6-1.7l-.5-.2c-.5-.2-.8-.4-.8-.7 0-.3.3-.5.7-.5.4 0 .7.2.9.5l1-.6c-.4-.6-1-1-1.9-1-1.1 0-1.8.6-1.8 1.5 0 .9.5 1.3 1.5 1.7l.5.2c.6.2.9.4.9.8 0 .4-.4.6-.9.6-.6 0-1-.3-1.2-.7l-1.1.8z"
            fill="#0F172A"
          />
        </svg>
      );

    case 'cpp':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M12 2.5L20.2 7.25V16.75L12 21.5L3.8 16.75V7.25L12 2.5Z"
            fill="#1D4ED8"
            fillOpacity="0.22"
            stroke="#60A5FA"
            strokeWidth="1.5"
          />
          <text
            x="12"
            y="14.5"
            textAnchor="middle"
            fill="#93C5FD"
            fontSize="7.6"
            fontWeight="700"
            fontFamily="JetBrains Mono, monospace"
          >
            C++
          </text>
        </svg>
      );

    case 'nodejs':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M12 2.6L20 7.2V16.8L12 21.4L4 16.8V7.2L12 2.6Z"
            fill="#22C55E"
            fillOpacity="0.16"
            stroke="#4ADE80"
            strokeWidth="1.5"
          />
          <path
            d="M9.5 14.2V9.8L12 8.4L14.5 9.8V14.2L12 15.6L9.5 14.2Z"
            stroke="#4ADE80"
            strokeWidth="1.35"
          />
        </svg>
      );

    case 'express':
      return <Server size={size} strokeWidth={1.8} color="#C4B5FD" />;

    case 'mongodb':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M12 3C12 3 16.5 7.6 16.5 13C16.5 16.7 13.8 19.3 12 20.6C10.2 19.3 7.5 16.7 7.5 13C7.5 7.6 12 3 12 3Z"
            fill="#10B981"
            fillOpacity="0.2"
            stroke="#34D399"
            strokeWidth="1.5"
          />
          <path d="M12 7.5V21" stroke="#34D399" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );

    case 'mysql':
      return <Database size={size} strokeWidth={1.8} color="#38BDF8" />;

    case 'java':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M7 10.5H15.5V14C15.5 16.4 13.7 18.2 11.25 18.2C8.8 18.2 7 16.4 7 14V10.5Z"
            fill="#F97316"
            fillOpacity="0.18"
            stroke="#FB923C"
            strokeWidth="1.5"
          />
          <path
            d="M15.5 11.3H17C18.1 11.3 19 12.1 19 13.2C19 14.3 18.1 15.1 17 15.1H15.5"
            stroke="#FB923C"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M9.5 7.5C9.5 6.4 10.6 6 10.6 4.8M13 7.5C13 6.4 14.1 6 14.1 4.8M6.5 20.2H16.2"
            stroke="#FB923C"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      );

    case 'git':
      return <GitBranch size={size} strokeWidth={1.8} color="#FB7185" />;

    case 'github':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M12 2.5C6.75 2.5 2.5 6.75 2.5 12C2.5 16.2 5.22 19.76 8.99 21.02C9.46 21.11 9.63 20.82 9.63 20.57C9.63 20.35 9.62 19.62 9.62 18.84C7 19.41 6.45 17.73 6.45 17.73C6.02 16.64 5.4 16.35 5.4 16.35C4.54 15.76 5.46 15.77 5.46 15.77C6.41 15.84 6.91 16.75 6.91 16.75C7.75 18.2 9.12 17.78 9.66 17.54C9.75 16.93 9.99 16.51 10.26 16.27C8.16 16.03 5.96 15.22 5.96 11.61C5.96 10.58 6.33 9.74 6.93 9.08C6.83 8.84 6.51 7.88 7.02 6.58C7.02 6.58 7.81 6.33 9.62 7.55C10.38 7.34 11.19 7.23 12 7.23C12.81 7.23 13.62 7.34 14.38 7.55C16.19 6.33 16.98 6.58 16.98 6.58C17.49 7.88 17.17 8.84 17.07 9.08C17.67 9.74 18.04 10.58 18.04 11.61C18.04 15.23 15.83 16.03 13.73 16.26C14.07 16.55 14.37 17.13 14.37 18.02C14.37 19.29 14.36 20.31 14.36 20.57C14.36 20.82 14.53 21.12 15.01 21.02C18.78 19.76 21.5 16.2 21.5 12C21.5 6.75 17.25 2.5 12 2.5Z"
            fill="#E2E8F0"
          />
        </svg>
      );

    case 'css':
      return <Layers size={size} strokeWidth={1.8} color="#A78BFA" />;

    case 'dsa':
      return <Braces size={size} strokeWidth={1.8} color="#C084FC" />;

    case 'core':
      return <Cpu size={size} strokeWidth={1.8} color="#818CF8" />;

    default:
      return <Code2 size={size} strokeWidth={1.8} color="#A78BFA" />;
  }
}

export function BrandTerminalIcon() {
  return <Terminal size={15} strokeWidth={2.2} aria-hidden="true" />;
}
