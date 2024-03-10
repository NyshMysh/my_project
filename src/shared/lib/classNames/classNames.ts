
type Mode = Record<string, string | boolean>

export function classNames(cls: string, mode: Mode = {}, additional: string[] = []): string {
    return [
        cls,
        ...additional.filter(Boolean),
        Object.entries(mode)
            .filter(([cls, value]) => Boolean(value))
            .map(([cls, value]) => cls)
    ]
        .join(' ')
}