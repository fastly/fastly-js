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
import HealthcheckResponse from '../model/HealthcheckResponse';
import InlineResponse200 from '../model/InlineResponse200';

/**
* Healthcheck service.
* @module api/HealthcheckApi
* @version 3.3.1
*/
export default class HealthcheckApi {

    /**
    * Constructs a new HealthcheckApi. 
    * @alias module:api/HealthcheckApi
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
     * Create a health check for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {Number} [options.check_interval] - How often to run the health check in milliseconds.
     * @param {String} [options.comment] - A freeform descriptive note.
     * @param {Number} [options.expected_response] - The status code expected from the host.
     * @param {Array.<String>} [options.headers] - Array of custom headers that will be added to the health check probes.
     * @param {String} [options.host] - Which host to check.
     * @param {String} [options.http_version] - Whether to use version 1.0 or 1.1 HTTP.
     * @param {Number} [options.initial] - When loading a config, the initial number of probes to be seen as OK.
     * @param {String} [options.method] - Which HTTP method to use.
     * @param {String} [options.name] - The name of the health check.
     * @param {String} [options.path] - The path to check.
     * @param {Number} [options.threshold] - How many health checks must succeed to be considered healthy.
     * @param {Number} [options.timeout] - Timeout in milliseconds.
     * @param {Number} [options.window] - The number of most recent health check queries to keep for this health check.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/HealthcheckResponse} and HTTP response
     */
    createHealthcheckWithHttpInfo(options = {}) {
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
        'check_interval': options['check_interval'],
        'comment': options['comment'],
        'expected_response': options['expected_response'],
        'headers': this.apiClient.buildCollectionParam(options['headers'], 'csv'),
        'host': options['host'],
        'http_version': options['http_version'],
        'initial': options['initial'],
        'method': options['method'],
        'name': options['name'],
        'path': options['path'],
        'threshold': options['threshold'],
        'timeout': options['timeout'],
        'window': options['window']
      };

