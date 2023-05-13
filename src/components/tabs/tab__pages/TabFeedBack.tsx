import React, { FC, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import scss from "./TabPages.module.scss";
import { ArrowLeftIcon, ArrowRightIcon, StarFiveIcon } from "@/components/svgs";

import { FormattedMessage } from "react-intl";

interface SlidersProps {
	id: number;
	title: string;
	text: string;
	user: string;
	date: string;
}

const images: SlidersProps[] = [
	{
		id: 1,
		title: "Amazing!",
		text: "Amazing, great layout for captions, better accuracy than TikTok, and it’s free with no ads or watermarks? What’s the catch? Thank you.",
		user: "Elcho911",
		date: "14/10/2003"
	},
	{
		id: 2,
		title: "Works as advertised!",
		text: "This app does exactly what it says it will do! Great app if you want your video captioned without having to do it yourself!",
		user: "Sher911",
		date: "30/09/2006"
	},
	{
		id: 3,
		title: "Download now!",
		text: "If you not convinced, let me tell you right now: the qualities of my videos skyrocketed with THIS ONE APP and my videos look so clean and professional! If you’re at all interested in sprucing up your video content, this is the app for you!",
		user: "Tima911",
		date: "19/02/2004"
	},
	{
		id: 4,
		title: "Content creator need this",
		text: "By far the best all-you-need app for existing or aspiring content creators! 🙌🏻",
		user: "Elcho911",
		date: "14/10/2003"
	}
];

const TabFeedBack: FC = () => {
	const [currentSlide, setCurrentSlide] = useState<any>(0);
	const [loaded, setLoaded] = useState<any>(false);
	const [ref, instanceRef] = useKeenSlider<HTMLDivElement>(
		{
			// ! slider
			loop: true,
			// mode: "free-snap",
			slides: {
				// origin: "center",
				perView: 1,
				spacing: 10
			},

			breakpoints: {
				"(min-width: 650px)": {
					slides: { perView: 2, spacing: 15 }
				},
				"(min-width: 1000px)": {
					slides: { origin: "center", perView: 3, spacing: 25 }
				}
			},

			// ! navigation + buttons
			initial: 0,
			slideChanged(slider) {
				setCurrentSlide(slider.track.details.rel);
			},
			created() {
				setLoaded(true);
			}
		},

		// ! auto play
		[
			(slider) => {
				let timeout: ReturnType<typeof setTimeout>;
				let mouseOver = false;

				function clearNextTimeout() {
					clearTimeout(timeout);
				}

				function nextTimeout() {
					clearTimeout(timeout);
					if (mouseOver) return;
					timeout = setTimeout(() => {
						slider.next();
					}, 1500);
				}

				slider.on("created", () => {
					slider.container.addEventListener("mouseover", () => {
						mouseOver = true;
						clearNextTimeout();
					});
					slider.container.addEventListener("mouseout", () => {
						mouseOver = false;
						nextTimeout();
					});
					nextTimeout();
				});
				slider.on("dragStarted", clearNextTimeout);
				slider.on("animationEnded", nextTimeout);
				slider.on("updated", nextTimeout);
			}
		]
	);

	return (
		<>
			<div className={scss.FeedBack__container}>
				<div className={scss.title}>
					<FormattedMessage
						id="page.tabs.title.feedback"
						values={{ span: (chunks) => <span>{chunks}</span> }}
					/>
				</div>
				<div className={scss.navigation__wrapper}>
					<div ref={ref} className="keen-slider">
						{images.map((item) => (
							<div key={item.id} className="keen-slider__slide">
								<div className={scss.card}>
									<div className={scss.icon}>
										<StarFiveIcon />
									</div>
									<h5 className={scss.card__title}>{item.title}</h5>
									<p className={scss.text}>{item.text}</p>
									<h5 className={scss.user__date}>
										{item.user}, {item.date}
									</h5>
								</div>
							</div>
						))}
					</div>
				</div>

				{loaded && instanceRef.current && (
					<div className={scss.dots}>
						{/* ! arrow__left */}
						<div>
							{loaded && instanceRef.current && (
								<>
									<span
										className={`${scss.arrow} ${scss.arrow__left}`}
										onClick={(e: any) =>
											e.stopPropagation() || instanceRef.current?.prev()
										}
									>
										<ArrowLeftIcon />
									</span>
								</>
							)}
						</div>
						{/* ! dot */}
						{Array.from(
							{ length: instanceRef.current.track.details.slides.length },
							(_, idx) => (
								<button
									key={idx}
									onClick={() => {
										instanceRef.current?.moveToIdx(idx);
									}}
									className={
										currentSlide === idx
											? `${scss.dot} ${scss.active}`
											: `${scss.dot}`
									}
								></button>
							)
						)}
						{/* ! arrow__right */}
						<div>
							{loaded && instanceRef.current && (
								<>
									<span
										className={`${scss.arrow} ${scss.arrow__right}`}
										onClick={(e: any) =>
											e.stopPropagation() || instanceRef.current?.next()
										}
									>
										<ArrowRightIcon />
									</span>
								</>
							)}
						</div>
					</div>
				)}
			</div>
		</>
	);
};
export default TabFeedBack;
