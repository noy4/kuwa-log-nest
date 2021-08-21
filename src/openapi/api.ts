/* tslint:disable */
/* eslint-disable */
/**
 * Todos
 * Todosだよん
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface CreateTodoDto
 */
export interface CreateTodoDto {
    /**
     * 
     * @type {string}
     * @memberof CreateTodoDto
     */
    title: string;
    /**
     * 
     * @type {boolean}
     * @memberof CreateTodoDto
     */
    done: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof CreateTodoDto
     */
    tags: Array<string>;
    /**
     * 
     * @type {Todo}
     * @memberof CreateTodoDto
     */
    parent?: Todo;
}
/**
 * 
 * @export
 * @interface Todo
 */
export interface Todo {
    /**
     * 
     * @type {string}
     * @memberof Todo
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof Todo
     */
    title: string;
    /**
     * 
     * @type {boolean}
     * @memberof Todo
     */
    done: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof Todo
     */
    tags: Array<string>;
    /**
     * 
     * @type {Todo}
     * @memberof Todo
     */
    parent?: Todo;
}

/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        appControllerGetHello: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {object} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        dogsControllerCreate: async (body: object, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('dogsControllerCreate', 'body', body)
            const localVarPath = `/dogs`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        dogsControllerFindAll: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/dogs`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        dogsControllerFindOne: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('dogsControllerFindOne', 'id', id)
            const localVarPath = `/dogs/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        dogsControllerRemove: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('dogsControllerRemove', 'id', id)
            const localVarPath = `/dogs/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {object} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        dogsControllerUpdate: async (id: string, body: object, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('dogsControllerUpdate', 'id', id)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('dogsControllerUpdate', 'body', body)
            const localVarPath = `/dogs/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {CreateTodoDto} createTodoDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        todosControllerCreate: async (createTodoDto: CreateTodoDto, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'createTodoDto' is not null or undefined
            assertParamExists('todosControllerCreate', 'createTodoDto', createTodoDto)
            const localVarPath = `/todos`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createTodoDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        todosControllerDelete: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('todosControllerDelete', 'id', id)
            const localVarPath = `/todos/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        todosControllerDeleteAll: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/todos`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        todosControllerFindAll: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/todos`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        todosControllerFindById: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('todosControllerFindById', 'id', id)
            const localVarPath = `/todos/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {Todo} todo 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        todosControllerUpdate: async (todo: Todo, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'todo' is not null or undefined
            assertParamExists('todosControllerUpdate', 'todo', todo)
            const localVarPath = `/todos`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(todo, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DefaultApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async appControllerGetHello(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.appControllerGetHello(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {object} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async dogsControllerCreate(body: object, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.dogsControllerCreate(body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async dogsControllerFindAll(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.dogsControllerFindAll(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async dogsControllerFindOne(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.dogsControllerFindOne(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async dogsControllerRemove(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.dogsControllerRemove(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} id 
         * @param {object} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async dogsControllerUpdate(id: string, body: object, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.dogsControllerUpdate(id, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {CreateTodoDto} createTodoDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async todosControllerCreate(createTodoDto: CreateTodoDto, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Todo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.todosControllerCreate(createTodoDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async todosControllerDelete(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.todosControllerDelete(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async todosControllerDeleteAll(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.todosControllerDeleteAll(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async todosControllerFindAll(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Todo>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.todosControllerFindAll(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async todosControllerFindById(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Todo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.todosControllerFindById(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {Todo} todo 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async todosControllerUpdate(todo: Todo, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Todo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.todosControllerUpdate(todo, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DefaultApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        appControllerGetHello(options?: any): AxiosPromise<void> {
            return localVarFp.appControllerGetHello(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {object} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        dogsControllerCreate(body: object, options?: any): AxiosPromise<void> {
            return localVarFp.dogsControllerCreate(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        dogsControllerFindAll(options?: any): AxiosPromise<void> {
            return localVarFp.dogsControllerFindAll(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        dogsControllerFindOne(id: string, options?: any): AxiosPromise<void> {
            return localVarFp.dogsControllerFindOne(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        dogsControllerRemove(id: string, options?: any): AxiosPromise<void> {
            return localVarFp.dogsControllerRemove(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id 
         * @param {object} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        dogsControllerUpdate(id: string, body: object, options?: any): AxiosPromise<void> {
            return localVarFp.dogsControllerUpdate(id, body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {CreateTodoDto} createTodoDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        todosControllerCreate(createTodoDto: CreateTodoDto, options?: any): AxiosPromise<Todo> {
            return localVarFp.todosControllerCreate(createTodoDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        todosControllerDelete(id: string, options?: any): AxiosPromise<void> {
            return localVarFp.todosControllerDelete(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        todosControllerDeleteAll(options?: any): AxiosPromise<void> {
            return localVarFp.todosControllerDeleteAll(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        todosControllerFindAll(options?: any): AxiosPromise<Array<Todo>> {
            return localVarFp.todosControllerFindAll(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        todosControllerFindById(id: string, options?: any): AxiosPromise<Todo> {
            return localVarFp.todosControllerFindById(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {Todo} todo 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        todosControllerUpdate(todo: Todo, options?: any): AxiosPromise<Todo> {
            return localVarFp.todosControllerUpdate(todo, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public appControllerGetHello(options?: any) {
        return DefaultApiFp(this.configuration).appControllerGetHello(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {object} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public dogsControllerCreate(body: object, options?: any) {
        return DefaultApiFp(this.configuration).dogsControllerCreate(body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public dogsControllerFindAll(options?: any) {
        return DefaultApiFp(this.configuration).dogsControllerFindAll(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public dogsControllerFindOne(id: string, options?: any) {
        return DefaultApiFp(this.configuration).dogsControllerFindOne(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public dogsControllerRemove(id: string, options?: any) {
        return DefaultApiFp(this.configuration).dogsControllerRemove(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} id 
     * @param {object} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public dogsControllerUpdate(id: string, body: object, options?: any) {
        return DefaultApiFp(this.configuration).dogsControllerUpdate(id, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {CreateTodoDto} createTodoDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public todosControllerCreate(createTodoDto: CreateTodoDto, options?: any) {
        return DefaultApiFp(this.configuration).todosControllerCreate(createTodoDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public todosControllerDelete(id: string, options?: any) {
        return DefaultApiFp(this.configuration).todosControllerDelete(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public todosControllerDeleteAll(options?: any) {
        return DefaultApiFp(this.configuration).todosControllerDeleteAll(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public todosControllerFindAll(options?: any) {
        return DefaultApiFp(this.configuration).todosControllerFindAll(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public todosControllerFindById(id: string, options?: any) {
        return DefaultApiFp(this.configuration).todosControllerFindById(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {Todo} todo 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public todosControllerUpdate(todo: Todo, options?: any) {
        return DefaultApiFp(this.configuration).todosControllerUpdate(todo, options).then((request) => request(this.axios, this.basePath));
    }
}


