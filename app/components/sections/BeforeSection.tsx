export default function BeforeSection() {
    return (
      <div className="flex flex-col gap-1">
        <h2 className="text-lg text-gray-500 font-semibold uppercase">Before</h2>
        <div className="flex flex-col gap-4">
          <div>
            <h3 className="text-sm font-medium text-[#0B23FF]">Anyshift</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Helped shape an AI-powered platform to make cloud infrastructure changes safer and smarter — with a strong focus on product vision, real impact, and fast iteration.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-[#0B23FF]">TheCollectible</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Built a marketplace for the artworld. Learned a ton, but it didn't take off. Ended up dying.
            </p>
          </div>
        </div>
      </div>
    );
  }