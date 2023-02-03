export const importFunction = (language: string, namespace: string) => import(`./locates/${language}/${namespace}.json`)
