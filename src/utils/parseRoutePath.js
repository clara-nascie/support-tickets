export function parseRoutePath(path) {
    //expressão regular para encontrar parâmetros de rota
    const routeParameterRegex = /:([a-zA-Z]+)/g

    //substitui os parâmetros de rota por grupos de captura
    const params = path.replaceAll(routeParameterRegex, "(?<$1>[a-z0-9\\-_]+)")

    //cria uma expressão regular para encontrar parâmetros de rota
    const pathRegex = new RegExp(`^${params}(?<query>\\?(.*))?$`)

    //retorna a expressão regular
    return pathRegex
}
    