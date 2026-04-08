export const metadata = {
  title: 'TaleCrafters Studio — Content Management',
  description: 'Blog content management studio',
};

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ height: '100vh' }}>
      {children}
    </div>
  );
}
