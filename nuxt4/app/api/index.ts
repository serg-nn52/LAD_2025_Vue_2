export const useCustomFetch = async<T> (url: string, options?: object)=> {
    const { data, pending, error, status, execute } = await useFetch<T>(url, {
    baseURL: 'https://jsonplaceholder.typicode.com/',
    timeout: 1000,
    ...options    
})
    return {
        data, pending, error, status, execute
    }
}