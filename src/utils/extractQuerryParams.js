export function extractQueryParams(query) {
    //se não veio nenhuma query (link normal sem ?), devolve vazio
    if (!query || query.length === 1) {
        return {}
    }

    //remove o ? do início da string
    return query
    .slice(1)
    //divide a string em um array de strings
    .split('&')
    //transforma o array em um objeto
    .reduce((queryParams, param) => {
        const [key, value] = param.split('=')
        queryParams[key] = value
        return queryParams
    }, {})
}