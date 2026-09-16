const assetBasePath = process.env.NEXT_PUBLIC_BASE_PATH
	|| (process.env.GITHUB_ACTIONS === 'true' ? '/LabelMK' : '');

export const assetPath = (path) => `${assetBasePath}${path}`;