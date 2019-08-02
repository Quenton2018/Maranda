import moment from 'moment'

export const toDate = function (dateString, format = 'YYYY-MM-DD HH:mm:ss') {
	let date = null
    if (/^\d{4}\d{2}\d{2}$/.test(dateString)) {
        dateString += '000000'
    }
    if (/^(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})$/.test(dateString)) {
	    let v = /^(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})$/.exec(dateString)
	    v.shift()
	    date = new Date(v[0], v[1] - 1, v[2], v[3], v[4], v[5])
    }
    if (date) {
        return format ? moment(date).format(format) : date
    }
    return ''
}
export const format = function (date, format = 'YYYY-MM-DD HH:mm:ss') {
	return date ? moment(date).format(format) : ''
}
export const day235959 = function (date) {
	return date ? moment(date).set({
        hour: 23,
        minute: 59,
        second: 59,
        millisecond: 0
    }).toDate() : ''
}
export const day000000 = function (date) {
	return date ? moment(new Date(date)).set({
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0
    }).toDate() : ''
}