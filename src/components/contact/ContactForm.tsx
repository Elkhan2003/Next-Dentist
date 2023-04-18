import React, { FC, ReactNode, useState } from "react";
import scss from "./Contact.module.scss";

import { sendContactForm } from "../../../sms/lib/api";

interface ContactFormValues {
	first_name: string;
	last_name: string;
	email: string;
	subject: string;
	message: string;
	phone: string;
}

interface ContactFormState {
	isLoading: boolean;
	error: string;
	values: ContactFormValues;
}

const initValues: ContactFormValues = {
	first_name: "",
	last_name: "",
	email: "",
	subject: "",
	message: "",
	phone: ""
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

	const onSubmit = async () => {
		// @ts-ignore
		setState((prev) => ({ ...prev, isLoading: true }));
		try {
			await sendContactForm(values);
			setTouched({});
			setState(initState);
			alert("Message sent.");
		} catch (error) {
			// @ts-ignore
			setState((prev) => ({ ...prev, isLoading: false, error: error.message }));
		}
	};

	const handleKeyPress = (event: any): void => {
		const pattern: RegExp = /[0-9+]/;
		const inputChar: string = String.fromCharCode(event.charCode);

		if (!pattern.test(inputChar)) {
			event.preventDefault();
		}
	};

	return (
		<>
			<div className={className}>
				<div className={scss.form}>
					<div className={scss.container}>
						<h1>Contact</h1>
						{error && <p className={scss.error__message}>{error}</p>}
						<div className={scss.input}>
							<label>First Name</label>
							<input
								type="text"
								name="first_name"
								className={`${scss.input__field} ${
									touched.first_name && !values.first_name ? scss.error : null
								}`}
								value={values.first_name}
								onChange={handleChange}
								onBlur={onBlur}
							/>
							{touched.first_name && !values.first_name && (
								<p className={scss.error}>Required</p>
							)}
						</div>

						<div className={scss.input}>
							<label>Last Name</label>
							<input
								type="text"
								name="last_name"
								className={`${scss.input__field} ${
									touched.last_name && !values.last_name ? scss.error : null
								}`}
								value={values.last_name}
								onChange={handleChange}
								onBlur={onBlur}
							/>
							{touched.last_name && !values.last_name && (
								<p className={scss.error}>Required</p>
							)}
						</div>

						<div className={scss.input}>
							<label>Email</label>
							<input
								type="email"
								name="email"
								className={`${scss.input__field} ${
									touched.email && !values.email.match(/^\S+@\S+\.\S+$/)
										? scss.error
										: null
								}`}
								value={values.email}
								onChange={handleChange}
								onBlur={onBlur}
							/>
							{touched.email && !values.email.match(/^\S+@\S+\.\S+$/) && (
								<p className={scss.error}>Please enter a valid email address</p>
							)}
						</div>

						<div className={scss.input}>
							<label>Phone</label>
							<input
								type="text"
								name="phone"
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
							/>
							{touched.phone && !values.phone.match(/^\+?\d{12,13}$/) && (
								<p className={scss.error}>Please enter a valid email address</p>
							)}
						</div>

						<div className={scss.input}>
							<label>Subject</label>
							<input
								type="text"
								name="subject"
								className={`${scss.input__field} ${
									touched.subject && !values.subject ? scss.error : null
								}`}
								value={values.subject}
								onChange={handleChange}
								onBlur={onBlur}
							/>
							{touched.subject && !values.subject && (
								<p className={scss.error}>Required</p>
							)}
						</div>

						<div className={scss.input}>
							<label>Message</label>
							<textarea
								name="message"
								className={`${scss.input__field} ${
									touched.message && !values.message ? scss.error : null
								}`}
								value={values.message}
								onChange={handleChange}
								onBlur={onBlur}
							/>
							{touched.message && !values.message && (
								<p className={scss.error}>Required</p>
							)}
						</div>
						<button
							disabled={isLoading}
							className={`${scss.button} ${isLoading ? scss.loading : null}`}
							onClick={onSubmit}
						>
							{isLoading ? "Sending..." : "Send Message"}
						</button>
					</div>
				</div>
			</div>
		</>
	);
};
export default ContactForm;
