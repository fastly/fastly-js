/**
 * Fastly API
 * Via the Fastly API you can perform any of the operations that are possible within the management console,  including creating services, domains, and backends, configuring rules or uploading your own application code, as well as account operations such as user administration and billing reports. The API is organized into collections of endpoints that allow manipulation of objects related to Fastly services and accounts. For the most accurate and up-to-date API reference content, visit our [Developer Hub](https://www.fastly.com/documentation/reference/api/) 
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
import RateLimiterResponse from '../model/RateLimiterResponse';

/**
* RateLimiter service.
* @module api/RateLimiterApi
* @version 14.1.0
*/
export default class RateLimiterApi {

    /**
    * Constructs a new RateLimiterApi. 
    * @alias module:api/RateLimiterApi
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
     * Create a rate limiter for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} [options.name] - A human readable name for the rate limiting rule.
     * @param {String} [options.uri_dictionary_name] - The name of a Dictionary containing URIs as keys. If not defined or `null`, all origin URIs will be rate limited.
     * @param {Array.<module:model/String>} [options.http_methods] - Array of HTTP methods to apply rate limiting to.
     * @param {Number} [options.rps_limit] - Upper limit of requests per second allowed by the rate limiter.
     * @param {module:model/Number} [options.window_size] - Number of seconds during which the RPS limit must be exceeded in order to trigger a violation.
     * @param {Array.<String>} [options.client_key] - Array of VCL variables used to generate a counter key to identify a client. Example variables include `req.http.Fastly-Client-IP`, `req.http.User-Agent`, or a custom header like `req.http.API-Key`.
     * @param {Number} [options.penalty_box_duration] - Length of time in minutes that the rate limiter is in effect after the initial violation is detected.
     * @param {module:model/String} [options.action] - The action to take when a rate limiter violation is detected.
     * @param {String} [options.response_object_name] - Name of existing response object. Required if `action` is `response_object`. Note that the rate limiter response is only updated to reflect the response object content when saving the rate limiter configuration.
     * @param {module:model/String} [options.logger_type] - Name of the type of logging endpoint to be used when action is `log_only`. The logging endpoint type is used to determine the appropriate log format to use when emitting log entries.
     * @param {Number} [options.feature_revision] - Revision number of the rate limiting feature implementation. Defaults to the most recent revision.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RateLimiterResponse} and HTTP response
     */
    createRateLimiterWithHttpInfo(options = {}) {
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
        'name': options['name'],
        'uri_dictionary_name': options['uri_dictionary_name'],
        'http_methods': this.apiClient.buildCollectionParam(options['http_methods'], 'csv'),
        'rps_limit': options['rps_limit'],
        'window_size': options['window_size'],
        'client_key': this.apiClient.buildCollectionParam(options['client_key'], 'csv'),
        'penalty_box_duration': options['penalty_box_duration'],
        'action': options['action'],
        'response_object_name': options['response_object_name'],
        'logger_type': options['logger_type'],
        'feature_revision': options['feature_revision']
      };

      let authNames = ['token'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = RateLimiterResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/rate-limiters', 'POST',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Create a rate limiter for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} [options.name] - A human readable name for the rate limiting rule.
     * @param {String} [options.uri_dictionary_name] - The name of a Dictionary containing URIs as keys. If not defined or `null`, all origin URIs will be rate limited.
     * @param {Array.<module:model/String>} [options.http_methods] - Array of HTTP methods to apply rate limiting to.
     * @param {Number} [options.rps_limit] - Upper limit of requests per second allowed by the rate limiter.
     * @param {module:model/Number} [options.window_size] - Number of seconds during which the RPS limit must be exceeded in order to trigger a violation.
     * @param {Array.<String>} [options.client_key] - Array of VCL variables used to generate a counter key to identify a client. Example variables include `req.http.Fastly-Client-IP`, `req.http.User-Agent`, or a custom header like `req.http.API-Key`.
     * @param {Number} [options.penalty_box_duration] - Length of time in minutes that the rate limiter is in effect after the initial violation is detected.
     * @param {module:model/String} [options.action] - The action to take when a rate limiter violation is detected.
     * @param {String} [options.response_object_name] - Name of existing response object. Required if `action` is `response_object`. Note that the rate limiter response is only updated to reflect the response object content when saving the rate limiter configuration.
     * @param {module:model/String} [options.logger_type] - Name of the type of logging endpoint to be used when action is `log_only`. The logging endpoint type is used to determine the appropriate log format to use when emitting log entries.
     * @param {Number} [options.feature_revision] - Revision number of the rate limiting feature implementation. Defaults to the most recent revision.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RateLimiterResponse}
     */
    createRateLimiter(options = {}) {
      return this.createRateLimiterWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Delete a rate limiter by its ID.
     * @param {Object} options
     * @param {String} options.rate_limiter_id - Alphanumeric string identifying the rate limiter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse200} and HTTP response
     */
    deleteRateLimiterWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'rate_limiter_id' is set.
      if (options['rate_limiter_id'] === undefined || options['rate_limiter_id'] === null) {
        throw new Error("Missing the required parameter 'rate_limiter_id'.");
      }

      let pathParams = {
        'rate_limiter_id': options['rate_limiter_id']
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
        '/rate-limiters/{rate_limiter_id}', 'DELETE',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Delete a rate limiter by its ID.
     * @param {Object} options
     * @param {String} options.rate_limiter_id - Alphanumeric string identifying the rate limiter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse200}
     */
    deleteRateLimiter(options = {}) {
      return this.deleteRateLimiterWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Get a rate limiter by its ID.
     * @param {Object} options
     * @param {String} options.rate_limiter_id - Alphanumeric string identifying the rate limiter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RateLimiterResponse} and HTTP response
     */
    getRateLimiterWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'rate_limiter_id' is set.
      if (options['rate_limiter_id'] === undefined || options['rate_limiter_id'] === null) {
        throw new Error("Missing the required parameter 'rate_limiter_id'.");
      }

