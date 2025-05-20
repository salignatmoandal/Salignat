export default function BeforeSection() {
    return (
      <div className="flex flex-col gap-1">
        <h2 className="text-xl text-gray-500   uppercase">Previously</h2>
        <div className="flex flex-col gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-medium text-[#0B23FF]">Anyshift</h3>
              <span className="text-sm text-muted-foreground">Jan 2025 - May 2025</span>
            </div>
            <p className="text-muted-foreground text-base leading-relaxed">
              Helped shape an AI-powered platform to make cloud infrastructure changes safer and smarter — with a strong focus on product vision, real impact, and fast iteration.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-medium text-[#0B23FF]">TheCollectible</h3>
              <span className="text-sm text-muted-foreground">2024 Jan - 2024 Dec</span>
            </div>
            <p className="text-muted-foreground text-base leading-relaxed">
              Built a marketplace for the artworld. Learned a ton, but it didn't take off. Ended up dying.
            </p>
          </div>
        </div>
      </div>
    );
  }