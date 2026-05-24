function Stats() {
    return (
      <div className="flex gap-20 mt-24 border-t border-[#ddd5cf] pt-10">
        {[
          ["50K+", "Gifts Found"],
          ["98%", "Happy Gifters"],
          ["10", "Curated Picks"],
        ].map(([num, label]) => (
          <div key={label}>
            <h2 className="text-5xl font-serif text-[#9f2d2d]">{num}</h2>
            <p className="mt-2 text-xs tracking-[0.3em] text-gray-400 uppercase">
              {label}
            </p>
          </div>
        ))}
      </div>
    );
  }
  
  export default Stats;