(() => {
	const require = (ext) => jn.require(ext);
	const AppTheme = require('apptheme');

	const defaultParams = {
		useLargeTitleMode: false,
		detailTextColor: AppTheme.colors.base4,
	};

	class DetailCardNavigation
	{
		constructor(config)
		{
			this.typeMap = this.prepareTypes(config.types);
		}

		prepareTypes(types)
		{
			const map = new Map();

			types = Array.isArray(types) ? types : [];
			types.forEach((type) => {
				map.set(type.id, type);
			});

			return map;
		}

		getTitleParamsByType(type)
		{
			const typeData = this.typeMap.get(type);
			if (typeData)
			{
				const params = {
					...defaultParams,
					detailText: typeData.name,
				};

				if (typeData.hasOwnProperty('logo'))
				{
					params.imageUrl = typeData.logo;
				}

				if (typeData.hasOwnProperty('svg'))
				{
					let { svg } = typeData;
					if (!svg.includes('http'))
					{
						svg = currentDomain + svg;
					}

					params.svg = { uri: svg };
				}

				return params;
			}

			return { ...defaultParams };
		}
	}

	this.DetailCardNavigation = DetailCardNavigation;
})();
