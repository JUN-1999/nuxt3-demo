// composables/getData.ts
import type { LocationQuery } from 'vue-router';
import type { NitroFetchRequest } from 'nitropack';
import type { FetchOptions } from 'ofetch';

// import fs from 'fs';

interface Params {
    url: NitroFetchRequest;
    opts?: FetchOptions<any>;
    method?: 'get' | 'post';
}
interface IReturn {
    data: any,
    errno: number,
    errmsg: string
}

export async function request({ url, opts = {}, method = 'get' }: Params): Promise<IReturn> {
    // 接口传参要求
    interface QueryItem {
        uid?: string;
        token?: LocationQuery;
    }
    const route = useRoute();
    const query: QueryItem = route.query;

    const config = useRuntimeConfig();
    debugger
    const { data } = await useFetch(url, {
        // method此处仅仅只处理了get与post请求
        method,
        // ofetch库会自动识别请求地址，对于url已包含域名的请求不会再拼接baseURL
        baseURL: config.public.apiBase + url,
        // onRequest相当于请求拦截
        onRequest({ request, options }) {
            // 设置请求头
            options.headers = { ...options.headers, authorization: 'xxx' };
            // 设置请求参数
            if (method === 'post') {
                options.body = { ...opts };
                options.query = query;
            } else {
                options.query = Object.assign(query, { ...opts });
            }
        },
        // onResponse相当于响应拦截
        onResponse({ response }) {
            // 处理响应数据
            if (response._data.error) {
                console.warn('=== error url: ', url, '\n params:', opts, '\n response:', response._data);
                // 采用vant组件弹出报错弹窗
                console.log('response._data.message');

                // 处理服务端渲染时接口报错，可接入日志系统或者邮件系统，此处测试demo采取写入文件系统
                // fs.writeFileSync('error.txt', `error url:${url}\n response:${response._data.message}\n`, { flag: 'a' });
            } else {
                // 这里可以根据后端返回的数据结构对返回数据进行处理，比如后端数据返回得比较深还有一层data结构，我这里就统一取出来，在后续接口请求的时候就直接能拿到了
                // response._data = response._data.data;
                return response;
            }
        },
        onRequestError({ request, options, error }) {
            // 处理请求错误
            console.warn('request error', error);
        },
        onResponseError({ request, response, options }) {
            // 处理响应错误
            console.warn('request error', response);
        },
    });
    // 这里data本身是个ref对象，将其内部值抛出去方便调用时获得数据。
    return data.value as IReturn;
}
