import React, { FC, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import scss from "./Contact.module.scss";

import { sendContactForm } from "../../../sms/lib/api";

interface ContactFormValues {
	first_name: string;
	last_name: string;
	phone: string;
	subject: string;
	message: string;
}

interface ContactFormState {
	isLoading: boolean;
	error: string;
	values: ContactFormValues;
}

const initValues: ContactFormValues = {
	first_name: "",
	last_name: "",
	phone: "",
	subject: "",
	message: ""
};

const initState: ContactFormState = {
	isLoading: false,
	error: "",
	values: initValues
};

interface ContactFormProps {
	className?: any;
}

const ContactForm: FC<ContactFormProps> = ({ className }) => {
	const [state, setState]: any = useState(initState);
	const [touched, setTouched]: any = useState({});

	const { values, isLoading, error }: any = state;

	const onBlur = ({ target }: any) =>
		// @ts-ignore
		setTouched((prev) => ({ ...prev, [target.name]: true }));

	const handleChange = ({ target }: any) =>
		setState((prev: ContactFormState): any => ({
			...prev,
			values: {
				...prev.values,
				[target.name]: target.value
			}
		}));

	const onSubmit = async (event: any) => {
		event.preventDefault();
		// @ts-ignore
		setState((prev) => ({ ...prev, isLoading: true }));
		try {
			await sendContactForm(values);
			setTouched({});
			setState(initState);
			notify();
		} catch (error) {
			// @ts-ignore
			setState((prev) => ({ ...prev, isLoading: false, error: error.message }));
			setTimeout(() => {
				// @ts-ignore
				setState((prev) => ({ ...prev, error: "" }));
			}, 3000);
		}
	};

	const handleKeyPress = (event: any): void => {
		const pattern: RegExp = /[0-9+]/;
		const inputChar: string = String.fromCharCode(event.charCode);

		if (!pattern.test(inputChar)) {
			event.preventDefault();
		}
	};

	const notify = () => {
		toast.success("Ваша форма успешно отправлена!", {
			position: "bottom-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "dark"
		});
	};

	return (
		<>
			<div className={className}>
				<form className={scss.form} onSubmit={onSubmit}>
					<div className={scss.container}>
						<div className={scss.titles}>
							<h2>Хотите записаться на прием?</h2>
							<p>Оставьте свои контакты и наш менеджер свяжется с вами.</p>
							{error && <pre className={scss.error__message}>{error}</pre>}
						</div>
						<div className={scss.inputs}>
							<div className={scss.inputBx}>
								<input
									type="text"
									name="first_name"
									className={`${scss.input__field} ${
										touched.first_name && !values.first_name ? scss.error : null
									}`}
									value={values.first_name}
									onChange={handleChange}
									onBlur={onBlur}
									required
								/>
								<label>Ваше имя*</label>
								{touched.first_name && !values.first_name && (
									<p className={scss.error}>обязательное поле</p>
								)}
							</div>

							<div className={scss.inputBx}>
								<input
									type="text"
									name="last_name"
									className={`${scss.input__field} ${
										touched.last_name && !values.last_name ? scss.error : null
									}`}
									value={values.last_name}
									onChange={handleChange}
									onBlur={onBlur}
									required
								/>
								<label>Ваша фамилия*</label>
								{touched.last_name && !values.last_name && (
									<p className={scss.error}>обязательное поле</p>
								)}
							</div>

							{/*<div className={scss.inputBx}>*/}
							{/*	<label>Email</label>*/}
							{/*	<input*/}
							{/*		type="email"*/}
							{/*		name="email"*/}
							{/*		placeholder="Адрес электронной почты*"*/}
							{/*		className={`${scss.input__field} ${*/}
							{/*			touched.email && !values.email.match(/^\S+@\S+\.\S+$/)*/}
							{/*				? scss.error*/}
							{/*				: null*/}
							{/*		}`}*/}
							{/*		value={values.email}*/}
							{/*		onChange={handleChange}*/}
							{/*		onBlur={onBlur}*/}
							{/*      required*/}
							{/*	/>*/}
							{/*	{touched.email && !values.email.match(/^\S+@\S+\.\S+$/) && (*/}
							{/*		<p className={scss.error}>*/}
							{/*			Пожалуйста, введите действительный адрес электронной почты*/}
							{/*		</p>*/}
							{/*	)}*/}
							{/*</div>*/}

							<div className={scss.inputBx}>
								<input
									type="text"
									name="phone"
									aria-label="phone-input"
									className={`${scss.input__field} ${
										touched.phone && !values.phone.match(/^\+?\d{12,13}$/)
											? scss.error
											: null
									}`}
									value={values.phone || "+996"}
									maxLength={13}
									onChange={handleChange}
									onBlur={onBlur}
									onKeyPress={handleKeyPress}
									required={!values.phone || values.phone.length < 13}
								/>
								<label>Номер телефона*</label>
								{touched.phone && !values.phone.match(/^\+?\d{12,13}$/) && (
									<p className={scss.error}>
										Пожалуйста, введите действующий телефонный номер
									</p>
								)}
							</div>

							<div className={scss.inputBx}>
								<input
									type="text"
									name="subject"
									className={`${scss.input__field} ${
										touched.subject && !values.subject ? scss.error : null
									}`}
									value={values.subject}
									onChange={handleChange}
									onBlur={onBlur}
									required
								/>
								<label>Тема для обращения*</label>
								{touched.subject && !values.subject && (
									<p className={scss.error}>обязательное поле</p>
								)}
							</div>

							<div className={scss.textareaBx}>
								<textarea
									name="message"
									className={`${scss.message}`}
									placeholder="Опишите свою проблему в свободной форме*"
									value={values.message}
									onChange={handleChange}
									onBlur={onBlur}
								/>
							</div>
						</div>
						<button
							disabled={isLoading}
							className={`${scss.button} ${isLoading ? scss.loading : null}`}
						>
							{isLoading ? "Отправка..." : "Отправить"}
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
