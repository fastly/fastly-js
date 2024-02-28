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
import BulkUpdateConfigStoreListRequest from '../model/BulkUpdateConfigStoreListRequest';
import ConfigStoreItemResponse from '../model/ConfigStoreItemResponse';
import InlineResponse200 from '../model/InlineResponse200';

/**
* ConfigStoreItem service.
* @module api/ConfigStoreItemApi
* @version 7.1.0
*/
export default class ConfigStoreItemApi {

    /**
    * Constructs a new ConfigStoreItemApi. 
    * @alias module:api/ConfigStoreItemApi
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
     * Add multiple key-value pairs to an individual config store, specified by ID.
     * @param {Object} options
     * @param {String} options.config_store_id - An alphanumeric string identifying the config store.
     * @param {module:model/BulkUpdateConfigStoreListRequest} [options.bulk_update_config_store_list_request]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse200} and HTTP response
     */
    bulkUpdateConfigStoreItemWithHttpInfo(options = {}) {
      let postBody = options['bulk_update_config_store_list_request'];
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
      let contentTypes = ['application/json'];
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
        '/resources/stores/config/{config_store_id}/items', 'PATCH',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Add multiple key-value pairs to an individual config store, specified by ID.
     * @param {Object} options
     * @param {String} options.config_store_id - An alphanumeric string identifying the config store.
     * @param {module:model/BulkUpdateConfigStoreListRequest} [options.bulk_update_config_store_list_request]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse200}
     */
    bulkUpdateConfigStoreItem(options = {}) {
      return this.bulkUpdateConfigStoreItemWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Add a single key-value pair to an individual config store, specified by ID.
     * @param {Object} options
     * @param {String} options.config_store_id - An alphanumeric string identifying the config store.
     * @param {String} [options.item_key] - Item key, maximum 256 characters.
     * @param {String} [options.item_value] - Item value, maximum 8000 characters.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ConfigStoreItemResponse} and HTTP response
     */
    createConfigStoreItemWithHttpInfo(options = {}) {
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
        'item_key': options['item_key'],
        'item_value': options['item_value']
      };

      let authNames = ['token'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = ConfigStoreItemResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/resources/stores/config/{config_store_id}/item', 'POST',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Add a single key-value pair to an individual config store, specified by ID.
     * @param {Object} options
     * @param {String} options.config_store_id - An alphanumeric string identifying the config store.
     * @param {String} [options.item_key] - Item key, maximum 256 characters.
     * @param {String} [options.item_value] - Item value, maximum 8000 characters.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ConfigStoreItemResponse}
     */
    createConfigStoreItem(options = {}) {
      return this.createConfigStoreItemWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Delete an entry in a config store given a config store ID, and item key.
     * @param {Object} options
     * @param {String} options.config_store_id - An alphanumeric string identifying the config store.
     * @param {String} options.config_store_item_key - Item key, maximum 256 characters.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse200} and HTTP response
     */
    deleteConfigStoreItemWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'config_store_id' is set.
      if (options['config_store_id'] === undefined || options['config_store_id'] === null) {
        throw new Error("Missing the required parameter 'config_store_id'.");
      }
      // Verify the required parameter 'config_store_item_key' is set.
      if (options['config_store_item_key'] === undefined || options['config_store_item_key'] === null) {
        throw new Error("Missing the required parameter 'config_store_item_key'.");
      }

      let pathParams = {
        'config_store_id': options['config_store_id'],
        'config_store_item_key': options['config_store_item_key']
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
        '/resources/stores/config/{config_store_id}/item/{config_store_item_key}', 'DELETE',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Delete an entry in a config store given a config store ID, and item key.
     * @param {Object} options
     * @param {String} options.config_store_id - An alphanumeric string identifying the config store.
     * @param {String} options.config_store_item_key - Item key, maximum 256 characters.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse200}
     */
    deleteConfigStoreItem(options = {}) {
      return this.deleteConfigStoreItemWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Retrieve a config store entry given a config store ID and item key.
     * @param {Object} options
     * @param {String} options.config_store_id - An alphanumeric string identifying the config store.
     * @param {String} options.config_store_item_key - Item key, maximum 256 characters.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ConfigStoreItemResponse} and HTTP response
     */
    getConfigStoreItemWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'config_store_id' is set.
      if (options['config_store_id'] === undefined || options['config_store_id'] === null) {
        throw new Error("Missing the required parameter 'config_store_id'.");
      }
      // Verify the required parameter 'config_store_item_key' is set.
      if (options['config_store_item_key'] === undefined || options['config_store_item_key'] === null) {
        throw new Error("Missing the required parameter 'config_store_item_key'.");
      }

