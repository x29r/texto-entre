String.prototype.textoentre = function(inicio = '', final = '') {
    const texto = this, search = {}
    search.len = texto.length
    search.iln = inicio.length
    search.fln = final.length
    if (search.iln > 0 && search.fln > 0 && search.len > (search.iln + search.fln + 1)) {
        search.ips = texto.indexOf(inicio)
        search.fps = texto.indexOf(final, (search.ips + search.iln))
        if (search.ips !== -1 && search.fps !== -1 && search.ips < search.fps) {
            search.sln = search.fps - search.ips
            search.txt = texto.substring((search.ips + search.iln), (search.ips + search.sln))
        } else {
            search.txt = null
        }
    } else {
        search.txt = null
    }
    return search.txt
}