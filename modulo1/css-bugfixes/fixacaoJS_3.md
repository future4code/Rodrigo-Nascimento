```
function calculaNota(ex, p1, p2) {
    const mediaPonderada = (3 * p2 + 2 * p1 + 1 * ex) / 6
    if (mediaPonderada >= 9) {
        return "A"
    } else if (mediaPonderada >= 7.5) {
        return "B"
    } else if (mediaPonderada >= 6) {
        return "C"
    } else {
        return "D"
    }
}
```