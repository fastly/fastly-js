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
import ConfigStoreInfoResponse from '../model/ConfigStoreInfoResponse';
import ConfigStoreResponse from '../model/ConfigStoreResponse';
import InlineResponse200 from '../model/InlineResponse200';

/**
* ConfigStore service.
* @module api/ConfigStoreApi
* @version 7.0.1
*/
export default class ConfigStoreApi {

    /**
    * Constructs a new ConfigStoreApi. 
    * @alias module:api/ConfigStoreApi
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
     * Create a config store.
     * @param {Object} options
     * @param {String} [options.name] - The name of the config store.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ConfigStoreResponse} and HTTP response
     */
    createConfigStoreWithHttpInfo(options = {}) {
      let postBody = null;

      let pathParams = {
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'name': options['name']
      };

      let authNames = ['token'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = ConfigStoreResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/resources/stores/config', 'POST',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Create a config store.
     * @param {Object} options
     * @param {String} [options.name] - The name of the config store.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ConfigStoreResponse}
     */
    createConfigStore(options = {}) {
      return this.createConfigStoreWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Delete a config store.
     * @param {Object} options
     * @param {String} options.config_store_id - An alphanumeric string identifying the config store.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse200} and HTTP response
     */
    deleteConfigStoreWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'config_store_id' is set.
      if (options['config_store_id'] === undefined || options['config_store_id'] === null) {
        throw new Error("Missing the required parameter 'config_store_id'.");
      }

      let pathParams = {
        'config_store_id': options['config_store_id']
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
      let accepts = ['application/json'];
      let returnType = InlineResponse200;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/resources/stores/config/{config_store_id}', 'DELETE',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Delete a config store.
     * @param {Object} options
     * @param {String} options.config_store_id - An alphanumeric string identifying the config store.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse200}
     */
    deleteConfigStore(options = {}) {
      return this.deleteConfigStoreWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Describe a config store by its identifier.
     * @param {Object} options
     * @param {String} options.config_store_id - An alphanumeric string identifying the config store.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ConfigStoreResponse} and HTTP response
     */
    getConfigStoreWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'config_store_id' is set.
      if (options['config_store_id'] === undefined || options['config_store_id'] === null) {
        throw new Error("Missing the required parameter 'config_store_id'.");
      }

      let pathParams = {
        'config_store_id': options['config_store_id']
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
      let accepts = ['application/json'];
      let returnType = ConfigStoreResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/resources/stores/config/{config_store_id}', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Describe a config store by its identifier.
     * @param {Object} options
     * @param {String} options.config_store_id - An alphanumeric string identifying the config store.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ConfigStoreResponse}
     */
    getConfigStore(options = {}) {
      return this.getConfigStoreWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Retrieve metadata for a single config store.
     * @param {Object} options
     * @param {String} options.config_store_id - An alphanumeric string identifying the config store.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ConfigStoreInfoResponse} and HTTP response
     */
    getConfigStoreInfoWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'config_store_id' is set.
      if (options['config_store_id'] === undefined || options['config_store_id'] === null) {
        throw new Error("Missing the required parameter 'config_store_id'.");
      }

      let pathParams = {
        'config_store_id': options['config_store_id']
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
      let accepts = ['application/json'];
      let returnType = ConfigStoreInfoResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/resources/stores/config/{config_store_id}/info', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Retrieve metadata for a single config store.
     * @param {Object} options
     * @param {String} options.config_store_id - An alphanumeric string identifying the config store.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ConfigStoreInfoResponse}
     */
    getConfigStoreInfo(options = {}) {
      return this.getConfigStoreInfoWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * List services linked to a config store
     * @param {Object} options
     * @param {String} options.config_store_id - An alphanumeric string identifying the config store.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    listConfigStoreServicesWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'config_store_id' is set.
      if (options['config_store_id'] === undefined || options['config_store_id'] === null) {
        throw new Error("Missing the required parameter 'config_store_id'.");
      }

      let pathParams = {
        'config_store_id': options['config_store_id']
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
      let accepts = ['application/json'];
      let returnType = Object;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/resources/stores/config/{config_store_id}/services', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * List services linked to a config store
     * @param {Object} options
     * @param {String} options.config_store_id - An alphanumeric string identifying the config store.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    listConfigStoreServices(options = {}) {
      return this.listConfigStoreServicesWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * List config stores.
     * @param {Object} options
     * @param {String} [options.name] - Returns a one-element array containing the details for the named config store.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/ConfigStoreResponse>} and HTTP response
     */
    listConfigStoresWithHttpInfo(options = {}) {
      let postBody = null;

      let pathParams = {
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
        'name': options['name']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [ConfigStoreResponse];
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/resources/stores/config', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * List config stores.
     * @param {Object} options
     * @param {String} [options.name] - Returns a one-element array containing the details for the named config store.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/ConfigStoreResponse>}
     */
    listConfigStores(options = {}) {
      return this.listConfigStoresWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Update a config store.
     * @param {Object} options
     * @param {String} options.config_store_id - An alphanumeric string identifying the config store.
     * @param {String} [options.name] - The name of the config store.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ConfigStoreResponse} and HTTP response
     */
    updateConfigStoreWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'config_store_id' is set.
      if (options['config_store_id'] === undefined || options['config_store_id'] === null) {
        throw new Error("Missing the required parameter 'config_store_id'.");
      }

      let pathParams = {
        'config_store_id': options['config_store_id']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'name': options['name']
      };

      let authNames = ['token'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = ConfigStoreResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/resources/stores/config/{config_store_id}', 'PUT',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Update a config store.
     * @param {Object} options
     * @param {String} options.config_store_id - An alphanumeric string identifying the config store.
     * @param {String} [options.name] - The name of the config store.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ConfigStoreResponse}
     */
    updateConfigStore(options = {}) {
      return this.updateConfigStoreWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
