export default function AnnouncementBar({ message }) {
  return (
    <div className="flex w-full items-center justify-center bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-900 px-4 py-2 text-sm text-gold-400">
      <span className="tracking-wide">{message}</span>
    </div>
  );
}
