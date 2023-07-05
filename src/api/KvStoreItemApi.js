/**
 * Fastly API
 * Via the Fastly API you can perform any of the operations that are possible within the management console,  including creating services, domains, and backends, configuring rules or uploading your own application code, as well as account operations such as user administration and billing reports. The API is organized into collections of endpoints that allow manipulation of objects related to Fastly services and accounts. For the most accurate and up-to-date API reference content, visit our [Developer Hub](https://developer.fastly.com/reference/api/) 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: oss@fastly.com
 *
 * NOTE: This class is auto generated.
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import InlineResponse2004 from '../model/InlineResponse2004';

/**
* KvStoreItem service.
* @module api/KvStoreItemApi
* @version 4.4.0
*/
export default class KvStoreItemApi {

    /**
    * Constructs a new KvStoreItemApi. 
    * @alias module:api/KvStoreItemApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;

        if (typeof window === 'undefined' && Boolean(process.env.FASTLY_API_TOKEN)) {
            this.apiClient.authenticate(process.env.FASTLY_API_TOKEN);
        }
    }


    /**
     * Delete an item from an kv store
     * @param {Object} options
     * @param {String} options.store_id
     * @param {String} options.key_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteKeyFromStoreWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'store_id' is set.
      if (options['store_id'] === undefined || options['store_id'] === null) {
        throw new Error("Missing the required parameter 'store_id'.");
      }
      // Verify the required parameter 'key_name' is set.
      if (options['key_name'] === undefined || options['key_name'] === null) {
        throw new Error("Missing the required parameter 'key_name'.");
      }

      let pathParams = {
        'store_id': options['store_id'],
        'key_name': options['key_name']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/resources/stores/kv/{store_id}/keys/{key_name}', 'DELETE',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Delete an item from an kv store
     * @param {Object} options
     * @param {String} options.store_id
     * @param {String} options.key_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteKeyFromStore(options = {}) {
      return this.deleteKeyFromStoreWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * List the keys of all items within an kv store.
     * @param {Object} options
     * @param {String} options.store_id
     * @param {String} [options.cursor]
     * @param {Number} [options.limit=100]
     * @param {String} [options.prefix]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2004} and HTTP response
     */
    getKeysWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'store_id' is set.
      if (options['store_id'] === undefined || options['store_id'] === null) {
        throw new Error("Missing the required parameter 'store_id'.");
      }

      let pathParams = {
        'store_id': options['store_id']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
        'cursor': options['cursor'],
        'limit': options['limit'],
        'prefix': options['prefix']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2004;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/resources/stores/kv/{store_id}/keys', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * List the keys of all items within an kv store.
     * @param {Object} options
     * @param {String} options.store_id
     * @param {String} [options.cursor]
     * @param {Number} [options.limit=100]
     * @param {String} [options.prefix]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2004}
     */
    getKeys(options = {}) {
      return this.getKeysWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Get the value associated with a key.
     * @param {Object} options
     * @param {String} options.store_id
     * @param {String} options.key_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Blob} and HTTP response
     */
    getValueForKeyWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'store_id' is set.
      if (options['store_id'] === undefined || options['store_id'] === null) {
        throw new Error("Missing the required parameter 'store_id'.");
      }
      // Verify the required parameter 'key_name' is set.
      if (options['key_name'] === undefined || options['key_name'] === null) {
        throw new Error("Missing the required parameter 'key_name'.");
      }

      let pathParams = {
        'store_id': options['store_id'],
        'key_name': options['key_name']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/octet-stream'];
      let returnType = 'Blob';
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/resources/stores/kv/{store_id}/keys/{key_name}', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Get the value associated with a key.
     * @param {Object} options
     * @param {String} options.store_id
     * @param {String} options.key_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Blob}
     */
    getValueForKey(options = {}) {
      return this.getValueForKeyWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Set a new value for a new or existing key in an kv store.
     * @param {Object} options
     * @param {String} options.store_id
     * @param {String} options.key_name
     * @param {Number} [options.if_generation_match]
     * @param {Number} [options.time_to_live_sec]
     * @param {String} [options.metadata]
     * @param {Boolean} [options.add]
     * @param {Boolean} [options.append]
     * @param {Boolean} [options.prepend]
     * @param {Boolean} [options.background_fetch]
     * @param {Blob} [options.body]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Blob} and HTTP response
     */
    setValueForKeyWithHttpInfo(options = {}) {
      let postBody = options['body'];
      // Verify the required parameter 'store_id' is set.
      if (options['store_id'] === undefined || options['store_id'] === null) {
        throw new Error("Missing the required parameter 'store_id'.");
      }
      // Verify the required parameter 'key_name' is set.
      if (options['key_name'] === undefined || options['key_name'] === null) {
        throw new Error("Missing the required parameter 'key_name'.");
      }

      let pathParams = {
        'store_id': options['store_id'],
        'key_name': options['key_name']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
        'add': options['add'],
        'append': options['append'],
        'prepend': options['prepend'],
        'background_fetch': options['background_fetch']
      };
      let headerParams = {
        'if-generation-match': options['if_generation_match'],
        'time_to_live_sec': options['time_to_live_sec'],
        'metadata': options['metadata']
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = ['application/octet-stream'];
      let accepts = ['application/octet-stream'];
      let returnType = 'Blob';
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/resources/stores/kv/{store_id}/keys/{key_name}', 'PUT',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Set a new value for a new or existing key in an kv store.
     * @param {Object} options
     * @param {String} options.store_id
     * @param {String} options.key_name
     * @param {Number} [options.if_generation_match]
     * @param {Number} [options.time_to_live_sec]
     * @param {String} [options.metadata]
     * @param {Boolean} [options.add]
     * @param {Boolean} [options.append]
     * @param {Boolean} [options.prepend]
     * @param {Boolean} [options.background_fetch]
     * @param {Blob} [options.body]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Blob}
     */
    setValueForKey(options = {}) {
      return this.setValueForKeyWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
