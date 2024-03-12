import {gallery_icon, mic_icon, send_icon} from "../assets/assets";

const Search = () => {
	return (
		<div className="bg-gemini-gray rounded-full w-[830px] px-6 py-4">
			<form action="" className="flex">
				<input
					type="text"
					placeholder="Enter a prompt here"
					className="flex-1 text-lg bg-transparent focus:outline-none"
				/>
				<div className="flex gap-6">
					<button type="button" onClick={() => {}}>
						<img src={gallery_icon} alt="send" className="h-6" />
					</button>
					<button type="button" onClick={() => {}}>
						<img src={mic_icon} alt="send" className="h-6" />
					</button>
					<button type="submit" onClick={() => {}}>
						<img src={send_icon} alt="send" className="h-6" />
					</button>
				</div>
			</form>
		</div>
	);
};

export default Search;
