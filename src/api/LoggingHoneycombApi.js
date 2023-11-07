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
import LoggingHoneycombResponse from '../model/LoggingHoneycombResponse';

/**
* LoggingHoneycomb service.
* @module api/LoggingHoneycombApi
* @version 6.2.2
*/
export default class LoggingHoneycombApi {

    /**
    * Constructs a new LoggingHoneycombApi. 
    * @alias module:api/LoggingHoneycombApi
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
     * Create a Honeycomb logging object for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} [options.name] - The name for the real-time logging configuration.
     * @param {module:model/String} [options.placement] - Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
     * @param {String} [options.response_condition] - The name of an existing condition in the configured endpoint, or leave blank to always execute.
     * @param {String} [options.format] - A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce valid JSON that Honeycomb can ingest.
     * @param {module:model/Number} [options.format_version=FormatVersionEnum.v2] - The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`. 
     * @param {String} [options.dataset] - The Honeycomb Dataset you want to log to.
     * @param {String} [options.token] - The Write Key from the Account page of your Honeycomb account.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoggingHoneycombResponse} and HTTP response
     */
    createLogHoneycombWithHttpInfo(options = {}) {
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
        'placement': options['placement'],
        'response_condition': options['response_condition'],
        'format': options['format'],
        'format_version': options['format_version'],
        'dataset': options['dataset'],
        'token': options['token']
      };

      let authNames = ['token'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = LoggingHoneycombResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/logging/honeycomb', 'POST',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Create a Honeycomb logging object for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} [options.name] - The name for the real-time logging configuration.
     * @param {module:model/String} [options.placement] - Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
     * @param {String} [options.response_condition] - The name of an existing condition in the configured endpoint, or leave blank to always execute.
     * @param {String} [options.format] - A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce valid JSON that Honeycomb can ingest.
     * @param {module:model/Number} [options.format_version=FormatVersionEnum.v2] - The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`. 
     * @param {String} [options.dataset] - The Honeycomb Dataset you want to log to.
     * @param {String} [options.token] - The Write Key from the Account page of your Honeycomb account.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoggingHoneycombResponse}
     */
    createLogHoneycomb(options = {}) {
      return this.createLogHoneycombWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Delete the Honeycomb logging object for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.logging_honeycomb_name - The name for the real-time logging configuration.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse200} and HTTP response
     */
    deleteLogHoneycombWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'version_id' is set.
      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }
      // Verify the required parameter 'logging_honeycomb_name' is set.
      if (options['logging_honeycomb_name'] === undefined || options['logging_honeycomb_name'] === null) {
        throw new Error("Missing the required parameter 'logging_honeycomb_name'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'logging_honeycomb_name': options['logging_honeycomb_name']
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
        '/service/{service_id}/version/{version_id}/logging/honeycomb/{logging_honeycomb_name}', 'DELETE',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Delete the Honeycomb logging object for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.logging_honeycomb_name - The name for the real-time logging configuration.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse200}
     */
    deleteLogHoneycomb(options = {}) {
      return this.deleteLogHoneycombWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Get the details of a Honeycomb logging object for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.logging_honeycomb_name - The name for the real-time logging configuration.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoggingHoneycombResponse} and HTTP response
     */
    getLogHoneycombWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'version_id' is set.
      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }
      // Verify the required parameter 'logging_honeycomb_name' is set.
      if (options['logging_honeycomb_name'] === undefined || options['logging_honeycomb_name'] === null) {
        throw new Error("Missing the required parameter 'logging_honeycomb_name'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'logging_honeycomb_name': options['logging_honeycomb_name']
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
      let returnType = LoggingHoneycombResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/logging/honeycomb/{logging_honeycomb_name}', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Get the details of a Honeycomb logging object for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.logging_honeycomb_name - The name for the real-time logging configuration.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoggingHoneycombResponse}
     */
    getLogHoneycomb(options = {}) {
      return this.getLogHoneycombWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * List all of the Honeycomb logging objects for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/LoggingHoneycombResponse>} and HTTP response
     */
    listLogHoneycombWithHttpInfo(options = {}) {
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
      let returnType = [LoggingHoneycombResponse];
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/logging/honeycomb', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * List all of the Honeycomb logging objects for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/LoggingHoneycombResponse>}
     */
    listLogHoneycomb(options = {}) {
      return this.listLogHoneycombWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Update a Honeycomb logging object for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.logging_honeycomb_name - The name for the real-time logging configuration.
     * @param {String} [options.name] - The name for the real-time logging configuration.
     * @param {module:model/String} [options.placement] - Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
     * @param {String} [options.response_condition] - The name of an existing condition in the configured endpoint, or leave blank to always execute.
     * @param {String} [options.format] - A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce valid JSON that Honeycomb can ingest.
     * @param {module:model/Number} [options.format_version=FormatVersionEnum.v2] - The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`. 
     * @param {String} [options.dataset] - The Honeycomb Dataset you want to log to.
     * @param {String} [options.token] - The Write Key from the Account page of your Honeycomb account.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoggingHoneycombResponse} and HTTP response
     */
    updateLogHoneycombWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'version_id' is set.
      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }
      // Verify the required parameter 'logging_honeycomb_name' is set.
      if (options['logging_honeycomb_name'] === undefined || options['logging_honeycomb_name'] === null) {
        throw new Error("Missing the required parameter 'logging_honeycomb_name'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'logging_honeycomb_name': options['logging_honeycomb_name']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'name': options['name'],
        'placement': options['placement'],
        'response_condition': options['response_condition'],
        'format': options['format'],
        'format_version': options['format_version'],
        'dataset': options['dataset'],
        'token': options['token']
      };

      let authNames = ['token'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = LoggingHoneycombResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/logging/honeycomb/{logging_honeycomb_name}', 'PUT',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Update a Honeycomb logging object for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.logging_honeycomb_name - The name for the real-time logging configuration.
     * @param {String} [options.name] - The name for the real-time logging configuration.
     * @param {module:model/String} [options.placement] - Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
     * @param {String} [options.response_condition] - The name of an existing condition in the configured endpoint, or leave blank to always execute.
     * @param {String} [options.format] - A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce valid JSON that Honeycomb can ingest.
     * @param {module:model/Number} [options.format_version=FormatVersionEnum.v2] - The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`. 
     * @param {String} [options.dataset] - The Honeycomb Dataset you want to log to.
     * @param {String} [options.token] - The Write Key from the Account page of your Honeycomb account.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoggingHoneycombResponse}
     */
    updateLogHoneycomb(options = {}) {
      return this.updateLogHoneycombWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
