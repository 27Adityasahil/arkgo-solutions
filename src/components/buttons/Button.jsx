import Link from "next/link";
import clsx from "clsx";

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  onClick,
  type = "button",
  ...props
}) {
  const baseClasses = "inline-flex items-center justify-center font-heading font-semibold transition-all duration-300 rounded-sm";
  
  const variants = {
    primary: "bg-secondary text-white hover:bg-primary",
    secondary: "bg-transparent border border-primary text-primary hover:bg-tint-blue",
    outline: "border border-primary text-primary hover:bg-tint-blue",
    ghost: "text-text-muted hover:text-secondary hover:bg-tint-green",
    accent: "bg-accent text-text-dark hover:bg-secondary hover:text-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = clsx(
    baseClasses,
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  );
}
