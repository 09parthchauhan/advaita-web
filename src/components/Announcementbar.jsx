export default function AnnouncementBar() {
  return (
    <div
      className="anim-announcement w-full py-2.5 px-4 flex items-center justify-center gap-2"
      style={{
        background: 'linear-gradient(90deg, rgba(244,123,32,0.50) 0%, rgba(245,208,0,0.30) 50%, rgba(134,210,150,0.40) 100%)',
      }}
    >
      <span className="bg-jet-black text-white text-[10px] font-bold px-2 py-0.5 uppercase tracking-widest">
        NEW
      </span>
      <span className="text-jet-black  text-body-xs" 
      style={{
        fontWeight: '400',
        letterSpacing: '1.2'
      }}>
        Advaita is in active development, final product will be just around.
      </span>
    </div>
  )
}

