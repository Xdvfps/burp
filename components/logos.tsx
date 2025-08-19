// /components/logos.tsx

export const CustomLogo = ({ className }: { className?: string }) => {
  return (
    <img
      src="/logo.png" // Your custom logo PNG
      alt="Custom Logo"
      className={className}
    />
  );
};

export const XLogo = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
};

export const BagsAppLogo = ({ className }: { className?: string }) => {
  return (
    <img
      src="/bagsapp-logo.png" // Path to the @BagsApp PNG
      alt="BagsApp Logo"
      className={className}
      style={{ filter: 'grayscale(100%)' }}
    />
  );
};