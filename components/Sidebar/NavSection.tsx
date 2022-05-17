interface NavSectionProps {
  title: string;
  children: React.ReactNode;
}

export function NavSection({ title, children }: NavSectionProps) {
  return (
    <div className="flex items-start">
      <div>
        <p className="font-bold text-gray-400 text-2xs uppercase">{title}</p>
        <div className="mt-8 items-stretch">{children}</div>
      </div>
    </div>
  );
}