      let authNames = ['token'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = HealthcheckResponse;
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/healthcheck', 'POST',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a health check for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {Number} [options.check_interval] - How often to run the health check in milliseconds.
     * @param {String} [options.comment] - A freeform descriptive note.
     * @param {Number} [options.expected_response] - The status code expected from the host.
     * @param {Array.<String>} [options.headers] - Array of custom headers that will be added to the health check probes.
     * @param {String} [options.host] - Which host to check.
     * @param {String} [options.http_version] - Whether to use version 1.0 or 1.1 HTTP.
     * @param {Number} [options.initial] - When loading a config, the initial number of probes to be seen as OK.
     * @param {String} [options.method] - Which HTTP method to use.
     * @param {String} [options.name] - The name of the health check.
     * @param {String} [options.path] - The path to check.
     * @param {Number} [options.threshold] - How many health checks must succeed to be considered healthy.
     * @param {Number} [options.timeout] - Timeout in milliseconds.
     * @param {Number} [options.window] - The number of most recent health check queries to keep for this health check.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/HealthcheckResponse}
     */
    createHealthcheck(options = {}) {
      return this.createHealthcheckWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Delete the health check for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.healthcheck_name - The name of the health check.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse200} and HTTP response
     */
    deleteHealthcheckWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'version_id' is set.
      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }
      // Verify the required parameter 'healthcheck_name' is set.
      if (options['healthcheck_name'] === undefined || options['healthcheck_name'] === null) {
        throw new Error("Missing the required parameter 'healthcheck_name'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'healthcheck_name': options['healthcheck_name']
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
        '/service/{service_id}/version/{version_id}/healthcheck/{healthcheck_name}', 'DELETE',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete the health check for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.healthcheck_name - The name of the health check.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse200}
     */
    deleteHealthcheck(options = {}) {
      return this.deleteHealthcheckWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Get the health check for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.healthcheck_name - The name of the health check.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/HealthcheckResponse} and HTTP response
     */
    getHealthcheckWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'version_id' is set.
      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }
      // Verify the required parameter 'healthcheck_name' is set.
      if (options['healthcheck_name'] === undefined || options['healthcheck_name'] === null) {
        throw new Error("Missing the required parameter 'healthcheck_name'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'healthcheck_name': options['healthcheck_name']
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
      let returnType = HealthcheckResponse;
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/healthcheck/{healthcheck_name}', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get the health check for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.healthcheck_name - The name of the health check.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/HealthcheckResponse}
     */
    getHealthcheck(options = {}) {
      return this.getHealthcheckWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * List all of the health checks for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/HealthcheckResponse>} and HTTP response
     */
    listHealthchecksWithHttpInfo(options = {}) {
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
      let returnType = [HealthcheckResponse];
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/healthcheck', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List all of the health checks for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/HealthcheckResponse>}
     */
    listHealthchecks(options = {}) {
      return this.listHealthchecksWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Update the health check for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.healthcheck_name - The name of the health check.
     * @param {Number} [options.check_interval] - How often to run the health check in milliseconds.
     * @param {String} [options.comment] - A freeform descriptive note.
     * @param {Number} [options.expected_response] - The status code expected from the host.
     * @param {Array.<String>} [options.headers] - Array of custom headers that will be added to the health check probes.
     * @param {String} [options.host] - Which host to check.
     * @param {String} [options.http_version] - Whether to use version 1.0 or 1.1 HTTP.
     * @param {Number} [options.initial] - When loading a config, the initial number of probes to be seen as OK.
     * @param {String} [options.method] - Which HTTP method to use.
     * @param {String} [options.name] - The name of the health check.
     * @param {String} [options.path] - The path to check.
     * @param {Number} [options.threshold] - How many health checks must succeed to be considered healthy.
     * @param {Number} [options.timeout] - Timeout in milliseconds.
     * @param {Number} [options.window] - The number of most recent health check queries to keep for this health check.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/HealthcheckResponse} and HTTP response
     */
    updateHealthcheckWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'version_id' is set.
      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }
      // Verify the required parameter 'healthcheck_name' is set.
      if (options['healthcheck_name'] === undefined || options['healthcheck_name'] === null) {
        throw new Error("Missing the required parameter 'healthcheck_name'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'healthcheck_name': options['healthcheck_name']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'check_interval': options['check_interval'],
        'comment': options['comment'],
        'expected_response': options['expected_response'],
        'headers': this.apiClient.buildCollectionParam(options['headers'], 'csv'),
        'host': options['host'],
        'http_version': options['http_version'],
        'initial': options['initial'],
        'method': options['method'],
        'name': options['name'],
        'path': options['path'],
        'threshold': options['threshold'],
        'timeout': options['timeout'],
        'window': options['window']
      };

      let authNames = ['token'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = HealthcheckResponse;
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/healthcheck/{healthcheck_name}', 'PUT',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update the health check for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.healthcheck_name - The name of the health check.
     * @param {Number} [options.check_interval] - How often to run the health check in milliseconds.
     * @param {String} [options.comment] - A freeform descriptive note.
     * @param {Number} [options.expected_response] - The status code expected from the host.
     * @param {Array.<String>} [options.headers] - Array of custom headers that will be added to the health check probes.
     * @param {String} [options.host] - Which host to check.
     * @param {String} [options.http_version] - Whether to use version 1.0 or 1.1 HTTP.
     * @param {Number} [options.initial] - When loading a config, the initial number of probes to be seen as OK.
     * @param {String} [options.method] - Which HTTP method to use.
     * @param {String} [options.name] - The name of the health check.
     * @param {String} [options.path] - The path to check.
     * @param {Number} [options.threshold] - How many health checks must succeed to be considered healthy.
     * @param {Number} [options.timeout] - Timeout in milliseconds.
     * @param {Number} [options.window] - The number of most recent health check queries to keep for this health check.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/HealthcheckResponse}
     */
    updateHealthcheck(options = {}) {
      return this.updateHealthcheckWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