      let pathParams = {
        'rate_limiter_id': options['rate_limiter_id']
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
      let returnType = RateLimiterResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/rate-limiters/{rate_limiter_id}', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Get a rate limiter by its ID.
     * @param {Object} options
     * @param {String} options.rate_limiter_id - Alphanumeric string identifying the rate limiter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RateLimiterResponse}
     */
    getRateLimiter(options = {}) {
      return this.getRateLimiterWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * List all rate limiters for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/RateLimiterResponse>} and HTTP response
     */
    listRateLimitersWithHttpInfo(options = {}) {
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
      let returnType = [RateLimiterResponse];
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/rate-limiters', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * List all rate limiters for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/RateLimiterResponse>}
     */
    listRateLimiters(options = {}) {
      return this.listRateLimitersWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Update a rate limiter by its ID.
     * @param {Object} options
     * @param {String} options.rate_limiter_id - Alphanumeric string identifying the rate limiter.
     * @param {String} [options.name] - A human readable name for the rate limiting rule.
     * @param {String} [options.uri_dictionary_name] - The name of a Dictionary containing URIs as keys. If not defined or `null`, all origin URIs will be rate limited.
     * @param {Array.<module:model/String>} [options.http_methods] - Array of HTTP methods to apply rate limiting to.
     * @param {Number} [options.rps_limit] - Upper limit of requests per second allowed by the rate limiter.
     * @param {module:model/Number} [options.window_size] - Number of seconds during which the RPS limit must be exceeded in order to trigger a violation.
     * @param {Array.<String>} [options.client_key] - Array of VCL variables used to generate a counter key to identify a client. Example variables include `req.http.Fastly-Client-IP`, `req.http.User-Agent`, or a custom header like `req.http.API-Key`.
     * @param {Number} [options.penalty_box_duration] - Length of time in minutes that the rate limiter is in effect after the initial violation is detected.
     * @param {module:model/String} [options.action] - The action to take when a rate limiter violation is detected.
     * @param {String} [options.response_object_name] - Name of existing response object. Required if `action` is `response_object`. Note that the rate limiter response is only updated to reflect the response object content when saving the rate limiter configuration.
     * @param {module:model/String} [options.logger_type] - Name of the type of logging endpoint to be used when action is `log_only`. The logging endpoint type is used to determine the appropriate log format to use when emitting log entries.
     * @param {Number} [options.feature_revision] - Revision number of the rate limiting feature implementation. Defaults to the most recent revision.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RateLimiterResponse} and HTTP response
     */
    updateRateLimiterWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'rate_limiter_id' is set.
      if (options['rate_limiter_id'] === undefined || options['rate_limiter_id'] === null) {
        throw new Error("Missing the required parameter 'rate_limiter_id'.");
      }

      let pathParams = {
        'rate_limiter_id': options['rate_limiter_id']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'name': options['name'],
        'uri_dictionary_name': options['uri_dictionary_name'],
        'http_methods': this.apiClient.buildCollectionParam(options['http_methods'], 'csv'),
        'rps_limit': options['rps_limit'],
        'window_size': options['window_size'],
        'client_key': this.apiClient.buildCollectionParam(options['client_key'], 'csv'),
        'penalty_box_duration': options['penalty_box_duration'],
        'action': options['action'],
        'response_object_name': options['response_object_name'],
        'logger_type': options['logger_type'],
        'feature_revision': options['feature_revision']
      };

      let authNames = ['token'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = RateLimiterResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/rate-limiters/{rate_limiter_id}', 'PUT',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Update a rate limiter by its ID.
     * @param {Object} options
     * @param {String} options.rate_limiter_id - Alphanumeric string identifying the rate limiter.
     * @param {String} [options.name] - A human readable name for the rate limiting rule.
     * @param {String} [options.uri_dictionary_name] - The name of a Dictionary containing URIs as keys. If not defined or `null`, all origin URIs will be rate limited.
     * @param {Array.<module:model/String>} [options.http_methods] - Array of HTTP methods to apply rate limiting to.
     * @param {Number} [options.rps_limit] - Upper limit of requests per second allowed by the rate limiter.
     * @param {module:model/Number} [options.window_size] - Number of seconds during which the RPS limit must be exceeded in order to trigger a violation.
     * @param {Array.<String>} [options.client_key] - Array of VCL variables used to generate a counter key to identify a client. Example variables include `req.http.Fastly-Client-IP`, `req.http.User-Agent`, or a custom header like `req.http.API-Key`.
     * @param {Number} [options.penalty_box_duration] - Length of time in minutes that the rate limiter is in effect after the initial violation is detected.
     * @param {module:model/String} [options.action] - The action to take when a rate limiter violation is detected.
     * @param {String} [options.response_object_name] - Name of existing response object. Required if `action` is `response_object`. Note that the rate limiter response is only updated to reflect the response object content when saving the rate limiter configuration.
     * @param {module:model/String} [options.logger_type] - Name of the type of logging endpoint to be used when action is `log_only`. The logging endpoint type is used to determine the appropriate log format to use when emitting log entries.
     * @param {Number} [options.feature_revision] - Revision number of the rate limiting feature implementation. Defaults to the most recent revision.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RateLimiterResponse}
     */
    updateRateLimiter(options = {}) {
      return this.updateRateLimiterWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
