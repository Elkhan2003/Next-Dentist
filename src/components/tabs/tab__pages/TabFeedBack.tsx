import React, { FC, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import scss from "./TabPages.module.scss";
import { ArrowLeftIcon, ArrowRightIcon, StarFiveIcon } from "@/components/svgs";

import { FormattedMessage } from "react-intl";

interface SlidersProps {
	title: string;
	text: string;
	user: string;
	date: string;
}

const images: SlidersProps[] = [
	{
		title: "Удивительно!",
		text: "Отличная стоматология! Все процедуры проводятся на высоком уровне, с использованием современного оборудования. Персонал дружелюбный и внимательный, всегда готовый помочь. Результат лечения оправдал все мои ожидания!",
		user: "Elcho911",
		date: "14/10/2018"
	},
	{
		title: "Спасибо вам ❤️",
		text: "Очень рад, что обратился в эту стоматологию. Процедуры проводились аккуратно и безболезненно, врачи объяснили каждый шаг и ответили на все мои вопросы. Результаты лечения превзошли мои ожидания. Рекомендую!",
		user: "Sher911",
		date: "30/04/2019"
	},
	{
		title: "Мне понравилось!",
		text: "Прекрасная стоматология с высококвалифицированным персоналом. Врачи очень терпеливо и заботливо относятся к каждому пациенту. Лечение проходит безболезненно, а результаты просто потрясающие. Большое спасибо всему коллективу!",
		user: "Tima911",
		date: "19/06/2019"
	},
	{
		title: "Лучшие!",
		text: "Хочу выразить огромную благодарность стоматологии за их профессионализм и заботу о пациентах. Врачи сделали все возможное, чтобы мое лечение прошло комфортно и эффективно. Результаты просто потрясающие, моя улыбка теперь прекрасна! 🙌🏻",
		user: "Elcho911",
		date: "14/10/2019"
	},
	{
		title: "Профессиональный подход",
		text: "Я очень доволен качеством обслуживания в этой стоматологии. Врачи проявили высокий профессионализм и внимание к деталям. Лечение прошло успешно, и я получил идеальный результат.",
		user: "Alex78",
		date: "05/03/2020"
	},
	{
		title: "Отличный опыт",
		text: "Я посетил множество стоматологических клиник, но эта явно выделяется. Процедуры проводятся с невероятной точностью и заботой. Врачи всегда готовы ответить на вопросы и сделать все возможное, чтобы пациент чувствовал себя комфортно.",
		user: "DianaSmiles",
		date: "18/03/2020"
	},
	{
		title: "Очень дружелюбный персонал",
		text: "Я нервничал перед посещением стоматологии, но сотрудники сделали все возможное, чтобы я почувствовал себя комфортно. Врачи объяснили каждый этап лечения и успокоили меня. Я очень благодарен за такой заботливый подход.",
		user: "HappyPatient",
		date: "29/8/2021"
	},
	{
		title: "Превосходный сервис",
		text: "Я получил отличное обслуживание в этой стоматологической клинике. Все сотрудники были дружелюбны и профессиональны. Лечение прошло гладко, и результаты превзошли мои ожидания.",
		user: "SmilingSam",
		date: "10/09/2021"
	},
	{
		title: "Безболезненное лечение",
		text: "Стоматология, в которой мне удалось избежать боли! Процедуры проводились с максимальным комфортом, и врачи были очень осторожны. Результаты лечения были отличными, и я очень рад.",
		user: "PainlessPete",
		date: "03/12/2021"
	},
	{
		title: "Высококвалифицированные специалисты",
		text: "Я рекомендую эту стоматологическую клинику всем, кто ищет высококлассное лечение. Врачи обладают глубокими знаниями и опытом, их работа на самом высоком уровне. Я полностью доволен результатами.",
		user: "ExpertSmile",
		date: "20/01/2022"
	},
	{
		title: "Индивидуальный подход",
		text: "Врачи в этой стоматологии настолько внимательны, что создаётся ощущение, будто они работают только с вами. Они учли все мои пожелания и потребности, и результаты были просто великолепными.",
		user: "SpecialSmiles",
		date: "12/03/2022"
	},
	{
		title: "Идеальная улыбка",
		text: "Большое спасибо стоматологии за мою новую идеальную улыбку. Лечение было безболезненным, и врачи сделали все возможное, чтобы удовлетворить мои требования. Я горжусь своей улыбкой!",
		user: "HappySmiler",
		date: "07/04/2022"
	},
	{
		title: "Результаты просто потрясающие",
		text: "Я остался в полном восторге от своей поездки в эту стоматологическую клинику. Врачи проявили высокую компетентность и сделали все, чтобы я получил идеальную улыбку. Я очень доволен результатами.",
		user: "PerfectTeeth",
		date: "26/01/2023"
	},
	{
		title: "Прекрасное место",
		text: "Я наконец-то нашел стоматологию, в которой с удовольствием хожу. Атмосфера здесь очень дружелюбная и расслабленная. Врачи профессионалы своего дела, и результаты их работы говорят сами за себя.",
		user: "RelaxedSmile",
		date: "15/04/2023"
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
						{images.map((item, index) => (
							<div key={index + 1} className="keen-slider__slide">
								<div className={scss.card}>
									<div className={scss.icon}>
										<StarFiveIcon />
									</div>
									<h5 className={scss.card__title}>{item.title}</h5>
									<p className={scss.text}>{item.text}</p>
									<h5 className={scss.user__date}>
										{/*{item.user},*/}
										{item.date}
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
