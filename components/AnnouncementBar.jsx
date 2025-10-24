export default function AnnouncementBar({ message }) {
  return (
    <div className="flex w-full items-center justify-center bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-900 px-3 py-2 text-xs text-gold-400 sm:px-4 sm:text-sm">
      <span className="tracking-wide">{message}</span>
    </div>
  );
}
