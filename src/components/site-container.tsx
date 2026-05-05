type SiteContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function SiteContainer({ children, className = "" }: SiteContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-(--site-max-width) px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
