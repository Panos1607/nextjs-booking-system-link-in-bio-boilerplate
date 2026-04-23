export function SocialIcons({ handles }: any) {
  return (
    <div className="flex gap-4 text-white/70">
      {Object.keys(handles).map(key => (
        <span key={key} className="hover:text-white cursor-pointer capitalize">{key}</span>
      ))}
    </div>
  );
}