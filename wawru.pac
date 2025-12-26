function FindProxyForURL(url, host) {

    // локальные адреса — напрямую
    if (
        isPlainHostName(host) ||
        shExpMatch(host, "localhost") ||
        shExpMatch(host, "127.*") ||
        shExpMatch(host, "10.*") ||
        shExpMatch(host, "192.168.*")
    ) {
        return "DIRECT";
    }

    // прокси ТОЛЬКО для .ru
    if (
        dnsDomainIs(host, ".ru") ||
        shExpMatch(host, "*.ru")
    ) {
        return "PROXY 147.45.242.78:32101";
    }

    return "DIRECT";
}
