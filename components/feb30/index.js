import { useState } from "react";

export default function Feb30() {
	const [loading] = useState(false);
	const [value, setValue] = useState("");

	const handleChange = (e) => {
		e.preventDefault();
		setValue(e.target.value);
	}

	const handleBlur = ({ preventDefault }) => {
	}

	return (
		<section className="mx-auto mt-6 max-w-2xl">
			<div className="relative w-full rounded-lg border-2 border-transparent bg-white px-5 shadow hover:border-blue-500 mb-4 flex flex-row">
				<input
					type="text"
					name="url"
					id="url"
					placeholder="Paste a YouTube URL"
					className={`
						peer w-full rounded-md px-3 py-3
						placeholder:text-transparent
						focus:border-gray-500 focus:outline-none
					`}
					autoComplete="off"
					value={value}
					onChange={handleChange}
					onBlur={handleBlur}
				/>
				<label
					htmlFor="url"
					className={`
						pointer-events-none absolute top-0 left-0 ml-3 origin-left
						-translate-y-1/2 transform bg-blue-500 px-1 text-sm text-white
						transition-all duration-300 ease-in-out
						peer-placeholder-shown:top-1/2 peer-placeholder-shown:ml-4
						peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
						peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm
						peer-focus:text-gray-800 peer-focus:bg-blue-500 peer-focus:text-white rounded
						peer-placeholder-shown:text-gray-500 peer-placeholder-shown:bg-white
					`}
				>
					Enter a date
				</label>
				{loading && (
					<div className="h-full relative aspect-square flex flex-col justify-center items-center py-3">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 shrink-0 animate-spin text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
							<path d="M21 12a9 9 0 1 1-6.219-8.56" />
						</svg>
					</div>
				)}
			</div>
		</section>
	)
}