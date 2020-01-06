import AMap from 'AMap'
const location = (options = {}) => {
    return new Promise((resolve, reject) => {
        AMap.plugin('AMap.Geolocation', function() {
            var geolocation = new AMap.Geolocation({
                // 是否使用高精度定位，默认：true
                enableHighAccuracy: true,
                // 设置定位超时时间，默认：无穷大
                timeout: 1000,
                ...options
            })
            console.log(resolve,reject)
            geolocation.getCurrentPosition()
            AMap.event.addListener(geolocation, 'complete', resolve)
            AMap.event.addListener(geolocation, 'error', reject)
        })
    })
}
const Autocomplete = (keyword, city = '全国') => {
    return new Promise((resolve, reject) => {
        AMap.plugin('AMap.Autocomplete', function() {
            // 实例化Autocomplete
            var autoOptions = {
                //city 限定城市，默认全国
                city: city
            }
            var autoComplete = new AMap.Autocomplete(autoOptions);
            autoComplete.search(keyword, function(status, result) {
                if (typeof result == 'object') {
                    resolve(result)
                } else {
                    reject(status)
                }
            })
        })
    })

}
export default { location, Autocomplete }