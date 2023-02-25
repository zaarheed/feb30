import Feb30 from "@/components/feb30";

export default function Home() {
	return (
		<section className="w-screen h-screen relative">
			<div className="flex min-h-screen flex-col items-center justify-center py-10 px-4">
				<img src="/assets/beams.jpg" alt="" className="absolute w-full h-full object-cover" />
				<div className="absolute inset-0 bg-[url(/assets/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
				<div className="z-10 w-full max-w-screen-sm">
					<div className="">
						<div className="flex flex-row space-x-1 items-center justify-center">
							<h1 className="text-center text-3xl font-bold tracking-tight sm:text-5xl">Feb30</h1>
							<svg xmlns="http://www.w3.org/2000/svg" className="w-14 h-14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
								<rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
								<line x1="16" y1="2" x2="16" y2="6" />
								<line x1="8" y1="2" x2="8" y2="6" />
								<line x1="3" y1="10" x2="21" y2="10" />
								<path d="M8 14h.01" />
								<path d="M12 14h.01" />
								<path d="M16 14h.01" />
								<path d="M8 18h.01" />
								<path d="M12 18h.01" />
								<path d="M16 18h.01" />
							</svg>
						</div>
						<p className="mt-1 md:mt-3 text-center text-sm md:text-lg text-black/50">AI-powered datepicker: Enter any text to convert to a date</p>
					</div>
					<Feb30 />
				</div>
			</div>

			<div className="w-full absolute bottom-2">
				<div className="w-full max-w-7xl mx-auto px-4 flex flex-row justify-center text-xs md:text-base">
					<div className="flex flex-row space-x-1 items-center">
						<img src="https://zmdev.com/assets/profile.jpg" className="relative rounded-full border border-2 border-black w-7 h-7" />
						<p className="">
							<b className="font-semibold">
								Built by <a className="underline" href="https://www.twitter.com/zaarheed">Zahid</a>
							</b>
							, to make datepickers 10x easier to use. <a className="underline" href="https://www.github.com/zaarheed/feb30">🍜 on GitHub</a>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}