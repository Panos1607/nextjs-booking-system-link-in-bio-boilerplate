export function LinkButton({ link, theme }: any) {
  return (
    <a href={link.url} className="w-full block text-center bg-white/10 hover:bg-white/20 text-white p-3 rounded-xl backdrop-blur-md border border-white/20 transition-all">
      {link.icon} {link.label}
    </a>
  );
}