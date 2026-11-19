const assetBasePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const assetPath = (path) => `${assetBasePath}${path}`;