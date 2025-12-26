function FindProxyForURL(url, host) {

    // ===== ИСКЛЮЧЕНИЯ (.ru и локальные) =====
    if (
        dnsDomainIs(host, ".ru") ||
        shExpMatch(host, "*.ru") ||
        dnsDomainIs(host, ".vk.com") ||
        shExpMatch(host, "*.vk.com") ||
        isPlainHostName(host) ||
        shExpMatch(host, "localhost") ||
        shExpMatch(host, "127.*") ||
        shExpMatch(host, "10.*") ||
        shExpMatch(host, "192.168.*")
    ) {
        return "DIRECT";
    }

    // ===== ОСНОВНОЙ ПРОКСИ =====
    return "PROXY 147.45.242.78:32101";
}
