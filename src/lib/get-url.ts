export function getUrl(path?: string) {
    // Define a URL base a partir de uma variável de ambiente ou usa uma string vazia como padrão
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || ""
    // Normaliza o caminho fornecido para garantir que ele comece com uma barra, a menos que seja nulo, nesse caso usa '/'
    const normalizedPath = path && !path.startsWith('/') ? `/${path}` : path || '/'
    // Retorna a URL completa concatenando a URL base com o caminho normalizado
    return `${baseUrl}${normalizedPath}`;
}