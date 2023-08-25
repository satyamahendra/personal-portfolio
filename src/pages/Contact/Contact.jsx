import React, { useEffect, useState } from "react";

import ContactButton from "./ContactButton";

import { quotesData } from "../../data/data";

import { AnimatePresence, motion } from "framer-motion";

import { PiDiamondsFourFill } from "react-icons/pi";

import {
	BsFillEnvelopeAtFill,
	BsFillTelephoneFill,
	BsLinkedin,
	BsDiscord,
	BsInstagram,
	BsWhatsapp,
	BsGithub,
	BsDiamond,
} from "react-icons/bs";

const Contact = ({ setSectionIndex }) => {
	const [quotesIndex, setQuotesIndex] = useState(0);

	useEffect(() => {
		setSectionIndex(2);
	}, []);

	const randomizeQuotesIndex = () => {
		const randomNumber = Math.floor(Math.random() * quotesData.length);
		setQuotesIndex((prev) => (prev === randomNumber ? 0 : randomNumber));
	};

	const selectedQuote = quotesData[quotesIndex];

	return (
		<section
			id="contact"
			className="flex flex-col items-center justify-between h-screen py-8 sm:justify-around"
		>
			<div className="flex flex-col items-center justify-center gap-16">
				<PiDiamondsFourFill />
				<h1 className="text-3xl sm:text-5xl">Get in touch with me!</h1>

				<div className="flex flex-col items-center justify-center gap-2">
					<h2 className="sm:text-2xl">Social media</h2>
					<ul className="flex gap-4 text-3xl sm:text-4xl">
						<ContactButton
							name="Ida Bagus Satya Mahendra"
							icon={<BsLinkedin />}
						/>

						<ContactButton name="007satya_" icon={<BsInstagram />} />

						<ContactButton name="007satya_" icon={<BsDiscord />} />

						<ContactButton name="megatronhehe" icon={<BsGithub />} />

						<ContactButton name="0822'5410'3639" icon={<BsWhatsapp />} />
					</ul>
				</div>

				<div className="flex flex-col items-center justify-center gap-2">
					<h2 className="sm:text-2xl">General contact</h2>
					<ul className="flex gap-4 text-3xl sm:text-4xl">
						<ContactButton
							name="satyamahendra09@gmail.com"
							icon={<BsFillEnvelopeAtFill />}
						/>
						<ContactButton
							name="0822'5410'3639"
							icon={<BsFillTelephoneFill />}
						/>
					</ul>
				</div>
			</div>

			<div className="flex flex-col items-center justify-between text-xs text-gray-400 sm:text-sm ">
				<motion.button
					key={quotesIndex}
					animate={{ rotate: 360 }}
					transition={{ duration: 1.5 }}
				>
					<BsDiamond onClick={randomizeQuotesIndex} />
				</motion.button>

				<div className="h-20 ">
					<AnimatePresence mode="wait">
						<motion.div
							key={quotesIndex}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="flex flex-col items-center justify-center"
						>
							<p className="p-4 text-center">"{selectedQuote.quote}"</p>
							<p>- {selectedQuote.by}</p>
						</motion.div>
					</AnimatePresence>
				</div>
			</div>
		</section>
	);
};

export default Contact;