      let pathParams = {
        'config_store_id': options['config_store_id'],
        'config_store_item_key': options['config_store_item_key']
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
      let returnType = ConfigStoreItemResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/resources/stores/config/{config_store_id}/item/{config_store_item_key}', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Retrieve a config store entry given a config store ID and item key.
     * @param {Object} options
     * @param {String} options.config_store_id - An alphanumeric string identifying the config store.
     * @param {String} options.config_store_item_key - Item key, maximum 256 characters.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ConfigStoreItemResponse}
     */
    getConfigStoreItem(options = {}) {
      return this.getConfigStoreItemWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * List the key-value pairs associated with a given config store ID.
     * @param {Object} options
     * @param {String} options.config_store_id - An alphanumeric string identifying the config store.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/ConfigStoreItemResponse>} and HTTP response
     */
    listConfigStoreItemsWithHttpInfo(options = {}) {
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
      let returnType = [ConfigStoreItemResponse];
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/resources/stores/config/{config_store_id}/items', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * List the key-value pairs associated with a given config store ID.
     * @param {Object} options
     * @param {String} options.config_store_id - An alphanumeric string identifying the config store.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/ConfigStoreItemResponse>}
     */
    listConfigStoreItems(options = {}) {
      return this.listConfigStoreItemsWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Update an entry in a config store given a config store ID, item key, and item value.
     * @param {Object} options
     * @param {String} options.config_store_id - An alphanumeric string identifying the config store.
     * @param {String} options.config_store_item_key - Item key, maximum 256 characters.
     * @param {String} [options.item_key] - Item key, maximum 256 characters.
     * @param {String} [options.item_value] - Item value, maximum 8000 characters.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ConfigStoreItemResponse} and HTTP response
     */
    updateConfigStoreItemWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'config_store_id' is set.
      if (options['config_store_id'] === undefined || options['config_store_id'] === null) {
        throw new Error("Missing the required parameter 'config_store_id'.");
      }
      // Verify the required parameter 'config_store_item_key' is set.
      if (options['config_store_item_key'] === undefined || options['config_store_item_key'] === null) {
        throw new Error("Missing the required parameter 'config_store_item_key'.");
      }

      let pathParams = {
        'config_store_id': options['config_store_id'],
        'config_store_item_key': options['config_store_item_key']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'item_key': options['item_key'],
        'item_value': options['item_value']
      };

      let authNames = ['token'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = ConfigStoreItemResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/resources/stores/config/{config_store_id}/item/{config_store_item_key}', 'PATCH',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Update an entry in a config store given a config store ID, item key, and item value.
     * @param {Object} options
     * @param {String} options.config_store_id - An alphanumeric string identifying the config store.
     * @param {String} options.config_store_item_key - Item key, maximum 256 characters.
     * @param {String} [options.item_key] - Item key, maximum 256 characters.
     * @param {String} [options.item_value] - Item value, maximum 8000 characters.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ConfigStoreItemResponse}
     */
    updateConfigStoreItem(options = {}) {
      return this.updateConfigStoreItemWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Insert or update an entry in a config store given a config store ID, item key, and item value.
     * @param {Object} options
     * @param {String} options.config_store_id - An alphanumeric string identifying the config store.
     * @param {String} options.config_store_item_key - Item key, maximum 256 characters.
     * @param {String} [options.item_key] - Item key, maximum 256 characters.
     * @param {String} [options.item_value] - Item value, maximum 8000 characters.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ConfigStoreItemResponse} and HTTP response
     */
    upsertConfigStoreItemWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'config_store_id' is set.
      if (options['config_store_id'] === undefined || options['config_store_id'] === null) {
        throw new Error("Missing the required parameter 'config_store_id'.");
      }
      // Verify the required parameter 'config_store_item_key' is set.
      if (options['config_store_item_key'] === undefined || options['config_store_item_key'] === null) {
        throw new Error("Missing the required parameter 'config_store_item_key'.");
      }

      let pathParams = {
        'config_store_id': options['config_store_id'],
        'config_store_item_key': options['config_store_item_key']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'item_key': options['item_key'],
        'item_value': options['item_value']
      };

      let authNames = ['token'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = ConfigStoreItemResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/resources/stores/config/{config_store_id}/item/{config_store_item_key}', 'PUT',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Insert or update an entry in a config store given a config store ID, item key, and item value.
     * @param {Object} options
     * @param {String} options.config_store_id - An alphanumeric string identifying the config store.
     * @param {String} options.config_store_item_key - Item key, maximum 256 characters.
     * @param {String} [options.item_key] - Item key, maximum 256 characters.
     * @param {String} [options.item_value] - Item value, maximum 8000 characters.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ConfigStoreItemResponse}
     */
    upsertConfigStoreItem(options = {}) {
      return this.upsertConfigStoreItemWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
