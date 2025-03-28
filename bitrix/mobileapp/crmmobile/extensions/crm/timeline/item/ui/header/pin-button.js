/**
 * @module crm/timeline/item/ui/header/pin-button
 */
jn.define('crm/timeline/item/ui/header/pin-button', (require, exports, module) => {
	const AppTheme = require('apptheme');

	class PinButton extends LayoutComponent
	{
		constructor(props)
		{
			super(props);

			this.state = {
				pinned: props.pinned,
			};
		}

		componentWillReceiveProps(props)
		{
			this.state.pinned = props.pinned;
		}

		render()
		{
			return View(
				{
					testId: this.props.testId,
					style: {
						paddingVertical: 10,
						paddingHorizontal: 13,
						justifyContent: 'center',
						alignItems: 'center',
					},
					onClick: () => {
						if (this.props.isReadonly)
						{
							return;
						}

						this.setState({ pinned: !this.state.pinned });
						if (this.props.onClick)
						{
							this.props.onClick();
						}
					},
				},
				Image({
					tintColor: AppTheme.colors.base3,
					svg: {
						content: this.state.pinned ? SvgIcons.Unpin : SvgIcons.Pin,
					},
					style: {
						width: this.state.pinned ? 11 : 16,
						height: this.state.pinned ? 20 : 16,
					},
				}),
			);
		}
	}

	const SvgIcons = {
		Pin: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5299 4.60837C15.9352 5.01461 15.9142 5.69281 15.483 6.12318C15.0517 6.55355 14.3735 6.57312 13.9682 6.16689L13.2122 5.41083L8.40235 11.717L9.14048 12.4551C9.51911 12.8655 9.48704 13.5218 9.06788 13.9409C8.64873 14.3601 7.99245 14.3921 7.58206 14.0135L5.77909 12.2139L1.13374 15.7125C1.06466 15.7897 0.960695 15.8247 0.863784 15.8034C0.766874 15.7821 0.693009 15.708 0.671994 15.611C0.650978 15.514 0.686278 15.4101 0.763651 15.3413L4.21056 10.6431L2.44353 8.87723C2.0572 8.46795 2.08614 7.80535 2.5088 7.38297C2.93145 6.9606 3.59405 6.93214 4.00304 7.31878L4.74117 8.05692L11.0484 3.24705L10.2976 2.49626C9.91128 2.08698 9.94022 1.42437 10.3629 1.002C10.7855 0.579627 11.4481 0.551162 11.8571 0.937808L15.5299 4.60837Z" fill="${AppTheme.colors.base4}"/></svg>`,
		Unpin: `<svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.16362 0.853389C8.73746 0.854045 9.20215 1.34848 9.20153 1.95773C9.20091 2.56699 8.73522 3.06036 8.16138 3.0597L7.09215 3.0597L8.1502 10.9199H9.19407C9.752 10.9423 10.1934 11.4291 10.1934 12.0219C10.1934 12.6146 9.75199 13.1014 9.19407 13.1238L6.64666 13.1262L5.83577 18.8848C5.8415 18.9882 5.79274 19.0865 5.70916 19.14C5.62558 19.1935 5.52096 19.1933 5.43752 19.1396C5.35408 19.0859 5.30558 18.9874 5.31159 18.884L4.42684 13.1246L1.92868 13.1254C1.36609 13.1092 0.918027 12.6202 0.918229 12.0227C0.918431 11.4251 1.36683 10.9365 1.92943 10.9207H2.97331L4.0321 3.0597L2.97032 3.0597C2.40774 3.04347 1.95967 2.55448 1.95987 1.95695C1.96007 1.35942 2.40847 0.870771 2.97107 0.854973L8.16362 0.853389Z" fill="${AppTheme.colors.base4}"/></svg>`,
	};

	module.exports = { PinButton };
});
