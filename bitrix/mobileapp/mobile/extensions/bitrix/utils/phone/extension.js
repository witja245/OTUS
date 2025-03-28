/**
 * @module utils/phone
 */
jn.define('utils/phone', (require, exports, module) => {
	const { phoneUtils } = require('native/phonenumber');
	const { stringify } = require('utils/string');
	const storageKey = 'PhoneDefaultCountryCode';
	const storage = Application.storageById(storageKey);

	/**
	 * Returns the phone number formatted according
	 * to the passed countryCode or determines
	 * it by phone number and server settings
	 * @param phoneNumber
	 * @param countryCode
	 * @returns {String|String|*}
	 */
	const getFormattedNumber = (phoneNumber, countryCode = null) => {
		const phone = stringify(phoneNumber);
		if (phone === '')
		{
			return phone;
		}

		const code = countryCode || getCountryCode(phone);
		const formattedNumber = phoneUtils.getFormattedNumber(phone, code);

		return formattedNumber || phoneNumber;
	};

	/**
	 * Getting the default country code from storage
	 * @returns {any}
	 */
	const getMainDefaultCountryCode = () => storage.get(storageKey);

	/**
	 * Determining the country code by phone number
	 * @param {String} phoneNumber
	 * @param {String} defaultCountry
	 * @returns {String}
	 */
	const getCountryCode = (phoneNumber, defaultCountry) => {
		const phone = stringify(phoneNumber);
		const defaultCountryCode = defaultCountry || getMainDefaultCountryCode();

		return phone.startsWith('+')
			? phoneUtils.getCountryCode(phone) || defaultCountryCode
			: defaultCountryCode;
	};

	/**
	 * Checks string is phone number
	 * Supported formats:
	 * +79999999999
	 * 89999999999
	 * +1 555-555-5555
	 * +7 (495) 123-45-67
	 * 495 123-4567
	 * 495 123 4567
	 * 495-123-4567
	 * 495.123.4567
	 * @param {String} phoneNumber
	 * @returns {Boolean}
	 */
	const isPhoneNumber = (phoneNumber) => {
		const phone = stringify(phoneNumber);
		if (phone === '')
		{
			return false;
		}
		const pattern = /^\+?\d{1,3}?[\s.-]?\(?\d{1,3}?\)?(?:[\s.-]?\d{1,4}){2}[\s.-]?\d{1,9}$/;

		return pattern.test(phone);
	};

	/**
	 * Getting the default country code from the server to format the phone number
	 * @returns {Promise}
	 */
	const fetchDefaultCountryCode = () => {
		return new Promise((resolve, reject) => {
			const defaultCountryCode = storage.get(storageKey);

			if (defaultCountryCode)
			{
				resolve(defaultCountryCode);

				return;
			}

			BX.ajax.runAction('mobile.main.phone.getDefaultCountry', {})
				.then(({ data }) => {
					const countryCode = data || Application.getLang().toUpperCase();
					storage.set(storageKey, countryCode);
					resolve(countryCode);
				})
				.catch((response) => {
					reject(response.errors);
				});
		});
	};

	fetchDefaultCountryCode();

	module.exports = { getMainDefaultCountryCode, getFormattedNumber, getCountryCode, isPhoneNumber };
});
