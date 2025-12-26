function FindProxyForURL(url, host) {

    // ===== ПРОКСИ ТОЛЬКО ДЛЯ .ru =====
    if (
        dnsDomainIs(host, ".ru") ||
        shExpMatch(host, "*.ru")
    ) {
        return "PROXY 147.45.242.78:32101";
    }

    // ===== ВСЁ ОСТАЛЬНОЕ НАПРЯМУЮ =====
    return "DIRECT";
}
