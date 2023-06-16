import {mock} from "../configs";
import {sleep} from "../business/helpers/util";
import {ERROR} from "../business/constants";

export const fetchApi = async ({
                                   url,
                                   param = {},
                                   formData = null,
                                   mockData = false,
                                   headers = {},
                                   method = 'POST'
                               }) => {
    let response;

    if (!url && !mockData) return null;

    if (mock.useMockData && mockData) {
        await sleep(mock.mockFetchDuration);
        response = mockData;
    } else {
        response = await apiCall({url, param, formData, method, headers})
    }

    return response
}

const apiCall = async ({url, param, formData, headers, method}) => {
    let options = {
        method,
        referrer: '',
        headers: {
            ...headers,
            Accept: 'application/json'
        },
        body: method === 'GET' ? undefined : (formData ? formData : JSON.stringify(param))
    }

    if (!formData) {
        options.headers['Content-Type'] = 'application/json'
    }

    let fullUrl = url.includes('://') ? url : `${process.env.REACT_APP_API_BASE}${url}`
    fullUrl = fullUrl.replace(/\/\s*$/, '')
    fullUrl += '?key=' + process.env.REACT_APP_API_KEY

    const response = await fetch(fullUrl, options).catch(handleErr)
    const success = response.status && response.status >= 200 && response.status < 300
    const result = await response.json().catch((err) => handleErrJson(err, success))

    return Promise.resolve(result)
}

const handleErr = (err) => {
    console.warn(err)
    return new Response(
        JSON.stringify({
            err: ERROR.NETWORK,
            message: err.message
        })
    )
}

const handleErrJson = (err, success) => {
    console.warn(err)
    return success
        ? new Response(
            JSON.stringify({
                success: true
            })
        ).json()
        : new Response(
            JSON.stringify({
                err: ERROR.NETWORK,
                message: err.message
            })
        ).json()
}