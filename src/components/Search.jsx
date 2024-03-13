import {gallery_icon, mic_icon, send_icon} from "../assets/assets";

const Search = () => {
	return (
		<div className="bg-gemini-gray rounded-full w-full max-w-[830px] px-6 py-4 flex-1">
			<form action="" className="flex">
				<input
					type="text"
					placeholder="Enter a prompt here"
					className="flex-1 mr-4 text-sm font-semibold bg-transparent focus:outline-none"
				/>
				<div className="flex gap-2 sm:gap-6 [&_img]:h-6">
					<button type="button" onClick={() => {}}>
						<img src={gallery_icon} alt="send" />
					</button>
					<button type="button" onClick={() => {}}>
						<img src={mic_icon} alt="send" />
					</button>
					<button type="submit" onClick={() => {}}>
						<img src={send_icon} alt="send" />
					</button>
				</div>
			</form>
		</div>
	);
};

export default Search;
