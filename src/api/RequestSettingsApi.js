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
import InlineResponse200 from '../model/InlineResponse200';
import RequestSettingsResponse from '../model/RequestSettingsResponse';

/**
* RequestSettings service.
* @module api/RequestSettingsApi
* @version 3.3.0
*/
export default class RequestSettingsApi {

    /**
    * Constructs a new RequestSettingsApi. 
    * @alias module:api/RequestSettingsApi
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
     * Removes the specified Request Settings object.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.request_settings_name - Name for the request settings.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse200} and HTTP response
     */
    deleteRequestSettingsWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'version_id' is set.
      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }
      // Verify the required parameter 'request_settings_name' is set.
      if (options['request_settings_name'] === undefined || options['request_settings_name'] === null) {
        throw new Error("Missing the required parameter 'request_settings_name'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'request_settings_name': options['request_settings_name']
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
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/request_settings/{request_settings_name}', 'DELETE',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Removes the specified Request Settings object.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.request_settings_name - Name for the request settings.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse200}
     */
    deleteRequestSettings(options = {}) {
      return this.deleteRequestSettingsWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Gets the specified Request Settings object.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.request_settings_name - Name for the request settings.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RequestSettingsResponse} and HTTP response
     */
    getRequestSettingsWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'version_id' is set.
      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }
      // Verify the required parameter 'request_settings_name' is set.
      if (options['request_settings_name'] === undefined || options['request_settings_name'] === null) {
        throw new Error("Missing the required parameter 'request_settings_name'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'request_settings_name': options['request_settings_name']
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
      let returnType = RequestSettingsResponse;
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/request_settings/{request_settings_name}', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Gets the specified Request Settings object.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.request_settings_name - Name for the request settings.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RequestSettingsResponse}
     */
    getRequestSettings(options = {}) {
      return this.getRequestSettingsWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Returns a list of all Request Settings objects for the given service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/RequestSettingsResponse>} and HTTP response
     */
    listRequestSettingsWithHttpInfo(options = {}) {
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
      let returnType = [RequestSettingsResponse];
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/request_settings', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns a list of all Request Settings objects for the given service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/RequestSettingsResponse>}
     */
    listRequestSettings(options = {}) {
      return this.listRequestSettingsWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Updates the specified Request Settings object.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.request_settings_name - Name for the request settings.
     * @param {module:model/String} [options.action] - Allows you to terminate request handling and immediately perform an action.
     * @param {Number} [options.bypass_busy_wait] - Disable collapsed forwarding, so you don't wait for other objects to origin.
     * @param {String} [options.default_host] - Sets the host header.
     * @param {Number} [options.force_miss] - Allows you to force a cache miss for the request. Replaces the item in the cache if the content is cacheable.
     * @param {Number} [options.force_ssl] - Forces the request use SSL (redirects a non-SSL to SSL).
     * @param {Number} [options.geo_headers] - Injects Fastly-Geo-Country, Fastly-Geo-City, and Fastly-Geo-Region into the request headers.
     * @param {String} [options.hash_keys] - Comma separated list of varnish request object fields that should be in the hash key.
     * @param {Number} [options.max_stale_age] - How old an object is allowed to be to serve stale-if-error or stale-while-revalidate.
     * @param {String} [options.name] - Name for the request settings.
     * @param {String} [options.request_condition] - Condition which, if met, will select this configuration during a request. Optional.
     * @param {Number} [options.timer_support] - Injects the X-Timer info into the request for viewing origin fetch durations.
     * @param {module:model/String} [options.xff] - Short for X-Forwarded-For.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RequestSettingsResponse} and HTTP response
     */
    updateRequestSettingsWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'version_id' is set.
      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }
      // Verify the required parameter 'request_settings_name' is set.
      if (options['request_settings_name'] === undefined || options['request_settings_name'] === null) {
        throw new Error("Missing the required parameter 'request_settings_name'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'request_settings_name': options['request_settings_name']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'action': options['action'],
        'bypass_busy_wait': options['bypass_busy_wait'],
        'default_host': options['default_host'],
        'force_miss': options['force_miss'],
        'force_ssl': options['force_ssl'],
        'geo_headers': options['geo_headers'],
        'hash_keys': options['hash_keys'],
        'max_stale_age': options['max_stale_age'],
        'name': options['name'],
        'request_condition': options['request_condition'],
        'timer_support': options['timer_support'],
        'xff': options['xff']
      };

      let authNames = ['token'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = RequestSettingsResponse;
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/request_settings/{request_settings_name}', 'PUT',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Updates the specified Request Settings object.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.request_settings_name - Name for the request settings.
     * @param {module:model/String} [options.action] - Allows you to terminate request handling and immediately perform an action.
     * @param {Number} [options.bypass_busy_wait] - Disable collapsed forwarding, so you don't wait for other objects to origin.
     * @param {String} [options.default_host] - Sets the host header.
     * @param {Number} [options.force_miss] - Allows you to force a cache miss for the request. Replaces the item in the cache if the content is cacheable.
     * @param {Number} [options.force_ssl] - Forces the request use SSL (redirects a non-SSL to SSL).
     * @param {Number} [options.geo_headers] - Injects Fastly-Geo-Country, Fastly-Geo-City, and Fastly-Geo-Region into the request headers.
     * @param {String} [options.hash_keys] - Comma separated list of varnish request object fields that should be in the hash key.
     * @param {Number} [options.max_stale_age] - How old an object is allowed to be to serve stale-if-error or stale-while-revalidate.
     * @param {String} [options.name] - Name for the request settings.
     * @param {String} [options.request_condition] - Condition which, if met, will select this configuration during a request. Optional.
     * @param {Number} [options.timer_support] - Injects the X-Timer info into the request for viewing origin fetch durations.
     * @param {module:model/String} [options.xff] - Short for X-Forwarded-For.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RequestSettingsResponse}
     */
    updateRequestSettings(options = {}) {
      return this.updateRequestSettingsWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
