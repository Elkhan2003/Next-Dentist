import { FC, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import scss from "./Contact.module.scss";
import { FormattedMessage, useIntl } from "react-intl";

interface FormData {
	first_name: string;
	last_name: string;
	phone: string;
	subject: string;
	message: string;
}

interface ContactFormProps {
	className?: any;
}

const ContactForm: FC<ContactFormProps> = ({ className }) => {
	const [formData, setFormData] = useState<FormData>({
		first_name: "",
		last_name: "",
		phone: "",
		subject: "",
		message: ""
	});

	const [isSend, setIsSend] = useState(false);
	const [sendButton, setSendButton] = useState(false);

	const TOKEN = "6182732393:AAEaon3732C55YRsWvLNdaEtLRKh4TSGhww";
	const CHAT_ID = "-1001985016010";
	const API_URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

	const messageModel = () => {
		let messageTG = `First Name: <b>${formData.first_name}</b>\n`;
		messageTG += `Last Name: <b>${formData.last_name}</b>\n`;
		messageTG += `Phone: <b>${formData.phone}</b>\n`;
		messageTG += `Subject: <b>${formData.subject}</b>\n`;
		messageTG += `Message: <b>${formData.message}</b>\n`;

		return messageTG;
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const notify = () => {
		toast.success("Ваша форма успешно отправлена!", {
			position: "top-right",
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "dark"
		});
	};

	async function sendData(e: React.FormEvent<HTMLFormElement>): Promise<void> {
		e.preventDefault();

		const { first_name, last_name, phone } = formData;

		setFormData({
			first_name: "",
			last_name: "",
			phone: "",
			subject: "",
			message: ""
		});

		notify();

		setSendButton(!sendButton);

		try {
			await axios.post(API_URL, {
				chat_id: CHAT_ID,
				parse_mode: "html",
				text: messageModel()
			});

			setIsSend(!isSend);

			setInterval(() => {
				setIsSend(isSend);
			}, 6000);

			setSendButton(sendButton);
		} catch (err) {
			console.log(err);
		}
	}

	const intl: any = useIntl();

	return (
		<>
			<div className={className}>
				<form className={scss.form} onSubmit={sendData}>
					<div className={scss.container}>
						<div className={scss.titles}>
							<h2>
								<FormattedMessage id="page.contact.left.title" />
							</h2>
							<p>
								<FormattedMessage id="page.contact.left.text" />
							</p>
						</div>
						<div className={scss.inputs}>
							<div className={scss.inputBx}>
								<input
									type="text"
									name="first_name"
									aria-labelledby="first_name"
									id="first_name"
									className={scss.input__field}
									value={formData.first_name}
									onChange={handleChange}
									required
								/>
								<label htmlFor="first_name">
									<FormattedMessage id="page.contact.input.fitst.name" />
								</label>
							</div>

							<div className={scss.inputBx}>
								<input
									type="text"
									name="last_name"
									aria-labelledby="last_name"
									id="last_name"
									className={scss.input__field}
									value={formData.last_name}
									onChange={handleChange}
									required
								/>
								<label htmlFor="last_name">
									<FormattedMessage id="page.contact.input.last.name" />
								</label>
							</div>

							<div className={scss.inputBx}>
								<input
									type="text"
									name="phone"
									aria-label="phone_input"
									id="phone_input"
									className={scss.input__field}
									value={formData.phone || "+996"}
									maxLength={13}
									onChange={handleChange}
									required={!formData.phone || formData.phone.length < 13}
								/>
								<label htmlFor="phone">
									<FormattedMessage id="page.contact.input.phone" />
								</label>
							</div>

							<div className={scss.inputBx}>
								<input
									type="text"
									name="subject"
									aria-labelledby="subject"
									id="subject"
									className={scss.input__field}
									value={formData.subject}
									onChange={handleChange}
									required
								/>
								<label htmlFor="subject">
									<FormattedMessage id="page.contact.input.subject" />
								</label>
							</div>

							<div className={scss.textareaBx}>
								<textarea
									name="message"
									aria-labelledby="message"
									id="message"
									className={scss.message}
									placeholder={intl.formatMessage({
										id: "page.contact.input.message"
									})}
									value={formData.message}
									onChange={handleChange}
								/>
							</div>
						</div>
						<button
							disabled={sendButton}
							className={`${scss.button} ${sendButton ? scss.loading : null}`}
						>
							{sendButton ? (
								<FormattedMessage id="page.contact.sending" />
							) : (
								<FormattedMessage id="page.contact.send" />
							)}
						</button>
						<ToastContainer
							position="top-center"
							autoClose={5000}
							hideProgressBar={false}
							newestOnTop={false}
							closeOnClick
							rtl={false}
							pauseOnFocusLoss
							draggable
							pauseOnHover
							theme="dark"
						/>
					</div>
				</form>
			</div>
		</>
	);
};

export default ContactForm;
