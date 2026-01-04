import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	extend: {
  		colors: {
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		keyframes: {
			'accordion-down': {
				from: { height: '0' },
				to: { height: 'var(--radix-accordion-content-height)' }
			},
			'accordion-up': {
				from: { height: 'var(--radix-accordion-content-height)' },
				to: { height: '0' }
			},
			'drift-up': {
				'0%': { opacity: '0', transform: 'translateY(40px)' },
				'100%': { opacity: '1', transform: 'translateY(0)' }
			},
			'drift-down': {
				'0%': { opacity: '0', transform: 'translateY(-30px)' },
				'100%': { opacity: '1', transform: 'translateY(0)' }
			},
			'reveal-left': {
				'0%': { opacity: '0', transform: 'translateX(-50px)', filter: 'blur(4px)' },
				'100%': { opacity: '1', transform: 'translateX(0)', filter: 'blur(0)' }
			},
			'reveal-right': {
				'0%': { opacity: '0', transform: 'translateX(50px)', filter: 'blur(4px)' },
				'100%': { opacity: '1', transform: 'translateX(0)', filter: 'blur(0)' }
			},
			'soft-pulse': {
				'0%, 100%': { opacity: '1' },
				'50%': { opacity: '0.7' }
			},
			'unveil': {
				'0%': { clipPath: 'inset(0 100% 0 0)' },
				'100%': { clipPath: 'inset(0 0 0 0)' }
			},
			'blur-in': {
				'0%': { opacity: '0', filter: 'blur(12px)' },
				'100%': { opacity: '1', filter: 'blur(0)' }
			},
			'float': {
				'0%, 100%': { transform: 'translateY(0)' },
				'50%': { transform: 'translateY(-6px)' }
			},
			'line-grow': {
				'0%': { transform: 'scaleX(0)' },
				'100%': { transform: 'scaleX(1)' }
			}
		},
		animation: {
			'accordion-down': 'accordion-down 0.2s ease-out',
			'accordion-up': 'accordion-up 0.2s ease-out',
			'drift-up': 'drift-up 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards',
			'drift-down': 'drift-down 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
			'reveal-left': 'reveal-left 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
			'reveal-right': 'reveal-right 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
			'soft-pulse': 'soft-pulse 3s ease-in-out infinite',
			'unveil': 'unveil 1.2s cubic-bezier(0.77, 0, 0.175, 1) forwards',
			'blur-in': 'blur-in 0.8s ease-out forwards',
			'float': 'float 4s ease-in-out infinite',
			'line-grow': 'line-grow 0.8s ease-out forwards'
		},
  		boxShadow: {
  			'2xs': 'var(--shadow-2xs)',
  			xs: 'var(--shadow-xs)',
  			sm: 'var(--shadow-sm)',
  			md: 'var(--shadow-md)',
  			lg: 'var(--shadow-lg)',
  			xl: 'var(--shadow-xl)',
  			'2xl': 'var(--shadow-2xl)'
  		},
		fontFamily: {
			sans: [
				'Inter',
				'ui-sans-serif',
				'system-ui',
				'-apple-system',
				'BlinkMacSystemFont',
				'sans-serif'
			],
			serif: [
				'Cormorant Garamond',
				'ui-serif',
				'Georgia',
				'serif'
			],
		},
		letterSpacing: {
			tightest: '-0.04em',
			tighter: '-0.02em',
			tight: '-0.01em',
			normal: '0',
			wide: '0.05em',
			wider: '0.1em',
			widest: '0.2em',
			editorial: '0.25em',
		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
