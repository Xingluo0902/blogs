export function judgeCurrentRoute(path) {
    return this.$route.path.indexOf(path) !== -1
}