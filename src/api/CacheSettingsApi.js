/**
 * Fastly API
 * Via the Fastly API you can perform any of the operations that are possible within the management console,  including creating services, domains, and backends, configuring rules or uploading your own application code, as well as account operations such as user administration and billing reports. The API is organized into collections of endpoints that allow manipulation of objects related to Fastly services and accounts. For the most accurate and up-to-date API reference content, visit our [Developer Hub](https://developer.fastly.com/reference/api/) 
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated.
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import CacheSettingResponse from '../model/CacheSettingResponse';
import InlineResponse200 from '../model/InlineResponse200';

/**
* CacheSettings service.
* @module api/CacheSettingsApi
* @version 3.0.0-beta2
*/
export default class CacheSettingsApi {

    /**
    * Constructs a new CacheSettingsApi. 
    * @alias module:api/CacheSettingsApi
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
     * Create a cache settings object.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {module:model/String} [options.action] - If set, will cause vcl_fetch to terminate after processing this rule with the return state specified. If not set, other configuration logic in vcl_fetch with a lower priority will run after this rule. 
     * @param {String} [options.cache_condition] - Name of the cache condition controlling when this configuration applies.
     * @param {String} [options.name] - Name for the cache settings object.
     * @param {Number} [options.stale_ttl] - Maximum time in seconds to continue to use a stale version of the object if future requests to your backend server fail (also known as 'stale if error').
     * @param {Number} [options.ttl] - Maximum time to consider the object fresh in the cache (the cache 'time to live').
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CacheSettingResponse} and HTTP response
     */
    createCacheSettingsWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'version_id' is set.
      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id']
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'action': options['action'],
        'cache_condition': options['cache_condition'],
        'name': options['name'],
        'stale_ttl': options['stale_ttl'],
        'ttl': options['ttl']
      };

      let authNames = ['token'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = CacheSettingResponse;
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/cache_settings', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a cache settings object.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {module:model/String} [options.action] - If set, will cause vcl_fetch to terminate after processing this rule with the return state specified. If not set, other configuration logic in vcl_fetch with a lower priority will run after this rule. 
     * @param {String} [options.cache_condition] - Name of the cache condition controlling when this configuration applies.
     * @param {String} [options.name] - Name for the cache settings object.
     * @param {Number} [options.stale_ttl] - Maximum time in seconds to continue to use a stale version of the object if future requests to your backend server fail (also known as 'stale if error').
     * @param {Number} [options.ttl] - Maximum time to consider the object fresh in the cache (the cache 'time to live').
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CacheSettingResponse}
     */
    createCacheSettings(options = {}) {
      return this.createCacheSettingsWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Delete a specific cache settings object.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.cache_settings_name - Name for the cache settings object.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse200} and HTTP response
     */
    deleteCacheSettingsWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'version_id' is set.
      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }
      // Verify the required parameter 'cache_settings_name' is set.
      if (options['cache_settings_name'] === undefined || options['cache_settings_name'] === null) {
        throw new Error("Missing the required parameter 'cache_settings_name'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'cache_settings_name': options['cache_settings_name']
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
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/cache_settings/{cache_settings_name}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a specific cache settings object.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.cache_settings_name - Name for the cache settings object.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse200}
     */
    deleteCacheSettings(options = {}) {
      return this.deleteCacheSettingsWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Get a specific cache settings object.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.cache_settings_name - Name for the cache settings object.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CacheSettingResponse} and HTTP response
     */
    getCacheSettingsWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'version_id' is set.
      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }
      // Verify the required parameter 'cache_settings_name' is set.
      if (options['cache_settings_name'] === undefined || options['cache_settings_name'] === null) {
        throw new Error("Missing the required parameter 'cache_settings_name'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'cache_settings_name': options['cache_settings_name']
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
      let returnType = CacheSettingResponse;
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/cache_settings/{cache_settings_name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get a specific cache settings object.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.cache_settings_name - Name for the cache settings object.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CacheSettingResponse}
     */
    getCacheSettings(options = {}) {
      return this.getCacheSettingsWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Get a list of all cache settings for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/CacheSettingResponse>} and HTTP response
     */
    listCacheSettingsWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'version_id' is set.
      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id']
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
      let returnType = [CacheSettingResponse];
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/cache_settings', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get a list of all cache settings for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/CacheSettingResponse>}
     */
    listCacheSettings(options = {}) {
      return this.listCacheSettingsWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Update a specific cache settings object.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.cache_settings_name - Name for the cache settings object.
     * @param {module:model/String} [options.action] - If set, will cause vcl_fetch to terminate after processing this rule with the return state specified. If not set, other configuration logic in vcl_fetch with a lower priority will run after this rule. 
     * @param {String} [options.cache_condition] - Name of the cache condition controlling when this configuration applies.
     * @param {String} [options.name] - Name for the cache settings object.
     * @param {Number} [options.stale_ttl] - Maximum time in seconds to continue to use a stale version of the object if future requests to your backend server fail (also known as 'stale if error').
     * @param {Number} [options.ttl] - Maximum time to consider the object fresh in the cache (the cache 'time to live').
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CacheSettingResponse} and HTTP response
     */
    updateCacheSettingsWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'version_id' is set.
      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }
      // Verify the required parameter 'cache_settings_name' is set.
      if (options['cache_settings_name'] === undefined || options['cache_settings_name'] === null) {
        throw new Error("Missing the required parameter 'cache_settings_name'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'cache_settings_name': options['cache_settings_name']
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'action': options['action'],
        'cache_condition': options['cache_condition'],
        'name': options['name'],
        'stale_ttl': options['stale_ttl'],
        'ttl': options['ttl']
      };

      let authNames = ['token'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = CacheSettingResponse;
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/cache_settings/{cache_settings_name}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update a specific cache settings object.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.cache_settings_name - Name for the cache settings object.
     * @param {module:model/String} [options.action] - If set, will cause vcl_fetch to terminate after processing this rule with the return state specified. If not set, other configuration logic in vcl_fetch with a lower priority will run after this rule. 
     * @param {String} [options.cache_condition] - Name of the cache condition controlling when this configuration applies.
     * @param {String} [options.name] - Name for the cache settings object.
     * @param {Number} [options.stale_ttl] - Maximum time in seconds to continue to use a stale version of the object if future requests to your backend server fail (also known as 'stale if error').
     * @param {Number} [options.ttl] - Maximum time to consider the object fresh in the cache (the cache 'time to live').
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CacheSettingResponse}
     */
    updateCacheSettings(options = {}) {
      return this.updateCacheSettingsWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
